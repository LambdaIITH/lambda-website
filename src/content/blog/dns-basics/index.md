---
title: "DNS Basics - The Internet's Phone Book"
github: ["https://github.com/muqeeth26832"]
summary: "Learn DNS basics with memes + examples and hands-on commands"
date: "2025-10-02"
draft: false
tags:
- DNS
- Networking
- DevOps
---

# DNS: The Internet's Phone Book 📖

> **Who needs this?** DevOps engineers, cloud engineers, developers, and literally anyone who's ever wondered "how does typing google.com actually work?"

---

## The "Wait, What?" Moment

Picture this: You type `google.com` in your browser and boom - Google appears.

**You:** "Cool, it just works!"
**Your computer:** *frantically running around asking 15 different servers where Google lives*

*"How does my computer find google.com?"
"That's the neat part - DNS does it for you!"*

Let me blow your mind: **Your computer has no idea what "google.com" means.** Computers speak in numbers - IP addresses like `142.250.190.46`. DNS is the translator between human language (google.com) and computer language (142.250.190.46).


<img src="/assets/blogs/dns-basics/deathnote.webp" alt="deathnote" width="600">

---

## What Even is DNS?

**DNS = Domain Name System**

Think of it as the internet's massive phone book, but instead of:
```
John Doe → 555-0123
```

It's:
```
google.com → 142.250.190.46
```

**The process:**
1. You type `google.com`
2. Your computer: "What's the IP for google.com?"
3. DNS: "That's 142.250.190.46"
4. Your computer: "Thanks!" *(connects to Google)*
5. You: *(sees cat videos)*

Simple, right? But wait till you see the chaos behind the scenes...

---

## Why Do We Even Need This?

### Pop Quiz Time! 🧠

Which would you rather remember?

**Option A:**
- google.com
- youtube.com
- netflix.com
- amazon.com

**Option B:**
- 142.250.190.46
- 172.217.16.238
- 54.175.223.129
- 176.32.103.205

Yeah, exactly. **Option A, every single time.**

### The Real-World Analogy

Imagine I invite you over and say: *"I live in Sweet Home Apartments!"*

**You:** "Cool! How do I get there?"
**Me:** *gives vague directions*
**You:** *gets lost for 2 hours*

Now imagine I say: *"I live at 12-0-29/B, Paradise Street, Silicon Valley, 500032"*

**You:** *punches it into Google Maps*
**You:** *arrives in 15 minutes*

The apartment name = **Domain name** (google.com)
The actual address = **IP address** (142.250.190.46)

DNS is your GPS for the internet. Without it, you'd be lost.

expand your knowledge bro!

*DOMAIN EXPANSION*

<img src="/assets/blogs/dns-basics/gojo.webp" alt="domain expansio" width="600">

---

## But Wait, There's More Problems!

