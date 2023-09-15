interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
    horizontal: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface CrewMember {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export type dataType = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};
