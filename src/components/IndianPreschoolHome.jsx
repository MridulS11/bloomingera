import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Phone, ArrowRight, ArrowUpRight, CheckCircle2, Heart, Star,
  BookOpen, Compass, Palette, Music, Leaf, Globe2, Users, Brain,
  MessageCircle, Smile, Rocket, ShieldCheck, Award, Calendar, Play,
  ChevronLeft, ChevronRight, MapPin, Mail, Clock, Eye, X, GraduationCap,
  Layers, Flame, Sun, Flower2
} from 'lucide-react';

// All 13 photos have been visually verified via read_file to depict ONLY preschool children / toys and ZERO adults
const CHILD_PHOTOS = {
  classroomDrawing: "https://images.unsplash.com/photo-1727473704274-3fbad0dbbd60?auto=format&fit=crop&w=1000&q=85",
  toddlerLaughingBook: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85",
  fingerPaintingGirl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
  toddlerBeadMaze: "https://images.unsplash.com/photo-1485460535564-844461f37f77?auto=format&fit=crop&w=900&q=85",
  toddlerAmazedBook: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=900&q=85",
  natureExplorerChild: "https://images.unsplash.com/photo-1471342051519-9621d25323fc?auto=format&fit=crop&w=900&q=85",
  woodenBlocksChild: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?auto=format&fit=crop&w=900&q=85",
  playgroupFloorToddler: "https://images.unsplash.com/photo-1477511614005-61bd8b91d218?auto=format&fit=crop&w=900&q=85",
  seniorKgFocusedChild: "https://images.unsplash.com/photo-1488254491307-10ca8fa174c8?auto=format&fit=crop&w=900&q=85",
  woodenCameraToddler: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
  outdoorBallPlayKids: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=85",
  woodenTrainSet: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85",
  coloredPencilsCraft: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=900&q=85",
};

// Flowy Wave SVG Divider Component
function FlowyWaveDivider({ flip = false, fill = "#FFFFFF", accentColor = "#60C8D4" }) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="relative block w-full h-12 sm:h-20 lg:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,115 480,-20 720,45 C960,110 1200,5 1440,55 L1440,120 L0,120 Z"
          fill={accentColor}
          fillOpacity="0.18"
        />
        <path
          d="M0,65 C320,125 640,5 960,70 C1180,115 1320,40 1440,75 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

// SECTION 01: HERO SLIDES DATA
const HERO_SLIDES = [
  {
    id: 1,
    tag: "Slide 01 • The Brand Experience",
    smallHeading: "THE FUTURE BLOOMS HERE",
    headline: "Little Minds. Limitless Possibilities.",
    description: "Discover a world where curiosity leads, learning comes alive, and every child grows with confidence, creativity and care.",
    primaryBtn: "Explore Blooming Era",
    primaryHref: "#welcome",
    secondaryBtn: "Book a School Tour",
    mainImage: CHILD_PHOTOS.classroomDrawing,
    secondaryImage: CHILD_PHOTOS.fingerPaintingGirl,
    tertiaryImage: CHILD_PHOTOS.toddlerLaughingBook,
    badgeTitle: "Proudly Indian, Powerfully Global",
    badgeSub: "Futuristic by Design • Childhood First",
    accent: "#DCE747"
  },
  {
    id: 2,
    tag: "Slide 02 • No-Book Learning",
    smallHeading: "BEYOND BOOKS. INTO THE WORLD.",
    headline: "Less Memorising. More Meaningful Learning.",
    description: "Real experiences, discovery labs, purposeful play and strong academic foundations — because children learn best when learning makes sense.",
    primaryBtn: "Discover Our Learning Philosophy",
    primaryHref: "#philosophy",
    secondaryBtn: "Book a School Tour",
    mainImage: CHILD_PHOTOS.toddlerBeadMaze,
    secondaryImage: CHILD_PHOTOS.woodenBlocksChild,
    tertiaryImage: CHILD_PHOTOS.natureExplorerChild,
    badgeTitle: "Kindermagic PrimeX™ Curriculum",
    badgeSub: "NEP 2020 & NCF-FS 2022 Aligned",
    accent: "#60C8D4"
  },
  {
    id: 3,
    tag: "Slide 03 • Franchise Opportunity",
    smallHeading: "FRANCHISE OPPORTUNITY",
    headline: "Build a Preschool. Shape a Generation.",
    description: "Don’t Just Start a Preschool. Build a Legacy in Education. A distinctive, research-informed preschool model with future-ready learning, structured support and opportunities for sustainable business growth.",
    primaryBtn: "Explore Franchise Opportunities",
    primaryHref: "#franchise-opportunity",
    secondaryBtn: "Enquire for Partnership",
    mainImage: CHILD_PHOTOS.toddlerLaughingBook,
    secondaryImage: CHILD_PHOTOS.classroomDrawing,
    tertiaryImage: CHILD_PHOTOS.playgroupFloorToddler,
    badgeTitle: "Franchise Starting at ₹2.50 Lakh",
    badgeSub: "360° Setup, Training & Admissions Support",
    accent: "#DCE747"
  }
];

// SECTION 03: WHY PARENTS LOVE US (5 CARDS)
const WHY_PARENTS_CARDS = [
  {
    id: 1,
    title: "NO-BOOK. REAL LEARNING.",
    description: "Less dependence on textbooks. More hands-on discovery, stories, projects, play and meaningful foundational learning.",
    image: CHILD_PHOTOS.toddlerBeadMaze,
    icon: Sparkles,
    badge: "Experiential Discovery",
    color: "#DCE747"
  },
  {
    id: 2,
    title: "FUTURE SKILLS START EARLY.",
    description: "Creative thinking, problem-solving, communication, collaboration and exciting new-age concepts — introduced through play.",
    image: CHILD_PHOTOS.woodenBlocksChild,
    icon: Rocket,
    badge: "21st-Century Play",
    color: "#60C8D4"
  },
  {
    id: 3,
    title: "EVERY DIMENSION MATTERS.",
    description: "From emotional intelligence to physical wellbeing, we nurture the whole child, not merely academic performance.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    icon: Heart,
    badge: "360° Whole Child",
    color: "#DCE747"
  },
  {
    id: 4,
    title: "More Experiential Foundational Literacy & Numeracy",
    description: "Our research based curriculum helps make early learning more engaging, experiential, enjoyable and enlightening.",
    image: CHILD_PHOTOS.classroomDrawing,
    icon: BookOpen,
    badge: "Research-Informed FLN",
    color: "#60C8D4"
  },
  {
    id: 5,
    title: "INDIAN ROOTS. GLOBAL WINGS.",
    description: "Our approach celebrates Indian values while drawing on global perspectives and research-informed early-learning practices.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    icon: Globe2,
    badge: "Sanskar + Global Vision",
    color: "#DCE747"
  }
];

// SECTION 05: STATISTICS COUNTER
const STATS_ITEMS = [
  {
    number: "5",
    label: "Foundational Learning Years",
    sub: "(Ages 3–8) NCF-FS Continuum",
    color: "#DCE747",
    icon: GraduationCap
  },
  {
    number: "8",
    label: "Interconnected Learning Dimensions",
    sub: "Holistic Child Growth",
    color: "#60C8D4",
    icon: Compass
  },
  {
    number: "12",
    label: "Future-Ready Learning Themes",
    sub: "Real-World Experiential Units",
    color: "#DCE747",
    icon: Sparkles
  },
  {
    number: "360°",
    label: "Holistic Learning Approach",
    sub: "Mind, Heart, Body & Spirit",
    color: "#60C8D4",
    icon: Sun
  }
];