<!--![Spider-Man pointing meme](https://i.imgflip.com/6/46e43q.jpg)-->
*"Billions of internet users"
"One DNS server"
Corporate needs you to find the differences*

### Problem #1: Do We Ask DNS Every Single Time?

Imagine calling 411 (directory service) before EVERY phone call:

```
You: "What's Mom's number?"
411: "555-0123"
You: *calls mom*
---
5 minutes later
You: "What's Mom's number?"
411: "Dude, I just told you... 555-0123"
You: *calls mom again*
```

This is insane, right? That poor DNS server would have a mental breakdown.

**Solution: DNS Caching** 🧠💾

Your computer is smart. It remembers stuff:

1. **Browser Cache** - "I looked this up 5 seconds ago, I remember!"
2. **OS Cache** - "Yeah, I've got google.com's IP in my notes"
3. **Router Cache** - "Everyone in this house Googles stuff, lemme cache it"
4. **ISP Cache** - "Millions ask for google.com daily, I'll remember it"

### See Caching in Action

**Try this:**

1. Open DevTools (Press F12)
2. Go to Network tab
3. Visit a NEW website
4. Look at "Timing" → You'll see **DNS Lookup: 50ms**
5. Refresh the page
6. Look again → **DNS Lookup: 0ms** ✨

<!--![Stonks meme](https://i.imgflip.com/6/4acd3j.jpg)-->
*"DNS Caching"
↗️ SPEED*

### Problem #2: Single Point of Failure

What if THE DNS server crashes?

<!--![This is fine meme](https://i.imgflip.com/6/3dgt6h.jpg)-->
*"The DNS server is down"
"This is fine"*
Narrator: *It was not fine. The entire internet was down.*

**Solution: Decentralization!**

Instead of one boss server, we have a whole hierarchy. Welcome to...

---

## The DNS Hierarchy: A Corporate Structure

<!--![Galaxy brain meme](https://i.imgflip.com/6/3iz3b7.jpg)-->
*Small brain: One DNS server
Medium brain: Multiple DNS servers
Large brain: Hierarchical DNS system
Galaxy brain: 13 root servers controlling billions of requests using anycast*

### The Root Name Servers: The OGs

There are **13 root name servers** labeled A through M. These are the CEOs of the internet.

**"Wait, 13 servers for 8 BILLION people?!"**

Plot twist: Each "server" is actually **hundreds** of physical servers using the same IP address (anycast magic). You connect to whichever is closest.

Check them out: [IANA Root Servers](https://www.iana.org/domains/root/servers)

These 13 IPs are **hardcoded** into every device. They're like the internet's founding fathers.

### Anatomy of a Domain Name

Let's dissect: `www.iith.dev`

```
┌─────────────────────────────────┐
│    www  .  iith  .  dev         │
│     ↓       ↓       ↓           │
│ subdomain  apex    TLD          │
└─────────────────────────────────┘
```

- **www** - The apartment number (subdomain)
- **iith** - The building name (apex/second-level domain)
- **.dev** - The city (top-level domain)

**Common TLDs:** `.com`, `.org`, `.dev`, `.io`, `.ai`, `.wtf`, `.ninja` (yes, really)


<img src="/assets/blogs/dns-basics/wws_is_sub_domain.jpg" alt="www is a subdomain meme" width="600">

---

## The DNS Quest: A Journey of 1000ms

When you type `iith.dev`, your request goes on an ADVENTURE:

```
┌─────────────────────────────────────────────────┐
│  YOUR COMPUTER                                  │
│  "I need iith.dev!"                             │
└────────────┬────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────┐
│  ROOT NAME SERVER (.)                           │
│  "idk about iith.dev, but I know where          │
│   ALL .dev domains live. Ask them ➜"            │
└────────────┬────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────┐
│  TLD NAME SERVER (.dev)                         │
│  "iith.dev? Yeah, I know that guy!              │
│   His authoritative server is over there ➜"     │
└────────────┬────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────┐
│  AUTHORITATIVE NAME SERVER                      │
│  "iith.dev? That's 76.76.21.21!"                │
└────────────┬────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────┐
│  YOUR COMPUTER                                  │
│  "Found it! Connecting to 76.76.21.21..."       │
└─────────────────────────────────────────────────┘
```

All of this happens in **milliseconds**. Your computer is basically The Flash.

**Try it yourself:**
```bash
nslookup google.com
```

Output:
```
Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
Name:	google.com
Address: 142.250.190.46
```

<!--![Speed meme](https://i.imgflip.com/6/2nqhqm.jpg)-->
*"I looked up a domain"
"That's the fastest lookup in the West"*

---

## DNS Records: The Different Flavors

When you own a domain (via Cloudflare, Route53, etc.), you work with different record types. Each one does something different.

<!--![Drake meme](https://i.imgflip.com/6/3podez.jpg)-->
*Drake rejecting: Memorizing IP addresses
Drake approving: DNS Records doing it for me*

### A Record - The OG Address Record

**What it does:** Maps domain → IPv4 address

```
Type: A
Name: @              (@ = your apex domain)
Value: 192.168.1.100
TTL: 3600            (Cache for 1 hour)
```

**Real example:**
```
iith.dev → 192.168.1.100
```

**Test it:**
```bash
nslookup iith.dev
```

### AAAA Record - A's Bigger Brother

**What it does:** Maps domain → IPv6 address

```
Type: AAAA
Name: @
Value: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
TTL: 3600
```

**Why IPv6?** We ran out of IPv4 addresses. There are only ~4.3 billion possible IPv4 addresses, but 340 undecillion (yes, that's a real number) IPv6 addresses.

<!--![Math meme](https://i.imgflip.com/6/4e7ezh.jpg)-->
*"How many IPv6 addresses are there?"
"Yes."*

### CNAME Record - The Alias Master

**What it does:** Points one domain to ANOTHER domain (not an IP!)

```
Type: CNAME
Name: blog
Value: iith.dev
TTL: 3600
```

Now `blog.iith.dev` → `iith.dev` → whatever IP `iith.dev` has

It's like saying "ask my brother, he knows" 👉

### CNAME: The "Let Me Sleep" Record

**Scenario:** You deploy your app on Vercel

**Method 1: The Disaster**
```
Type: A
Name: app
Value: 76.76.21.21
```

*3am:* Vercel migrates your server to new hardware (new IP: 76.76.21.98)

<!--![Disaster girl meme](https://i.imgflip.com/6/1e348v.jpg)-->
*Your website is down
You're getting angry calls
You can't sleep anymore*

**Method 2: The Galaxy Brain Move**
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

*3am:* Vercel migrates servers, updates THEIR A record

**You:** *sleeping peacefully* 😴

**Your CNAME:** *still works perfectly*

<!--![Modern problems meme](https://i.imgflip.com/6/2scqyu.jpg)-->
*"Modern problems require modern solutions"
"CNAME records"*

**Try it:**
```bash
nslookup app.vercel.app
# You'll see it CNAMEs to something else
```

### MX Record - The Mail Guy

**What it does:** Tells the world where to send emails for your domain

```
Type: MX
Name: @
Value: mail.google.com
Priority: 10
TTL: 3600
```

When someone emails `you@iith.dev`, their email server checks your MX record: "Oh, deliver to Google's mail servers!"

**Multiple MX records = Backup mail servers:**
```
Priority 10: mail1.google.com (try this first)
Priority 20: mail2.google.com (if first one is down)
```

Lower number = higher priority (yeah, it's backwards, I know)

**Check MX records:**
```bash
nslookup -type=MX gmail.com
```

### TXT Record - The "Notes" Field

**What it does:** Stores text data (usually for machines, not humans)

**Real uses:**
- 🔐 **Domain verification** - "Prove you own this domain"
- 📧 **SPF records** - "These servers can send email on my behalf"
- ✅ **DKIM** - Email authentication
- 🔑 **API keys** - Some services use this

```
Type: TXT
Name: @
Value: "v=spf1 include:_spf.google.com ~all"
TTL: 3600
```

<!--![Matrix meme](https://i.imgflip.com/6/3h73l8.jpg)-->
*TXT records be like:
"v=spf1 ip4:192.0.2.0/24 include:_spf.example.com ~all"
"What does it mean?"
"No one knows, but it's provocative"*

**Check TXT records:**
```bash
nslookup -type=TXT google.com
```

### NS Record - The Power Move

**What it does:** Delegates a subdomain to different name servers

```
Type: NS
Name: api
Value: ns1.example.com
TTL: 3600
```

Now ALL queries for `*.api.iith.dev` go to `ns1.example.com` (which runs its own DNS server).

**Use case:** Your company is huge. Each team manages their own subdomain independently:
- `api.company.com` → Team A's DNS
- `blog.company.com` → Team B's DNS
- `shop.company.com` → Team C's DNS

<!--![Oprah meme](https://i.imgflip.com/6/2t4l52.jpg)-->
*"You get your own DNS server!
And YOU get your own DNS server!
EVERYBODY gets their own DNS server!"*

---

## Hands-On Lab: DNS Commands That'll Make You Look Cool

<!--![Hackerman meme](https://i.imgflip.com/6/4cd9ae.jpg)-->
*typing "nslookup google.com" in terminal*
"I'm in."

### Command 1: Basic Lookup
```bash
nslookup google.com
```

**What you'll see:**
```
Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
Name:	google.com
Address: 142.250.190.46
```

**Translation:**
- "I asked 1.1.1.1 (Cloudflare)"
- "They said google.com is 142.250.190.46"
- "Non-authoritative = this is cached, not from Google's official DNS"

### Command 2: Choose Your DNS Fighter
```bash
# Ask Cloudflare
nslookup google.com 1.1.1.1

# Ask Google
nslookup google.com 8.8.8.8

# Ask Quad9
nslookup google.com 9.9.9.9
```

Different DNS servers might give different answers (caching, anyone?)

### Command 3: Get Specific
```bash
# MX records (mail servers)
nslookup -type=MX google.com

# NS records (name servers)
nslookup -type=NS google.com

# TXT records (all the juicy metadata)
nslookup -type=TXT google.com

# AAAA records (IPv6)
nslookup -type=AAAA google.com
```

### Command 4: The Nuclear Option - dig
```bash
dig google.com
```

This gives you EVERYTHING. Like, everything everything.

**The cool part:**
```bash
dig google.com +trace
```

This shows you the ENTIRE journey - from root servers to the final answer. It's like watching your query go on a quest.

**Sample output:**
```
.			518400	IN	NS	a.root-servers.net.
; ... (asking root servers)

com.			172800	IN	NS	a.gtld-servers.net.
; ... (asking .com TLD servers)

google.com.		300	IN	A	142.250.190.46
; Found it!
```

<!--![Journey meme](https://i.imgflip.com/6/51gd9r.jpg)-->
*"dig +trace"
"Shows the entire DNS journey"
"It's beautiful"*

### Command 5: Reverse Lookup
```bash
nslookup 8.8.8.8
```

**Output:**
```
Server:		1.1.1.1
Address:	1.1.1.1#53

8.8.8.8.in-addr.arpa	name = dns.google.
```

"What domain does this IP belong to?" Spoiler: It's Google's DNS server!

---

## DNS Troubleshooting: When Stuff Breaks

<!--![Emergency meme](https://i.imgflip.com/6/3ixjh0.jpg)-->
*"DNS is down"
"This is a CODE RED"
"EVERYTHING IS ON FIRE"*

### The Local DNS Files

**1. The Hosts File - The Nuclear Override**
```bash
cat /etc/hosts
```

**What you'll see:**
```
127.0.0.1       localhost
::1             localhost
```

**Pro secret:** Add custom entries here to test stuff locally!
```
192.168.1.100   myapp.local
```

Now typing `myapp.local` in your browser goes to `192.168.1.100` - NO DNS LOOKUP NEEDED.

**Use cases:**
- Testing websites before DNS propagates
- Blocking websites (map facebook.com to 127.0.0.1)
- Local development

<!--![Big brain meme](https://i.imgflip.com/6/2h098v.jpg)-->
*"Edit /etc/hosts to test locally"
"No need to wait for DNS propagation"
"It's free real estate"*

**2. Resolver Config**
```bash
cat /etc/resolv.conf
```

**What you'll see:**
```
nameserver 1.1.1.1
nameserver 8.8.8.8
```

This tells your system: "Use these DNS servers for lookups"

### Popular Public DNS Servers

| Provider | Primary | Secondary | Vibe |
|----------|---------|-----------|------|
| Cloudflare | 1.1.1.1 | 1.0.0.1 | Fastest, privacy-focused 🚀 |
| Google | 8.8.8.8 | 8.8.4.4 | Reliable, basically everywhere 🌍 |
| Quad9 | 9.9.9.9 | 149.112.112.112 | Blocks malicious sites 🛡️ |

**Switch DNS servers:**
```bash
nslookup google.com 1.1.1.1
```

### Clear DNS Cache (When Things Get Weird)

**macOS:**
```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

**Windows:**
```cmd
ipconfig /flushdns
```

**Linux:**
```bash
sudo systemd-resolve --flush-caches
# or
sudo /etc/init.d/nscd restart
```

<!--![Turn it off and on meme](https://i.imgflip.com/6/2q7kms.jpg)-->
*"DNS not working?"
"Have you tried flushing the cache?"*

---

## Common DNS Disasters and How to Fix Them

### 🚨 "DNS_PROBE_FINISHED_NXDOMAIN"

**Translation:** "Bruh, this domain doesn't exist"

**Possible causes:**
1. You typo'd the domain (gogle.com instead of google.com)
2. The domain actually doesn't exist
3. Your DNS is drunk (cached wrong info)

**Fixes:**
```bash
# Check if you can reach it with a different DNS
nslookup example.com 8.8.8.8

# Flush your DNS cache
# (see commands above)

# Try in incognito mode (fresh DNS cache)
```

### 🚨 Website Down but IP Works

**Test:**
```bash
# Get the IP
nslookup example.com

# Try accessing via IP
curl http://142.250.190.46
```

**If IP works but domain doesn't → DNS problem!**

**Fix:**
1. Flush DNS cache
2. Change DNS servers (1.1.1.1 or 8.8.8.8)
3. Wait (DNS propagation can take 24-48 hours)

<!--![Waiting meme](https://i.imgflip.com/6/3lmjyx.jpg)-->
*"DNS propagation takes 24-48 hours"
"Why can't it be instant?"
"Because the internet is held together by duct tape and prayers"*

### 🚨 Slow DNS Resolution

**Diagnose:**
```bash
dig google.com
# Look at bottom for "Query time: 234 msec"
```

**If > 100ms, that's slow!**

**Fixes:**
```bash
# Try different DNS servers
nslookup google.com 1.1.1.1  # Usually fastest

# Check if your ISP's DNS is potato quality
nslookup google.com           # Uses your default DNS
nslookup google.com 8.8.8.8   # Compare timing
```

---

## Pro Tips From the Trenches

<!--![Knowledge meme](https://i.imgflip.com/6/3oz93v.jpg)-->
*"DNS pro tips"
"Take my wisdom, young padawan"*

### 1. Lower TTL Before Making Changes

**The smart workflow:**
```
Day -1: Lower TTL to 300 (5 minutes)
Day 0:  Make your DNS change
Day 1:  Wait for old cache to expire
Day 2:  Raise TTL back to 3600 (1 hour)
```

**Why?** If you screw up, only 5 minutes of caching instead of 24 hours!

### 2. Always Have Backup Name Servers

**Bad:**
```
NS: ns1.example.com
```

**Good:**
```
NS: ns1.example.com
NS: ns2.example.com
NS: ns3.example.com
```

If one dies, the others keep working!

### 3. Test Before Propagation

```bash
# Your DNS change hasn't propagated yet
# Test it anyway:
nslookup yoursite.com @ns1.yourprovider.com

# Or directly query the authoritative server
dig yoursite.com @ns1.yourprovider.com
```

### 4. Use dig +trace for Deep Debugging

```bash
dig +trace yoursite.com
```

This shows you EVERY step of the resolution. When something breaks, this tells you WHERE it broke.

### 5. Monitor DNS Propagation

Visit: https://www.whatsmydns.net

Enter your domain and see if your DNS change has propagated worldwide!

Different locations might see different IPs (during propagation).

---

## The Ultimate DNS Cheat Sheet

```bash
# Basic lookup
nslookup google.com

# Lookup using specific DNS server
nslookup google.com 1.1.1.1

# Get specific record types
nslookup -type=MX google.com
nslookup -type=NS google.com
nslookup -type=TXT google.com

# Detailed info (power user move)
dig google.com

# Show entire resolution path
dig google.com +trace

# Reverse lookup (IP → domain)
nslookup 8.8.8.8

# Flush DNS cache
# macOS: sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
# Windows: ipconfig /flushdns
# Linux: sudo systemd-resolve --flush-caches

# Check local DNS settings
cat /etc/hosts           # Local overrides
cat /etc/resolv.conf     # DNS server config

# Test DNS speed
dig google.com | grep "Query time"
```

<!--![Cheat sheet meme](https://i.imgflip.com/6/3u2jyh.jpg)-->
*"DNS commands"
"I know kung fu"*

---

## Wrapping This Up

So, what did we learn?

✅ DNS translates domain names → IP addresses
✅ It's hierarchical (Root → TLD → Authoritative)
✅ Caching makes it fast (browser → OS → router → ISP)
✅ Different record types do different things
✅ CNAME records let you sleep at night
✅ When in doubt, flush the cache

**DNS is basically:**
- A distributed database
- That never goes down (thanks to redundancy)
- That caches aggressively
- That makes the internet usable for humans

Without DNS, you'd have to memorize IP addresses like a maniac. Thank you, DNS. You're the real MVP.

<!--![Thank you meme](https://i.imgflip.com/6/2/2h6end.jpg)-->
*"DNS doing all this work invisibly"
"Not all heroes wear capes"*

---

## Your Next Steps

1. **Try every command in this guide** - Seriously, open your terminal right now
2. **Buy a domain** ($12/year) and mess with DNS records
3. **Break things** - Best way to learn (use a test domain!)
4. **Learn DNS security** - DNSSEC, DoH, DoT
5. **Host your own DNS server** (advanced, but cool!)

---

## One More Thing...

<!--![DNS joke meme](https://i.imgflip.com/6/48eqzk.jpg)-->
*"It's not DNS"
"There's no way it's DNS"
"It was DNS"*

<img src="/assets/blogs/dns-basics/dns.jpg" alt="always dns" width="400">

It's always DNS. 99% of internet problems? DNS. Website down? DNS. Email not working? DNS. Can't connect to server? Believe it or not, also DNS.

I am not commeting anything on it, please talk to my laweyer.

---
**Had Fun Reading the blog**

Follow me on [GitHub](https://github.com/muqeeth26832) 🚀

**Now go forth and resolve those domains!** 🎯
