export const BRAND = {
  name: "Blooming Era Preschools",
  tagline: "India's Flagship No-Book Experiential Preschool",
  motto: "Where Curiosity Blossoms Into Boundless Intelligence",
  phone: "+91 70044 14884",
  email: "info@bloomingera.com",
  admissionsEmail: "admissions@bloomingera.com",
  franchiseEmail: "franchise@bloomingera.com",
  address: "Corporate HQ: New Delhi | Operational Hub: Ranchi, Jharkhand",
  hours: "Monday – Friday: 8:30 AM – 6:30 PM | Saturday: 9:00 AM – 2:00 PM",
  colors: {
    lime: "#DCE747",
    turquoise: "#60C8D4",
    navy: "#091E3A",
  }
};

export const KINDERMAGIC_WORLDS = [
  {
    id: "language",
    name: "Language Lab",
    subtitle: "Phonemic Immersion & Expressive Storytelling",
    color: "#60C8D4",
    accentBg: "from-cyan-50 to-blue-50",
    badge: "Linguistic Fluency",
    icon: "BookOpenCheck",
    description: "Children acquire languages naturally through sensory sand-tracing, rhythm puppetry, interactive storytelling circles, and multilingual conversation prompts.",
    materials: ["Sensory Sand Trays", "Puppet Theatres", "Phonics Sound Mats", "Illustrated Story Cards"],
    outcomes: ["Rich expressive vocabulary", "Phonological awareness", "Confidence in self-expression", "Multi-dialect appreciation"],
    cycleFocus: "Express — Articulating discoveries through narrative language."
  },
  {
    id: "numbers",
    name: "Number Universe",
    subtitle: "Tactile Numeracy & Geometric Space",
    color: "#DCE747",
    accentBg: "from-lime-50 to-amber-50",
    badge: "Mathematical Mind",
    icon: "Compass",
    description: "Math is never memorized from rote workbooks. Children touch quantities, balance weights, assemble geometric solids, and solve spatial balance puzzles.",
    materials: ["Montessori Bead Chains", "Cuisenaire Rods", "Balance Scales", "Geometric Sorting Trays"],
    outcomes: ["Subitizing intuition (1-100)", "Spatial balance awareness", "Pattern prediction", "Practical measurement"],
    cycleFocus: "Explore — Testing quantities and relationships with tangible objects."
  },
  {
    id: "society",
    name: "Self & Society",
    subtitle: "Emotional Literacy & Civic Habits",
    color: "#E91E63",
    accentBg: "from-pink-50 to-rose-50",
    badge: "Social Intelligence",
    icon: "HeartHandshake",
    description: "Cultivating heart-centered intelligence through conflict-resolution peace tables, cooperative role-play, emotion reflection mirrors, and community care routines.",
    materials: ["Peace Table Artifacts", "Emotion Mirror Cards", "Community Helper Costumes", "Turn-Taking Timers"],
    outcomes: ["Self-regulation & empathy", "Conflict de-escalation skills", "Active listening habits", "Joy of collaborative play"],
    cycleFocus: "Experience — Living community values in daily classroom life."
  },
  {
    id: "movement",
    name: "Movement & Making",
    subtitle: "Sensory Sculpting & Gross-Motor Precision",
    color: "#FA6400",
    accentBg: "from-orange-50 to-amber-50",
    badge: "Kinesthetic Mastery",
    icon: "Sparkles",
    description: "Developing fine motor pincers through clay kneading, woodwork pegs, and sensory weaves, alongside gross motor agility obstacle courses and rhythmic gymnastics.",
    materials: ["Organic Sculpting Clay", "Wooden Agility Beams", "Silk Weaving Looms", "Pincer Tongs & Pipettes"],
    outcomes: ["Pincer-grip handwriting readiness", "Bilateral coordination", "Spatial-body awareness", "Dexterity & patience"],
    cycleFocus: "Extend — Channeling physical energy into inventive physical craft."
  },
  {
    id: "nature",
    name: "Nature & Discovery",
    subtitle: "Botany Labs & Eco-System Stewardship",
    color: "#76BC21",
    accentBg: "from-emerald-50 to-teal-50",
    badge: "Scientific Inquiry",
    icon: "Leaf",
    description: "Real earth, live seeds, magnifying prisms, and outdoor weather tracking stations transform every child into a passionate, observant young scientist.",
    materials: ["Living Planter Beds", "Child-Safe Magnifiers", "Water Filtration Columns", "Insect Observation Domes"],
    outcomes: ["Living system comprehension", "Respect for biodiversity", "Hypothesis testing intuition", "Sensory botany recall"],
    cycleFocus: "Observe — Chronicling nature's changes through personal sketchlogs."
  },
  {
    id: "tomorrow",
    name: "Tomorrow Thinking",
    subtitle: "Algorithmic Logic & Tactile Coding",
    color: "#8E24AA",
    accentBg: "from-purple-50 to-indigo-50",
    badge: "Algorithmic Mindset",
    icon: "Cpu",
    description: "Screen-free algorithmic thinking using directional command blocks, mechanical maze logic, gear train physics, and collaborative debugging games.",
    materials: ["Directional Coding Tiles", "Wooden Gear Systems", "Circuit Maze Puzzles", "Pattern Sequence Ribbons"],
    outcomes: ["Algorithmic sequencing", "Cause-and-effect reasoning", "Iterative debugging patience", "Systemic problem-solving"],
    cycleFocus: "Extend — Solving complex sequential challenges step by step."
  }
];