// SECTION 06: OUR ACTIVITIES (6 CARDS)
const ACTIVITIES = [
  {
    id: "wonder-lab",
    name: "Wonder Lab",
    tagline: "Little Scientists. Big Questions.",
    description: "Hands-on experiments, observation and playful investigations that bring science and everyday discoveries to life.",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    icon: Flame,
    accent: "#60C8D4"
  },
  {
    id: "storyverse",
    name: "Storyverse",
    tagline: "Where Every Story Opens a World.",
    description: "Storytelling, phonics games, puppetry and role-play nurture communication, imagination and early literacy.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    icon: BookOpen,
    accent: "#DCE747"
  },
  {
    id: "maker-studio",
    name: "Maker Studio",
    tagline: "Imagine It. Build It. Improve It.",
    description: "Construction, art, creative projects and design challenges inspire independent thinking and collaborative problem-solving.",
    image: CHILD_PHOTOS.woodenBlocksChild,
    icon: Palette,
    accent: "#60C8D4"
  },
  {
    id: "rhythm-motion",
    name: "Rhythm & Motion",
    tagline: "Move Freely. Express Joyfully.",
    description: "Music, dance, physical play and movement support coordination, expression, confidence and wellbeing.",
    image: CHILD_PHOTOS.outdoorBallPlayKids,
    icon: Music,
    accent: "#DCE747"
  },
  {
    id: "nature-explorers",
    name: "Nature Explorers",
    tagline: "Learning Has No Classroom Walls.",
    description: "Gardening, sensory walks and outdoor exploration encourage environmental awareness and curiosity.",
    image: CHILD_PHOTOS.natureExplorerChild,
    icon: Leaf,
    accent: "#60C8D4"
  },
  {
    id: "roots-wings",
    name: "Roots & Wings",
    tagline: "Indian at Heart. Global in Spirit.",
    description: "Stories, festivals, cultures and community experiences nurture belonging, empathy, respect and global awareness.",
    image: CHILD_PHOTOS.classroomDrawing,
    icon: Globe2,
    accent: "#DCE747"
  }
];

// SECTION 07: LEARNING PROGRAMMES (4 CARDS)
const PROGRAMMES_LIST = [
  {
    id: "playgroup",
    name: "Playgroup",
    age: "Age: 2+ years",
    tagline: "Tiny Steps. Beautiful Beginnings.",
    description: "Sensory discovery, warm relationships, movement and playful interactions make the first school experiences joyful and reassuring.",
    btnText: "Explore Playgroup",
    image: CHILD_PHOTOS.playgroupFloorToddler,
    color: "#60C8D4",
    badge: "2+ Years"
  },
  {
    id: "nursery",
    name: "Nursery",
    age: "Age: 3+ years",
    tagline: "Little Questions. Big Discoveries.",
    description: "Language, early concepts, imagination and independence blossom through stories, exploration and purposeful play.",
    btnText: "Explore Nursery",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    color: "#DCE747",
    badge: "3+ Years"
  },
  {
    id: "junior-kg",
    name: "Junior KG",
    age: "Age: 4+ years",
    tagline: "Curious Minds. Strong Foundations.",
    description: "Experiential literacy, numeracy, early scientific thinking and creative challenges bring learning to life.",
    btnText: "Explore Junior KG",
    image: CHILD_PHOTOS.woodenBlocksChild,
    color: "#60C8D4",
    badge: "4+ Years"
  },
  {
    id: "senior-kg",
    name: "Senior KG",
    age: "Age: 5+ years",
    tagline: "Confident Learners. Future-Ready Foundations.",
    description: "Foundational skills grow through inquiry, collaboration, projects, communication and meaningful school-readiness experiences.",
    btnText: "Explore Senior KG",
    image: CHILD_PHOTOS.seniorKgFocusedChild,
    color: "#DCE747",
    badge: "5+ Years"
  }
];

// SECTION 08: KINDERMAGIC PRIMEX 5-STEP FLOW
const PRIMEX_STEPS = [
  {
    step: "01",
    name: "EXPLORE",
    summary: "Discover ideas through hands-on experiences.",
    detail: "Children touch, manipulate and investigate real-world sensory materials, wooden blocks, magnifiers and story props to spark natural curiosity.",
    image: CHILD_PHOTOS.toddlerBeadMaze,
    color: "#DCE747"
  },
  {
    step: "02",
    name: "EXPERIENCE",
    summary: "Connect concepts with real life.",
    detail: "Instead of only reading about plants or numbers, children grow seedlings, run pretend markets and experiment in our Wonder Lab.",
    image: CHILD_PHOTOS.natureExplorerChild,
    color: "#60C8D4"
  },
  {
    step: "03",
    name: "EXPRESS",
    summary: "Share ideas through language, art and play.",
    detail: "Story circles, puppet theatre, finger-painting and role-play empower every child to voice their discoveries with joyful confidence.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    color: "#DCE747"
  },
  {
    step: "04",
    name: "APPLY",
    summary: "Practise understanding through projects and guided tasks.",
    detail: "Age-appropriate, purposeful worksheets and collaborative maker challenges reinforce concepts children have already experienced physically.",
    image: CHILD_PHOTOS.classroomDrawing,
    color: "#60C8D4"
  },
  {
    step: "05",
    name: "GROW",
    summary: "Celebrate progress through holistic observation.",
    detail: "Teachers observe, guide and document each child's unique milestones across all 8 developmental dimensions without exam pressure.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    color: "#DCE747"
  }
];

// SECTION 09: FUTURE-READY LEARNING (6 CAPABILITIES)
const FUTURE_SKILLS = [
  {
    title: "Critical Thinking",
    description: "Asking questions, observing, comparing and exploring solutions.",
    image: CHILD_PHOTOS.woodenBlocksChild,
    icon: Brain,
    accent: "#DCE747"
  },
  {
    title: "Creativity",
    description: "Imagining, designing, expressing and creating something original.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    icon: Palette,
    accent: "#60C8D4"
  },
  {
    title: "Communication",
    description: "Listening, speaking, storytelling and sharing ideas confidently.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    icon: MessageCircle,
    accent: "#DCE747"
  },
  {
    title: "Collaboration",
    description: "Making friends, working together and respecting different viewpoints.",
    image: CHILD_PHOTOS.classroomDrawing,
    icon: Users,
    accent: "#60C8D4"
  },
  {
    title: "Emotional Intelligence",
    description: "Recognising emotions, building empathy and learning self-regulation.",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    icon: Heart,
    accent: "#DCE747"
  },
  {
    title: "Future Awareness",
    description: "Exploring sustainability, technology, space and everyday innovation through play.",
    image: CHILD_PHOTOS.natureExplorerChild,
    icon: Rocket,
    accent: "#60C8D4"
  }
];

// SECTION 10: 8 HOLISTIC DEVELOPMENT DIMENSIONS
const HOLISTIC_DIMENSIONS = [
  { id: 1, title: "Physical & Motor Development", detail: "Movement, balance, pincer grip coordination & multisensory agility.", image: CHILD_PHOTOS.outdoorBallPlayKids },
  { id: 2, title: "Cognitive & Executive Function Development", detail: "Attention, working memory, flexible thinking, reasoning & persistence.", image: CHILD_PHOTOS.woodenBlocksChild },
  { id: 3, title: "Language & Communication", detail: "Storytelling, phonics readiness, active listening & expressive vocabulary.", image: CHILD_PHOTOS.toddlerLaughingBook },
  { id: 4, title: "Social & Emotional Intelligence", detail: "Self-awareness, empathy, warm friendships, cooperation & inner confidence.", image: CHILD_PHOTOS.classroomDrawing },
  { id: 5, title: "Creative & Cultural Expression", detail: "Art, music, drama, imagination, Indian heritage & global awareness.", image: CHILD_PHOTOS.fingerPaintingGirl },
  { id: 6, title: "Values & Personal Responsibility", detail: "Kindness, respect, environmental care, gratitude & ethical habits.", image: CHILD_PHOTOS.natureExplorerChild },
  { id: 7, title: "Practical Life & Independence", detail: "Self-care routines, organisation, decision-making & everyday confidence.", image: CHILD_PHOTOS.playgroupFloorToddler },
  { id: 8, title: "21st-Century Capabilities", detail: "Design thinking, early scientific inquiry, sequencing & problem-solving.", image: CHILD_PHOTOS.toddlerBeadMaze }
];

