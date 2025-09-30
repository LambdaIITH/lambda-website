import type { ImageMetadata } from "astro";

// Import mentor images
import adhithImg from "./images/Mentors/Adhith T.png";
import bhaskarImg from "./images/Mentors/Bhaskar.png";
import dikshantImg from "./images/Mentors/Dikshant.png";
import jashImg from "./images/Mentors/Jash.png";
// import anitaSharmaImg from "./images/mentors/anita-sharma.jpg";
// import rahulMehtaImg from "./images/mentors/rahul-mehta.jpg";

// Import UI/UX team images
import vijayBaddeImg from "./images/UIUX/Vijay Badde.png";
import anweshaDattaImg from "./images/UIUX/Anwesha Datta.png";
import smaronBoruahImg from "./images/UIUX/Smaron Boruah.png";

// Import heads images
import ganeswarVelvadapuImg from "./images/Heads/Ganeswar Velvadapu.png";
import ankushSinghImg from "./images/Heads/Ankush Singh.png";
import abdulMuqeethImg from "./images/Heads/Abdul Muqeeth.png";
import pranjalPrajapatiImg from "./images/Heads/Pranjal Prajapati.png";


// Import core team images
import adisheshBalajiImg from "./images/Cores/Adishesh Balaji.png";
import akshatBanzalImg from "./images/Cores/Akshat Banzal.png";
import anushreeImg from "./images/Cores/Anushree.png";
import aricMajiImg from "./images/Cores/Aric Maji.png";
import aryanBhojwaniImg from "./images/Cores/Aryan Bhojwani.png";
import dhirajBaidImg from "./images/Cores/Dhiraj Baid.png";
import guddetiSreetejaImg from "./images/Cores/Guddeti Sreeteja.png";
import harshvardhanPatidarImg from "./images/Cores/Harshvardhan Patidar.png";
import jDChandanaImg from "./images/Cores/J D Chandana.png";
import jagadeeshMerugumalaImg from "./images/Cores/Jagadeesh Merugumala.png";
import kamalKoushikDuppalapudiImg from "./images/Cores/Kamal Koushik Duppalapudi.png";
import kashyapNukalaImg from "./images/Cores/Kashyap Nukala.png";
import mothukuriGreeshmikaImg from "./images/Cores/Mothukuri Greeshmika.png";
import nathanAlvaresImg from "./images/Cores/Nathan Alvares.png";
import panshulJindalImg from "./images/Cores/Panshul Jindal.png";
import pSHarishImg from "./images/Cores/P S Harish.png";
import pathriVidyaPraveenImg from "./images/Cores/Pathri Vidya Praveen.png";
import rajatHegdeImg from "./images/Cores/Rajat Hegde.png";
import rayanHalderImg from "./images/Cores/Rayan Halder.png";
import ronitRanjanImg from "./images/Cores/Ronit Ranjan.png";
import rudranilBasakImg from "./images/Cores/Rudranil Basak.png";
import sheikMuhammadSaadiqImg from "./images/Cores/Sheik Muhammad Saadiq.png";
import sohanDasImg from "./images/Cores/Sohan Das.png";
import sriSaiAbhinavReddyImg from "./images/Cores/Sri Sai Abhinav Reddy.png";
import tavvaDineshReddyImg from "./images/Cores/Tavva Dinesh Reddy.png";

import adhithTLastImg from "./images/Heads_Last/Adhith T.png";
import bhaskarLastImg from "./images/Heads_Last/Bhaskar.png";
import dikshantLastImg from "./images/Heads_Last/Dikshant.png";
import jashLastImg from "./images/Heads_Last/Jash.png";

import pranavLastImg from "./images/UIUX_Last/Pranav.png";
import radhikaRathiLastImg from "./images/UIUX_Last/Radhika Rathi.png";
import smaronBoruahLastImg from "./images/UIUX_Last/Smaron Boruah.png";

