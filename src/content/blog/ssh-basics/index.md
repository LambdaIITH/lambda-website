---
title: "SSH Basics: My Journey from Confused Beginner to Head at Lambda"
github: ["https://github.com/muqeeth26832"]
summary: "Everything I've learned about SSH fundamentals at IITH Lambda"
date: "2025-04-12"
draft: false
tags:
- ssh
- security
- linux
---

# SSH Basics: My Journey from Confused Beginner to Command Line Pro

The first time I encountered SSH during a Lambda dev club session at IITH, I was completely lost. What's a "public key"? Why is the terminal asking me weird questions about fingerprints? Fast forward a few projects later, and now I use SSH daily for everything from deploying code to managing our club's servers.

This is my personal guide to SSH basics - the guide I wish I had when starting out in Lambda. No unnecessary jargon, just practical knowledge you can actually use.

## What the heck is SSH anyway?

Think of SSH as a super-secure tunnel between computers. Instead of physically sitting in front of our Lambda servers in the lab, SSH lets me control them remotely through my terminal from my hostel room. The beauty is that everything's encrypted - my password, commands, all data - making it impossible for anyone on IITH's network to eavesdrop.

SSH stands for "Secure Shell" and it replaced older, insecure tools like Telnet that sent everything in plain text (yikes!). When our seniors warned us never to use Telnet on campus WiFi, I finally understood why SSH matters.

## My first SSH connection (and how you can make yours)

The basic command is surprisingly simple:

```bash
ssh username@serverhost
```

Here's what these parts mean:
- `username` is who you want to be on the remote server (not your local username)
- `serverhost` can be an IP address (like 10.42.0.50) or a domain (like lambda-server.iith.ac.in)

### Real example: When I first logged into our Lambda server

```bash
ssh muqeeth@10.42.0.50
```

The first time I connected, I got this scary-looking warning:

```
The authenticity of host '10.42.0.50' can't be established.
ED25519 key fingerprint is SHA256:f8d7ew93hdosLIOt87h3f2...
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

This is normal! Just type "yes" and continue. SSH is just checking if this is really the server you think it is. What's actually happening is that your SSH client is seeing this server for the first time and asking you to verify its identity.

After typing "yes," the server's public key fingerprint gets stored in your `~/.ssh/known_hosts` file. Next time you connect, SSH checks that the server presents the same key - if it ever changes unexpectedly, SSH will warn you that something might be wrong.

## Getting past the password barrier

There are two ways to prove you're you:

### 1. The simple way: passwords

When I started at Lambda, I just used:
```bash
ssh muqeeth@lambda-server.iith.ac.in
```

Then typed my password when prompted. Easy but annoying to type over and over, especially during hackathons when I'm constantly connecting to our deployment server.

### 2. The better way: SSH keys

This changed everything for me. With SSH keys, I could log in instantly without typing passwords - a huge timesaver during Lambda projects.

#### How I set up my keys (and how you can too)

First, I checked if I already had keys:

```bash
ls ~/.ssh
```

When I didn't see files named `id_rsa` or `id_rsa.pub`, I generated new ones:

```bash
ssh-keygen -t ed25519 -C "muqeeth@iith.ac.in"
```

I chose ed25519 because our Lambda senior recommended it as more secure and modern than the default RSA keys.

This creates TWO files:
- The private key (like your hostel room key) - NEVER share this
- The public key (like your room number) - safe to share with servers

To give my public key to our Lambda server, I ran:

```bash
ssh-copy-id muqeeth@lambda-server.iith.ac.in
```

After entering my password one last time, I was set! From then on, I could log in without passwords.

> 🔑 **My "aha" moment**: Think of private/public keys like this - the server puts a special lock on its door that only YOUR private key can open. Anyone can see the lock (public key), but only you have the key that fits it. When our team was setting up group access to the project server, we realized we each just needed to add our public keys to the same authorized_keys file!

### Behind the scenes: How key authentication actually works

What fascinated me was learning how SSH actually verifies my identity with keys:

1. I try to connect to the server with `ssh muqeeth@lambda-server`
2. The server checks its `~/.ssh/authorized_keys` file for my public key
3. When it finds it, the server encrypts a random challenge message using my public key
4. This challenge is sent to my computer
5. My SSH client decrypts it using my private key (which never leaves my laptop)
6. My client sends back the decrypted response
7. The server verifies the response matches the original challenge
8. If it matches, I'm authenticated!

This whole dance happens in milliseconds but ensures only someone with my private key (me!) can log in.

## Moving files around with SSH

Once I figured out basic connections, I needed to move project files between my laptop and our Lambda deployment server.

### SCP: The simplest file transfer tool

SCP (Secure Copy) works like this:

```bash
scp my-lambda-project.zip muqeeth@lambda-server:~/projects/
```

This copies `my-lambda-project.zip` from my computer to the remote server in the `~/projects/` directory.

Going the other way is just as easy:

```bash
scp muqeeth@lambda-server:~/projects/config.json ./
```

This grabs the config file from the server and puts it in my current directory.

For folders, I just add `-r`:

```bash
scp -r frontend/ muqeeth@lambda-server:~/projects/current-app/
```

This was perfect during our last hackathon when I needed to quickly deploy our React frontend.

### SFTP: When I need more control

Sometimes during Lambda debugging sessions, I need to browse around and transfer multiple files. That's when I use SFTP:

```bash
sftp muqeeth@lambda-server
```

This opens an interactive session where I can use commands like:
- `ls` to list files
- `cd` to change directories
- `get file.txt` to download
- `put local.txt` to upload
- `bye` to exit

The most useful trick I learned was using wildcards like `get *.json` to grab all JSON files at once.

## The magic behind SSH (how it really works)

During a Lambda security workshop, I was fascinated to learn that modern SSH (SSH-2) is actually a complex protocol with multiple layers. Here's what actually happens when I connect to our project server:

### 1. TCP Connection Establishment

When I type `ssh muqeeth@lambda-server`, my computer first establishes a basic TCP connection to the server, typically on port 22 (though for safety server uses port 2222 to avoid automated attacks).

### 2. Protocol Version Exchange

Once connected, both sides immediately share which SSH protocol versions they support:

```
SSH-2.0-OpenSSH_9.0 client
SSH-2.0-OpenSSH_8.4 server
```

This ensures they're speaking the same language. SSH-1 is obsolete and insecure, so everything now uses SSH-2.

### 3. Algorithm Negotiation

Next comes a critical security step. My client and the server exchange lists of cryptographic algorithms they support for:

- Key exchange methods (how they'll securely agree on a shared secret)
- Encryption algorithms (how they'll scramble the data)
- MAC algorithms (how they'll ensure messages aren't tampered with)
- Compression methods (optional)

They automatically select the strongest mutually supported algorithms. On our Lambda server, I've seen this negotiation select `curve25519-sha256` for key exchange and `aes256-ctr` for encryption.

### 4. Key Exchange

This is where the real cryptographic magic happens. SSH uses Elliptic Curve Diffie-Hellman (ECDH) key exchange to create a shared secret that nobody eavesdropping can determine.

Here's what happens:
1. My client generates a random private key
2. The server generates its own random private key
3. Both derive public keys from their private keys
4. They exchange these public keys
5. Each side uses its private key and the other's public key to compute the same shared secret

The math behind this is brilliant:
- Client computes: `K = client_private * server_public`
- Server computes: `K = server_private * client_public`

Due to the properties of elliptic curve math, these calculations produce identical results, yet someone watching the network can't determine the shared secret without knowing one of the private keys.

This shared secret is then used to derive several session keys that will encrypt all further communication.

The most mind-blowing part? This exchange provides "Perfect Forward Secrecy" - meaning that even if someone recorded my encrypted SSH session today and somehow stole my private key years later, they still couldn't decrypt that past session!

### 5. Service Request

After secure keys are established, my client requests the "ssh-userauth" service, which handles user authentication.

### 6. Authentication

Now I need to prove I'm really me. SSH supports multiple authentication methods:

**Password authentication:**
1. Client sends username
2. Server prompts for password
3. Client sends password (encrypted with session keys)
4. Server verifies password against its user database

**Public key authentication:**
1. Client sends username and public key information
2. Server checks if this public key is in the authorized_keys file
3. Server sends a challenge encrypted with the public key
4. Client decrypts with private key and responds
5. Server verifies the response

During our Lambda security workshop, we used Wireshark to capture SSH packets and even though we could see the traffic, all we saw was encrypted data - proving why SSH is so secure!

### 7. Session Establishment

After successful authentication, the client requests a channel for the terminal session. Multiple channels can exist in a single SSH connection (this is what enables port forwarding, which I'll cover in another post).

Finally, the interactive shell is started, and I can run commands on the Lambda server as if I were physically there!

## SSH security: Lessons I learned at Lambda

Not necessary , but still great to know.

1. **Use key authentication** and disable passwords when possible
2. **Add passphrases** to important SSH keys
3. **Run SSH on a non-standard port** to avoid automated attacks
4. **Restrict which users can SSH** to our servers
5. **Keep everything updated** to patch security holes

## Summary: SSH Fundamentals

1. **SSH basics**: `ssh username@server` to connect securely
2. **Authentication**: Use SSH keys instead of passwords for better security
3. **File transfer**: Use `scp` for quick transfers, `sftp` for interactive sessions
4. **Under the hood**: SSH uses strong encryption and perfect forward secrecy
5. **Security**: Use keys, passphrases, and keep systems updated

SSH has become one of my most-used tools since joining Lambda at IITH. In my next post, I'll cover advanced SSH  techniques including tunneling, port forwarding, and config tricks that have saved me hours during project deployments.

### Next blog : [Advance ssh](../ssh-adv)

---

*Follow my tech adventures at [github.com/muqeeth26832](https://github.com/muqeeth26832) and join us at Lambda, IITH's dev club!*

---
