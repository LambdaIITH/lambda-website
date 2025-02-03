---
title: "Git 101"
summary: "A Beginner’s Guide to Version Control"
date: "2025-02-2"
draft: false
tags:
- Git
- Version Control
- Nishi
---

<img src="/assets/blogs/07-Git-101/meme1.jpg" alt="drawing" width="200">


Isn't this how you've been organizing your projects—Google Drive uploads, code images, and
even the next-level audiobook idea? While innovative, these methods can quickly grow messy.
Let me introduce you to **Git**. 🚀 With Git, you’ll be able to efficiently track changes, collaborate
seamlessly, and ensure that your project history is always intact.

## What is Git and Why Use It?

Git is a **Distributed Version Control System (DVCS)** designed to keep your work organized,
track all versions of your files, and collaborate more efficiently. Whether you’re coding, writing,
or overseeing collaborative projects, Git makes it all easier.

## But how does Git work?  

<img src="/assets/blogs/07-Git-101/meme3.jpg" alt="drawing" width="200">


<!-- ### The common Shell Commands -->
### Basic Git Workflow

<!-- - **git init**: 
- **git add**: The first step, where you prepare your changes (like passengers boarding a plane).  
- **git commit**: Locking in the changes (readying the plane for takeoff).  
- **git push**: Sending your changes to the cloud (watch your code take flight!).   -->

- **git init** – You start by setting up your project with Git.  
- **git clone** – If a project already exists, you can clone it to get onboard.  
- **git add** – You prepare and stage your changes before committing.  
- **git commit** – This locks in your changes as a snapshot of your project.  
- **git push** – Your changes are now uploaded to a remote repository.  
- **git pull** – You retrieve the latest changes from the remote repository to stay up to date.  

Now that you have the big picture, let’s break it down step by step.  

## Setting Up Git
-  Check if Git is installed:
```
git --version
```
- If not installed, install it from [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Configure Git User Details

- To set your name use command:
```
git config --global user.name "Your Name"
```
- To set your email use command:
```
git config --global user.email "your.email@example.com"
```
- You can check your configuration with:
```
git config --list
```

## Initializing a Repository with git init
-  If you're starting a new project, you need to initialize Git in your project folder.
-  This sets up a new local repository where Git will track changes.
-  Use the following command:
```
git init
```
-  This creates a hidden .git directory that stores all version control history.
- ✅ When to Use?

    -  When creating a brand-new project that you want to track using Git.

## Cloning an Existing Repository with git clone
-  Instead of starting from scratch, you can copy an existing Git repository to your local machine.
-  This is useful when working on a project with others or using open-source code.
-  Use the following command:
```
git clone <repository-url>
```
-  This downloads the repository and sets up a connection with the remote server.
-  ✅ When to Use?
    -  When joining an existing project or working with a remote repository.

### Understanding origin in Git

-  origin is the default alias for the remote repository from which you cloned a project.
-  When you run `git clone <repository-url>`, Git assigns the name origin to the repository you cloned from.
-  Instead of using the full repository URL each time, you can refer to it with origin.
-  To check which remote repositories are linked to your project, use:
```
git remote -v
```
-  We frequently use 'origin' in many commands, such as git pull, which we'll discuss shortly.


## Checking Repository Status with git status
-  The git status command shows the current state of your working directory.
-  It tells you:
    -  Which files have been modified.
    -  Which files are staged for commit.
    -  Whether your branch is ahead or behind the remote repository.
-  Use the following command:
```
git status
```
-  Example Output:
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
    modified: index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    newfile.js
```
-  ✅ When to Use?

    -  Before staging, committing, or pushing to check the state of your files.

## Staging changes with git add
-  When we make changes in files, git doesn’t track them automatically. To track the
changes, we need to add those changes to the staging area.
- The staging area is a file storing information about what would go in the next commit.
- To stage a specific file use command:
```
git add <filename>
```
- To add all the changes use command:
```
git add .
```
- ✅ When to Use?
    -  Before committing, to select which changes should be saved.

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
-  ✅ When to Use?
    -  After adding changes to the staging area, to save a version of your work.

## Pulling the Latest Changes with git pull
-  Before making new changes, it’s best to pull the latest updates from the remote repository.
-  This ensures your local version is up to date with others’ contributions.
-  Use the following command:
```
git pull origin branch_name
```
-  This fetches the latest changes and merges them into your local branch.
-  ✅ When to Use?

    -  Before working on a project to avoid merge conflicts.


## Pushing changes to the Cloud with git push

- Once you’ve committed changes locally, you can share them to others by pushing them
to a remote repository, such as GitHub, GitLab etc.
- To push the changes to the desired branch use command:
```
git push origin branch_name
```
-  This uploads your commits to the remote repository.
-  ✅ When to Use?

    -  After committing, to share your changes with your team.
## Conclusion
-  Git is a powerful tool for version control, collaboration, and project management. By mastering the basics, you'll: \
    ✔ Save time and prevent mistakes. \
    ✔ Work seamlessly with teams. \
    ✔ Keep track of every change in your project. 

## Next Steps:
-  Master **Git branches**, **merge**, and **rebase** for version control.
-  Use **Git stash** for temporary changes and resolve **merge conflicts**.
-  Explore **GitHub pull requests**.
-  Try a visual Git tool like **GitKraken** or **GitLens** for VS Code.

## Bonus: Git Cheat Sheet
| Command | Description |
| ------- | ----------- |
| git init | Initialize a new Git repository
| git clone <repo-url> |  Clone a repository
| git status | Check the status of files
| git add <file> | Stage a file
| git commit -m "message" | Commit changes
| git push | Push changes to remote
| git pull | Pull changes from remote