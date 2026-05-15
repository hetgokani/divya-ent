// src/components/projectData.js

// 1. Sauni Yojana M.S. Pipe Laying
import sauni1 from "../assets/Sauni.webp";
import sauni2 from "../assets/Sauni1.webp";
import sauni3 from "../assets/Sauni2.webp";

// 2. DI Pipe Laying Work
import di1 from "../assets/DIPipe.webp";
import di2 from "../assets/DIPipe1.webp";
import di3 from "../assets/DIPipe2.webp";
import di4 from "../assets/DIPipe3.webp";

// 3. RCC Pipe Laying Work
import rcc1 from "../assets/RCC1.webp";
import rcc2 from "../assets/RCC2.webp";
import rcc3 from "../assets/RCC3.webp";
import rcc4 from "../assets/RCC4.webp";

// 4. Canal Lining Works
import canal1 from "../assets/Canal1.webp";
import canal2 from "../assets/Canal2.webp";
import canal3 from "../assets/Canal3.webp";
import canal4 from "../assets/Canal4.webp";

// 5. H & W Work
import hw1 from "../assets/hwork1.webp";

// 6. Pond Work
import pond1 from "../assets/Pondwork.webp";

// 7. Water Treatment Plant Work (Primary)
import wtp1 from "../assets/watertreament.webp";
import wtp2 from "../assets/watertreament2.webp";
import wtp3 from "../assets/watertreament3.webp";
import wtp4 from "../assets/watertreament4.webp";

// 7b. Water Treatment Plant Work (Secondary Project)
import wtpAlt from "../assets/WaterTreatment1.webp";

// 8. Elevated Storage Reservoir Work
import storage1 from "../assets/Storage.webp";

// 9. Electro Mechanically Installation Work
import mech1 from "../assets/mechanically.webp";
import mech2 from "../assets/mechanically2.webp";
import mech3 from "../assets/mechanically3.webp";
import mech4 from "../assets/mechanically4.webp";

