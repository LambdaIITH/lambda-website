---
title: "SSH Advanced: Tunneling, Port Forwarding, and Pro Tips"
github: ["https://github.com/muqeeth26832"]
summary: "Advanced SSH techniques I've learned at IITH's Lambda dev club"
date: "2025-04-19"
draft: false
tags:
- ssh
- networking
- security
---

# SSH Advanced: Tunneling, Port Forwarding, and Pro Tips from Lambda Projects

After mastering the [basics of SSH](../ssh-basics) during my first semester at IITH's Lambda dev club, I discovered SSH's secret superpowers: tunneling and port forwarding. These techniques completely changed how I approach development and deployment for our projects.

In this post, I'll share the advanced SSH techniques that have saved me countless hours and helped our Lambda team overcome networking challenges we never thought possible.

## SSH Tunneling: The Secret Superpower

SSH tunneling was a game-changer during our hostel hackathon when we needed to access services across IITH's restrictive network. Simply put, tunneling lets you securely route traffic through an SSH connection, bypassing firewalls and encrypting everything along the way.

There are three main types of tunnels, each solving different problems we've faced at Lambda:

### 1. Local Port Forwarding: Accessing Restricted Services

Local forwarding connects a port on your local machine to a port on (or accessible by) the remote server.

#### How it saved our database demo

During our department presentation, we needed to showcase a MongoDB database running on an internal server that wasn't accessible from the presentation hall. The solution:

```bash
ssh -L 27017:internal-db-server:27017 muqeeth@lambda-gateway
```

This command created a tunnel where:
- Any connection to `localhost:27017` on my laptop
- Was forwarded through our lambda-gateway server
- To the internal-db-server's port 27017

I could then connect my MongoDB client to `localhost:27017` and demonstrate our project without network issues!

#### The magic behind local port forwarding

Here's what happens under the hood:

1. SSH establishes an encrypted connection to the gateway server
2. The `-L` flag tells SSH to listen on my local port 27017
3. When anything connects to that port, SSH:
   - Captures that traffic
   - Encrypts it
   - Sends it through the secure connection to lambda-gateway
   - The gateway then forwards it to internal-db-server:27017
4. Return traffic follows the reverse path

This works because our lambda-gateway server had access to both my laptop and the internal database server, acting as a secure bridge between them.

### 2. Remote Port Forwarding: Sharing Local Services

Remote forwarding is the opposite of local - it connects a port on the remote server to a port on your local machine.

#### How it enabled collaborative development

While working on our team project from my hostel room, I needed to show other team members my local development server. Our solution:

```bash
ssh -R 8000:localhost:3000 muqeeth@lambda-public
```

This command:
- Made a port (8000) on our public Lambda server
- Forward all connections to my laptop's port 3000
- Where my React development server was running

My teammates could access `lambda-public:8000` and see my work in real-time, even though my laptop was behind NAT and didn't have a public IP!

#### The technical details of remote forwarding

In this case:
1. SSH connects to lambda-public server
2. The `-R` flag tells the server to listen on its port 8000
3. When someone connects to lambda-public:8000:
   - The server captures that traffic
   - Encrypts it
   - Sends it through our existing SSH connection
   - My SSH client receives it and forwards to localhost:3000
4. My React server responds, and the data flows back through the same tunnel

For this to work on modern OpenSSH servers, you might need to ensure `GatewayPorts yes` is set in the server's SSH config.

### 3. Dynamic Port Forwarding: My Personal SOCKS Proxy

Dynamic forwarding is the most flexible option - it creates a SOCKS proxy that can route multiple connections through your SSH tunnel.

#### How it helped during our security lecture

During Lambda's security lecture, we needed to access multiple services on an isolated network. Instead of creating multiple tunnels, I used:

```bash
ssh -D 9090 muqeeth@security-lab
```

Then I configured my browser to use SOCKS proxy `localhost:9090`. Suddenly I could access all the internal websites, APIs, and services in the security lab network!

#### The technical brilliance of dynamic forwarding

Here's why it's so powerful:
1. The `-D 9090` creates a SOCKS proxy server on my localhost
2. Any application that supports SOCKS proxying can use it
3. When an app connects through the proxy:
   - It tells the proxy which destination it wants
   - SSH forwards that request through the tunnel
   - The remote SSH server establishes the connection from its end
   - All traffic flows through the encrypted tunnel

The SOCKS protocol is application-aware, so it works with HTTP, HTTPS, FTP, and most TCP-based protocols. This made it perfect for our security lab where we needed to access dozens of different services.

## SSH Config: The Time-Saver I Wish I'd Known Earlier

After months of typing long SSH commands with tunnels, I discovered the `~/.ssh/config` file during a Lambda DevOps session. Game changer!

I created this file:

```
# Lambda development server
Host lambda-dev
    HostName dev-server.lambda.iith.ac.in
    User muqeeth
    IdentityFile ~/.ssh/lambda_ed25519
    Port 22
    ForwardAgent yes

# Database tunnel preset
Host db-tunnel
    HostName gateway.lambda.iith.ac.in
    User muqeeth
    LocalForward 27017 mongodb.internal:27017
    LocalForward 5432 postgres.internal:5432
    IdentityFile ~/.ssh/lambda_ed25519
    ServerAliveInterval 60

# Public facing server with custom port
Host lambda-public
    HostName public.lambda.iith.ac.in
    User deployer
    Port 2222
    IdentityFile ~/.ssh/deploy_key
```