// SECTION 11: LEADERSHIP TEAM
const LEADERSHIP_TEAM = [
  {
    name: "Dr. Masuda Yasmin",
    role: "Founder & Chairperson",
    bio: "The vision behind Blooming Era's distinctive, child-centred and future-ready educational philosophy.",
    initials: "MY",
    badge: "Visionary Founder",
    accent: "#DCE747"
  },
  {
    name: "Dr. Shelly Bisht",
    role: "Director, Academics",
    bio: "Guiding curriculum quality, teaching practices, academic planning and educator development.",
    initials: "SB",
    badge: "Academic Excellence",
    accent: "#60C8D4"
  },
  {
    name: "Ayaan Hossain",
    role: "Director, Operations",
    bio: "Part of the leadership team supporting Blooming Era's institutional vision and future development.",
    initials: "AH",
    badge: "Operational Scale",
    accent: "#DCE747"
  },
  {
    name: "Mohd. Neyaz Alam",
    role: "Director, Administration & Strategic Partnership",
    bio: "Part of the leadership team contributing to the organisation's development and strategic direction.",
    initials: "NA",
    badge: "Strategic Growth",
    accent: "#60C8D4"
  }
];

// SECTION 13: PARENT TESTIMONIALS
const PARENT_STORIES = [
  {
    title: "A More Confident Child",
    subtitle: "Communication, Confidence & Independence",
    narrative: "From shy first mornings to eagerly sharing stories at home, parents celebrate how story circles, puppetry and warm encouragement nurture expressive, self-assured young communicators.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    tag: "Playgroup & Nursery Families",
    color: "#DCE747"
  },
  {
    title: "Learning With Excitement",
    subtitle: "Curiosity & Joyful School Routines",
    narrative: "Without the stress of heavy schoolbags or rote memorisation, children wake up excited for Wonder Lab experiments, sensory discovery and hands-on block building.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    tag: "No-Book Experiential Joy",
    color: "#60C8D4"
  },
  {
    title: "A Place of Care and Trust",
    subtitle: "Compassionate Educators & Safe Environment",
    narrative: "Parents value our warm educator-child bonds, transparent holistic progress observations and a nurturing campus that feels like a second home.",
    image: CHILD_PHOTOS.classroomDrawing,
    tag: "Junior & Senior KG Families",
    color: "#DCE747"
  }
];

// SECTION 14: OUR EVENTS
const EVENTS_LIST = [
  {
    title: "Discovery Days",
    date: "Interactive Science & Inquiry Showcase",
    description: "Hands-on investigations, projects and experiential learning showcases.",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    badge: "Wonder Lab Showcase"
  },
  {
    title: "Roots & Wings Celebrations",
    date: "Indian Festivals & Global Culture",
    description: "Culture, festivals, storytelling and community experiences.",
    image: CHILD_PHOTOS.classroomDrawing,
    badge: "Cultural Harmony"
  },
  {
    title: "Little Earthkeepers",
    date: "Green Campus & Nature Drive",
    description: "Nature activities and early environmental responsibility.",
    image: CHILD_PHOTOS.natureExplorerChild,
    badge: "Eco Explorers"
  },
  {
    title: "Blooming Together",
    date: "Family & Community Carnival",
    description: "Parent engagement, family events and collaborative learning.",
    image: CHILD_PHOTOS.outdoorBallPlayKids,
    badge: "Parent-Child Joy"
  }
];

// SECTION 15: THE BLOOMING JOURNAL (BLOG)
const BLOG_POSTS = [
  {
    title: "No-Book Doesn't Mean No Learning.",
    excerpt: "Discover how experiential learning can build strong foundations beyond repetitive worksheets.",
    category: "Learning Philosophy",
    readTime: "4 Min Read",
    image: CHILD_PHOTOS.toddlerBeadMaze
  },
  {
    title: "Why Future Skills Begin Before School.",
    excerpt: "Explore how creativity, curiosity and problem-solving start with simple childhood experiences.",
    category: "21st-Century Skills",
    readTime: "5 Min Read",
    image: CHILD_PHOTOS.woodenBlocksChild
  },
  {
    title: "Is Your Child Really School-Ready?",
    excerpt: "Understand why emotional confidence, independence and communication matter alongside academics.",
    category: "Holistic Growth",
    readTime: "4 Min Read",
    image: CHILD_PHOTOS.seniorKgFocusedChild
  }
];

