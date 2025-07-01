import {
  FiTool,
  FiDroplet,
  FiHome,
  FiUsers,
  FiSettings,
  FiActivity,
  FiWind,
  FiZap,
  FiMonitor,
  FiLayers,
  FiGrid,
  FiShield,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Top-Tier Plumbing Services",
    description:
      "Expert plumbing solutions for all your property needs, from leak repairs to full system installations. Fast, reliable, and always professional.",
    bullets: [
      {
        title: "Emergency Repairs",
        description:
          "Rapid response for leaks, clogs, and burst pipes to minimize property damage.",
        icon: <FiDroplet size={26} />,
      },
      {
        title: "System Installations",
        description:
          "Professional installation of pipes, fixtures, and appliances.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Preventive Maintenance",
        description:
          "Regular inspections and maintenance to keep your plumbing running smoothly.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Tree Services by Trusted Arborists",
    description:
      "Certified arborists provide safe tree removal, trimming, and health assessments to keep your landscape beautiful and secure.",
    bullets: [
      {
        title: "Tree Trimming & Pruning",
        description:
          "Enhance tree health and property aesthetics with expert care.",
        icon: <FiActivity size={26} />,
      },
      {
        title: "Safe Tree Removal",
        description:
          "Efficient removal of hazardous or unwanted trees with minimal disruption.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Health Assessments",
        description:
          "Professional diagnosis and treatment for tree diseases and pests.",
        icon: <FiUsers size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Lawn Care and Maintenance Services",
    description:
      "Keep your property’s green spaces lush and inviting with regular mowing, fertilization, and landscaping.",
    bullets: [
      {
        title: "Routine Mowing",
        description:
          "Scheduled mowing for a consistently neat and healthy lawn.",
        icon: <FiHome size={26} />,
      },
      {
        title: "Fertilization & Weed Control",
        description:
          "Custom treatments to promote growth and eliminate unwanted weeds.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "Landscaping Enhancements",
        description:
          "Design and install flower beds, shrubs, and decorative features.",
        icon: <FiGrid size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Interior Design and Renovation",
    description:
      "Transform your property’s interiors with modern design, remodeling, and space optimization tailored to your needs.",
    bullets: [
      {
        title: "Custom Design Solutions",
        description:
          "Personalized interior concepts to match your style and functionality.",
        icon: <FiHome size={26} />,
      },
      {
        title: "Full Renovations",
        description:
          "From kitchens to bathrooms, we handle complete makeovers with quality craftsmanship.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Space Optimization",
        description:
          "Maximize usable space with smart layouts and storage solutions.",
        icon: <FiLayers size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Fixing & Support",
    description:
      "Comprehensive repair and support services for all property maintenance issues, big or small.",
    bullets: [
      {
        title: "General Repairs",
        description: "Quick fixes for doors, windows, flooring, and more.",
        icon: <FiTool size={26} />,
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock assistance for urgent property concerns.",
        icon: <FiMonitor size={26} />,
      },
      {
        title: "Preventive Checks",
        description:
          "Scheduled inspections to catch issues before they escalate.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Roofing Services",
    description:
      "Protect your property with expert roofing installation, repair, and maintenance for all roof types.",
    bullets: [
      {
        title: "Roof Inspections",
        description: "Thorough assessments to identify leaks, damage, or wear.",
        icon: <FiActivity size={26} />,
      },
      {
        title: "Repairs & Replacements",
        description:
          "From minor fixes to full roof replacements, we’ve got you covered.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Weatherproofing",
        description: "Ensure your roof stands strong against the elements.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "HVAC Services",
    description:
      "Stay comfortable year-round with professional heating, ventilation, and air conditioning services.",
    bullets: [
      {
        title: "System Installation",
        description: "Expert installation of energy-efficient HVAC systems.",
        icon: <FiWind size={26} />,
      },
      {
        title: "Maintenance & Tune-Ups",
        description: "Regular servicing to keep your system running smoothly.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "Emergency Repairs",
        description:
          "Fast response for breakdowns and urgent climate control issues.",
        icon: <FiMonitor size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Electrical Services",
    description:
      "Licensed electricians handle all your wiring, lighting, and electrical safety needs.",
    bullets: [
      {
        title: "Wiring & Rewiring",
        description:
          "Safe installation and upgrades for new and existing properties.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Lighting Solutions",
        description: "Modern lighting design and installation for every space.",
        icon: <FiActivity size={26} />,
      },
      {
        title: "Safety Inspections",
        description:
          "Comprehensive checks to ensure your electrical systems are up to code.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Appliances Services",
    description:
      "Keep your appliances running efficiently with expert installation, repair, and maintenance.",
    bullets: [
      {
        title: "Appliance Installation",
        description:
          "Professional setup for all major home and kitchen appliances.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Repairs & Troubleshooting",
        description:
          "Quick fixes and diagnostics for malfunctioning appliances.",
        icon: <FiMonitor size={26} />,
      },
      {
        title: "Routine Maintenance",
        description: "Scheduled servicing to extend appliance lifespan.",
        icon: <FiSettings size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Siding Services",
    description:
      "Enhance your property’s curb appeal and protection with quality siding installation and repairs.",
    bullets: [
      {
        title: "Siding Installation",
        description:
          "Wide selection of materials and styles to suit your property.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "Repairs & Upgrades",
        description:
          "Restore or upgrade existing siding for improved durability.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Weatherproofing",
        description:
          "Protect your property from the elements with expert sealing.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Drywall Services",
    description:
      "Professional drywall installation, repair, and finishing for flawless interiors.",
    bullets: [
      {
        title: "Installation & Finishing",
        description: "Smooth, seamless walls and ceilings for any room.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "Crack & Hole Repairs",
        description: "Expert patching and restoration for damaged drywall.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Texture & Painting",
        description: "Custom textures and paint finishes to match your style.",
        icon: <FiHome size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
