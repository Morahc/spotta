import { ReviewType } from "./types";

export const reviews: ReviewType[] = [
  {
    author: "James T.",
    published: "5 months ago",
    text: "There is no stable electricity. The roads are fairly good and there is a sense of community.The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    rating: 4.0,
    like: 1224,
    dislike: 4,
    comments: 24,
  },
  {
    author: "James T.",
    published: "5 months ago",
    text: "There is no stable electricity. The roads are fairly good and there is a sense of community.The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    rating: 4.0,
    like: 1224,
    dislike: 4,
    comments: 24,
  },
  {
    author: "Taiwo O.",
    published: "5 months ago",
    text: "There is no stable electricity. The roads are fairly good and there is a sense of community.The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    rating: 4.0,
    like: 1000,
    dislike: 24,
    comments: 24,
  },
  {
    author: "James T.",
    published: "5 months ago",
    text: "There is no stable electricity. The roads are fairly good and there is a sense of community.The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    rating: 4.0,
    like: 900,
    dislike: 40,
    comments: 24,
  },
  {
    author: "James T.",
    published: "5 months ago",
    text: "There is no stable electricity. The roads are fairly good and there is a sense of community.The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    rating: 4.0,
    like: 214,
    dislike: 42,
    comments: 40,
  },
];

export const tags = [
  "Schools",
  "Hospital",
  "Resort Park",
  "Shopping Mails",
  "Airport",
  "Train Station",
  "Nightlife",
  "Public Wifi",
  "Parking Lot",
  "Security",
  "Public",
  "Bus Station",
  "Quiet",
];

export const images = [
  { src: "/images/Frame 1.png", alt: "Frame 1" },
  { src: "/images/Frame 2.png", alt: "Frame 2" },
  { src: "/images/Frame 3.png", alt: "Frame 3" },
  { src: "/images/Frame 4.png", alt: "Frame 4" },
];

export const preferences = [
  {
    name: "parkingLot",
    label: "Parking Lot",
  },
  {
    name: "freeWifi",
    label: "Free Wi-fi",
  },
  {
    name: "nightlife",
    label: "Nightlife",
  },
  {
    name: "petStore",
    label: "Pet Store",
  },
  {
    name: "hospital",
    label: "Hospital",
  },
  {
    name: "childcare",
    label: "Childcare",
  },
  {
    name: "adultHome",
    label: "Adult Home",
  },
  {
    name: "gym",
    label: "Gym",
  },
  {
    name: "schools",
    label: "Schools",
  },
  {
    name: "security",
    label: "Security",
  },
] as const;