import abdulMuqeethLastImg from "./images/Cores_Last/Abdul Muqeeth.jpg";
import ankushSinghLastImg from "./images/Cores_Last/Ankush Singh.png";
import anushaKumaresanLastImg from "./images/Cores_Last/Anusha Kumaresan.png";
import aryanLastImg from "./images/Cores_Last/Aryan.png";
import ashwinAgarwalLastImg from "./images/Cores_Last/Ashwin Agarwal.png";
import avyaazLastImg from "./images/Cores_Last/Avyaaz.png";
import bhuminHirparaLastImg from "./images/Cores_Last/Bhumin Hirpara.png";
import chaitanyaNemmaniLastImg from "./images/Cores_Last/Chaitanya Nemmani.png";
import deekshithPatelLastImg from "./images/Cores_Last/Deekshith Patel.png";
import ganeswarLastImg from "./images/Cores_Last/Ganeswar.png";
import gopiCharanReddyLastImg from "./images/Cores_Last/Gopi Charan Reddy.png";
import kSathwikLastImg from "./images/Cores_Last/K Sathwik.png";
import kartikLastImg from "./images/Cores_Last/Kartik.png";
import krishnaTejaLastImg from "./images/Cores_Last/Krishna Teja.png";
import lakshLastImg from "./images/Cores_Last/Laksh.png";
import meghanaSaiLastImg from "./images/Cores_Last/Meghana Sai.png";
import nishiBaranwalLastImg from "./images/Cores_Last/Nishi Baranwal.png";
import omkarKhilariLastImg from "./images/Cores_Last/Omkar Khilari.png";
import pranjalPrajapatiLastImg from "./images/Cores_Last/Pranjal Prajapati.png";
import rishiLastImg from "./images/Cores_Last/Rishi.png";
import samhithaLastImg from "./images/Cores_Last/Samhitha.png";
import saranLastImg from "./images/Cores_Last/Saran.png";
import shravanBadgujarLastImg from "./images/Cores_Last/Shravan Badgujar.png";
import vssusiKrishnaLastImg from "./images/Cores_Last/V S Susi Krishna.png";
import vindhyaPaidalaLastImg from "./images/Cores_Last/Vindhya Paidala.png";


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
  {
    name: "Adhith T",
    role: "Mentor",
    image: adhithImg,
    socialLinks: {
      github: "https://github.com/adhitht",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "ma22btech11003@iith.ac.in",
    },
  },
  {
    name: "Bhaskar",
    role: "Mentor",
    image: bhaskarImg,
    socialLinks: {
      github: "https://github.com/bhaskaraa45",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "ms22btech11010@iith.ac.in",
    },
  },
  {
    name: "Dikshant",
    role: "Mentor",
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
    role: "Mentor",
    image: jashImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
  },
];

