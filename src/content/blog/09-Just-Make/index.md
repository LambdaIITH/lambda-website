---
title: "Why 'just' is Your Next CLI Best Friend"
github: ["https://github.com/Walker0710"]
summary: "From 'make help' to 'just awesome' - A developer's journey"
date: "2025-03-8"
draft: false
tags:
- Just
- Make
- DevTools
- Automation
---

### The Legacy Code: Understanding make

Remember the first time you encountered a Makefile? That moment when you stared at those tabs vs. spaces errors like they were written in binary? `make` is like that legacy codebase everyone's afraid to touch - it works, nobody knows exactly how, but it's been reliably building software since before Stack Overflow existed. 🦖

### Enter just: The Modern CLI Hero

While `make` was busy fighting tab-space wars, `just` arrived like that new library that actually has up-to-date documentation. Built in Rust (because who doesn't love memory safety?), it's not here to replace your build system - it's here to save you from that 300-line shell script you've been copying between projects. 

### Why I Switched to just (No Stack Overflow Required!)

After my 127th "missing separator" error in makefiles, I found `just` - and it was like discovering dark mode for the first time. Here's the real talk:

### just vs make: The README Comparison

| Feature | `just` | `make` |
|---------|--------|--------|
| Learning Curve | As smooth as TypeScript generics | Like understanding regex the first time |
| Platform Support | Cross-platform like Electron | Unix-biased like vim |
| Dependencies | Minimalist like Alpine Linux | Complex like node_modules |
| Shell Commands | Clean as a fresh git clone | Messy as a merge conflict |
| Error Messages | Actually human-readable | "Error 2" (Thanks make, very cool) |
| Recipe Writing | Like writing YAML | Like writing assembly |

### Getting Started

Choose your package manager (they all work, I promise):

🍎 **macOS (for the Silicon Valley folks):**
```sh
brew install just
```

🐧 **Linux (for the real hackers):**
```sh
cargo install just
```

🪟 **Windows (we don't judge here):**
```sh
scoop install just
```

### The justfile of Your Dreams

Here's what peak automation looks like:

```make
# justfile
set shell := "/bin/bash"

# Because manually starting services is so 2010
backend:
    @echo "🚀 Initializing backend... (please don't npm audit)"
    go build -o backend ./backend
    ./backend

# Frontend: where CSS specificity fights happen
frontend:
    @echo "🎨 Spinning up React... (node_modules: 13GB)"
    cd frontend && npm install && npm run build
    npx serve -s build

# The "works on my machine" certification
launch:
    just backend & just frontend

# For when git flow is too complicated
yeet:
    @echo "🚀 Launching code into production... what could go wrong?"
    git add .
    git commit -m "$(date): I hope this works"
    git push origin main --force  # Living dangerously
```

### Pro Tips (From Someone Who's Failed in Production)

1. Keep recipes simple (unlike your npm dependencies)
2. Name things properly (better than your variable names)
3. Comment your code (future you won't be smarter)
4. Use dependencies wisely (looking at you, left-pad)

### The Bottom Line

`make` is like Vim - it'll be around forever, and someone in your team swears by it. But `just` is like VS Code with good extensions - it just makes life better. 

Plus, you can actually read the error messages without googling them! 🎉

---
*Ready to level up? Check out the [just docs](https://github.com/casey/just) - now with 100% fewer undefined behaviors!*
