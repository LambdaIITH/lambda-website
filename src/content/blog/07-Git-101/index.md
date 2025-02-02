---
title: "Git 101"
summary: "All about the basics of Git"
date: "2025-01-20"
draft: false
tags:
- Git
- Nishi
---

<img src="/assets/blogs/07-Git-101/meme1.jpg" alt="drawing" width="200">


Isn't this how you've been organizing your projects—Google Drive uploads, code images, and
even the next-level audiobook idea? While innovative, these methods can quickly grow messy.
Let me introduce you to **Git**. 🚀 With Git, you’ll be able to efficiently track changes, collaborate
seamlessly, and ensure that your project history is always intact.

## What is Git?

Git is a **Distributed Version Control System (DVCS)** designed to keep your work organized,
track all versions of your files, and collaborate more efficiently. Whether you’re coding, writing,
or overseeing collaborative projects, Git makes it all easier.

### But how does Git work?  

<img src="/assets/blogs/07-Git-101/meme3.jpg" alt="drawing" width="200">


### The common Shell Commands
- **git add**: The first step, where you prepare your changes (like passengers boarding a plane).  
- **git commit**: Locking in the changes (readying the plane for takeoff).  
- **git push**: Sending your changes to the cloud (watch your code take flight!).  

Now that you have the big picture, let’s break it down step by step.  

## Staging changes with git add
-  When we make changes in files, git doesn’t track them automatically. To track the
changes, we need to add those changes to the staging area.
- The staging area is a file storing information about what would go in the next commit.
- To add all the changes use command:
```
git add.
```
## Committing changes with git commit

- Once your changes are staged, you can save them as a commit.
- Commit captures the state of your project at a specific point in time.
- To commit changes use command:
```
git commit -m "feat: description of changes"
```
- If you would like to credit others who have contributed to the changes, you can also add
them as co-authors in your commit.
- You can add co-authors in your commits with the following command:
```
git commit -m "feat: description
Co-authored-by: Name <email@example.com>"
```
## Pushing changes to the Cloud with git push

- Once you’ve committed changes locally, you can share them to others by pushing them
to a remote repository, such as GitHub, GitLab etc.
- To push the changes to the desired branch use command:
```
git push origin branch_name
```
## Configuring Git User Details

- Before committing, it is important to configure your user details in Git. This ensures your
username and email are linked to your commits
- To set your name use command:
```
git config --global user.name "Your Name"
```
- To set your email use command:
```
git config --global user.email "your.email@example.com"
```