// SECTION 16: GALLERY PHOTOS
const GALLERY_ITEMS = [
  { id: 1, title: "Joyful Classroom Drawing", category: "Classroom", image: CHILD_PHOTOS.classroomDrawing, span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Colourful Finger Painting", category: "Maker Studio", image: CHILD_PHOTOS.fingerPaintingGirl, span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Storyverse Laughter Outdoors", category: "Storyverse", image: CHILD_PHOTOS.toddlerLaughingBook, span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Tactile Bead Maze Discovery", category: "Wonder Lab", image: CHILD_PHOTOS.toddlerBeadMaze, span: "md:col-span-1 md:row-span-1" },
  { id: 5, title: "Architectural Wooden Towers", category: "Maker Studio", image: CHILD_PHOTOS.woodenBlocksChild, span: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Playgroup Sensory Sorting", category: "Classroom", image: CHILD_PHOTOS.playgroupFloorToddler, span: "md:col-span-1 md:row-span-1" },
  { id: 7, title: "Sunshine Nature Walk", category: "Nature", image: CHILD_PHOTOS.natureExplorerChild, span: "md:col-span-1 md:row-span-1" },
  { id: 8, title: "Focused Senior KG Readiness", category: "Classroom", image: CHILD_PHOTOS.seniorKgFocusedChild, span: "md:col-span-2 md:row-span-1" },
];

// SECTION 17: VIDEO BYTES
const VIDEO_BYTES = [
  {
    id: 1,
    title: "Love Is the Language of Childhood",
    duration: "01:45",
    tag: "Warm Relationships",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    caption: "Every morning begins with warm smiles, reassuring hugs and a classroom where every child feels cherished."
  },
  {
    id: 2,
    title: "A Day in Our Learning World",
    duration: "02:15",
    tag: "Kindermagic PrimeX",
    image: CHILD_PHOTOS.classroomDrawing,
    caption: "Follow our little explorers from circle time storytelling to hands-on maker challenges and outdoor play."
  },
  {
    id: 3,
    title: "Little Scientists, Big Discoveries",
    duration: "01:30",
    tag: "Wonder Lab",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    caption: "See how everyday questions turn into joyful experiments in our hands-on Wonder Lab."
  },
  {
    id: 4,
    title: "Beyond Books, Into Possibilities",
    duration: "02:05",
    tag: "No-Book Philosophy",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    caption: "Why children remember and understand more deeply when they learn by doing, touching and creating."
  }
];

export default function IndianPreschoolHome({ onOpenTourModal, onSwitchToSimulatorView }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePrimexStep, setActivePrimexStep] = useState(0);
  const [activeDimension, setActiveDimension] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Auto-advance Hero Slider every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];
  const filteredGallery = galleryFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#F3FAFC] text-[#091E3A] relative overflow-x-hidden selection:bg-[#DCE747] selection:text-[#091E3A]">

      {/* ===================================================================== */}
      {/* TOP ANNOUNCEMENT BAR & GLASSMORPHIC FLOATING INDIAN PRESCHOOL NAVBAR  */}
      {/* ===================================================================== */}
      <div className="bg-[#091E3A] text-white text-xs py-2.5 px-4 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#DCE747] text-[#091E3A] font-extrabold text-[11px] shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-[#091E3A] animate-spin" style={{ animationDuration: '10s' }} />
              THE FUTURE BLOOMS HERE
            </span>
            <span className="text-white/90 font-semibold">
              Proudly Indian, Powerfully Global Preschool
            </span>
            <span className="hidden lg:inline text-[#60C8D4] font-medium">
              • Futuristic by Design. Childhood First.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919647974093"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#DCE747] font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#60C8D4]" />
              <span>+91 96479 74093</span>
            </a>
            <span className="text-white/25 hidden sm:inline">|</span>
            {onSwitchToSimulatorView && (
              <button
                onClick={onSwitchToSimulatorView}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#60C8D4]/20 hover:bg-[#60C8D4]/35 text-[#DCE747] font-bold text-[11px] border border-[#60C8D4]/40 transition-all"
              >
                <span>Switch to Interactive Lab View (Preview 7)</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            )}
            <a
              href="standalone-previews.html"
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] border border-white/20 transition-all"
            >
              <span>All Design Previews (1–8)</span>
              <ArrowUpRight className="w-3 h-3 text-[#DCE747]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation */}
      <header className="sticky top-3 z-40 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto glass-panel-elevated rounded-full py-2.5 px-4 sm:px-7 border-2 border-white shadow-[0_20px_50px_rgba(9,30,58,0.1)] bg-white/85 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#DCE747] shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.jpeg"
                  alt="Blooming Era Preschools"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-xl text-[#091E3A] tracking-tight">
                    Blooming Era
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-[#DCE747] text-[#091E3A] rounded-full">
                    Preschools
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#091E3A]/65 -mt-0.5">
                  Proudly Indian • Powerfully Global
                </p>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-1">
              {[
                { label: "Why Parents Love Us", href: "#why-parents" },
                { label: "Welcome", href: "#welcome" },
                { label: "Activities", href: "#activities" },
                { label: "Programmes", href: "#programmes-india" },
                { label: "Kindermagic PrimeX", href: "#philosophy" },
                { label: "Holistic Growth", href: "#holistic" },
                { label: "Franchise", href: "#franchise-opportunity" },
                { label: "Gallery", href: "#gallery" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-[#091E3A]/80 hover:text-[#091E3A] hover:bg-[#60C8D4]/20 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href="#franchise-opportunity"
                className="hidden sm:inline-flex px-4 py-2 rounded-full text-xs font-extrabold text-[#091E3A] bg-[#60C8D4]/20 hover:bg-[#60C8D4]/35 border border-[#60C8D4]/50 transition-all"
              >
                Franchise @ ₹2.5L
              </a>
              <button
                onClick={onOpenTourModal}
                className="btn-lime px-4 sm:px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 border-2 border-white shadow-lg"
              >
                <span>Book a School Tour</span>
                <Sparkles className="w-3.5 h-3.5 text-[#091E3A]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* SECTION 01 — HOMEPAGE HERO SLIDER (FLOWY GLASSMORPHIC 3-SLIDE HERO)   */}
      {/* ===================================================================== */}
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 px-4 sm:px-6 overflow-hidden">
        {/* Flowy Ambient Orbs & Floating Preschool Decor */}
        <div
          className="ambient-orb w-[420px] h-[420px] -top-16 -left-24 opacity-45"
          style={{ background: 'radial-gradient(circle, #60C8D4 0%, transparent 70%)' }}
        />
        <div
          className="ambient-orb w-[460px] h-[460px] top-12 -right-24 opacity-45"
          style={{ background: 'radial-gradient(circle, #DCE747 0%, transparent 70%)', animationDelay: '-5s' }}
        />

        {/* Floating Animated Preschool Badges (Cloud / Star / Flower) */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute top-24 left-[7%] z-10 w-14 h-14 rounded-3xl glass-panel-elevated items-center justify-center text-2xl border-2 border-white shadow-lg"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden lg:flex absolute bottom-32 left-[45%] z-10 w-12 h-12 rounded-2xl glass-panel-elevated items-center justify-center text-xl border-2 border-white shadow-lg"
        >
          🎨
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Slide Selector Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all flex items-center gap-2 ${
                    activeSlide === idx
                      ? 'bg-[#091E3A] text-white shadow-lg scale-105'
                      : 'glass-pill text-[#091E3A]/75 hover:text-[#091E3A] hover:bg-white'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                  <span>{s.tag}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="w-9 h-9 rounded-full glass-panel-elevated flex items-center justify-center text-[#091E3A] hover:bg-[#DCE747] transition-colors"
                aria-label="Previous Hero Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="w-9 h-9 rounded-full glass-panel-elevated flex items-center justify-center text-[#091E3A] hover:bg-[#DCE747] transition-colors"
                aria-label="Next Hero Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              {/* Left Narrative Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-elevated border-2 border-white shadow-md">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: currentSlide.accent }}
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-[#091E3A]">
                    {currentSlide.smallHeading}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#091E3A] tracking-tight leading-[1.08]">
                  {currentSlide.headline.split('. ').map((part, i, arr) => (
                    <span key={i} className="block">
                      {i === 1 ? (
                        <span className="relative inline-block mt-1">
                          <span className="relative z-10">{part}{i < arr.length - 1 ? '.' : ''}</span>
                          <span
                            className="absolute bottom-1.5 left-0 right-0 h-4 -z-0 rounded-full opacity-75"
                            style={{ backgroundColor: currentSlide.accent }}
                          />
                        </span>
                      ) : (
                        <span>{part}{i < arr.length - 1 ? '.' : ''}</span>
                      )}
                    </span>
                  ))}
                </h1>

                <p className="text-base sm:text-lg text-[#091E3A]/80 font-medium leading-relaxed max-w-xl">
                  {currentSlide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={currentSlide.primaryHref}
                    className="btn-lime px-7 py-4 rounded-full text-sm font-extrabold flex items-center gap-2.5 border-2 border-white shadow-xl"
                  >
                    <span>{currentSlide.primaryBtn}</span>
                    <ArrowRight className="w-4 h-4 text-[#091E3A]" />
                  </a>

                  <button
                    onClick={onOpenTourModal}
                    className="btn-turquoise px-7 py-4 rounded-full text-sm font-extrabold flex items-center gap-2 border-2 border-white shadow-lg"
                  >
                    <Calendar className="w-4 h-4 text-[#091E3A]" />
                    <span>{currentSlide.secondaryBtn}</span>
                  </button>
                </div>

                {/* Indian Preschool Trust Highlights */}
                <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg">
                  <div className="glass-panel p-3.5 rounded-2xl border border-white/90 text-center">
                    <p className="text-xs font-black text-[#091E3A]">No-Book Model</p>
                    <p className="text-[11px] text-[#091E3A]/70 font-medium mt-0.5">Experiential FLN</p>
                  </div>
                  <div className="glass-panel p-3.5 rounded-2xl border border-white/90 text-center">
                    <p className="text-xs font-black text-[#091E3A]">2+ to 5+ Years</p>
                    <p className="text-[11px] text-[#091E3A]/70 font-medium mt-0.5">Playgroup to Sr. KG</p>
                  </div>
                  <div className="glass-panel p-3.5 rounded-2xl border border-white/90 text-center">
                    <p className="text-xs font-black text-[#091E3A]">360° Growth</p>
                    <p className="text-[11px] text-[#091E3A]/70 font-medium mt-0.5">8 Dimensions</p>
                  </div>
                </div>
              </div>

              {/* Right Organic Multi-Photo Preschool Collage */}
              <div className="lg:col-span-6 relative">
                {/* Animated Dashed Orbit Ring */}
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative rounded-[44px] p-3 sm:p-4 glass-panel-elevated border-4 border-white shadow-2xl">
                    <div className="relative rounded-[34px] overflow-hidden h-[380px] sm:h-[450px]">
                      <img
                        src={currentSlide.mainImage}
                        alt={currentSlide.headline}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/65 via-transparent to-transparent" />

                      {/* Bottom Floating Glass Caption inside Hero Image */}
                      <div className="absolute bottom-4 left-4 right-4 glass-panel-elevated p-4 rounded-3xl border border-white/95 bg-white/90 backdrop-blur-xl flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-11 h-11 rounded-2xl flex items-center justify-center text-[#091E3A] font-black shadow-sm"
                            style={{ backgroundColor: currentSlide.accent }}
                          >
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-extrabold text-[#091E3A]">{currentSlide.badgeTitle}</p>
                            <p className="text-xs font-semibold text-[#091E3A]/70">{currentSlide.badgeSub}</p>
                          </div>
                        </div>
                        <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#091E3A] text-[#DCE747]">
                          Admissions Open
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Floating Circular Child Bubble (Top-Left) */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden sm:block absolute -top-7 -left-7 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-white shadow-2xl border-4 border-[#DCE747] z-20"
                  >
                    <img
                      src={currentSlide.secondaryImage}
                      alt="Preschool child creative activity"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>

                  {/* Tertiary Floating Circular Child Bubble (Bottom-Right) */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="hidden sm:block absolute -bottom-7 -right-5 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-white shadow-2xl border-4 border-[#60C8D4] z-20"
                  >
                    <img
                      src={currentSlide.tertiaryImage}
                      alt="Preschool joyful child"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 02 — ADMISSION ANNOUNCEMENT STRIP                             */}
      {/* ===================================================================== */}
      <section className="relative z-20 px-4 sm:px-6 -mt-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] p-6 sm:p-8 lg:px-12 bg-gradient-to-r from-[#091E3A] via-[#0F2C52] to-[#091E3A] text-white shadow-2xl border-2 border-[#60C8D4]/50 relative overflow-hidden"
          >
            {/* Decorative Glows */}
            <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#DCE747]/20 blur-2xl pointer-events-none" />
            <div className="absolute left-1/3 -bottom-16 w-64 h-64 rounded-full bg-[#60C8D4]/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#DCE747] text-[#091E3A] flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">
                  🌱
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#60C8D4]/25 text-[#DCE747] text-[11px] font-extrabold uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#DCE747] animate-ping" />
                    <span>2026–2027 Academic Session</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Their Beautiful Beginning Starts Here.
                  </h2>
                  <p className="text-sm sm:text-base text-[#60C8D4] font-semibold mt-0.5">
                    Admissions Open for Playgroup, Nursery, Junior KG &amp; Senior KG.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
                <button
                  onClick={onOpenTourModal}
                  className="btn-lime px-7 py-3.5 rounded-full text-sm font-black flex items-center gap-2 border-2 border-white shadow-xl"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#091E3A]" />
                </button>
                <a
                  href="tel:+919647974093"
                  className="px-5 py-3.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DCE747]" />
                  <span>+91 96479 74093</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 03 — WHY PARENTS LOVE US                                      */}
      {/* ===================================================================== */}
      <section id="why-parents" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-xs font-extrabold uppercase tracking-widest text-[#091E3A] border border-[#60C8D4]/40 mb-3">
              <Heart className="w-3.5 h-3.5 text-[#60C8D4] fill-[#60C8D4]" />
              Why Parents Love Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
              Not Just Different.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Thoughtfully Different.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3.5 bg-[#DCE747] -z-0 rounded-full" />
              </span>
            </h2>
          </div>

          {/* 5 Flowy Glassmorphic Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {WHY_PARENTS_CARDS.map((card, index) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className={`glass-panel-elevated rounded-[32px] overflow-hidden border-2 border-white shadow-xl flex flex-col justify-between group ${
                    index === 3 ? 'lg:col-span-1' : index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/60 via-transparent to-transparent" />
                      <span
                        className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[11px] font-extrabold text-[#091E3A] shadow-md"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.badge}
                      </span>
                      <div
                        className="absolute bottom-3 right-4 w-11 h-11 rounded-2xl flex items-center justify-center text-[#091E3A] shadow-lg border-2 border-white"
                        style={{ backgroundColor: card.color }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#091E3A] mb-2.5 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#DCE747" />

      {/* ===================================================================== */}
      {/* SECTION 04 — WELCOME TO BLOOMING ERA (CIRCULAR PHOTO + FOUNDER)       */}
      {/* ===================================================================== */}
      <section id="welcome" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Circular Children's Photograph with Animated Orbital Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Rotating Dashed Outer Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-5 rounded-full border-4 border-dashed border-[#60C8D4]/50 pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 rounded-full border-2 border-dashed border-[#DCE747] pointer-events-none hidden sm:block"
                />

                {/* Main Circular Children's Photograph */}
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#F3FAFC] shadow-[0_25px_60px_rgba(9,30,58,0.16)] relative z-10">
                  <img
                    src={CHILD_PHOTOS.classroomDrawing}
                    alt="Welcome to Blooming Era Preschools children learning"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Satellite Circular Child Photo 1 */}
                <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#DCE747] shadow-xl z-20 bg-white">
                  <img
                    src={CHILD_PHOTOS.toddlerLaughingBook}
                    alt="Happy child reading"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Satellite Circular Child Photo 2 */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#60C8D4] shadow-xl z-20 bg-white">
                  <img
                    src={CHILD_PHOTOS.fingerPaintingGirl}
                    alt="Creative child painting"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Pill Badge */}
                <div className="absolute bottom-3 -right-6 z-30 glass-panel-elevated px-4 py-2 rounded-full border-2 border-white shadow-lg bg-white/95">
                  <span className="text-xs font-black text-[#091E3A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#60C8D4]" />
                    Childhood First
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Introductory Heading, Two Paragraphs & Founder Signature */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#DCE747]/40 text-[#091E3A] font-extrabold text-xs uppercase tracking-widest mb-2">
                  Welcome to
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                  Blooming Era Preschools
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#091E3A]/80 font-medium leading-relaxed">
                At Blooming Era, we believe childhood is not a race to finish books, but a beautiful journey of discovery. Our classrooms blend purposeful play, experiential learning, creativity and strong academic foundations — creating a nurturing world where every question matters and every little achievement is celebrated.
              </p>

              <p className="text-base sm:text-lg text-[#091E3A]/80 font-medium leading-relaxed">
                From discovering sounds through stories to exploring numbers through real-life experiences, children learn by doing, thinking and creating. With future-ready concepts, Indian values, global perspectives and compassionate educators, we nurture curious minds, confident personalities and happy childhoods.
              </p>

              {/* Founder Signature Card */}
              <div className="glass-panel rounded-3xl p-6 border-2 border-[#60C8D4]/30 bg-gradient-to-r from-[#F3FAFC] via-white to-[#DCE747]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#091E3A] text-[#DCE747] flex items-center justify-center font-extrabold text-lg shadow-md flex-shrink-0">
                    MY
                  </div>
                  <div>
                    <p className="font-serif italic text-xl text-[#091E3A] font-bold">
                      Dr. Masuda Yasmin
                    </p>
                    <p className="text-xs font-extrabold text-[#091E3A]/75 uppercase tracking-wider">
                      Founder &amp; Chairperson | Blooming Era Preschools
                    </p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black shadow-xs">
                    Proudly Indian, Powerfully Global Preschool.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FlowyWaveDivider flip={true} fill="#FFFFFF" accentColor="#60C8D4" />

      {/* ===================================================================== */}
      {/* SECTION 05 — NUMBERS / STATISTICS COUNTER                             */}
      {/* ===================================================================== */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full glass-pill text-xs font-extrabold uppercase tracking-widest text-[#091E3A] mb-2">
              Curriculum Framework Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E3A] tracking-tight">
              Big Thinking for Little Learners.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_ITEMS.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel-elevated rounded-[32px] p-7 text-center border-2 border-white shadow-xl relative overflow-hidden"
                >
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#091E3A] shadow-md"
                    style={{ backgroundColor: stat.color }}
                  >
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[#091E3A] tracking-tight mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-base font-extrabold text-[#091E3A] leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-xs font-semibold text-[#091E3A]/65 mt-1">
                    {stat.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 06 — OUR ACTIVITIES (6 PHOTO DISCOVERY CARDS)                 */}
      {/* ===================================================================== */}
      <section id="activities" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#091E3A]" />
              DISCOVER. CREATE. EXPERIENCE.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Little Hands. Extraordinary Discoveries.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Every experience is an opportunity to wonder, experiment, express and grow. At Blooming Era, purposeful activities transform everyday moments into meaningful learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="glass-panel-elevated rounded-[34px] overflow-hidden border-2 border-white shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={act.image}
                        alt={act.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/70 via-transparent to-transparent" />
                      <div
                        className="absolute top-4 right-4 w-11 h-11 rounded-2xl flex items-center justify-center text-[#091E3A] shadow-lg border-2 border-white"
                        style={{ backgroundColor: act.accent }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span
                          className="inline-block px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#091E3A] mb-1"
                          style={{ backgroundColor: act.accent }}
                        >
                          {act.name}
                        </span>
                        <h3 className="text-lg font-extrabold text-white drop-shadow-xs">
                          {act.tagline}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-[#091E3A]/80 font-medium leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onOpenTourModal}
              className="btn-lime px-8 py-4 rounded-full text-sm font-extrabold inline-flex items-center gap-2 border-2 border-white shadow-xl"
            >
              <span>Discover Our Activities</span>
              <ArrowRight className="w-4 h-4 text-[#091E3A]" />
            </button>
          </div>
        </div>
      </section>

      <FlowyWaveDivider fill="#091E3A" accentColor="#60C8D4" />

      {/* ===================================================================== */}
      {/* SECTION 07 — LEARNING PROGRAMMES (ARCH-SHAPED INDIAN PRESCHOOL CARDS) */}
      {/* ===================================================================== */}
      <section id="programmes-india" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#091E3A] text-white relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 top-10 left-10 opacity-20" style={{ background: '#60C8D4' }} />
        <div className="ambient-orb w-96 h-96 bottom-10 right-10 opacity-20" style={{ background: '#DCE747' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              EVERY AGE. A NEW ADVENTURE.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Little Explorers. Growing Possibilities.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              Each stage of childhood brings new discoveries. Our thoughtfully designed programmes nurture age-appropriate skills while keeping curiosity, relationships and joyful learning at the heart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PROGRAMMES_LIST.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-[36px] bg-white/10 backdrop-blur-xl border-2 border-white/20 overflow-hidden flex flex-col justify-between p-4 shadow-2xl group hover:border-[#DCE747] transition-all"
              >
                <div>
                  {/* Arch-Topped Child Image */}
                  <div className="relative h-56 rounded-t-[100px] rounded-b-3xl overflow-hidden border-4 border-white/90 shadow-lg mb-5">
                    <img
                      src={prog.image}
                      alt={prog.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span
                      className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full text-xs font-black text-[#091E3A] shadow-md"
                      style={{ backgroundColor: prog.color }}
                    >
                      {prog.age}
                    </span>
                  </div>

                  <div className="px-2">
                    <h3 className="text-2xl font-extrabold text-white mb-1">
                      {prog.name}
                    </h3>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DCE747] mb-3">
                      {prog.tagline}
                    </p>
                    <p className="text-sm text-white/80 font-medium leading-relaxed mb-6">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <button
                    onClick={onOpenTourModal}
                    className="w-full py-3 rounded-full text-xs font-black text-[#091E3A] flex items-center justify-center gap-1.5 transition-transform group-hover:scale-102 shadow-md"
                    style={{ backgroundColor: prog.color }}
                  >
                    <span>{prog.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onOpenTourModal}
              className="btn-lime px-8 py-4 rounded-full text-sm font-black inline-flex items-center gap-2 border-2 border-white shadow-xl"
            >
              <span>View All Programmes</span>
              <ArrowRight className="w-4 h-4 text-[#091E3A]" />
            </button>
          </div>
        </div>
      </section>

      <FlowyWaveDivider flip={true} fill="#091E3A" accentColor="#DCE747" />

      {/* ===================================================================== */}
      {/* SECTION 08 — OUR SIGNATURE LEARNING PHILOSOPHY (KINDERMAGIC PRIMEX)   */}
      {/* ===================================================================== */}
      <section id="philosophy" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              THE KINDERMAGIC PRIMEX EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              No Heavy Books. More Powerful Learning.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium leading-relaxed">
              Our Kindermagic PrimeX learning approach combines experiential Foundational Literacy and Numeracy, purposeful play, structured activities, discovery labs, real-world projects and age-appropriate worksheets. Children learn through meaningful experiences while teachers observe, guide and document their progress.
            </p>
          </div>

          {/* 5-Step Interactive Flow Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-10">
            {PRIMEX_STEPS.map((st, i) => (
              <button
                key={st.name}
                onClick={() => setActivePrimexStep(i)}
                className={`p-4 sm:p-5 rounded-3xl text-left transition-all border-2 ${
                  activePrimexStep === i
                    ? 'bg-[#091E3A] text-white border-[#091E3A] shadow-xl scale-105'
                    : 'glass-panel-elevated text-[#091E3A] border-white hover:border-[#60C8D4]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-black px-2.5 py-0.5 rounded-full text-[#091E3A]"
                    style={{ backgroundColor: st.color }}
                  >
                    Step {st.step}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${activePrimexStep === i ? 'text-[#DCE747]' : 'text-[#091E3A]/40'}`} />
                </div>
                <p className="text-base sm:text-lg font-extrabold tracking-tight">{st.name}</p>
                <p className={`text-xs mt-1 line-clamp-2 ${activePrimexStep === i ? 'text-white/80' : 'text-[#091E3A]/70'}`}>
                  {st.summary}
                </p>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={PRIMEX_STEPS[activePrimexStep].name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="glass-panel-elevated rounded-[36px] p-6 sm:p-10 border-2 border-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <span
                  className="inline-block px-4 py-1 rounded-full text-xs font-black text-[#091E3A]"
                  style={{ backgroundColor: PRIMEX_STEPS[activePrimexStep].color }}
                >
                  STAGE {PRIMEX_STEPS[activePrimexStep].step} • {PRIMEX_STEPS[activePrimexStep].name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091E3A]">
                  {PRIMEX_STEPS[activePrimexStep].summary}
                </h3>
                <p className="text-base text-[#091E3A]/80 font-medium leading-relaxed">
                  {PRIMEX_STEPS[activePrimexStep].detail}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenTourModal}
                    className="btn-lime px-7 py-3.5 rounded-full text-xs font-black inline-flex items-center gap-2 border-2 border-white shadow-md"
                  >
                    <span>Explore Our Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden h-64 sm:h-80 border-4 border-white shadow-xl">
                  <img
                    src={PRIMEX_STEPS[activePrimexStep].image}
                    alt={PRIMEX_STEPS[activePrimexStep].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 09 — FUTURE-READY LEARNING (21ST-CENTURY FOUNDATIONS)         */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/70 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              21ST-CENTURY FOUNDATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              The Future Begins With Curiosity.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Tomorrow&apos;s world will need creative thinkers, compassionate leaders and confident problem-solvers. We begin nurturing these capabilities through developmentally appropriate experiences, without rushing childhood.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {FUTURE_SKILLS.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel-elevated rounded-[30px] p-5 border-2 border-white shadow-lg flex items-start gap-4"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white shadow-md relative">
                    <img src={skill.image} alt={skill.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute bottom-1 right-1 w-6 h-6 rounded-lg flex items-center justify-center text-[#091E3A]"
                      style={{ backgroundColor: skill.accent }}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#091E3A] mb-1">{skill.title}</h3>
                    <p className="text-xs sm:text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onOpenTourModal}
              className="btn-turquoise px-8 py-4 rounded-full text-sm font-extrabold inline-flex items-center gap-2 border-2 border-white shadow-lg"
            >
              <span>Discover Future-Ready Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10 — HOLISTIC CHILD DEVELOPMENT (8 INTERCONNECTED DIMENSIONS) */}
      {/* ===================================================================== */}
      <section id="holistic" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              BEYOND ACADEMICS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              We Don&apos;t Just Track Marks. We Celebrate Growth.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Every child develops in beautifully interconnected ways. Our Holistic Progress Approach recognises academic learning alongside confidence, communication, creativity, emotional wellbeing, physical development and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 8 Dimension Pills */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {HOLISTIC_DIMENSIONS.map((dim, idx) => (
                <button
                  key={dim.id}
                  onClick={() => setActiveDimension(idx)}
                  className={`p-4 rounded-2xl text-left transition-all border-2 flex items-center gap-3.5 ${
                    activeDimension === idx
                      ? 'bg-[#091E3A] text-white border-[#091E3A] shadow-xl scale-102'
                      : 'glass-panel-elevated text-[#091E3A] border-white hover:border-[#60C8D4]'
                  }`}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-[#091E3A] flex-shrink-0"
                    style={{ backgroundColor: idx % 2 === 0 ? '#DCE747' : '#60C8D4' }}
                  >
                    0{dim.id}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold leading-snug">
                    {dim.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Dimension Photo Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel-elevated rounded-[36px] p-6 border-2 border-white shadow-2xl">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-5 border-2 border-white">
                  <img
                    src={HOLISTIC_DIMENSIONS[activeDimension].image}
                    alt={HOLISTIC_DIMENSIONS[activeDimension].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black">
                    Dimension 0{HOLISTIC_DIMENSIONS[activeDimension].id} of 08
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-[#091E3A] mb-2">
                  {HOLISTIC_DIMENSIONS[activeDimension].title}
                </h3>
                <p className="text-sm text-[#091E3A]/75 font-medium mb-4">
                  {HOLISTIC_DIMENSIONS[activeDimension].detail}
                </p>
                <div className="pt-3 border-t border-[#091E3A]/10 flex items-center justify-between">
                  <span className="text-xs font-black text-[#091E3A]">
                    Every Milestone Matters. Every Child Matters.
                  </span>
                  <button
                    onClick={onOpenTourModal}
                    className="text-xs font-extrabold text-[#091E3A] underline hover:text-[#60C8D4]"
                  >
                    Understand Holistic Progress →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 11 — MEET OUR LEADERSHIP                                      */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/80 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              THE VISIONARIES BEHIND THE BLOOM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Great Childhoods Begin With a Greater Vision.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Blooming Era is guided by a shared commitment to meaningful early education, academic innovation, thoughtful leadership and responsible growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-panel-elevated rounded-[32px] p-6 border-2 border-white shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black text-[#091E3A] shadow-md border-2 border-white"
                      style={{ backgroundColor: leader.accent }}
                    >
                      {leader.initials}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#091E3A]/5 text-[#091E3A]">
                      {leader.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#091E3A]">{leader.name}</h3>
                  <p className="text-xs font-bold text-[#60C8D4] uppercase tracking-wider mt-0.5 mb-3">
                    {leader.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 12 — FRANCHISE OPPORTUNITY                                    */}
      {/* ===================================================================== */}
      <section id="franchise-opportunity" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[40px] bg-gradient-to-br from-[#091E3A] via-[#0D2B52] to-[#091E3A] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border-4 border-white relative overflow-hidden">
            <div className="ambient-orb w-96 h-96 -top-20 -right-20 opacity-30" style={{ background: '#DCE747' }} />
            <div className="ambient-orb w-96 h-96 -bottom-20 -left-20 opacity-25" style={{ background: '#60C8D4' }} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest">
                  BUILD A BUSINESS THAT BUILDS THE FUTURE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  A Preschool With Purpose.{" "}
                  <span className="text-[#DCE747]">A Business With Possibilities.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 font-medium leading-relaxed">
                  Why open just another preschool when you can introduce a distinctive learning experience to your city? Blooming Era brings together an innovative No-Book curriculum, strong academic foundations, structured franchise support and a cost-conscious school development model — helping entrepreneurs build meaningful educational enterprises.
                </p>

                {/* 6 Franchise Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Distinctive Educational Concept",
                    "Research-Informed Curriculum",
                    "360° Franchise Support",
                    "Cost-Conscious Setup Options",
                    "Teacher Training & Academic Guidance",
                    "Marketing & Admissions Assistance"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15">
                      <CheckCircle2 className="w-4 h-4 text-[#DCE747] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenTourModal}
                    className="btn-lime px-8 py-4 rounded-full text-sm font-black inline-flex items-center gap-2 border-2 border-white shadow-xl"
                  >
                    <span>Own a Blooming Era Preschool</span>
                    <ArrowRight className="w-4 h-4 text-[#091E3A]" />
                  </button>
                </div>
              </div>

              {/* Right Investment Highlight Glass Card */}
              <div className="lg:col-span-5">
                <div className="rounded-[32px] bg-white/12 backdrop-blur-2xl border-2 border-white/30 p-7 sm:p-8 space-y-6 shadow-2xl">
                  <div className="rounded-2xl overflow-hidden h-44 border-2 border-white/80">
                    <img
                      src={CHILD_PHOTOS.classroomDrawing}
                      alt="Blooming Era Preschool Franchise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 rounded-2xl bg-[#DCE747] text-[#091E3A]">
                    <p className="text-xs font-extrabold uppercase tracking-wider opacity-80">
                      Investment Highlight
                    </p>
                    <p className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
                      Franchise Fee Starting at ₹2.50 Lakh
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                    <p className="text-xs font-bold text-[#60C8D4] uppercase tracking-wider">
                      Indicative Setup Investment
                    </p>
                    <p className="text-lg font-extrabold text-white mt-0.5">
                      ₹5–25 Lakh
                    </p>
                    <p className="text-xs text-white/75 mt-1">
                      Depending on space, infrastructure and location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 13 — PARENT TESTIMONIALS                                      */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              REAL VOICES. MEANINGFUL EXPERIENCES.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              The Most Beautiful Stories Come From Parents.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              From the first confident goodbye to the joy of a new discovery, every child&apos;s journey is special. Discover what Blooming Era families have to say about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PARENT_STORIES.map((story, idx) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel-elevated rounded-[32px] overflow-hidden border-2 border-white shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                    <span
                      className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#091E3A]"
                      style={{ backgroundColor: story.color }}
                    >
                      {story.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-[#091E3A] mb-1">{story.title}</h3>
                    <p className="text-xs font-bold text-[#60C8D4] uppercase tracking-wider mb-3">
                      {story.subtitle}
                    </p>
                    <p className="text-sm text-[#091E3A]/80 font-medium leading-relaxed">
                      {story.narrative}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={onOpenTourModal}
              className="btn-turquoise px-7 py-3.5 rounded-full text-xs font-black inline-flex items-center gap-2 border-2 border-white shadow-md"
            >
              <span>Hear From Our Parents</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 14 — OUR EVENTS                                               */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/75 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              MOMENTS THAT MAKE CHILDHOOD MEMORABLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Beyond the Classroom. Into Life.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Our celebrations, learning showcases and community experiences bring families, educators and children together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS_LIST.map((ev, idx) => (
              <motion.div
                key={ev.title}
                whileHover={{ y: -6 }}
                className="glass-panel-elevated rounded-[30px] overflow-hidden border-2 border-white shadow-lg"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#DCE747] text-[#091E3A] text-[10px] font-black">
                    {ev.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold text-[#60C8D4] uppercase tracking-wider mb-1">
                    {ev.date}
                  </p>
                  <h3 className="text-lg font-extrabold text-[#091E3A] mb-2">{ev.title}</h3>
                  <p className="text-xs text-[#091E3A]/75 font-medium leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 15 — LATEST BLOG (THE BLOOMING JOURNAL)                       */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              THE BLOOMING JOURNAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Little Insights. Lifelong Impact.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Explore thoughtful perspectives on childhood, parenting, early education and the skills that help young learners flourish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.title}
                whileHover={{ y: -6 }}
                className="glass-panel-elevated rounded-[32px] overflow-hidden border-2 border-white shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#091E3A] text-[10px] font-black">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#091E3A]/50 mb-1">{post.readTime}</p>
                    <h3 className="text-xl font-extrabold text-[#091E3A] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button
                    onClick={onOpenTourModal}
                    className="text-xs font-black text-[#091E3A] inline-flex items-center gap-1.5 hover:text-[#60C8D4]"
                  >
                    <span>Explore More Insights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 16 — PHOTO GALLERY (A PEEK INTO OUR WORLD)                    */}
      {/* ===================================================================== */}
      <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/80 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
                A PEEK INTO OUR WORLD
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                See the Wonder. Feel the Joy.
              </h2>
              <p className="text-base text-[#091E3A]/75 font-medium mt-2">
                Real smiles. Real friendships. Real discoveries. Explore beautiful moments from life at Blooming Era.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["All", "Classroom", "Maker Studio", "Storyverse", "Wonder Lab", "Nature"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                    galleryFilter === cat
                      ? 'bg-[#091E3A] text-[#DCE747] shadow-md'
                      : 'glass-pill text-[#091E3A] hover:bg-[#DCE747]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[210px]">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImage(item)}
                className={`relative rounded-[28px] overflow-hidden border-4 border-white shadow-xl cursor-pointer group ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/75 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#DCE747] text-[#091E3A]">
                      {item.category}
                    </span>
                    <p className="text-sm font-extrabold mt-1">{item.title}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 17 — VIDEO BYTES (CHILDHOOD IN MOTION)                        */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              CHILDHOOD IN MOTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Some Moments Are Better Felt Than Told.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              From joyful classroom discoveries to caring teacher-child relationships, experience the little moments that make Blooming Era special.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEO_BYTES.map((vid) => (
              <motion.div
                key={vid.id}
                whileHover={{ y: -8 }}
                onClick={() => setActiveVideoModal(vid)}
                className="glass-panel-elevated rounded-[32px] overflow-hidden border-2 border-white shadow-xl cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vid.image}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#091E3A]/35 group-hover:bg-[#091E3A]/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#DCE747] text-[#091E3A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white">
                      <Play className="w-6 h-6 fill-[#091E3A] ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#091E3A] text-[10px] font-black">
                    {vid.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#091E3A]/80 text-white text-[10px] font-bold">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#091E3A] mb-1.5">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#091E3A]/70 font-medium leading-relaxed">
                    {vid.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 18 — FINAL ADMISSIONS CTA                                     */}
      {/* ===================================================================== */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[44px] p-8 sm:p-14 bg-gradient-to-r from-[#DCE747] via-[#E8F26B] to-[#60C8D4] text-[#091E3A] shadow-2xl border-4 border-white relative overflow-hidden text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#091E3A] text-[#DCE747] text-xs font-black uppercase tracking-widest mb-4">
              THEIR FIRST SCHOOL. A BIG DECISION.
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#091E3A] tracking-tight mb-4">
              Let Their Childhood Bloom Beautifully.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/85 font-semibold max-w-2xl mx-auto mb-8">
              Discover a preschool that celebrates curiosity, nurtures individuality and builds strong foundations for the years ahead.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenTourModal}
                className="px-8 py-4 rounded-full bg-[#091E3A] text-white hover:bg-[#13325C] text-sm font-black inline-flex items-center gap-2 shadow-xl transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-[#DCE747]" />
                <span>Book a School Visit</span>
              </button>
              <button
                onClick={onOpenTourModal}
                className="px-8 py-4 rounded-full bg-white text-[#091E3A] hover:bg-white/90 text-sm font-black inline-flex items-center gap-2 shadow-xl transition-all hover:scale-105"
              >
                <span>Enquire for Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 19 — WEBSITE FOOTER                                           */}
      {/* ===================================================================== */}
      <footer className="bg-[#091E3A] text-white pt-16 pb-12 px-4 sm:px-6 border-t-4 border-[#DCE747]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white p-1">
                  <img src="/logo.jpeg" alt="Blooming Era Preschools" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Blooming Era Preschools</h3>
                  <p className="text-xs font-bold text-[#DCE747]">Proudly Indian, Powerfully Global Preschool.</p>
                </div>
              </div>
              <p className="text-sm text-white/75 leading-relaxed max-w-md">
                Where joyful childhood experiences meet meaningful learning, strong foundations and possibilities for the future.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#DCE747] text-xs font-black tracking-wider">
                <span>🌸 The Future Blooms Here.</span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#60C8D4] mb-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-sm text-white/80 font-medium">
                {["Home", "About Us", "Our Programmes", "Curriculum", "Admissions", "Gallery", "Franchise", "Blog", "Careers", "Contact"].map((link) => (
                  <a key={link} href="#welcome" className="hover:text-[#DCE747] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#60C8D4] mb-4">
                Connect With Us
              </h4>
              <a href="tel:+919647974093" className="flex items-center gap-2.5 text-sm text-white hover:text-[#DCE747] font-bold">
                <Phone className="w-4 h-4 text-[#DCE747]" />
                <span>+91 96479 74093</span>
              </a>
              <a href="mailto:info@bloomingera.com" className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#DCE747]">
                <Mail className="w-4 h-4 text-[#60C8D4]" />
                <span>info@bloomingera.com</span>
              </a>
              <p className="text-xs text-white/65 pt-2">
                Dr. Masuda Yasmin — Founder &amp; Chairperson
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© 2026 Blooming Era Preschools. All rights reserved. • Proudly Indian, Powerfully Global.</p>
            <p className="text-[#DCE747] font-bold">The Future Blooms Here.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Gallery */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-[#091E3A]/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-[32px] overflow-hidden bg-white border-4 border-white shadow-2xl"
            >
              <div className="relative h-[420px]">
                <img src={lightboxImage.image} alt={lightboxImage.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#091E3A] text-white flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-[#DCE747] text-[#091E3A]">
                    {lightboxImage.category}
                  </span>
                  <h4 className="text-xl font-extrabold text-[#091E3A] mt-2">{lightboxImage.title}</h4>
                </div>
                <button
                  onClick={() => {
                    setLightboxImage(null);
                    onOpenTourModal();
                  }}
                  className="btn-lime px-5 py-2.5 rounded-full text-xs font-black"
                >
                  Book a School Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Story Byte Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-50 bg-[#091E3A]/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full rounded-[32px] overflow-hidden bg-white border-4 border-white shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={activeVideoModal.image} alt={activeVideoModal.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A] via-[#091E3A]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#DCE747] text-[#091E3A] text-xs font-black mb-2">
                    {activeVideoModal.tag} • {activeVideoModal.duration}
                  </span>
                  <h3 className="text-2xl font-extrabold">{activeVideoModal.title}</h3>
                  <p className="text-sm text-white/85 mt-1">{activeVideoModal.caption}</p>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#091E3A] text-white flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex items-center justify-between bg-[#F3FAFC]">
                <span className="text-xs font-bold text-[#091E3A]/75">
                  Experience Blooming Era in person with your child
                </span>
                <button
                  onClick={() => {
                    setActiveVideoModal(null);
                    onOpenTourModal();
                  }}
                  className="btn-lime px-6 py-2.5 rounded-full text-xs font-black"
                >
                  Book a School Visit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
