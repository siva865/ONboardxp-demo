import {
  FiCompass,
  FiFeather,
  FiLayers,
  FiPackage,
  FiCheck,
  FiTruck,
} from "react-icons/fi";

export const IMG = {
  hero: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=2200&q=88",
  air: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
  cruise: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85",
  rail: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=85",
  hotel: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
  dining: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85",
  amenity: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85",
  comfort: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  wellness: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  material: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
  studio: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
};

export const navItems = [
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Industries", "#industries"],
  ["Our approach", "#approach"],
  ["Contact", "#contact"],
];

export const industries = [
  {
    n: "01",
    title: "Air travel",
    desc: "Passenger experiences designed for every cabin, class and moment in the air.",
    img: IMG.air,
    tag: "In the air",
  },
  {
    n: "02",
    title: "Cruises",
    desc: "Thoughtful details that make every voyage feel more personal and memorable.",
    img: IMG.cruise,
    tag: "At sea",
  },
  {
    n: "03",
    title: "Railway",
    desc: "Comfort-led products and service touchpoints for the journeys in between.",
    img: IMG.rail,
    tag: "On the move",
  },
  {
    n: "04",
    title: "Hospitality",
    desc: "Guest essentials and considered experiences for hotels, resorts and lounges.",
    img: IMG.hotel,
    tag: "On the ground",
  },
];

export const capabilities = [
  {
    icon: FiCompass,
    title: "Concept generation",
    text: "Turning an ambition into a clear, distinctive experience direction.",
  },
  {
    icon: FiFeather,
    title: "Design & development",
    text: "Creating considered products shaped around function, feel and brand.",
  },
  {
    icon: FiLayers,
    title: "Prototyping",
    text: "Bringing ideas into tangible form, ready to refine and validate.",
  },
  {
    icon: FiPackage,
    title: "Manufacturing",
    text: "Coordinating the journey from approved design to finished product.",
  },
  {
    icon: FiCheck,
    title: "Quality control",
    text: "Protecting consistency, detail and standards at every stage.",
  },
  {
    icon: FiTruck,
    title: "Logistics",
    text: "Helping ensure the right solutions reach the right destination.",
  },
];

export const productCards = [
  {
    title: "Dining & serviceware",
    label: "Objects for the onboard table",
    img: IMG.dining,
    num: "01",
  },
  {
    title: "Amenities & essentials",
    label: "The details passengers take with them",
    img: IMG.amenity,
    num: "02",
  },
  {
    title: "Comfort & relaxation",
    label: "A more considered way to unwind",
    img: IMG.comfort,
    num: "03",
  },
  {
    title: "Wellness experiences",
    label: "Small rituals. Meaningful moments.",
    img: IMG.wellness,
    num: "04",
  },
];