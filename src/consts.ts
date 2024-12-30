import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Lambda IITH",
  DESCRIPTION: "Welcome to Lambda IITH, the software club of IITH.",
  AUTHOR: "Lambda",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// About Page
export const ABOUT = {
  TITLE: "About Lambda.dev",
  DESCRIPTION: "Learn about Lambda.dev, our mission, vision, and the technologies we use.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "web@iith.dev",
    HREF: "mailto:web@iith.dev",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "LambdaIITH",
    HREF: "https://github.com/LambdaIITH"
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "lambdaiith",
    HREF: "https://instagram.com/lambdaiith",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "lambda-iith-hyderabad",
    HREF: "https://www.linkedin.com/company/lambda-iit-hyderabad",
  },
]

