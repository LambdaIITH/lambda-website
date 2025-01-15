import type { ImageMetadata } from "astro";

// // Import mentor images
// import anitaSharmaImg from "./images/mentors/anita-sharma.jpg";
// import rahulMehtaImg from "./images/mentors/rahul-mehta.jpg";

// Import UI/UX team images
import pranavImg from "./images/UIUX/Pranav.png";
import radhikaRathiImg from "./images/UIUX/Radhika Rathi.png";
import smaronBoruahImg from "./images/UIUX/Smaron Boruah.png";

// Import heads images
import adhithImg from "./images/Heads/Adhith T.png";
import bhaskarImg from "./images/Heads/Bhaskar.png";
import dikshantImg from "./images/Heads/Dikshant.png";
import jashImg from "./images/Heads/Jash.png";

// Import core team images
import abdulMuqeethImg from "./images/Cores/Abdul Muqeeth.jpg";
import anushaKumaresanImg from "./images/Cores/Anusha Kumaresan.png";
import ankushSinghImg from "./images/Cores/Ankush Singh.png";
import aryanImg from "./images/Cores/Aryan.png";
import ashwinAgarwalImg from "./images/Cores/Ashwin Agarwal.png";
import avyaazImg from "./images/Cores/Avyaaz.png";
import bhuminHirparaImg from "./images/Cores/Bhumin Hirpara.png";
import chaitanyaNemmaniImg from "./images/Cores/Chaitanya Nemmani.png";
import deekshithPatelImg from "./images/Cores/Deekshith Patel.png";
import ganeswarImg from "./images/Cores/Ganeswar.png";
import gopiCharanReddyImg from "./images/Cores/Gopi Charan Reddy.png";
import kSathwikImg from "./images/Cores/K Sathwik.png";
import kartikImg from "./images/Cores/Kartik.png";
import krishnaTejaImg from "./images/Cores/Krishna Teja.png";
import lakshImg from "./images/Cores/Laksh.png";
import meghanaSaiImg from "./images/Cores/Meghana Sai.png";
import nishiBaranwalImg from "./images/Cores/Nishi Baranwal.png";
import omkarKhilariImg from "./images/Cores/Omkar Khilari.png";
import rishiImg from "./images/Cores/Rishi.png";
import samhithaImg from "./images/Cores/Samhitha.png";
import saranImg from "./images/Cores/Saran.png";
import shravanBadgujarImg from "./images/Cores/Shravan Badgujar.png";
import susiKrishnaImg from "./images/Cores/V S Susi Krishna.png";
import vindhyaPaidalaImg from "./images/Cores/Vindhya Paidala.png";

// Define the TeamMember type
export interface TeamMember {
  name: string;
  role: string;
  image: ImageMetadata;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
}

export const mentors: TeamMember[] = [
  // {
  //   name: "Dr. Anita Sharma",
  //   role: "Faculty Advisor",
  //   image: anitaSharmaImg,
  //   socialLinks: {
  //     linkedin: "https://www.linkedin.com/in/dr-anita-sharma",
  //     instagram: "https://instagram.com/dr.anita.sharma",
  //   },
  // },
  // {
  //   name: "Rahul Mehta",
  //   role: "Industry Mentor",
  //   image: rahulMehtaImg,
  //   socialLinks: {
  //     github: "https://github.com/rahulmehta",
  //     linkedin: "https://www.linkedin.com/in/rahulmehta",
  //     instagram: "https://instagram.com/rahulmehta",
  //   },
  // },
];

export const uiux: TeamMember[] = [
  {
    name: "Pranav",
    role: "UI/UX",
    image: pranavImg,
    socialLinks: {
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Radhika Rathi",
    role: "UI/UX",
    image: radhikaRathiImg,
    socialLinks: {
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Smaron Boruah",
    role: "UI/UX",
    image: smaronBoruahImg,
    socialLinks: {
      linkedin: "",
      instagram: "",
    },
  },
];

export const heads: TeamMember[] = [
  {
    name: "Adhith T",
    role: "Club Head",
    image: adhithImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
  },
  {
    name: "Bhaskar",
    role: "Club Head",
    image: bhaskarImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
  },
  {
    name: "Dikshant",
    role: "Club Head",
    image: dikshantImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
  },
  {
    name: "Jash",
    role: "Club Head",
    image: jashImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
  },
];

export const cores: TeamMember[] = [
  {
    name: "Abdul Muqeeth",
    role: "Core",
    image: abdulMuqeethImg,
    socialLinks: {
      github: "https://github.com/muqeeth",
      linkedin: "https://www.linkedin.com/in/muqeeth/",
      instagram: "https://instagram.com/muqeeth",
    },
  },
  {
    name: "Anusha Kumaresan",
    role: "Core",
    image: anushaKumaresanImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Ankush Singh",
    role: "Core",
    image: ankushSinghImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Aryan",
    role: "Core",
    image: aryanImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Ashwin Agarwal",
    role: "Core",
    image: ashwinAgarwalImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Avyaaz",
    role: "Core",
    image: avyaazImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Bhumin Hirpara",
    role: "Core",
    image: bhuminHirparaImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Chaitanya Nemmani",
    role: "Core",
    image: chaitanyaNemmaniImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Deekshith Patel",
    role: "Core",
    image: deekshithPatelImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Ganeswar",
    role: "Core",
    image: ganeswarImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Gopi Charan Reddy",
    role: "Core",
    image: gopiCharanReddyImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "K Sathwik",
    role: "Core",
    image: kSathwikImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Kartik",
    role: "Core",
    image: kartikImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Krishna Teja",
    role: "Core",
    image: krishnaTejaImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Laksh",
    role: "Core",
    image: lakshImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Meghana Sai",
    role: "Core",
    image: meghanaSaiImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Nishi Baranwal",
    role: "Core",
    image: nishiBaranwalImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Omkar Khilari",
    role: "Core",
    image: omkarKhilariImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Rishi",
    role: "Core",
    image: rishiImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Samhitha",
    role: "Core",
    image: samhithaImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Saran",
    role: "Core",
    image: saranImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Shravan Badgujar",
    role: "Core",
    image: shravanBadgujarImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "V S Susi Krishna",
    role: "Core",
    image: susiKrishnaImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Vindhya Paidala",
    role: "Core",
    image: vindhyaPaidalaImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
    },
  },
];
