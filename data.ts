export interface Update {
  date: string,
  description: string,
  image: string,
}

export const updates: Update[] = [
  {
    date: "June 1, 2024",
    description: "ASHRA had a successful booth at the Twin Cities Metro Asian Fair! While raising a substantial amount to donate, the founders were able to have amazing conversations with many individuals looking for a way to better our society. Thank you to the Indian Association of Minnesota for allowing us to spread awareness and joy!",
    image: "StandardImage.png",
  }
]

export interface Activity {
  title: string;
  description: string;
  image: string;
}

export const activities: Activity[] = [
  {
    title: "Dance Events",
    description: "Use the passion for dance to build a community and collect donations. Join us in celebrating culture and raising funds to support our mission.",
    image: "dance-event.jpg",
  },
  {
    title: "Cultural Classes",
    description: "Educate on South Asian cultures and diversify perspectives. Our classes enrich the community with knowledge about South Asia's rich heritage.",
    image: "cultural-classes.jpg",
  },
  {
    title: "Volunteering Services",
    description: "Volunteer and spread awareness with 100% of proceeds going to various causes. Join our outreach programs to bring hope to those in need.",
    image: "volunteering-services.webp",
  },
  {
    title: "Community",
    description: "Build resilience and spread hope, let us thrive together hand in hand. Together, we can create a better future for all.",
    image: "community.jpg",
  },
];

export interface Founder {
  name: string;
  email: string;
  image: string;
}

export const founders: Founder[] = [
  {
    name: "Shriya Yalamanchili",
    email: "shriya.chili@gmail.com",
    image: "image2.jpeg",
  },
  {
    name: "Sadhna Patlola",
    email: "sadhna.patlola@gmail.com",
    image: "image1.jpeg",
  },
  {
    name: "Anshi Peddaredivari",
    email: "anshi.pedda@gmail.com",
    image: "image0.jpeg",
  },
];