export const uiux: TeamMember[] = [
  {
    name: "Smaron Boruah",
    role: "UI/UX",
    image: smaronBoruahImg,
    socialLinks: {
      linkedin: "",
      instagram: "",
      email: "bd23bdes11022@iith.ac.in",
    },
  },
  {
    name: "Anwesha Datta",
    role: "UI/UX",
    image: anweshaDattaImg,
    socialLinks: {
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Vijay Badde",
    role: "UI/UX",
    image: vijayBaddeImg,
    socialLinks: {
      github: "https://.github.com/vjs5",
      linkedin: "",
      instagram: "",

    },
  },
];

export const heads: TeamMember[] = [
  {
    name: "Ganeswar Velvadapu",
    role: "Club Head",
    image: ganeswarVelvadapuImg,
    socialLinks: {
      github: "https://github.com/ganeswar-velvadapu",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "ms23btech11034@iith.ac.in",
    },
  },
  {
    name: "Pranjal Prajapati",
    role: "Club Head",
    image: pranjalPrajapatiImg,
    socialLinks: {
      github: "https://github.com/Pranjal095",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "cs23btech11048@iith.ac.in",
    },
  },
  {
    name: "Ankush Singh",
    role: "Club Head",
    image: ankushSinghImg,
    socialLinks: {
      github: "https://github.com/Walker0710",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "ma23btech11002@iith.ac.in",
    },
  },
  {
    name: "Abdul Muqeeth",
    role: "Club Head",
    image: abdulMuqeethImg,
    socialLinks: {
      github: "https://github.com/muqeeth26832",
      linkedin: "https://www.linkedin.com/in/mohammed-abdul-muqeeth-261264281/",
      instagram: "https://instagram.com/muqeeth26832",
      twitter: "",
      email: "ma22btech11003@iith.ac.in",
    },
  },
];

export const cores: TeamMember[] = [
  {
    name: "Adishesh Balaji",
    role: "Core",
    image: adisheshBalajiImg,
    socialLinks: {
      github: "https://github.com/AdisheshBalaji",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Akshat Banzal",
    role: "Core",
    image: akshatBanzalImg,
    socialLinks: {
      github: "https://github.com/akshat-31415",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Anushree",
    role: "Core",
    image: anushreeImg,
    socialLinks: {
      github: "https://github.com/anushree200",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Aric Maji",
    role: "Core",
    image: aricMajiImg,
    socialLinks: {
      github: "https://github.com/Adam-Warlock09",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Aryan Bhojwani",
    role: "Core",
    image: aryanBhojwaniImg,
    socialLinks: {
      github: "https://github.com/AryanB-web",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Dhiraj Baid",
    role: "Core",
    image: dhirajBaidImg,
    socialLinks: {
      github: "https://github.com/DHIBAID",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Guddeti Sreeteja",
    role: "Core",
    image: guddetiSreetejaImg,
    socialLinks: {
      github: "https://github.com/sreeteja2006",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Harshvardhan Patidar",
    role: "Core",
    image: harshvardhanPatidarImg,
    socialLinks: {
      github: "https://github.com/harsh15044",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "J D Chandana",
    role: "Core",
    image: jDChandanaImg,
    socialLinks: {
      github: "https://github.com/jdevisreechandana",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Jagadeesh Merugumala",
    role: "Core",
    image: jagadeeshMerugumalaImg,
    socialLinks: {
      github: "https://github.com/jagadeesh-2006",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Kamal Koushik Duppalapudi",
    role: "Core",
    image: kamalKoushikDuppalapudiImg,
    socialLinks: {
      github: "https://github.com/kamalkoushikd",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Kashyap Nukala",
    role: "Core",
    image: kashyapNukalaImg,
    socialLinks: {
      github: "NKashyap21",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Mothukuri Greeshmika",
    role: "Core",
    image: mothukuriGreeshmikaImg,
    socialLinks: {
      github: "https://github.com/Greeshmika06",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Nathan Alvares",
    role: "Core",
    image: nathanAlvaresImg,
    socialLinks: {
      github: "nathanalvares19",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "P S Harish",
    role: "Core",
    image: pSHarishImg,
    socialLinks: {
      github: "hydraharish123",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Panshul Jindal",
    role: "Core",
    image: panshulJindalImg,
    socialLinks: {
      github: "Panshul-Jindal",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Pathri Vidya Praveen",
    role: "Core",
    image: pathriVidyaPraveenImg,
    socialLinks: {
      github: "https://github.com/PathriVidyaPraveen",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Rajat Hegde",
    role: "Core",
    image: rajatHegdeImg,
    socialLinks: {
      github: "https://github.com/Rajat32-op",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Rayan Halder",
    role: "Core",
    image: rayanHalderImg,
    socialLinks: {
      github: "https://github.com/rayanry9",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Ronit Ranjan",
    role: "Core",
    image: ronitRanjanImg,
    socialLinks: {
      github: "https://github.com/igiamronit",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Rudranil Basak",
    role: "Core",
    image: rudranilBasakImg,
    socialLinks: {
      github: "https://github.com/ytgs5148",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Sheik Muhammad Saadiq",
    role: "Core",
    image: sheikMuhammadSaadiqImg,
    socialLinks: {
      github: "https://github.com/Saadiq8149",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Sohan Das",
    role: "Core",
    image: sohanDasImg,
    socialLinks: {
      github: "https://github.com/Sohan256-de",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Sri Sai Abhinav Reddy",
    role: "Core",
    image: sriSaiAbhinavReddyImg,
    socialLinks: {
      github: "https://github.com/bssabhinavbss",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Tavva Dinesh Reddy",
    role: "Core",
    image: tavvaDineshReddyImg,
    socialLinks: {
      github: "https://github.com/dineshtavva23",
      linkedin: "",
      instagram: "",
    },
  },
];

export const heads_last: TeamMember[] = [
  {
    name: "Adhith T",
    role: "Club Head",
    image: adhithTLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
  {
    name: "Bhaskar",
    role: "Club Head",
    image: bhaskarLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
  {
    name: "Dikshant",
    role: "Club Head",
    image: dikshantLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
  {
    name: "Jash",
    role: "Club Head",
    image: jashLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
];

export const uiux_last: TeamMember[] = [
  {
    name: "Pranav",
    role: "UI/UX",
    image: pranavLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
      email: "",
    },
  },
  {
    name: "Radhika Rathi",
    role: "UI/UX",
    image: radhikaRathiLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
      email: "",
    },
  },
  {
    name: "Smaron Boruah",
    role: "UI/UX",
    image: smaronBoruahLastImg,
    socialLinks: {
      github: "",
      linkedin: "",
      instagram: "",
      email: "",
    },
  },
];

export const cores_last: TeamMember[] = [
  {
    name: "Abdul Muqeeth",
    role: "Core",
    image: abdulMuqeethLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Ankush Singh",
    role: "Core",
    image: ankushSinghLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Anusha Kumaresan",
    role: "Core",
    image: anushaKumaresanLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Aryan",
    role: "Core",
    image: aryanLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Ashwin Agarwal",
    role: "Core",
    image: ashwinAgarwalLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Avyaaz",
    role: "Core",
    image: avyaazLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Bhumin Hirpara",
    role: "Core",
    image: bhuminHirparaLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Chaitanya Nemmani",
    role: "Core",
    image: chaitanyaNemmaniLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Deekshith Patel",
    role: "Core",
    image: deekshithPatelLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Ganeswar",
    role: "Core",
    image: ganeswarLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Gopi Charan Reddy",
    role: "Core",
    image: gopiCharanReddyLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "K Sathwik",
    role: "Core",
    image: kSathwikLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Kartik",
    role: "Core",
    image: kartikLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Krishna Teja",
    role: "Core",
    image: krishnaTejaLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Laksh",
    role: "Core",
    image: lakshLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Meghana Sai",
    role: "Core",
    image: meghanaSaiLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Nishi Baranwal",
    role: "Core",
    image: nishiBaranwalLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Omkar Khilari",
    role: "Core",
    image: omkarKhilariLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Pranjal Prajapati",
    role: "Core",
    image: pranjalPrajapatiLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Rishi",
    role: "Core",
    image: rishiLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Samhitha",
    role: "Core",
    image: samhithaLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Saran",
    role: "Core",
    image: saranLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Shravan Badgujar",
    role: "Core",
    image: shravanBadgujarLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "V S Susi Krishna",
    role: "Core",
    image: vssusiKrishnaLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
  {
    name: "Vindhya Paidala",
    role: "Core",
    image: vindhyaPaidalaLastImg,
    socialLinks: { github: "", linkedin: "", instagram: "" },
  },
];
