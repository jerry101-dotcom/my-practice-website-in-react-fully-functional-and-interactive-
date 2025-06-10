import passionate from "./assets/illustration-passionate.svg";
import resourceful from "./assets/illustration-resourceful.svg";
import friendly from "./assets/illustration-friendly.svg";
import australia from "./assets/illustration-australia.svg"
import canada from "./assets/illustration-canada.svg"
import uk from "./assets/illustration-united-kingdom.svg"
import auMap from "./assets/australia.webp"
import canadaMap from "./assets/canada.webp"
import ukMap from "./assets/uk.webp"


export const attitudeDiv = [
  {
    image: passionate,
    alt: "passionate",
    habit: "PASSIONATE",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },

  {
    image: resourceful,
    alt: "resourceful",
    habit: "RESOURCEFUL",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    image: friendly,
    alt: "friendly",
    habit: "FRIENDLY",
    text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  }
];

export const locationArray = [
  {
    image:canada,
    alt:"canada-image",
    location:"CANADA"
  },
  {
    image:australia,
    alt:"australia-image",
    location:"AUSTRALIA"
  },
  {
    image:uk,
    alt:"united-kingdom-image",
    location:"UNITED KINGDOM"
  }
]

export const locationInfoArray = [
  {
    image:canadaMap,
    country:"Canada",
    countryShortName:"Canada",
    address : {
        lineOne:"Designo Canada Office",
        lineTwo:"3886 Wellington Street",
        lineThree:"Toronto, Ontario M9C 3J5",
    },
    contact: {
        lineOne:"Contact",
        lineTwo:"P : +1 253-863-8967",
        lineThree:"M : contact@designo.co",
    }

  },
  {
    image:auMap,
    country:"Australia",
    countryShortName:"AU",
    address : {
        lineOne:"Designo AU Office",
        lineTwo:"19 Balonne Street",
        lineThree:"New South Wales 2443",
    },
    contact: {
        lineOne:"Contact",
        lineTwo:"P : (02) 6720 9092",
        lineThree:"M : contact@designo.au",
    }

  },
  {
    image:ukMap,
    country:"United Kingdom",
    countryShortName:"UK",
    address : {
        lineOne:"Designo UK Office",
        lineTwo:"13 Colorado Way",
        lineThree:"Rhyd-y-fro SA8 9GA",
    },
    contact: {
        lineOne:"Contact",
        lineTwo:"P : 078 3115 1400",
        lineThree:"M : contact@designo.uk",
    }

  }
]

