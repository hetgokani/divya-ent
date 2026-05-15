// src/components/projectData.js
import img1 from "../assets/s6.webp";
import img2 from "../assets/tank.png";

export const completedProjectsData = [
  {
    id: "bulk-water-transmission",
    title: "Bulk Water Transmission Pipeline Infrastructure",
    description:
      "Engineering, procurement, and execution of heavy-duty MS transmission pipelines.",
    longDescription:
      "This infrastructure mega-project involved precision engineering and laying of a 1400mm diameter Mild Steel pipeline across highly challenging terrains. It stands as a lifeline delivering uninterrupted clean water supply to over 45 regional networks.",
    mainImage: img1,
    allImages: [img1, img2, img1, img2],
  },
  {
    id: "canal-lining-structures",
    title: "Saurashtra Branch Canal Structural Lining",
    description:
      "Complete structural mechanical lining and head regulator gate systems.",
    longDescription:
      "A massive concrete irrigation infrastructure project featuring advanced slipform mechanical concrete lining. Meticulously engineered to combat water seepage issues across drought-prone farming belts.",
    mainImage: img2,
    allImages: [img2, img1, img2, img1],
  },
];
