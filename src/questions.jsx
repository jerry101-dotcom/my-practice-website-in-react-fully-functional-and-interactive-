import { v4 as uuidv4 } from "uuid";

const questionsData = [
  {
    id: uuidv4(),
    question: "Which planet is the closet to the sun?",
    answer: "Mercury",
    options: {
      one: "Mercury",
      two: "Venus",
      three: "Mars",
      four: "Earth",
    },
  },

  {
    id: uuidv4(),
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    options: {
      one: "Gustav Klimt",
      two: "Leonardo da Vinci",
      three: "Johannes Vermeer",
      four: "Hieronymus Bosch",
    },
  },

  {
    id: uuidv4(),
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    options: {
      one: "HCL",
      two: "H2O2",
      three: "H2SO4",
      four: "H2O",
    },
  },

  {
    id: uuidv4(),
    question: "How many continents are there?",
    answer: "seven",
    options: {
      one: "eight",
      two: "seven",
      three: "nine",
      four: "six",
    },
  },

  {
    id: uuidv4(),
    question: "Which is the most populated country in Africa?",
    answer: "Nigeria",
    options: {
      one: "Nigeria",
      two: "South-Africa",
      three: "Ghana",
      four: "Egypt",
    },
  },

  {
    id: uuidv4(),
    question:
      "Which planet in our solar system is known for being the largest?",
    answer: "Jupiter",
    options: {
      one: "Earth",
      two: "pluto",
      three: "Jupiter",
      four: "Uranus",
    },
  },
  {
    id: uuidv4(),
    question: "Who painted the famous artwork 'The Starry Night'?",
    answer: "Vincent van Gogh",
    options: {
      one: "Leonardo",
      two: "Vincent van Gogh",
      three: "Pablo Picasso",
      four: "Claude Monet",
    },
  },
  {
    id: uuidv4(),
    question: "Which country is the largest producer of coffee in the world?",
    answer: "Brazil",
    options: {
      one: "Brazil",
      two: "Colombia",
      three: "Ethiopia",
      four: "Vietnam",
    },
  },
  {
    id: uuidv4(),
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    options: {
      one: "Na",
      two: "Au",
      three: "Hg",
      four: "Pb",
    },
  },
  {
    id: uuidv4(),
    question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
    options: {
      one: "F. Scott Fitzgerald",
      two: "Harper Lee",
      three: "Jane Austen",
      four: "J.K. Rowling",
    },
  },
  {
    id: uuidv4(),
    question:
      "What is the world's largest living structure, according to the Guinness World Records?",
    answer: "The Great Barrier Reef",
    options: {
      one: "The Amazon Rainforest",
      two: "The Great Barrier Reef",
      three: "The Grand Canyon",
      four: "The Great Wall of China",
    },
  },
  {
    id: uuidv4(),
    question:
      "Which musician is known for his iconic guitar playing and hits like 'Purple Rain'?",
    answer: "Prince",
    options: {
      one: "David Bowie",
      two: "Elton John",
      three: "Prince",
      four: "Jimi Hendrix",
    },
  },
  {
    id: uuidv4(),
    question: "What is the capital city of Australia?",
    answer: "Canberra",
    options: {
      one: "Sydney",
      two: "Melbourne",
      three: "Canberra",
      four: "Perth",
    },
  },
  {
    id: uuidv4(),
    question:
      "Who is the author of the famous book 'The Hitchhiker's Guide to the Galaxy'?",
    answer: "Douglas Adams",
    options: {
      one: "Douglas Adams",
      two: "George R.R. Martin",
      three: "J.R.R. Tolkien",
      four: "Isaac Asimov",
    },
  },
  {
    id: uuidv4(),
    question: "What is the largest mammal on Earth?",
    answer: "Blue whale",
    options: {
      one: "Fin whale",
      two: "Humpback whale",
      three: "Sperm whale",
      four: "Blue whale",
    },
  },

  {
    id: uuidv4(),
    question: "What is the capital of France?",
    answer: "Paris",
    options: {
      one: "Berlin",
      two: "Paris",
      three: "London",
      four: "Rome",
    },
  },
  {
    id: uuidv4(),
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: {
      one: "William Shakespeare",
      two: "Jane Austen",
      three: "Charles Dickens",
      four: "J.K. Rowling",
    },
  },

  {
    id: uuidv4(),
    question: "Who was the first President of the United States?",
    answer: "George Washington",
    options: {
      one: "George Washington",
      two: "Thomas Jefferson",
      three: "Abraham Lincoln",
      four: "Franklin D. Roosevelt",
    },
  },
  // ... (History questions)

  // 31-40
  // Science
  // ... (Science questions)

  // 41-50
  // Literature
  // ... (Literature questions)

  // 51-60
  // Geography
  {
    id: uuidv4(),
    question: "What is the world's largest desert?",
    answer: "Sahara",
    options: {
      one: "Sahara",
      two: "Gobi",
      three: "Mojave",
      four: "Atacama",
    },
  },
  // ... (Geography questions)

  // 61-70
  // Music
  {
    id: uuidv4(),
    question: "Who was the lead singer of Queen?",
    answer: "Freddie Mercury",
    options: {
      one: "Elton John",
      two: "Freddie Mercury",
      three: "David Bowie",
      four: "Michael Jackson",
    },
  },
  // ... (Music questions)

  // 71-80
  // Sports
  {
    id: uuidv4(),
    question: "Which team won the first Super Bowl?",
    answer: "Green Bay Packers",
    options: {
      one: "Green Bay Packers",
      two: "Kansas City Chiefs",
      three: "New York Giants",
      four: "Los Angeles Rams",
    },
  },

  {
    id: uuidv4(),
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: {
      one: "Monaco",
      two: "Nauru",
      three: "Tuvalu",
      four: "Vatican City",
    },
  },
  {
    id: uuidv4(),
    question: "Who is the founder of Apple?",
    answer: "Steve Jobs",
    options: {
      one: "Bill Gates",
      two: "Mark Zuckerberg",
      three: "Steve Jobs",
      four: "Larry Page",
    },
  },
  // ... (98 more questions)
  {
    id: uuidv4(),
    question: "What is the chemical symbol for silver?",
    answer: "Ag",
    options: {
      one: "Fe",
      two: "Ag",
      three: "Hg",
      four: "Pb",
    },
  },
  {
    id: uuidv4(),
    question: "Who is the CEO of Tesla?",
    answer: "Elon Musk",
    options: {
      one: "Jeff Bezos",
      two: "Bill Gates",
      three: "Elon Musk",
      four: "Mark Zuckerberg",
    },
  },
  {
    id: uuidv4(),
    question: "What is the largest living species of lizard?",
    answer: "Komodo dragon",
    options: {
      one: "Saltwater crocodile",
      two: "Black mamba",
      three: "Komodo dragon",
      four: "Green anaconda",
    },
  },
  {
    id: uuidv4(),
    question: "Who painted the ceiling of the Sistine Chapel?",
    answer: "Michelangelo",
    options: {
      one: "Gaibriel",
      two: "Michelangelo",
      three: "Raphael",
      four: "Caravaggio",
    },
  },

  {
    id: uuidv4(),
    question: "What does VPN stand for?",
    answer: "Virtual Private Network",
    options: {
      one: "Virtual Private Network",
      two: "Virtual Public Network",
      three: "Very Private Network",
      four: "Vital Private Network",
    },
  },
  {
    id: uuidv4(),
    question: "Who co-founded Apple in 1976 alongside Steve Jobs?",
    answer: "Steve Wozniak",
    options: {
      one: "Bill Gates",
      two: "Mark Zuckerberg",
      three: "Steve Wozniak",
      four: "Larry Page",
    },
  },
  {
    id: uuidv4(),
    question:
      "What is the programming language developed by James Gosling at Sun Microsystems?",
    answer: "Java",
    options: {
      one: "Python",
      two: "Java",
      three: "C++",
      four: "JavaScript",
    },
  },
  {
    id: uuidv4(),
    question:
      "What device did Percy Spencer invent after noticing a melting chocolate bar?",
    answer: "Microwave",
    options: {
      one: "Radar",
      two: "Microwave",
      three: "Toaster",
      four: "Blender",
    },
  },
  {
    id: uuidv4(),
    question: "What type of device was the Alouette 1, launched by Canada?",
    answer: "Satellite",
    options: {
      one: "Space Shuttle",
      two: "Satellite",
      three: "Rocket",
      four: "Space Station",
    },
  },
  {
    id: uuidv4(),
    question: "What is the term for a group of computers networked together?",
    answer: "Botnet",
    options: {
      one: "Network",
      two: "Botnet",
      three: "Cluster",
      four: "Grid",
    },
  },
  {
    id: uuidv4(),
    question:
      "What is the AI-powered tool that converts text to question-answer pairs and quizzes?",
    answer: "QGenAI",
    options: {
      one: "Quizgecko",
      two: "QGenAI",
      three: "Appy Pie",
      four: "Dictera",
    },
  },
  {
    id: uuidv4(),
    question:
      "What is the name of the AI random question generator that supports multiple languages?",
    answer: "Appy Pie's AI Random Question Generator",
    options: {
      one: "QuizRandom",
      two: "Quizgecko",
      three: "Appy Pie's AI Random Question Generator",
      four: "Text Question Generator",
    },
  },
  {
    id: uuidv4(),
    question: "Which gas do plants absorb during photosynthesis?",
    answer: "Carbon dioxide",
    options: {
      one: "Iodine",
      two: "Phosphorus",
      three: "Carbon dioxide",
      four: "Hydrogen",
    },
  },
  {
    id: uuidv4(),
    question: "What is the primary ingredient in traditional sushi?",
    answer: "Rice",
    options: {
      one: "Bread",
      two: "Rice",
      three: "Pasta",
      four: "Corn",
    },
  },
  {
    id: uuidv4(),
    question: "What year did World War II end?",
    answer: "1945",
    options: {
      one: "1942",
      two: "1945",
      three: "1950",
      four: "1939",
    },
  },
  {
    id: uuidv4(),
    question:
      "What is the strongest muscle in the human body based on strength?",
    answer: "Masseter (jaw muscle)",
    options: {
      one: "Biceps",
      two: "Heart",
      three: "Masseter (jaw muscle)",
      four: "Quadriceps",
    },
  },
  {
    id: uuidv4(),
    question: "Which continent has the most countries?",
    answer: "Africa",
    options: {
      one: "Asia",
      two: "Africa",
      three: "Europe",
      four: "South America",
    },
  },
  {
    id: uuidv4(),
    question: "What is the key to maintaining strong relationships?",
    answer: "Communication",
    options: {
      one: "Avoiding arguments",
      two: "Communication",
      three: "Ignoring problems",
      four: "Keeping secrets",
    },
  },
  {
    id: uuidv4(),
    question: "Who discovered gravity?",
    answer: "Isaac Newton",
    options: {
      one: "Albert Einstein",
      two: "Galileo Galilei",
      three: "Isaac Newton",
      four: "Nikola Tesla",
    },
  },
  {
    id: uuidv4(),
    question: "What is the smallest bone in the human body?",
    answer: "Stapes",
    options: {
      one: "Femur",
      two: "Tibia",
      three: "Stapes",
      four: "Radius",
    },
  },
  {
    id: uuidv4(),
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan",
    options: {
      one: "China",
      two: "India",
      three: "Japan",
      four: "South Korea",
    },
  },
  {
    id: uuidv4(),
    question: "What is the freezing point of water in Fahrenheit?",
    answer: "32°F",
    options: {
      one: "0°F",
      two: "32°F",
      three: "100°F",
      four: "212°F",
    },
  },
  {
    id: uuidv4(),
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    answer: "Amelia Earhart",
    options: {
      one: "Marie Curie",
      two: "Amelia Earhart",
      three: "Valentina Tereshkova",
      four: "Sally Ride",
    },
  },
  {
    id: uuidv4(),
    question: "Which element is essential for breathing and survival?",
    answer: "Oxygen",
    options: {
      one: "Air",
      two: "Uranuim",
      three: "Oxygen",
      four: "Hydrogen",
    },
  },
  {
    id: uuidv4(),
    question: "Which ancient civilization built the pyramids?",
    answer: "Egyptians",
    options: {
      one: "Romans",
      two: "Greeks",
      three: "Egyptians",
      four: "Mayans",
    },
  },
  {
    id: uuidv4(),
    question: "What is the name of the galaxy that contains our solar system?",
    answer: "Milky Way",
    options: {
      one: "Andromeda",
      two: "Milky Way",
      three: "Sombrero Galaxy",
      four: "Triangulum Galaxy",
    },
  },
  {
    id: uuidv4(),
    question: "Which organ in the human body produces insulin?",
    answer: "Pancreas",
    options: {
      one: "Liver",
      two: "Pancreas",
      three: "Kidneys",
      four: "Heart",
    },
  },
  {
    id: uuidv4(),
    question: "Which country hosted the first modern Olympic Games in 1896?",
    answer: "Greece",
    options: {
      one: "USA",
      two: "France",
      three: "Greece",
      four: "United States",
    },
  },
  {
    id: uuidv4(),
    question: "What does DNA stand for?",
    answer: "Deoxyribonucleic Acid",
    options: {
      one: "Deoxyribonucleic Acid",
      two: "Dinucleic Anatomy",
      three: "Direct Nerve Arrangement",
      four: "Diatomic Nuclear Atoms",
    },
  },
  {
    id: uuidv4(),
    question: "What is the most abundant gas in Earth's atmosphere?",
    answer: "Nitrogen",
    options: {
      one: "Water",
      two: "Nitrogen",
      three: "Boron",
      four: "Hydrogen",
    },
  },
  {
    id: uuidv4(),
    question: "Which ocean is the largest by surface area?",
    answer: "Pacific Ocean",
    options: {
      one: "Atlantic Ocean",
      two: "Indian Ocean",
      three: "Pacific Ocean",
      four: "Arctic Ocean",
    },
  },
    {
    id: uuidv4(),
    question: "What is the longest river in the world?",
    answer: "Nile River",
    options: {
      one: "Amazon River",
      two: "Nile River",
      three: "Yangtze River",
      four: "Mississippi River",
    },
  },
  {
    id: uuidv4(),
    question: "Which planet has the most moons?",
    answer: "Saturn",
    options: {
      one: "Earth",
      two: "Uranus",
      three: "Saturn",
      four: "Mars",
    },
  },
  {
    id: uuidv4(),
    question: "Which country is famous for inventing the pizza?",
    answer: "Italy",
    options: {
      one: "France",
      two: "Italy",
      three: "North sentiniel",
      four: "United States",
    },
  },
  {
    id: uuidv4(),
    question: "Who discovered penicillin?",
    answer: "Alexander Fleming",
    options: {
      one: "Louis Pasteur",
      two: "Alexander Fleming",
      three: "Marie Curie",
      four: "Albert Einstein",
    },
  },
  {
    id: uuidv4(),
    question: "What is the name of the world's largest desert?",
    answer: "Antarctic Desert",
    options: {
      one: "Sahara Desert",
      two: "Gobi Desert",
      three: "Antarctic Desert",
      four: "Kalahari Desert",
    },
  },
  {
    id: uuidv4(),
    question: "What is the main function of red blood cells?",
    answer: "Transport oxygen",
    options: {
      one: "Fight infections",
      two: "Transport oxygen",
      three: "Produce enzymes",
      four: "Filter toxins",
    },
  },
  {
    id: uuidv4(),
    question: "What year did the first human land on the moon?",
    answer: "1969",
    options: {
      one: "1955",
      two: "1969",
      three: "1975",
      four: "1981",
    },
  }
];




export default questionsData;