export const PROGRAMMES = [
  {
    id: "playgroup",
    name: "Playgroup",
    age: "2.0 – 3.0 Years",
    minAge: 2.0,
    maxAge: 3.0,
    ratio: "1:6 Educator Ratio",
    hours: "9:00 AM – 11:30 AM (2.5 hrs)",
    badge: "Gentle Transition",
    description: "A nurturing sensory haven fostering separation ease, language blooming, toilet confidence, and joyful social exploration.",
    highlights: [
      "Sensory tactile bins (water, sand, lentils)",
      "Daily circle-time finger plays & rhymes",
      "Gentle separation anxiety coaching",
      "Toddler motor obstacle courses"
    ],
    ncfAlignment: "NCF-FS Step 1: Bodily-kinesthetic & sensory grounding"
  },
  {
    id: "nursery",
    name: "Nursery",
    age: "3.0 – 4.0 Years",
    minAge: 3.0,
    maxAge: 4.0,
    ratio: "1:8 Educator Ratio",
    hours: "9:00 AM – 12:30 PM (3.5 hrs)",
    badge: "Curiosity Explosion",
    description: "Children channel explosive language questions, learn phonemic rhythms, build geometric structures, and practice active sharing.",
    highlights: [
      "Kindermagic phonics immersion",
      "Practical life exercises (pouring, buttoning)",
      "Collaborative block architecture",
      "Living botany germination garden"
    ],
    ncfAlignment: "NCF-FS Step 2: Emergent literacy & intuitive numeracy"
  },
  {
    id: "junior-kg",
    name: "Junior KG",
    age: "4.0 – 5.0 Years",
    minAge: 4.0,
    maxAge: 5.0,
    ratio: "1:10 Educator Ratio",
    hours: "8:45 AM – 1:00 PM (4.25 hrs)",
    badge: "Conceptual Mastery",
    description: "Structured self-directed inquiry where children grasp number bonds, multi-word expression, scientific observation, and screen-free coding.",
    highlights: [
      "Physical number bonds to 50",
      "Screen-free algorithmic coding tiles",
      "Conflict resolution at the Peace Table",
      "Early expressive journal sketches"
    ],
    ncfAlignment: "NCF-FS Step 3: Formalized inquiry & mathematical thinking"
  },
  {
    id: "senior-kg",
    name: "Senior KG",
    age: "5.0 – 6.0 Years",
    minAge: 5.0,
    maxAge: 6.0,
    ratio: "1:12 Educator Ratio",
    hours: "8:30 AM – 1:30 PM (5.0 hrs)",
    badge: "Grade 1 Readiness",
    description: "Peak kindergarten readiness ensuring seamless entry to premier ICSE, CBSE, and IB schools with zero cramming or test anxiety.",
    highlights: [
      "Advanced phonics blending & reading",
      "Problem-solving math laboratories",
      "Independent science capstone investigations",
      "Grade 1 executive function & posture mastery"
    ],
    ncfAlignment: "NCF-FS Step 4: Full transition readiness for primary school"
  },
  {
    id: "daycare",
    name: "Daycare & Extended Care",
    age: "2.0 – 10.0 Years",
    minAge: 2.0,
    maxAge: 10.0,
    ratio: "1:6 Caregiver Ratio",
    hours: "8:30 AM – 6:30 PM (Full Day / Flexible)",
    badge: "Home Away From Home",
    description: "Warm, CCTV-monitored holistic after-school care featuring nutritious organic meals, supervised homework time, and creative hobby clubs.",
    highlights: [
      "Pediatrician-guided nutritious warm meals",
      "Spacious resting cots & sanitized linen",
      "Enrichment clubs: Taekwondo, Clay, Music",
      "Real-time mobile updates & live camera check-in"
    ],
    ncfAlignment: "Integrated holistic wellness & emotional safety"
  }
];