export const completedProjectsData = [
  {
    id: "sauni-yojana-ms-pipeline",
    title: "Sauni Yojana M.S. Pipe Laying",
    description:
      "Massive engineering and execution of heavy-duty Mild Steel transmission pipelines for the prestigious Sauni Yojana.",
    longDescription:
      "This critical infrastructure mega-project involved the precision engineering, welding, and underground laying of large-diameter Mild Steel (M.S.) pipelines across challenging terrains. Acting as a major arterial network, it ensures the uninterrupted transmission of bulk water to drought-prone regions, vastly improving regional agricultural and municipal water security.",
    mainImage: sauni1,
    allImages: [sauni1, sauni2, sauni3],
  },
  {
    id: "di-pipe-laying-work",
    title: "D.I. Pipe Laying Infrastructure",
    description:
      "Robust Ductile Iron (DI) pipeline installation ensuring durable and leak-proof municipal water distribution.",
    longDescription:
      "Executed extensive urban and semi-urban water distribution networks utilizing high-grade Ductile Iron (D.I.) pipes. Known for their superior tensile strength and corrosion resistance, these pipelines were meticulously jointed, hydro-tested, and commissioned to provide communities with a highly resilient and pressurized drinking water supply.",
    mainImage: di2,
    allImages: [di1, di2, di3, di4],
  },
  {
    id: "rcc-pipe-laying-work",
    title: "RCC Pipe Laying & Drainage",
    description:
      "Heavy-duty Reinforced Cement Concrete (RCC) pipe installation for high-capacity drainage and stormwater management.",
    longDescription:
      "This civil engineering project focused on the excavation, bedding, and precise alignment of NP3 and NP4 grade RCC pipelines. Designed to manage massive volumetric flows, this network establishes a highly efficient underground stormwater and sewage management system, preventing regional flooding and ensuring environmental safety.",
    mainImage: rcc1,
    allImages: [rcc1, rcc2, rcc3, rcc4],
  },
  {
    id: "canal-lining-works",
    title: "Structural Canal Lining Works",
    description:
      "Precision concrete canal lining engineered to prevent seepage and optimize agricultural water transport.",
    longDescription:
      "A large-scale irrigation infrastructure project featuring advanced slipform mechanical concrete lining. By fortifying the earthen embankments with heavily reinforced concrete profiles, we successfully eradicated water loss due to seepage, ensuring maximum hydraulic efficiency and water delivery to rural farming belts.",
    mainImage: canal3,
    allImages: [canal1, canal2, canal3, canal4],
  },
  {
    id: "head-and-water-works",
    title: "Head & Water (H&W) Works",
    description:
      "Construction of robust headworks infrastructure to regulate, monitor, and control bulk water flow.",
    longDescription:
      "Designed and executed critical Headworks structures at major reservoir extraction points. The project involved deep structural concrete foundations, intake channels, and the integration of heavy mechanical flow-control gates to safely divert and manage massive hydraulic loads for downstream distribution.",
    mainImage: hw1,
    allImages: [hw1], // Duplicated to maintain perfect 4-grid gallery UI
  },
  {
    id: "regional-pond-work",
    title: "Regional Pond Excavation & Development",
    description:
      "Revitalization of water storage through extensive pond excavation, deepening, and embankment fortification.",
    longDescription:
      "A massive earthmoving and civil project aimed at increasing natural water harvesting capacities. The scope included heavy machinery excavation, silt removal, geometric reshaping of the pond bed, and the construction of protective stone-pitched embankments to sustain long-term ecological water storage.",
    mainImage: pond1,
    allImages: [pond1],
  },
  {
    id: "primary-water-treatment-plant",
    title: "Advanced Water Treatment Plant",
    description:
      "State-of-the-art water purification facility engineered with advanced filtration and chemical dosing mechanics.",
    longDescription:
      "Constructed a multi-MLD (Million Liters per Day) Water Treatment Plant from the ground up. The facility features massive RCC clariflocculators, rapid sand gravity filters, and automated chlorination systems, transforming raw surface water into 100% safe, potable drinking water for thousands of households.",
    mainImage: wtp2,
    allImages: [wtp1, wtp2, wtp4],
  },
  {
    id: "secondary-water-treatment",
    title: "Municipal Water Treatment Facility",
    description:
      "Large-scale civil and mechanical execution of a municipal water purification and processing plant.",
    longDescription:
      "This extensive structural project involved the civil construction of aeration fountains, settling basins, and clear water underground reservoirs (UGSR). The plant operates with high-efficiency hydraulic flow mechanics to process and purify turbid water supplies meeting the highest global health standards.",
    mainImage: wtpAlt,
    allImages: [wtpAlt],
  },
  {
    id: "elevated-storage-reservoir",
    title: "Elevated Storage Reservoir (ESR)",
    description:
      "High-altitude structural RCC water tanks engineered for optimal gravity-fed community distribution.",
    longDescription:
      "Erected massive, structurally reinforced overhead water reservoirs supported by high-strength concrete staging. These majestic ESRs are strategically placed to build necessary hydraulic head pressure, ensuring that clean water reaches the furthest and highest points of the urban distribution grid seamlessly.",
    mainImage: storage1,
    allImages: [storage1],
  },
  {
    id: "electro-mechanical-installation",
    title: "Electro-Mechanical Installations",
    description:
      "Complex installation and commissioning of heavy-duty pumping machinery and electrical control panels.",
    longDescription:
      "The mechanical heartbeat of water infrastructure. This project involved the precise alignment and installation of massive Vertical Turbine (VT) and Centrifugal pumps, heavy sluice valves, and advanced HT/LT electrical panels. The system was rigorously tested to handle immense hydraulic pressures and automated load management.",
    mainImage: mech4,
    allImages: [mech1, mech2, mech3, mech4],
  },
];