Now instead of remembering complex commands, I can simply type:
```
ssh db-tunnel
```

And instantly get both database tunnels established! The config file supports virtually all SSH options, making it perfect for storing common configurations.

## SSH Agent: Dealing with Key Complexity

As our Lambda projects grew more complex, I found myself using different keys for different servers. SSH Agent made this manageable:

```bash
eval $(ssh-agent)
ssh-add ~/.ssh/lambda_ed25519
ssh-add ~/.ssh/deploy_key
```

Now SSH automatically uses the right key for each server without me specifying it each time.

Even better, with `ForwardAgent yes` in my config file, I can SSH from one server to another using my local keys without copying them to intermediate servers!

During our multi-server deployment pipeline, this was invaluable - I could SSH from my laptop to our staging server, then from there to production, all using my local keys without storing them on the staging server.

## X11 Forwarding: Running GUI Tools Remotely

When our team needed to run graphical tools on the Lambda server with the powerful GPU, I discovered X11 forwarding:

```bash
ssh -X muqeeth@gpu-server
```

Then I could run graphical applications like:
```bash
nvidia-smi-gui
```

And the GUI would appear on my local screen, even though it was running on the remote server! The application thought it was displaying locally, but SSH was tunneling all the graphical data to my machine.

## ProxyJump: Simplifying Multi-Hop SSH

Our production environment at Lambda has a bastion host architecture - you can't directly SSH to the application servers. You first connect to a bastion host, then to the target server.

The old way to do this was:
```bash
ssh muqeeth@bastion
# Then from there
ssh app-server
```

But with ProxyJump, I can do it in one command:
```bash
ssh -J muqeeth@bastion muqeeth@app-server
```

Or even better, in the config file:
```
Host app-server
    HostName internal-app-server
    User muqeeth
    ProxyJump bastion
```

Now I just type `ssh app-server` and it automatically handles the multi-hop connection!

## SSH Escape Sequences: The Hidden Control Panel

During a particularly long Lambda debugging session, I accidentally discovered SSH's escape sequences. If you press `~?` after a newline in an SSH session, you'll see:

```
Supported escape sequences:
 ~.  - terminate connection (and any multiplexed sessions)
 ~B  - send a BREAK to the remote system
 ~C  - open a command line
 ~R  - request rekey
 ~V/v - decrease/increase verbosity
 ~^Z - suspend ssh
 ~#  - list forwarded connections
 ~&  - background ssh (when waiting for connections to terminate)
 ~?  - this message
 ~~  - send the escape character by typing it twice
```

The `~C` escape sequence was particularly useful - it lets you add new port forwards to an existing connection! During a debugging session, when we suddenly needed access to another port, I used:

```
~C
-L 8080:localhost:8080
```

And instantly had a new tunnel without disconnecting!

## Multiplexing: Speed Up Your SSH Connections

When rapidly connecting and disconnecting during our Lambda deployment scripts, SSH connections were taking too long to establish. The solution? Multiplexing:

```
Host *
    ControlMaster auto
    ControlPath ~/.ssh/control:%h:%p:%r
    ControlPersist 1h
```

This configuration:
1. Creates a master connection the first time you connect to a server
2. Reuses that connection for subsequent SSH commands
3. Keeps the connection open for an hour after the last client disconnects

The result? Near-instant connections for all my SSH, SCP, and SFTP commands to the same server!

## Diving Deeper: SSH Key Types and Security

During Lambda's security class, I learned the differences between SSH key types:

### RSA vs ED25519

RSA is the oldest and most compatible key type, but requires longer keys (at least 3072 bits) for good security. Our Lambda security advisor recommended Ed25519 for new keys because it's:

- More secure with shorter keys
- Faster to generate and authenticate
- More resistant to side-channel attacks

To create an Ed25519 key:
```bash
ssh-keygen -t ed25519 -C "muqeeth@lambda"
```

### Security Best Practices I Learned the Hard Way

Good to know practices.

1. **Always use a key passphrase** for critical servers
2. **Rotate keys periodically** for sensitive environments
3. **Use ssh-agent** rather than keeping keys unencrypted
4. **Configure server settings** in `/etc/ssh/sshd_config`:
   ```
   PasswordAuthentication no
   PermitRootLogin no
   AllowUsers muqeeth deployer
   ```
5. **Use `authorized_keys` options** for added control:
   ```
   command="deploy-script.sh",no-port-forwarding,no-X11-forwarding ssh-ed25519 AAAA...
   ```
   This key can ONLY execute the specified command!

## Summary: Advanced SSH Techniques

From my journey with Lambda at IITH, these advanced SSH techniques have become essential tools:

1. **SSH tunneling** (local, remote, dynamic) for bypassing network restrictions
2. **SSH config file** for simplifying complex connections
3. **SSH agent** for managing multiple keys
4. **X11 forwarding** for running remote GUI applications
5. **ProxyJump** for simplifying multi-hop connections
6. **SSH escape sequences** for controlling active connections
7. **Multiplexing** for faster repeated connections
8. **Key selection** choosing Ed25519 when possible
9. **Enhanced security** with proper server configuration

These techniques have transformed SSH from a simple remote login tool into the Swiss Army knife of our Lambda development workflow. Whether we're deploying applications, debugging services, or setting up secure access across IITH's network, SSH tunneling and these advanced features have been invaluable.

---

*Follow my tech adventures at [github.com/muqeeth26832](https://github.com/muqeeth26832) and join us at Lambda, IITH's dev club!*

---