export const NO_BOOK_COMPARISON = [
  {
    category: "Learning Vehicle",
    traditional: "Workbooks, pre-printed photocopied sheets, and repetitive fill-in blanks.",
    bloomingEra: "Manipulatives, sensory sand-trays, 3D building blocks, and living laboratory experiments.",
    advantage: "Cognitive retention jumps by 3.8x when concepts are experienced physically rather than flat on paper."
  },
  {
    category: "Child's Backpack",
    traditional: "Heavy 3-5 kg bag loaded with textbooks, notebooks, and stationary pouches.",
    bloomingEra: "Zero heavy books. A lightweight snack-and-change bag with complete spine freedom.",
    advantage: "Protects pediatric posture, cervical spine development, and removes morning school anxiety."
  },
  {
    category: "Assessment Method",
    traditional: "High-stress red-pen tests, letter grades (A/B/C), and comparative rank lists.",
    bloomingEra: "Continuous Non-Diagnostic Developmental Tracker aligned with NCF-FS 2022 & PARAKH HPC.",
    advantage: "Documents milestone growth without labeling or shaming children, celebrating each individual pace."
  },
  {
    category: "Classroom Role",
    traditional: "Teacher lectures from the blackboard; children sit silently in rigid parallel desks.",
    bloomingEra: "Educator is an observant co-explorer guiding self-directed stations across 6 Learning Worlds.",
    advantage: "Nurtures intrinsic curiosity, peer leadership, and spontaneous inquiry."
  },
  {
    category: "Screen & Tech Exposure",
    traditional: "Smart TV screens showing YouTube cartoons passively to keep children stationary.",
    bloomingEra: "Zero passive screen time. Algorithmic thinking taught via tactile wooden directional coding blocks.",
    advantage: "Guards delicate eyesight and attention spans while building foundational computer science logic."
  }
];

export const EXPERIENTIAL_CYCLE = [
  { step: "01", name: "Experience", desc: "First-hand physical sensory touch, sound, or natural phenomenon.", color: "#60C8D4" },
  { step: "02", name: "Explore", desc: "Manipulating materials, testing hypotheses, asking spontaneous questions.", color: "#DCE747" },
  { step: "03", name: "Express", desc: "Verbalizing, painting, sculpting, or dramatic reenactment of findings.", color: "#FA6400" },
  { step: "04", name: "Extend", desc: "Connecting new concept to broader world problems and daily routines.", color: "#8E24AA" },
  { step: "05", name: "Observe", desc: "Educators document milestones without testing or grading anxiety.", color: "#76BC21" }
];

export const LEADERSHIP = [
  {
    name: "Dr. Masuda Yasmin",
    role: "Founder & Chief Academic Officer",
    qualifications: "Ph.D. in Early Childhood Education, NCF-FS Advisory Specialist",
    bio: "Visionary educator with over two decades transforming early childhood pedagogy across India. Pioneer of the No-Book Experiential Framework that replaces rote drills with curiosity-driven learning worlds.",
    quote: "Children are not empty vessels to be filled with textbook print; they are blazing fires of natural curiosity waiting to explore."
  },
  {
    name: "Dr. Shelly Bisht",
    role: "Director of Curriculum & Pedagogy",
    qualifications: "M.Ed, Child Psychology Researcher, Former NCERT Contributor",
    bio: "Architect behind the Kindermagic PrimeX 6-World framework, bridging international developmental neuroscience with India's National Curriculum Framework (NCF-FS 2022).",
    quote: "True learning occurs through the hands. When hands touch reality, the brain builds permanent synaptic connections."
  },
  {
    name: "Ayaan Hossain",
    role: "Director of Strategy & Brand Growth",
    qualifications: "B.Tech, MBA (Operations), EdTech Entrepreneur",
    bio: "Steers franchise architecture, smart campus layouts, and 360-degree partner support systems across expanding city networks.",
    quote: "Our franchise partners aren't just business owners; they are academic stewards transforming the early years in their community."
  },
  {
    name: "Mohd. Neyaz Alam",
    role: "Director of Operations & Compliance",
    qualifications: "Operational Excellence & School Infrastructure Lead",
    bio: "Oversees child-safe infrastructure standards, educator certification bootcamps, and emergency health-hygiene protocols nationwide.",
    quote: "Child safety, non-toxic environments, and world-class educator mentorship are our non-negotiables."
  }
];

export const TRACKER_SAMPLES = {
  cognitive: {
    domain: "Cognitive & Algorithmic",
    color: "#60C8D4",
    status: "Mastered",
    milestone: "Solves 4-step sequence maze using directional wooden tiles without adult cues.",
    observation: "Aarav independently identified the dead-end in the gear maze and re-routed the marble path in 42 seconds with great concentration.",
    date: "Observed Oct 24, 2026",
    educator: "Lead Educator Priya S."
  },
  linguistic: {
    domain: "Linguistic & Story Expression",
    color: "#DCE747",
    status: "Emerging Joyfully",
    milestone: "Narrates 3-part event sequence during morning circle using rich descriptive adjectives.",
    observation: "Used descriptive words 'glistening' and 'pebbled' when sharing her sensory mud-kitchen experience with peers.",
    date: "Observed Oct 25, 2026",
    educator: "Lead Educator Anita M."
  },
  socioEmotional: {
    domain: "Socio-Emotional & Empathy",
    color: "#E91E63",
    status: "Consistently Observed",
    milestone: "Utilizes the Peace Table to resolve turn-taking disputes independently.",
    observation: "When Kabir reached for the balance beam, Ananya offered a 2-minute sand timer so both could take fair turns smoothly.",
    date: "Observed Oct 26, 2026",
    educator: "Lead Educator Sunita R."
  },
  motor: {
    domain: "Fine & Gross Motor",
    color: "#FA6400",
    status: "Advanced Coordination",
    milestone: "Tri-finger pincer grip firmly established with wooden tweezers and clay pipettes.",
    observation: "Effortlessly transferred 20 water beads using delicate pipettes without popping or spilling, demonstrating high hand stability.",
    date: "Observed Oct 27, 2026",
    educator: "Lead Educator Priya S."
  }
};
