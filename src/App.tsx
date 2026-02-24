import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  Bar,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  MapPin,
  Mountain,
  Camera,
  Trophy,
  User,
  Search,
  Filter,
  ChevronRight,
  ChevronLeft,
  Star,
  Clock,
  TrendingUp,
  Download,
  Play,
  Pause,
  Navigation,
  AlertTriangle,
  Battery,
  Wifi,
  WifiOff,
  Heart,
  Share2,
  Award,
  Target,
  Compass,
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Leaf,
  Bird,
  TreePine,
  Info,
  X,
  Check,
  Home,
  Map,
  BarChart3,
  Bell,
  Settings,
  Moon,
  SlidersHorizontal,
  Smartphone,
  Zap,
  Shield,
  Eye,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  Layers,
  Loader2,
  MessageCircle,
  Send,
  ThumbsUp,
  Calendar,
  Footprints,
  Timer,
  Route,
  Flag,
  BookOpen,
  Bookmark,
  History,
  Globe,
  Lock,
  Unlock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  Crosshair,
  Locate,
  Users,
  Gift,
  Percent,
  Store,
  Ticket,
  Crown,
  Medal,
  Flame,
  MoreHorizontal,
  Trash2,
  Volume2,
  VolumeX,
  BellOff,
  Phone,
  MapPinned,
  Share,
  Coffee,
  Tent,
  Bike,
  Car,
  Package,
  Scan,
  QrCode,
  Aperture,
  Train,
  Bus,
  Link2,
  CheckSquare,
  Square,
  CloudSun,
  Umbrella,
  Image,
  Smile,
  Thermometer,
  Droplets,
  CloudSnow,
  CloudLightning,
  Sunrise,
  Sunset,
  Move3d,
} from "lucide-react";

// ============================================
// ISARD v14 — Realistic AR Scanner: Auto-Viewfinder, Progressive ID, Photo Capture, Sound, Field Card
// Real GPS (watchPosition), Gyroscope Panoramic AR, Leaflet, Open-Meteo,
// Speech, Battery, Wake Lock, Vibration, Web Share, Recharts, Persistence
// ============================================

const ACCENT = "#CCFF00";
const ACCENT_DIM = "rgba(204,255,0,0.15)";
const ACCENT_MED = "rgba(204,255,0,0.3)";
const BG = "#0A0A0A";
const CARD = "#141414";
const CARD2 = "#1A1A1A";
const BORDER = "#252525";
const TEXT = "#FDFDFD";
const TEXT_DIM = "#888888";
const TEXT_MED = "#AAAAAA";
const LOGO_URL =
  "https://i.postimg.cc/hPHFTfGP/Black-White-Minimal-Simple-Bold-Modern-Professional-Photography-Letter-K-Museum-Logo.png";

// ── DONNÉES SENTIERS ──
// ── DONNÉES SENTIERS — Coordonnées GPS réelles, tracés vérifiés ──
const RANDONNEES_DB = [
  {
    id: 1,
    nom: "Lac de Gaube",
    lieu: "Cauterets",
    region: "Hautes-Pyrénées",
    difficulte: "modere",
    duree: 210,
    distance: 11.2,
    denivele: 520,
    altitudeMax: 1725,
    note: 4.8,
    avis: 1247,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Depuis le Pont d'Espagne (1496m), remontée par le GR10 en sous-bois de pins à crochets puis traversée du plateau jusqu'au lac de Gaube (1725m), enchâssé au pied de la face Nord du Vignemale (3298m). Eaux turquoise alimentées par les glaciers, vue imprenable sur le massif.",
    tags: ["Lac", "Panorama", "Famille", "GR10"],
    faune: ["Isard", "Marmotte alpine", "Gypaète barbu", "Vautour fauve"],
    flore: [
      "Pin à crochets",
      "Rhododendron ferrugineux",
      "Gentiane de Koch",
      "Myrtille",
    ],
    patrimoine: ["Pont d'Espagne (XIXe)", "Refuge des Oulettes de Gaube (CAF)"],
    scanPoints: [
      {
        id: "s1",
        lat: 42.8365,
        lng: -0.1461,
        type: "flore",
        name: "Rhododendron ferrugineux",
        rarity: "commun",
        xp: 15,
        emoji: "🌺",
        scientifique: "Rhododendron ferrugineum",
      },
      {
        id: "s2",
        lat: 42.8294,
        lng: -0.1413,
        type: "faune",
        name: "Marmotte alpine",
        rarity: "commun",
        xp: 20,
        emoji: "🐿️",
        scientifique: "Marmota marmota",
      },
      {
        id: "s3",
        lat: 42.8178,
        lng: -0.1392,
        type: "flore",
        name: "Pin à crochets",
        rarity: "commun",
        xp: 10,
        emoji: "🌲",
        scientifique: "Pinus uncinata",
      },
      {
        id: "s4",
        lat: 42.8147,
        lng: -0.1369,
        type: "patrimoine",
        name: "Lac de Gaube — vue Vignemale",
        rarity: "rare",
        xp: 50,
        emoji: "🏔️",
      },
    ],
    coordonnees: { lat: 42.8365, lng: -0.1461 },
    traceGPS: [
      [42.8365, -0.1461],
      [42.8351, -0.1448],
      [42.8338, -0.1437],
      [42.8324, -0.1425],
      [42.831, -0.1418],
      [42.8294, -0.1413],
      [42.8275, -0.1408],
      [42.8255, -0.1401],
      [42.8234, -0.1396],
      [42.8212, -0.1392],
      [42.8194, -0.1388],
      [42.8178, -0.1392],
      [42.8163, -0.1385],
      [42.8147, -0.1369],
    ],
    depart: "Parking du Pont d'Espagne (1496m)",
    acces: "N920 depuis Cauterets, parking payant (8€/jour, 400 places)",
    meilleureSaison: "Juin à Octobre",
    balisage: "GR10 (rouge/blanc) puis balisage jaune",
    altitude_depart: 1496,
    offline: true,
    garesProches: [
      {
        nom: "Gare SNCF Lourdes",
        type: "train",
        distance: "32 km",
        temps: "40 min",
        navette: "Bus liO 965 Lourdes-Cauterets",
      },
      {
        nom: "Navette Pont d'Espagne",
        type: "bus",
        distance: "2 km",
        temps: "5 min",
        navette: "Navette gratuite depuis Cauterets (été)",
      },
    ],
  },
  {
    id: 2,
    nom: "Tour du Pic du Midi d'Ossau",
    lieu: "Laruns",
    region: "Pyrénées-Atlantiques",
    difficulte: "difficile",
    duree: 480,
    distance: 14.5,
    denivele: 1250,
    altitudeMax: 2707,
    note: 4.9,
    avis: 892,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    description:
      "Tour complet du Pic du Midi d'Ossau (2884m) par le lac de Bious-Artigues (1422m), col de Suzon (2127m), col des Moines (2168m) et refuge de Pombie (2032m). Un des plus beaux panoramas des Pyrénées occidentales.",
    tags: ["Sommet", "Lacs", "Alpin", "Refuge"],
    faune: ["Isard", "Marmotte alpine", "Aigle royal", "Lagopède alpin"],
    flore: ["Edelweiss", "Gentiane de Koch", "Iris des Pyrénées"],
    patrimoine: ["Refuge de Pombie (CAF, 2032m)", "Lac de Bious-Artigues"],
    scanPoints: [
      {
        id: "s5",
        lat: 42.863,
        lng: -0.429,
        type: "flore",
        name: "Iris des Pyrénées",
        rarity: "rare",
        xp: 50,
        emoji: "💙",
        scientifique: "Iris latifolia",
      },
      {
        id: "s6",
        lat: 42.8441,
        lng: -0.4347,
        type: "faune",
        name: "Isard",
        rarity: "commun",
        xp: 30,
        emoji: "🦌",
        scientifique: "Rupicapra pyrenaica",
      },
      {
        id: "s7",
        lat: 42.8356,
        lng: -0.4289,
        type: "flore",
        name: "Edelweiss",
        rarity: "rare",
        xp: 50,
        emoji: "⭐",
        scientifique: "Leontopodium alpinum",
      },
    ],
    coordonnees: { lat: 42.863, lng: -0.429 },
    traceGPS: [
      [42.863, -0.429],
      [42.8587, -0.4302],
      [42.8549, -0.4315],
      [42.851, -0.4333],
      [42.8475, -0.4347],
      [42.8441, -0.4347],
      [42.8405, -0.433],
      [42.8379, -0.431],
      [42.8356, -0.4289],
      [42.8341, -0.426],
      [42.8363, -0.423],
      [42.84, -0.4215],
      [42.8445, -0.422],
      [42.849, -0.424],
      [42.854, -0.426],
      [42.8585, -0.4278],
      [42.863, -0.429],
    ],
    depart: "Lac de Bious-Artigues (1422m)",
    acces: "D934 depuis Laruns, grand parking gratuit",
    meilleureSaison: "Juillet à Septembre",
    balisage: "GR10 (rouge/blanc) puis cairns",
    altitude_depart: 1422,
    offline: false,
    garesProches: [
      {
        nom: "Gare SNCF Pau",
        type: "train",
        distance: "55 km",
        temps: "1h10",
        navette: "Bus liO 805 Pau-Laruns",
      },
      {
        nom: "Parking Bious-Artigues",
        type: "bus",
        distance: "12 km",
        temps: "20 min",
        navette: "Pas de navette, covoiturage",
      },
    ],
  },
  {
    id: 3,
    nom: "Cirque de Gavarnie",
    lieu: "Gavarnie-Gèdre",
    region: "Hautes-Pyrénées",
    difficulte: "facile",
    duree: 150,
    distance: 6.8,
    denivele: 280,
    altitudeMax: 1570,
    note: 4.7,
    avis: 3421,
    image:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    description:
      "Classé UNESCO depuis 1997, le cirque glaciaire de Gavarnie déploie des parois de 1500m couronnées par la Grande Cascade (423m, plus haute d'Europe). Sentier large depuis le village (1365m) à travers prairies et chaos rocheux.",
    tags: ["UNESCO", "Cascade", "Facile", "Patrimoine"],
    faune: ["Vautour fauve", "Gypaète barbu", "Isard", "Chocard à bec jaune"],
    flore: [
      "Lis des Pyrénées",
      "Ramonde des Pyrénées",
      "Saxifrage des Pyrénées",
    ],
    patrimoine: [
      "Grande Cascade (423m)",
      "Cirque UNESCO",
      "Hôtellerie du Cirque (1495m)",
    ],
    scanPoints: [
      {
        id: "s8",
        lat: 42.7356,
        lng: -0.0089,
        type: "patrimoine",
        name: "Village de Gavarnie (1365m)",
        rarity: "commun",
        xp: 15,
        emoji: "🏘️",
      },
      {
        id: "s9",
        lat: 42.721,
        lng: -0.0095,
        type: "faune",
        name: "Vautour fauve",
        rarity: "commun",
        xp: 25,
        emoji: "🦤",
        scientifique: "Gyps fulvus",
      },
      {
        id: "s10",
        lat: 42.705,
        lng: -0.0108,
        type: "flore",
        name: "Ramonde des Pyrénées",
        rarity: "rare",
        xp: 65,
        emoji: "💜",
        scientifique: "Ramonda myconi",
      },
      {
        id: "s11",
        lat: 42.696,
        lng: -0.0108,
        type: "patrimoine",
        name: "Grande Cascade — 423m",
        rarity: "rare",
        xp: 65,
        emoji: "💦",
      },
    ],
    coordonnees: { lat: 42.7356, lng: -0.0089 },
    traceGPS: [
      [42.7356, -0.0089],
      [42.732, -0.0091],
      [42.7285, -0.0093],
      [42.7252, -0.0094],
      [42.721, -0.0095],
      [42.7175, -0.0098],
      [42.7135, -0.01],
      [42.7095, -0.0103],
      [42.705, -0.0108],
      [42.701, -0.011],
      [42.696, -0.0108],
    ],
    depart: "Village de Gavarnie (1365m)",
    acces: "D921 depuis Luz-Saint-Sauveur, parking payant village (5€/jour)",
    meilleureSaison: "Mai à Novembre",
    balisage: "Chemin large, aucune difficulté d'orientation",
    altitude_depart: 1365,
    offline: true,
    garesProches: [
      {
        nom: "Gare SNCF Lourdes",
        type: "train",
        distance: "52 km",
        temps: "1h05",
        navette: "Bus liO 965 Lourdes-Gavarnie (été)",
      },
      {
        nom: "Navette Gavarnie",
        type: "bus",
        distance: "0 km",
        temps: "0 min",
        navette: "Arrêt au village",
      },
    ],
  },
  {
    id: 4,
    nom: "Lac d'Oô",
    lieu: "Bagnères-de-Luchon",
    region: "Haute-Garonne",
    difficulte: "modere",
    duree: 180,
    distance: 7.4,
    denivele: 540,
    altitudeMax: 1504,
    note: 4.6,
    avis: 1089,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    description:
      "Depuis les Granges d'Astau (1139m), montée progressive en forêt puis alpage jusqu'au lac d'Oô (1504m), dominé par une cascade spectaculaire de 273m tombant depuis le lac d'Espingo (1882m). Possibilité de poursuivre au refuge d'Espingo.",
    tags: ["Lac", "Cascade", "Refuge"],
    faune: [
      "Marmotte alpine",
      "Isard",
      "Desman des Pyrénées",
      "Cincle plongeur",
    ],
    flore: ["Arnica montana", "Rhododendron ferrugineux", "Gentiane jaune"],
    patrimoine: ["Refuge du lac d'Oô", "Cascade de 273m", "Granges d'Astau"],
    scanPoints: [
      {
        id: "s12",
        lat: 42.787,
        lng: 0.497,
        type: "flore",
        name: "Arnica montana",
        rarity: "peu commun",
        xp: 30,
        emoji: "🌼",
        scientifique: "Arnica montana",
      },
      {
        id: "s13",
        lat: 42.792,
        lng: 0.496,
        type: "faune",
        name: "Desman des Pyrénées",
        rarity: "très rare",
        xp: 100,
        emoji: "🐁",
        scientifique: "Galemys pyrenaicus",
      },
      {
        id: "s14",
        lat: 42.7945,
        lng: 0.4945,
        type: "patrimoine",
        name: "Cascade du lac d'Oô (273m)",
        rarity: "rare",
        xp: 50,
        emoji: "💦",
      },
    ],
    coordonnees: { lat: 42.7789, lng: 0.4967 },
    traceGPS: [
      [42.7789, 0.4967],
      [42.781, 0.4968],
      [42.7832, 0.497],
      [42.7855, 0.4969],
      [42.787, 0.497],
      [42.789, 0.4965],
      [42.7905, 0.496],
      [42.792, 0.496],
      [42.7935, 0.4955],
      [42.7945, 0.4945],
    ],
    depart: "Granges d'Astau (1139m)",
    acces: "D76 depuis Luchon, parking gratuit 150 places",
    meilleureSaison: "Juin à Octobre",
    balisage: "Balisage jaune, sentier bien marqué",
    altitude_depart: 1139,
    offline: true,
    garesProches: [
      {
        nom: "Gare SNCF Montréjeau-Gourdan",
        type: "train",
        distance: "45 km",
        temps: "55 min",
        navette: "Bus liO 950 vers Luchon",
      },
      {
        nom: "Gare routière Luchon",
        type: "bus",
        distance: "14 km",
        temps: "20 min",
        navette: "Pas de navette directe vers Astau",
      },
    ],
  },
  {
    id: 5,
    nom: "Brèche de Roland",
    lieu: "Gavarnie-Gèdre",
    region: "Hautes-Pyrénées",
    difficulte: "difficile",
    duree: 360,
    distance: 10.5,
    denivele: 600,
    altitudeMax: 2807,
    note: 4.9,
    avis: 1567,
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    description:
      "Depuis le col des Tentes (2208m), traversée du plateau calcaire vers le refuge des Sarradets (2587m), puis montée finale sur névé/éboulis jusqu'à la mythique Brèche de Roland (2807m). Cette trouée de 40m de large et 100m de haut est la porte vers l'Espagne et le Monte Perdido.",
    tags: ["Légende", "Frontière", "Altitude", "Mythique"],
    faune: [
      "Lagopède alpin",
      "Isard",
      "Chocard à bec jaune",
      "Accenteur alpin",
    ],
    flore: ["Edelweiss", "Androsace des Pyrénées", "Saxifrage des Pyrénées"],
    patrimoine: [
      "Brèche de Roland (légende)",
      "Refuge de Sarradets (CAF, 2587m)",
      "Glacier de la Brèche",
    ],
    scanPoints: [
      {
        id: "s15",
        lat: 42.71,
        lng: -0.0506,
        type: "flore",
        name: "Androsace des Pyrénées",
        rarity: "très rare",
        xp: 80,
        emoji: "⚪",
        scientifique: "Androsace pyrenaica",
      },
      {
        id: "s16",
        lat: 42.702,
        lng: -0.044,
        type: "faune",
        name: "Lagopède alpin",
        rarity: "rare",
        xp: 55,
        emoji: "🐓",
        scientifique: "Lagopus muta pyrenaica",
      },
      {
        id: "s17",
        lat: 42.6953,
        lng: -0.0347,
        type: "patrimoine",
        name: "Brèche de Roland (2807m)",
        rarity: "légendaire",
        xp: 100,
        emoji: "✨",
      },
    ],
    coordonnees: { lat: 42.71, lng: -0.0506 },
    traceGPS: [
      [42.71, -0.0506],
      [42.7075, -0.0488],
      [42.7055, -0.0472],
      [42.7038, -0.0455],
      [42.702, -0.044],
      [42.7005, -0.042],
      [42.699, -0.04],
      [42.6975, -0.038],
      [42.6965, -0.0362],
      [42.6953, -0.0347],
    ],
    depart: "Col des Tentes (2208m)",
    acces: "D923 depuis Gavarnie, route ouverte juin-oct, parking gratuit",
    meilleureSaison: "Juillet à Septembre",
    balisage: "Cairns et traces, orientation nécessaire par brouillard",
    altitude_depart: 2208,
    offline: false,
    garesProches: [
      {
        nom: "Gare SNCF Lourdes",
        type: "train",
        distance: "56 km",
        temps: "1h15",
        navette: "Bus liO 965 jusqu'à Gavarnie",
      },
      {
        nom: "Gavarnie village",
        type: "bus",
        distance: "8 km",
        temps: "15 min",
        navette: "Route col des Tentes (été uniquement)",
      },
    ],
  },
  {
    id: 6,
    nom: "Lac de Bethmale",
    lieu: "Bethmale",
    region: "Ariège",
    difficulte: "facile",
    duree: 75,
    distance: 3.8,
    denivele: 120,
    altitudeMax: 1074,
    note: 4.4,
    avis: 876,
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    description:
      "Tour du lac de Bethmale dans un écrin de forêts de hêtres et sapins centenaires. Ambiance bucolique et mystérieuse, berceau de la légende des sabots de Bethmale à longue pointe. Baignade possible en été.",
    tags: ["Lac", "Famille", "Tradition", "Légende"],
    faune: ["Cincle plongeur", "Salamandre tachetée", "Héron cendré"],
    flore: ["Hêtre commun", "Grassette commune", "Fougère aigle"],
    patrimoine: [
      "Sabots de Bethmale",
      "Légende du lac",
      "Chapelle de Bethmale",
    ],
    scanPoints: [
      {
        id: "s18",
        lat: 42.8954,
        lng: 0.9548,
        type: "patrimoine",
        name: "Légende des sabots de Bethmale",
        rarity: "rare",
        xp: 45,
        emoji: "👞",
      },
      {
        id: "s19",
        lat: 42.893,
        lng: 0.9565,
        type: "faune",
        name: "Salamandre tachetée",
        rarity: "peu commun",
        xp: 35,
        emoji: "🦎",
        scientifique: "Salamandra salamandra",
      },
      {
        id: "s20",
        lat: 42.897,
        lng: 0.953,
        type: "flore",
        name: "Grassette commune",
        rarity: "peu commun",
        xp: 40,
        emoji: "💚",
        scientifique: "Pinguicula vulgaris",
      },
    ],
    coordonnees: { lat: 42.8954, lng: 0.9548 },
    traceGPS: [
      [42.8954, 0.9548],
      [42.8942, 0.9558],
      [42.893, 0.9565],
      [42.8925, 0.9555],
      [42.893, 0.954],
      [42.8945, 0.9528],
      [42.896, 0.9525],
      [42.897, 0.953],
      [42.8968, 0.9543],
      [42.8954, 0.9548],
    ],
    depart: "Parking du Lac de Bethmale (1060m)",
    acces: "D17 depuis Castillon-en-Couserans, parking gratuit",
    meilleureSaison: "Avril à Novembre",
    balisage: "Sentier aménagé, panneaux d'interprétation",
    altitude_depart: 1060,
    offline: true,
    garesProches: [
      {
        nom: "Gare SNCF Saint-Girons",
        type: "train",
        distance: "28 km",
        temps: "35 min",
        navette: "Pas de navette directe",
      },
      {
        nom: "Castillon-en-Couserans",
        type: "bus",
        distance: "8 km",
        temps: "12 min",
        navette: "Ligne locale saisonnière",
      },
    ],
  },
  {
    id: 7,
    nom: "Lacs d'Ayous",
    lieu: "Laruns",
    region: "Pyrénées-Atlantiques",
    difficulte: "modere",
    duree: 300,
    distance: 12.0,
    denivele: 750,
    altitudeMax: 2100,
    note: 4.9,
    avis: 2134,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    description:
      "Boucle mythique par le lac Roumassot (1845m), lac du Miey (1920m) et lac Gentau (1947m) avec le reflet parfait du Pic du Midi d'Ossau. Nuit possible au refuge d'Ayous (CAF, 1980m). Le panorama depuis le col d'Ayous (2185m) est un des plus beaux des Pyrénées.",
    tags: ["Lacs", "Panorama", "Refuge", "Iconique"],
    faune: ["Isard", "Marmotte alpine", "Vautour fauve", "Hermine"],
    flore: ["Gentiane de Koch", "Rhododendron ferrugineux", "Myrtille"],
    patrimoine: [
      "Refuge d'Ayous (CAF, 1980m)",
      "Col d'Ayous (2185m)",
      "Lac Gentau — miroir d'Ossau",
    ],
    scanPoints: [
      {
        id: "s21",
        lat: 42.8505,
        lng: -0.4785,
        type: "patrimoine",
        name: "Reflet d'Ossau sur le Gentau",
        rarity: "légendaire",
        xp: 80,
        emoji: "🪞",
      },
      {
        id: "s22",
        lat: 42.848,
        lng: -0.475,
        type: "faune",
        name: "Hermine",
        rarity: "peu commun",
        xp: 40,
        emoji: "🐾",
        scientifique: "Mustela erminea",
      },
      {
        id: "s23",
        lat: 42.854,
        lng: -0.47,
        type: "flore",
        name: "Gentiane de Koch",
        rarity: "peu commun",
        xp: 25,
        emoji: "🔵",
        scientifique: "Gentiana acaulis",
      },
    ],
    coordonnees: { lat: 42.863, lng: -0.4555 },
    traceGPS: [
      [42.863, -0.4555],
      [42.861, -0.458],
      [42.859, -0.4615],
      [42.857, -0.465],
      [42.855, -0.469],
      [42.854, -0.47],
      [42.852, -0.473],
      [42.8505, -0.4785],
      [42.848, -0.475],
      [42.85, -0.47],
      [42.853, -0.466],
      [42.856, -0.462],
      [42.859, -0.458],
      [42.862, -0.4555],
      [42.863, -0.4555],
    ],
    depart: "Lac de Bious-Artigues (1422m)",
    acces: "D934 depuis Laruns, même parking que tour d'Ossau",
    meilleureSaison: "Juin à Octobre",
    balisage: "GR10 (rouge/blanc), très fréquenté",
    altitude_depart: 1422,
    offline: true,
    garesProches: [
      {
        nom: "Gare SNCF Pau",
        type: "train",
        distance: "55 km",
        temps: "1h10",
        navette: "Bus liO 805 Pau-Laruns",
      },
      {
        nom: "Laruns",
        type: "bus",
        distance: "12 km",
        temps: "20 min",
        navette: "Covoiturage recommandé",
      },
    ],
  },
  {
    id: 8,
    nom: "Pic du Canigou",
    lieu: "Vernet-les-Bains",
    region: "Pyrénées-Orientales",
    difficulte: "difficile",
    duree: 420,
    distance: 14.5,
    denivele: 1130,
    altitudeMax: 2784,
    note: 4.8,
    avis: 1876,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    description:
      "Montagne sacrée de la Catalogne. Depuis le chalet des Cortalets (2150m, accessible en 4x4 ou à pied), montée par la Cheminée (passage rocheux) ou le HRP vers le sommet (2784m). Panorama à 360° de la Méditerranée aux Pyrénées centrales. Feux de la Saint-Jean au sommet chaque 23 juin.",
    tags: ["Sommet", "Sacré", "Panorama", "Tradition"],
    faune: ["Isard", "Aigle royal", "Grand Tétras", "Bouquetin ibérique"],
    flore: ["Genêt purgatif", "Pin à crochets", "Joubarbe des toits"],
    patrimoine: [
      "Abbaye Saint-Martin du Canigou (XIe)",
      "Refuge des Cortalets (CAF)",
      "Croix du sommet",
    ],
    scanPoints: [
      {
        id: "s24",
        lat: 42.5301,
        lng: 2.4449,
        type: "patrimoine",
        name: "Chalet des Cortalets (2150m)",
        rarity: "peu commun",
        xp: 30,
        emoji: "🏠",
      },
      {
        id: "s25",
        lat: 42.524,
        lng: 2.4505,
        type: "faune",
        name: "Grand Tétras",
        rarity: "très rare",
        xp: 85,
        emoji: "🐦",
        scientifique: "Tetrao urogallus",
      },
      {
        id: "s26",
        lat: 42.5194,
        lng: 2.4569,
        type: "patrimoine",
        name: "Sommet du Canigou (2784m)",
        rarity: "rare",
        xp: 70,
        emoji: "🗻",
      },
    ],
    coordonnees: { lat: 42.5301, lng: 2.4449 },
    traceGPS: [
      [42.5301, 2.4449],
      [42.5285, 2.4462],
      [42.527, 2.4478],
      [42.5257, 2.449],
      [42.524, 2.4505],
      [42.5225, 2.452],
      [42.5213, 2.4538],
      [42.5205, 2.4552],
      [42.5194, 2.4569],
    ],
    depart: "Chalet des Cortalets (2150m)",
    acces:
      "Piste 4x4 depuis Vernet-les-Bains ou Prats-de-Mollo, ou à pied (3h30 depuis Mariailles)",
    meilleureSaison: "Juin à Octobre",
    balisage: "GR10/HRP, cairns au-dessus de 2400m",
    altitude_depart: 2150,
    offline: false,
    garesProches: [
      {
        nom: "Gare SNCF Perpignan",
        type: "train",
        distance: "55 km",
        temps: "1h15",
        navette: "Bus liO vers Vernet-les-Bains",
      },
      {
        nom: "Prades",
        type: "bus",
        distance: "20 km",
        temps: "30 min",
        navette: "Navette Canigou (été, réservation)",
      },
    ],
  },
  {
    id: 9,
    nom: "Réserve du Néouvielle",
    lieu: "Saint-Lary-Soulan",
    region: "Hautes-Pyrénées",
    difficulte: "modere",
    duree: 240,
    distance: 9.0,
    denivele: 450,
    altitudeMax: 2350,
    note: 4.7,
    avis: 1430,
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    description:
      "Boucle dans la Réserve Naturelle du Néouvielle, un des plus anciens espaces protégés des Pyrénées (1936). Enchaînement de lacs cristallins (Aubert 2150m, Aumar 2192m, Orédon 1849m) au milieu de pins à crochets tricentenaires. Faune et flore exceptionnelles.",
    tags: ["Réserve", "Lacs", "Protection", "Nature"],
    faune: [
      "Marmotte alpine",
      "Isard",
      "Euprocte des Pyrénées",
      "Gypaète barbu",
    ],
    flore: ["Pin à crochets tricentenaire", "Edelweiss", "Grassette commune"],
    patrimoine: [
      "Réserve du Néouvielle (1936)",
      "Barrage d'Orédon",
      "Barrage d'Aubert",
    ],
    scanPoints: [
      {
        id: "s27",
        lat: 42.8268,
        lng: 0.2946,
        type: "flore",
        name: "Pin à crochets tricentenaire",
        rarity: "rare",
        xp: 55,
        emoji: "🌲",
        scientifique: "Pinus uncinata",
      },
      {
        id: "s28",
        lat: 42.831,
        lng: 0.2881,
        type: "faune",
        name: "Euprocte des Pyrénées",
        rarity: "rare",
        xp: 65,
        emoji: "🦎",
        scientifique: "Calotriton asper",
      },
      {
        id: "s29",
        lat: 42.834,
        lng: 0.282,
        type: "patrimoine",
        name: "Lac Aumar (2192m)",
        rarity: "peu commun",
        xp: 35,
        emoji: "💎",
      },
    ],
    coordonnees: { lat: 42.82, lng: 0.302 },
    traceGPS: [
      [42.82, 0.302],
      [42.8225, 0.3],
      [42.825, 0.2975],
      [42.8268, 0.2946],
      [42.829, 0.2915],
      [42.831, 0.2881],
      [42.8325, 0.2855],
      [42.834, 0.282],
      [42.8325, 0.281],
      [42.83, 0.2835],
      [42.827, 0.287],
      [42.824, 0.292],
      [42.822, 0.296],
      [42.82, 0.302],
    ],
    depart: "Parking du lac d'Orédon (1849m)",
    acces:
      "D929 depuis Saint-Lary, parking réglementé (navette obligatoire en été)",
    meilleureSaison: "Juillet à Septembre",
    balisage: "Balisage jaune, sentiers bien entretenus",
    altitude_depart: 1849,
    offline: true,
    garesProches: [
      {
        nom: "Gare SNCF Lannemezan",
        type: "train",
        distance: "40 km",
        temps: "50 min",
        navette: "Bus liO vers Saint-Lary",
      },
      {
        nom: "Saint-Lary télécabine",
        type: "bus",
        distance: "18 km",
        temps: "25 min",
        navette: "Navette Néouvielle (juillet-août)",
      },
    ],
  },
  {
    id: 10,
    nom: "Pic du Midi de Bigorre",
    lieu: "La Mongie",
    region: "Hautes-Pyrénées",
    difficulte: "modere",
    duree: 300,
    distance: 8.5,
    denivele: 680,
    altitudeMax: 2877,
    note: 4.6,
    avis: 965,
    image:
      "https://images.unsplash.com/photo-1445067041505-b2b1ad0f6286?w=800&q=80",
    description:
      "Montée au Pic du Midi de Bigorre (2877m) par le col de Sencours et les lacets du chemin des muletiers. L'observatoire astronomique au sommet (accessible aussi par téléphérique) offre un panorama exceptionnel sur 300km de chaîne pyrénéenne.",
    tags: ["Sommet", "Observatoire", "Panorama", "Science"],
    faune: ["Chocard à bec jaune", "Isard", "Hermine"],
    flore: ["Androsace des Pyrénées", "Saxifrage des Pyrénées", "Edelweiss"],
    patrimoine: [
      "Observatoire du Pic du Midi (1878)",
      "Station de La Mongie",
      "Col du Tourmalet (2115m)",
    ],
    scanPoints: [
      {
        id: "s30",
        lat: 42.9369,
        lng: 0.1411,
        type: "patrimoine",
        name: "Observatoire du Pic du Midi",
        rarity: "rare",
        xp: 60,
        emoji: "📡",
      },
      {
        id: "s31",
        lat: 42.932,
        lng: 0.145,
        type: "flore",
        name: "Androsace des Pyrénées",
        rarity: "très rare",
        xp: 80,
        emoji: "⚪",
        scientifique: "Androsace pyrenaica",
      },
      {
        id: "s32",
        lat: 42.928,
        lng: 0.148,
        type: "faune",
        name: "Chocard à bec jaune",
        rarity: "commun",
        xp: 15,
        emoji: "🐦",
        scientifique: "Pyrrhocorax graculus",
      },
    ],
    coordonnees: { lat: 42.92, lng: 0.151 },
    traceGPS: [
      [42.92, 0.151],
      [42.922, 0.15],
      [42.924, 0.149],
      [42.926, 0.1485],
      [42.928, 0.148],
      [42.93, 0.147],
      [42.932, 0.145],
      [42.934, 0.1435],
      [42.9355, 0.142],
      [42.9369, 0.1411],
    ],
    depart: "Station de La Mongie (1800m)",
    acces: "D918 col du Tourmalet, grands parkings gratuits",
    meilleureSaison: "Juin à Octobre",
    balisage: "Balisage jaune, chemin historique des muletiers",
    altitude_depart: 1800,
    offline: false,
    garesProches: [
      {
        nom: "Gare SNCF Tarbes",
        type: "train",
        distance: "45 km",
        temps: "1h",
        navette: "Bus liO vers Bagnères puis La Mongie",
      },
      {
        nom: "Téléphérique Pic du Midi",
        type: "bus",
        distance: "0 km",
        temps: "15 min",
        navette: "Téléphérique (ouvert toute l'année)",
      },
    ],
  },
];

const ESPECES_DB = {
  flore: [
    {
      id: 1,
      nom: "Edelweiss",
      scientifique: "Leontopodium alpinum",
      description:
        "Fleur mythique des alpages, protégée. Feuilles laineuses blanches, bractées étoilées. Pousse dans les pelouses rocailleuses calcaires. Indicateur de milieu préservé.",
      altMin: 1800,
      altMax: 3000,
      rarete: "rare",
      emoji: "⭐",
      mois: [7, 8],
      biome: "alpin",
      xp: 50,
      famille: "Asteraceae",
      protection: "Protégée nationale",
    },
    {
      id: 2,
      nom: "Rhododendron ferrugineux",
      scientifique: "Rhododendron ferrugineum",
      description:
        "Arbrisseau de 50-120cm aux fleurs rose vif en clochettes. Feuilles coriaces rouille dessous. Forme des landes denses en sous-bois clair ou versants Nord entre 1500 et 2500m.",
      altMin: 1500,
      altMax: 2500,
      rarete: "commun",
      emoji: "🌺",
      mois: [6, 7],
      biome: "subalpin",
      xp: 15,
      famille: "Ericaceae",
      protection: "Non protégé",
    },
    {
      id: 3,
      nom: "Gentiane de Koch",
      scientifique: "Gentiana acaulis",
      description:
        "Fleur bleue intense en trompette, 5-7cm, solitaire au ras du sol. Feuilles en rosette basale. Pelouses alpines acides à neutres. Emblème de la montagne.",
      altMin: 800,
      altMax: 3000,
      rarete: "peu commun",
      emoji: "🔵",
      mois: [5, 6, 7],
      biome: "alpin",
      xp: 25,
      famille: "Gentianaceae",
      protection: "Non protégé",
    },
    {
      id: 4,
      nom: "Lis des Pyrénées",
      scientifique: "Lilium pyrenaicum",
      description:
        "Lis jaune citron tacheté de points noirs, 40-80cm. Pétales fortement récurvés. Odeur prononcée. Endémique pyrénéo-cantabrique. Prairies subalpines ombragées.",
      altMin: 800,
      altMax: 2000,
      rarete: "peu commun",
      emoji: "💛",
      mois: [6, 7],
      biome: "montagnard",
      xp: 35,
      famille: "Liliaceae",
      protection: "Protégé régional",
    },
    {
      id: 5,
      nom: "Pin à crochets",
      scientifique: "Pinus uncinata",
      description:
        "Conifère tortueux de la limite forestière, jusqu'à 2700m. Peut vivre plus de 1000 ans. Aiguilles groupées par 2, cônes dissymétriques caractéristiques. Espèce pionnière des éboulis.",
      altMin: 1500,
      altMax: 2700,
      rarete: "commun",
      emoji: "🌲",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "subalpin",
      xp: 10,
      famille: "Pinaceae",
      protection: "Non protégé",
    },
    {
      id: 6,
      nom: "Ramonde des Pyrénées",
      scientifique: "Ramonda myconi",
      description:
        "Relique de l'ère tertiaire (65 Ma), une des plus anciennes plantes d'Europe. Feuilles en rosette plaquée au rocher, fleurs violettes. Capable de reviviscence après dessiccation totale.",
      altMin: 400,
      altMax: 2000,
      rarete: "rare",
      emoji: "💜",
      mois: [5, 6],
      biome: "montagnard",
      xp: 65,
      famille: "Gesneriaceae",
      protection: "Protégée nationale",
    },
    {
      id: 7,
      nom: "Iris des Pyrénées",
      scientifique: "Iris latifolia",
      description:
        "Grand iris bleu-violet, 40-60cm. Prairies de fauche et pelouses subalpines. Endémique pyrénéo-cantabrique. Fleurit en masse en juin-juillet, spectacle remarquable.",
      altMin: 1400,
      altMax: 2400,
      rarete: "rare",
      emoji: "💙",
      mois: [6, 7],
      biome: "subalpin",
      xp: 50,
      famille: "Iridaceae",
      protection: "Protégé régional",
    },
    {
      id: 8,
      nom: "Androsace des Pyrénées",
      scientifique: "Androsace pyrenaica",
      description:
        "Minuscule plante en coussin (2-3cm), fleurs blanches à gorge jaune. Endémique stricte des Pyrénées centrales. Fissures de rochers calcaires exposés Nord, au-dessus de 2200m.",
      altMin: 2200,
      altMax: 3400,
      rarete: "très rare",
      emoji: "⚪",
      mois: [7, 8],
      biome: "nival",
      xp: 80,
      famille: "Primulaceae",
      protection: "Protégée nationale, Annexe II Directive Habitats",
    },
    {
      id: 9,
      nom: "Arnica des montagnes",
      scientifique: "Arnica montana",
      description:
        "Plante médicinale aux capitules jaune orangé, 20-60cm. Anti-inflammatoire traditionnel. Prairies acides non fertilisées. En déclin suite à l'intensification agricole.",
      altMin: 600,
      altMax: 2400,
      rarete: "peu commun",
      emoji: "🌼",
      mois: [6, 7, 8],
      biome: "montagnard",
      xp: 30,
      famille: "Asteraceae",
      protection: "Protégée dans certains départements",
    },
    {
      id: 10,
      nom: "Saxifrage à longues feuilles",
      scientifique: "Saxifraga longifolia",
      description:
        "Rosette spectaculaire de 200+ feuilles en spirale, pouvant atteindre 30cm. Fleurit une seule fois après 10-20 ans puis meurt (monocarpique). Parois calcaires verticales.",
      altMin: 1200,
      altMax: 2800,
      rarete: "peu commun",
      emoji: "🤍",
      mois: [6, 7, 8],
      biome: "alpin",
      xp: 35,
      famille: "Saxifragaceae",
      protection: "Non protégé",
    },
    {
      id: 11,
      nom: "Myrtille",
      scientifique: "Vaccinium myrtillus",
      description:
        "Sous-arbrisseau de 20-50cm, baies bleu-noir comestibles en juillet-septembre. Landes et sous-bois acides. Base alimentaire de nombreuses espèces (grand tétras, ours).",
      altMin: 800,
      altMax: 2200,
      rarete: "commun",
      emoji: "🫐",
      mois: [7, 8, 9],
      biome: "montagnard",
      xp: 10,
      famille: "Ericaceae",
      protection: "Non protégé",
    },
    {
      id: 12,
      nom: "Hêtre commun",
      scientifique: "Fagus sylvatica",
      description:
        "Arbre majestueux jusqu'à 40m. Écorce lisse grise caractéristique. Constitue l'essence dominante des forêts pyrénéennes de 400 à 1600m. Feuillage cuivré spectaculaire en automne.",
      altMin: 200,
      altMax: 1600,
      rarete: "commun",
      emoji: "🌳",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "collineen",
      xp: 8,
      famille: "Fagaceae",
      protection: "Non protégé",
    },
    {
      id: 13,
      nom: "Orchis sureau",
      scientifique: "Dactylorhiza sambucina",
      description:
        "Orchidée bicolore : fleurs jaunes OU pourpres sur la même station. 15-25cm. Pelouses de montagne non amendées. Présence indicatrice de biodiversité.",
      altMin: 500,
      altMax: 2200,
      rarete: "rare",
      emoji: "🌸",
      mois: [5, 6, 7],
      biome: "montagnard",
      xp: 55,
      famille: "Orchidaceae",
      protection: "CITES Annexe B",
    },
    {
      id: 14,
      nom: "Joubarbe des toits",
      scientifique: "Sempervivum tectorum",
      description:
        "Plante grasse en rosette charnue, 5-15cm. Fleurs roses étoilées. Rochers, éboulis et anciens toits en lauze. Plantée autrefois sur les toits pour protéger de la foudre.",
      altMin: 300,
      altMax: 2800,
      rarete: "commun",
      emoji: "🪷",
      mois: [6, 7, 8],
      biome: "alpin",
      xp: 12,
      famille: "Crassulaceae",
      protection: "Non protégé",
    },
    {
      id: 15,
      nom: "Grassette commune",
      scientifique: "Pinguicula vulgaris",
      description:
        "Plante carnivore insectivore. Feuilles visqueuses piégeant les moucherons. Fleur violette éperonnée. Zones humides, suintements, bords de ruisseaux. Indicateur de milieu oligotrophe.",
      altMin: 200,
      altMax: 2500,
      rarete: "peu commun",
      emoji: "💚",
      mois: [5, 6, 7],
      biome: "zone_humide",
      xp: 40,
      famille: "Lentibulariaceae",
      protection: "Non protégé",
    },
  ],
  faune: [
    {
      id: 101,
      nom: "Isard",
      scientifique: "Rupicapra pyrenaica",
      description:
        "Sous-espèce pyrénéenne du chamois, ~50000 individus. Cornes noires en crochets, bande jugale sombre. Dimorphisme saisonnier (roux l'été, brun-noir l'hiver). Agilité exceptionnelle en terrain escarpé.",
      altMin: 1000,
      altMax: 3000,
      rarete: "commun",
      emoji: "🦌",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "alpin",
      xp: 30,
      famille: "Bovidae",
      statut: "LC (préoccupation mineure)",
    },
    {
      id: 102,
      nom: "Marmotte alpine",
      scientifique: "Marmota marmota",
      description:
        "Rongeur de 4-8 kg, le plus gros rongeur des Pyrénées. Sifflement d'alerte caractéristique. Hiberne d'octobre à avril (6 mois). Terriers collectifs dans les pelouses alpines.",
      altMin: 1200,
      altMax: 3000,
      rarete: "commun",
      emoji: "🐿️",
      mois: [4, 5, 6, 7, 8, 9, 10],
      biome: "alpin",
      xp: 15,
      famille: "Sciuridae",
      statut: "LC",
    },
    {
      id: 103,
      nom: "Gypaète barbu",
      scientifique: "Gypaetus barbatus",
      description:
        "Plus grand rapace d'Europe (envergure 2.80m). Se nourrit d'os qu'il casse en les lâchant sur des rochers (casseur d'os). ~80 couples dans les Pyrénées, programme de conservation actif.",
      altMin: 500,
      altMax: 4000,
      rarete: "rare",
      emoji: "🦅",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "alpin",
      xp: 75,
      famille: "Accipitridae",
      statut: "NT (quasi menacé)",
    },
    {
      id: 104,
      nom: "Desman des Pyrénées",
      scientifique: "Galemys pyrenaicus",
      description:
        "Mammifère semi-aquatique endémique ibéro-pyrénéen. Trompe mobile, pattes palmées, queue aplatie. Nocturne, se nourrit de larves aquatiques. Espèce parapluie indicatrice de la qualité des cours d'eau.",
      altMin: 200,
      altMax: 1200,
      rarete: "très rare",
      emoji: "🐁",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "zone_humide",
      xp: 100,
      famille: "Talpidae",
      statut: "VU (vulnérable)",
    },
    {
      id: 105,
      nom: "Vautour fauve",
      scientifique: "Gyps fulvus",
      description:
        "Grand rapace charognard (envergure 2.50m). ~1500 couples nicheurs dans les Pyrénées françaises, plus grande population française. Rôle écologique essentiel d'équarrisseur naturel.",
      altMin: 300,
      altMax: 2500,
      rarete: "commun",
      emoji: "🦤",
      mois: [3, 4, 5, 6, 7, 8, 9, 10],
      biome: "montagnard",
      xp: 25,
      famille: "Accipitridae",
      statut: "LC",
    },
    {
      id: 106,
      nom: "Lagopède alpin",
      scientifique: "Lagopus muta pyrenaica",
      description:
        "Gallinacé de haute altitude, plumage mimétique blanc en hiver / gris-brun en été. Sous-espèce pyrénéenne endémique. Menacé par le réchauffement climatique. ~5000 couples estimés.",
      altMin: 2000,
      altMax: 3400,
      rarete: "peu commun",
      emoji: "🐓",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "nival",
      xp: 45,
      famille: "Phasianidae",
      statut: "NT",
    },
    {
      id: 107,
      nom: "Aigle royal",
      scientifique: "Aquila chrysaetos",
      description:
        "Rapace majestueux (envergure 2.20m). ~500 couples en France dont une centaine dans les Pyrénées. Territoire de chasse de 50-100 km². Prédateur de marmottes, lièvres, jeunes isards.",
      altMin: 400,
      altMax: 3000,
      rarete: "peu commun",
      emoji: "🦅",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "alpin",
      xp: 60,
      famille: "Accipitridae",
      statut: "LC",
    },
    {
      id: 108,
      nom: "Ours brun des Pyrénées",
      scientifique: "Ursus arctos",
      description:
        "Population réintroduite depuis 1996 (Slovénie). ~80 ours estimés en 2024, principalement en Pyrénées centrales (Ariège, Haute-Garonne). Omnivore discret, hibernation de décembre à mars.",
      altMin: 400,
      altMax: 2200,
      rarete: "très rare",
      emoji: "🐻",
      mois: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      biome: "montagnard",
      xp: 100,
      famille: "Ursidae",
      statut: "CR (en danger critique, population pyrénéenne)",
    },
    {
      id: 109,
      nom: "Grand Tétras",
      scientifique: "Tetrao urogallus aquitanicus",
      description:
        "Plus grand gallinacé d'Europe (coq 4-5 kg). Sous-espèce pyrénéenne en déclin critique (<500 coqs chanteurs). Parade nuptiale spectaculaire au printemps. Forêts de pins et hêtres avec sous-bois de myrtilles.",
      altMin: 1000,
      altMax: 2200,
      rarete: "très rare",
      emoji: "🐦",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "subalpin",
      xp: 85,
      famille: "Phasianidae",
      statut: "EN (en danger)",
    },
    {
      id: 110,
      nom: "Hermine",
      scientifique: "Mustela erminea",
      description:
        "Petit mustélidé de 20-30cm. Pelage brun dessus/blanc dessous en été, entièrement blanc en hiver (sauf pointe de la queue noire). Prédateur agile de rongeurs. Éboulis et pierriers alpins.",
      altMin: 500,
      altMax: 3000,
      rarete: "peu commun",
      emoji: "🐾",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "alpin",
      xp: 40,
      famille: "Mustelidae",
      statut: "LC",
    },
    {
      id: 111,
      nom: "Cincle plongeur",
      scientifique: "Cinclus cinclus",
      description:
        "Seul passereau aquatique. Marche sous l'eau pour chasser les larves. Plastron blanc caractéristique. Indicateur de bonne qualité de l'eau. Présent toute l'année sur les torrents pyrénéens.",
      altMin: 200,
      altMax: 2200,
      rarete: "commun",
      emoji: "🐦‍⬛",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "zone_humide",
      xp: 20,
      famille: "Cinclidae",
      statut: "LC",
    },
    {
      id: 112,
      nom: "Salamandre tachetée",
      scientifique: "Salamandra salamandra",
      description:
        "Amphibien noir à taches jaune vif (aposématisme). Glandes parotoïdes sécrétant du samandarin (toxique). Nocturne, sort après la pluie. Forêts de feuillus humides, près des ruisseaux.",
      altMin: 100,
      altMax: 1800,
      rarete: "peu commun",
      emoji: "🦎",
      mois: [3, 4, 5, 6, 9, 10],
      biome: "montagnard",
      xp: 35,
      famille: "Salamandridae",
      statut: "LC",
    },
    {
      id: 113,
      nom: "Bouquetin ibérique",
      scientifique: "Capra pyrenaica",
      description:
        "Réintroduit dans les Pyrénées depuis 2014 (Ariège, Hautes-Pyrénées) après extinction du bouquetin des Pyrénées en 2000 (Celia, dernier individu). Grandes cornes annelées chez le mâle.",
      altMin: 1500,
      altMax: 3200,
      rarete: "rare",
      emoji: "🐐",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "alpin",
      xp: 70,
      famille: "Bovidae",
      statut: "LC (espèce ibérique), réintroduit",
    },
    {
      id: 114,
      nom: "Chocard à bec jaune",
      scientifique: "Pyrrhocorax graculus",
      description:
        "Corvidé grégaire de haute montagne, bec jaune, pattes rouges. Groupes de 20 à 200+ individus. Acrobate aérien extraordinaire. Fréquente les sommets, refuges et terrasses de pique-nique.",
      altMin: 1500,
      altMax: 3500,
      rarete: "commun",
      emoji: "🐦",
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      biome: "alpin",
      xp: 15,
      famille: "Corvidae",
      statut: "LC",
    },
    {
      id: 115,
      nom: "Euprocte des Pyrénées",
      scientifique: "Calotriton asper",
      description:
        "Triton endémique des Pyrénées, le seul urodèle strictement montagnard d'Europe occidentale. Peau rugueuse, ventre orange. Eaux froides et bien oxygénées (lacs, ruisseaux, grottes).",
      altMin: 500,
      altMax: 2500,
      rarete: "rare",
      emoji: "🦎",
      mois: [4, 5, 6, 7, 8, 9],
      biome: "zone_humide",
      xp: 65,
      famille: "Salamandridae",
      statut: "NT",
    },
  ],
};

// ── BIOME-AWARE SPAWNING ──
const BIOME_THRESHOLDS = {
  collineen: [0, 800],
  montagnard: [800, 1500],
  subalpin: [1500, 2200],
  alpin: [2200, 2800],
  nival: [2800, 5000],
};
// ── SOUND SYSTEM (Web Audio API) ──
const audioCtxRef = { current: null };
function getAudioCtx() {
  if (!audioCtxRef.current)
    try {
      audioCtxRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
    } catch {
      return null;
    }
  return audioCtxRef.current;
}
function playTone(freq, dur, vol, type) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(vol || 0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (dur || 0.1));
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + (dur || 0.1));
}
function playScanTick(progress) {
  const freq = 400 + progress * 8;
  const rate = Math.max(0.05, 0.2 - progress * 0.0015);
  playTone(freq, rate * 0.6, 0.04 + progress * 0.0004, "sine");
}
function playScanComplete() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  [0, 80, 160, 300].forEach((delay, i) => {
    setTimeout(
      () => playTone([880, 1100, 1320, 1760][i], 0.15, 0.06, "sine"),
      delay
    );
  });
}
function playDetectPing() {
  playTone(660, 0.08, 0.03, "triangle");
}

function getBiome(alt) {
  for (const [b, [lo, hi]] of Object.entries(BIOME_THRESHOLDS)) {
    if (alt >= lo && alt < hi) return b;
  }
  return "alpin";
}
function getContextualSpecies(altitude, month) {
  const alt = altitude || 1200;
  const m = month || new Date().getMonth() + 1;
  const biome = getBiome(alt);
  const score = (sp) => {
    let s = 0;
    if (alt >= (sp.altMin || 0) && alt <= (sp.altMax || 5000)) s += 40;
    else {
      const dist = Math.min(
        Math.abs(alt - (sp.altMin || 0)),
        Math.abs(alt - (sp.altMax || 5000))
      );
      s += Math.max(0, 40 - dist / 25);
    }
    if ((sp.mois || []).includes(m)) s += 30;
    else s += 5;
    if (sp.biome === biome) s += 20;
    else if (sp.biome === "zone_humide") s += 10;
    const rarMult = {
      commun: 1.2,
      "peu commun": 1.0,
      rare: 0.7,
      "très rare": 0.4,
    };
    s *= rarMult[sp.rarete] || 1;
    s += Math.random() * 15;
    return s;
  };
  const all = [
    ...ESPECES_DB.flore.map((s) => ({ ...s, type: "flore" })),
    ...ESPECES_DB.faune.map((s) => ({ ...s, type: "faune" })),
  ];
  return all
    .map((sp) => ({ ...sp, score: score(sp) }))
    .sort((a, b) => b.score - a.score);
}

// ── SOMMETS PYRÉNÉENS (PeakFinder) ──
const SOMMETS_DB = [
  {
    nom: "Pic d'Aneto",
    alt: 3404,
    lat: 42.6317,
    lng: 0.6567,
    emoji: "👑",
    massif: "Maladeta",
  },
  {
    nom: "Pic des Posets",
    alt: 3375,
    lat: 42.6556,
    lng: 0.4369,
    emoji: "🏔️",
    massif: "Posets",
  },
  {
    nom: "Monte Perdido",
    alt: 3355,
    lat: 42.6753,
    lng: 0.0347,
    emoji: "🏔️",
    massif: "Gavarnie",
  },
  {
    nom: "Pic de la Maladeta",
    alt: 3308,
    lat: 42.6353,
    lng: 0.6444,
    emoji: "🏔️",
    massif: "Maladeta",
  },
  {
    nom: "Vignemale",
    alt: 3298,
    lat: 42.7736,
    lng: -0.1456,
    emoji: "🏔️",
    massif: "Vignemale",
  },
  {
    nom: "Pic de Perdiguère",
    alt: 3222,
    lat: 42.7372,
    lng: 0.5253,
    emoji: "🏔️",
    massif: "Luchonnais",
  },
  {
    nom: "Pic Long",
    alt: 3192,
    lat: 42.8081,
    lng: 0.2556,
    emoji: "🏔️",
    massif: "Néouvielle",
  },
  {
    nom: "Cylindre du Marboré",
    alt: 3328,
    lat: 42.6803,
    lng: 0.0289,
    emoji: "🏔️",
    massif: "Gavarnie",
  },
  {
    nom: "Pic d'Estats",
    alt: 3143,
    lat: 42.6636,
    lng: 1.3975,
    emoji: "🏔️",
    massif: "Montcalm",
  },
  {
    nom: "Balaïtous",
    alt: 3144,
    lat: 42.8375,
    lng: -0.3278,
    emoji: "🏔️",
    massif: "Balaïtous",
  },
  {
    nom: "Pic du Taillon",
    alt: 3144,
    lat: 42.6975,
    lng: -0.0514,
    emoji: "⛰️",
    massif: "Gavarnie",
  },
  {
    nom: "Pic de Néouvielle",
    alt: 3091,
    lat: 42.8322,
    lng: 0.2881,
    emoji: "🏔️",
    massif: "Néouvielle",
  },
  {
    nom: "Pic du Montcalm",
    alt: 3077,
    lat: 42.6675,
    lng: 1.4225,
    emoji: "🏔️",
    massif: "Montcalm",
  },
  {
    nom: "Pic du Carlitte",
    alt: 2921,
    lat: 42.57,
    lng: 1.93,
    emoji: "⛰️",
    massif: "Carlitte",
  },
  {
    nom: "Pic du Midi d'Ossau",
    alt: 2884,
    lat: 42.8428,
    lng: -0.4383,
    emoji: "⛰️",
    massif: "Ossau",
  },
  {
    nom: "Pic du Midi de Bigorre",
    alt: 2877,
    lat: 42.9369,
    lng: 0.1411,
    emoji: "📡",
    massif: "Bigorre",
  },
  {
    nom: "Pic du Canigou",
    alt: 2784,
    lat: 42.5194,
    lng: 2.4569,
    emoji: "🗻",
    massif: "Canigou",
  },
  {
    nom: "Soum de Ramond",
    alt: 3254,
    lat: 42.6842,
    lng: 0.0378,
    emoji: "🏔️",
    massif: "Gavarnie",
  },
  {
    nom: "Pic de Crabioules",
    alt: 3116,
    lat: 42.7289,
    lng: 0.5181,
    emoji: "🏔️",
    massif: "Luchonnais",
  },
  {
    nom: "Pic de Campbieil",
    alt: 3173,
    lat: 42.8017,
    lng: 0.2361,
    emoji: "🏔️",
    massif: "Néouvielle",
  },
  {
    nom: "Pic de Cagire",
    alt: 1912,
    lat: 42.9417,
    lng: 0.7167,
    emoji: "⛰️",
    massif: "Frontignes",
  },
  {
    nom: "Pic du Gar",
    alt: 1785,
    lat: 42.95,
    lng: 0.6333,
    emoji: "⛰️",
    massif: "Frontignes",
  },
  {
    nom: "Tusse de Montarqué",
    alt: 2889,
    lat: 42.8156,
    lng: 0.2083,
    emoji: "🏔️",
    massif: "Néouvielle",
  },
  {
    nom: "Pic de l'Entécade",
    alt: 3025,
    lat: 42.7308,
    lng: 0.5389,
    emoji: "🏔️",
    massif: "Luchonnais",
  },
];

// ── REFUGES & POINTS D'EAU (fallback) ──
const REFUGES_DB = [
  {
    id: "r1",
    nom: "Refuge des Oulettes de Gaube",
    type: "refuge",
    lat: 42.7784,
    lng: -0.142,
    alt: 2151,
    places: 75,
    gardé: true,
    emoji: "🏠",
  },
  {
    id: "r2",
    nom: "Refuge de Baysselance",
    type: "refuge",
    lat: 42.7617,
    lng: -0.1477,
    alt: 2651,
    places: 70,
    gardé: true,
    emoji: "🏠",
  },
  {
    id: "r3",
    nom: "Refuge des Sarradets",
    type: "refuge",
    lat: 42.6922,
    lng: -0.0389,
    alt: 2587,
    places: 60,
    gardé: true,
    emoji: "🏠",
  },
  {
    id: "r4",
    nom: "Refuge de l'Espuguettes",
    type: "refuge",
    lat: 42.7084,
    lng: -0.015,
    alt: 2027,
    places: 60,
    gardé: true,
    emoji: "🏠",
  },
  {
    id: "r5",
    nom: "Refuge du Marcadau",
    type: "refuge",
    lat: 42.8032,
    lng: -0.172,
    alt: 1840,
    places: 60,
    gardé: true,
    emoji: "🏠",
  },
  {
    id: "r6",
    nom: "Refuge de Pombie",
    type: "refuge",
    lat: 42.8387,
    lng: -0.4225,
    alt: 2032,
    places: 40,
    gardé: true,
    emoji: "🏠",
  },
  {
    id: "r7",
    nom: "Cabane de Sausset",
    type: "abri",
    lat: 42.81,
    lng: 0.68,
    alt: 1620,
    places: 8,
    gardé: false,
    emoji: "⛺",
  },
  {
    id: "r8",
    nom: "Source du Gave de Gaube",
    type: "eau",
    lat: 42.78,
    lng: -0.145,
    alt: 2100,
    emoji: "💧",
  },
  {
    id: "r9",
    nom: "Fontaine Granges d'Astau",
    type: "eau",
    lat: 42.775,
    lng: 0.523,
    alt: 1138,
    emoji: "💧",
  },
  {
    id: "r10",
    nom: "Cabane du Pla de la Lau",
    type: "abri",
    lat: 42.845,
    lng: 1.07,
    alt: 1650,
    places: 6,
    gardé: false,
    emoji: "⛺",
  },
];

// ── DANGER ZONES ──
const DANGER_ZONES_DB = [
  {
    id: "dz1",
    type: "falaise",
    lat: 42.695,
    lng: -0.035,
    rayon: 150,
    label: "Falaise Brèche de Roland",
    severity: "high",
  },
  {
    id: "dz2",
    type: "eboulement",
    lat: 42.774,
    lng: -0.143,
    rayon: 100,
    label: "Zone éboulis Vignemale",
    severity: "medium",
  },
  {
    id: "dz3",
    type: "passage_expose",
    lat: 42.762,
    lng: -0.146,
    rayon: 80,
    label: "Passage exposé Oulettes",
    severity: "high",
  },
  {
    id: "dz4",
    type: "torrent",
    lat: 42.778,
    lng: 0.524,
    rayon: 60,
    label: "Gué torrent Oô",
    severity: "low",
  },
  {
    id: "dz5",
    type: "falaise",
    lat: 42.687,
    lng: -0.043,
    rayon: 200,
    label: "Parois Cirque de Gavarnie",
    severity: "high",
  },
];

// ── STARS CATALOG (50 brightest) ──
const STARS_DB = [
  {
    nom: "Sirius",
    ra: 101.29,
    dec: -16.72,
    mag: -1.46,
    constellation: "Grand Chien",
  },
  {
    nom: "Arcturus",
    ra: 213.92,
    dec: 19.18,
    mag: -0.05,
    constellation: "Bouvier",
  },
  { nom: "Vega", ra: 279.23, dec: 38.78, mag: 0.03, constellation: "Lyre" },
  { nom: "Capella", ra: 79.17, dec: 46.0, mag: 0.08, constellation: "Cocher" },
  { nom: "Rigel", ra: 78.63, dec: -8.2, mag: 0.13, constellation: "Orion" },
  {
    nom: "Procyon",
    ra: 114.83,
    dec: 5.22,
    mag: 0.34,
    constellation: "Petit Chien",
  },
  {
    nom: "Bételgeuse",
    ra: 88.79,
    dec: 7.41,
    mag: 0.42,
    constellation: "Orion",
  },
  { nom: "Altair", ra: 297.7, dec: 8.87, mag: 0.77, constellation: "Aigle" },
  {
    nom: "Aldébaran",
    ra: 68.98,
    dec: 16.51,
    mag: 0.85,
    constellation: "Taureau",
  },
  {
    nom: "Antarès",
    ra: 247.35,
    dec: -26.43,
    mag: 0.96,
    constellation: "Scorpion",
  },
  { nom: "Spica", ra: 201.3, dec: -11.16, mag: 0.97, constellation: "Vierge" },
  {
    nom: "Pollux",
    ra: 116.33,
    dec: 28.03,
    mag: 1.14,
    constellation: "Gémeaux",
  },
  {
    nom: "Fomalhaut",
    ra: 344.41,
    dec: -29.62,
    mag: 1.16,
    constellation: "Poisson Austral",
  },
  { nom: "Déneb", ra: 310.36, dec: 45.28, mag: 1.25, constellation: "Cygne" },
  { nom: "Régulus", ra: 152.09, dec: 11.97, mag: 1.35, constellation: "Lion" },
  {
    nom: "Castor",
    ra: 113.65,
    dec: 31.89,
    mag: 1.58,
    constellation: "Gémeaux",
  },
  { nom: "Bellatrix", ra: 81.28, dec: 6.35, mag: 1.64, constellation: "Orion" },
  {
    nom: "Étoile Polaire",
    ra: 37.95,
    dec: 89.26,
    mag: 1.98,
    constellation: "Petite Ourse",
  },
  {
    nom: "Dubhe",
    ra: 165.93,
    dec: 61.75,
    mag: 1.79,
    constellation: "Grande Ourse",
  },
  {
    nom: "Merak",
    ra: 165.46,
    dec: 56.38,
    mag: 2.37,
    constellation: "Grande Ourse",
  },
];

// ── CONSTELLATION LINES ──
const CONSTELLATION_LINES = [
  {
    nom: "Orion",
    pairs: [
      ["Bételgeuse", "Bellatrix"],
      ["Rigel", "Bellatrix"],
    ],
  },
  { nom: "Grande Ourse", pairs: [["Dubhe", "Merak"]] },
  { nom: "Gémeaux", pairs: [["Castor", "Pollux"]] },
];

const BADGES_DB = [
  {
    id: 1,
    nom: "Premier Pas",
    emoji: "👣",
    desc: "1ère randonnée",
    cond: { type: "randos", val: 1 },
    xp: 100,
  },
  {
    id: 2,
    nom: "Explorateur",
    emoji: "🧭",
    desc: "5 randonnées",
    cond: { type: "randos", val: 5 },
    xp: 250,
  },
  {
    id: 3,
    nom: "Aventurier",
    emoji: "🎒",
    desc: "10 randonnées",
    cond: { type: "randos", val: 10 },
    xp: 500,
  },
  {
    id: 4,
    nom: "2000m",
    emoji: "🏔️",
    desc: "Sommet à 2000m+",
    cond: { type: "alt", val: 2000 },
    xp: 300,
  },
  {
    id: 5,
    nom: "3000m",
    emoji: "🗻",
    desc: "Sommet à 3000m+",
    cond: { type: "alt", val: 3000 },
    xp: 750,
  },
  {
    id: 6,
    nom: "Botaniste",
    emoji: "🌿",
    desc: "10 plantes scannées",
    cond: { type: "flore", val: 10 },
    xp: 300,
  },
  {
    id: 7,
    nom: "Naturaliste",
    emoji: "🦅",
    desc: "10 animaux observés",
    cond: { type: "faune", val: 10 },
    xp: 300,
  },
  {
    id: 8,
    nom: "50km",
    emoji: "🏃",
    desc: "50km au total",
    cond: { type: "dist", val: 50 },
    xp: 400,
  },
  {
    id: 9,
    nom: "Collectionneur",
    emoji: "📸",
    desc: "20 scans au total",
    cond: { type: "scans", val: 20 },
    xp: 350,
  },
  {
    id: 10,
    nom: "Légende",
    emoji: "✨",
    desc: "1 objet légendaire",
    cond: { type: "legendaire", val: 1 },
    xp: 500,
  },
  {
    id: 11,
    nom: "Pyrénéiste",
    emoji: "⛰️",
    desc: "Toutes les régions",
    cond: { type: "regions", val: 4 },
    xp: 600,
  },
  {
    id: 12,
    nom: "Éco-gardien",
    emoji: "🛡️",
    desc: "Lu 5 fiches patrimoine",
    cond: { type: "patrimoine", val: 5 },
    xp: 200,
  },
];

const CHALLENGES_DB = [
  {
    id: 1,
    nom: "Défi Hebdo",
    desc: "25km cette semaine",
    type: "distance",
    target: 25,
    reward: 200,
    end: "2026-02-20",
    emoji: "🎯",
  },
  {
    id: 2,
    nom: "Chasseur de Sommets",
    desc: "3 sommets ce mois",
    type: "sommets",
    target: 3,
    reward: 500,
    end: "2026-02-28",
    emoji: "⛰️",
  },
  {
    id: 3,
    nom: "Scanner Pro",
    desc: "15 scans en RA",
    type: "scans",
    target: 15,
    reward: 300,
    end: "2026-02-20",
    emoji: "📷",
  },
  {
    id: 4,
    nom: "Défi Communauté",
    desc: "Ensemble, 10 000km !",
    type: "community",
    target: 10000,
    current: 7834,
    reward: 100,
    end: "2026-02-28",
    emoji: "🌍",
  },
];

const PARTENAIRES_DB = [
  {
    id: 1,
    nom: "Le Refuge Gourmand",
    type: "🍽️",
    desc: "Spécialités pyrénéennes",
    reduc: 15,
    code: "ISARD15",
    loc: "Cauterets",
    cat: "Restauration",
  },
  {
    id: 2,
    nom: "Décathlon Tarbes",
    type: "🎒",
    desc: "Équipement outdoor",
    reduc: 10,
    code: "ISARD10",
    loc: "Tarbes",
    cat: "Équipement",
  },
  {
    id: 3,
    nom: "Auberge du Cirque",
    type: "🏠",
    desc: "Au pied du cirque de Gavarnie",
    reduc: 20,
    code: "ISARD20",
    loc: "Gavarnie",
    cat: "Hébergement",
  },
  {
    id: 4,
    nom: "Pyré'Nature",
    type: "🚴",
    desc: "VTT et activités outdoor",
    reduc: 15,
    code: "PYRENATURE",
    loc: "Luchon",
    cat: "Activités",
  },
  {
    id: 5,
    nom: "Éco-Lodge Pyrénées",
    type: "🌲",
    desc: "Éco-hébergement en nature",
    reduc: 15,
    code: "ECOLODGE",
    loc: "Arrens-Marsous",
    cat: "Hébergement",
  },
  {
    id: 6,
    nom: "La Cabane à Fromages",
    type: "🧀",
    desc: "Fromagerie et dégustation",
    reduc: 10,
    code: "FROMAGE10",
    loc: "Saint-Lary",
    cat: "Restauration",
  },
];

const LEADERBOARD = [
  { rank: 1, nom: "Marie L.", xp: 12450, dist: 234.5, scans: 87, avatar: "👩" },
  {
    rank: 2,
    nom: "Pierre D.",
    xp: 11200,
    dist: 198.3,
    scans: 72,
    avatar: "👨",
  },
  {
    rank: 3,
    nom: "Sophie M.",
    xp: 10890,
    dist: 187.2,
    scans: 91,
    avatar: "👩‍🦰",
  },
  { rank: 4, nom: "Lucas R.", xp: 9750, dist: 165.8, scans: 63, avatar: "👦" },
  { rank: 5, nom: "Emma B.", xp: 8900, dist: 154.2, scans: 58, avatar: "👧" },
  { rank: 6, nom: "Thomas G.", xp: 7450, dist: 132.1, scans: 44, avatar: "🧔" },
];

// ── MESSAGES GROUPES ──
const GROUPES_MSG_DB = [
  {
    id: 1,
    nom: "Pyrénées Centrales 🏔️",
    membres: 156,
    avatar: "⛰️",
    messages: [
      {
        id: 1,
        user: "Marie L.",
        avatar: "👩",
        text: "Quelqu'un pour le lac d'Oô samedi matin ?",
        time: "10:32",
        likes: 8,
        isMe: false,
      },
      {
        id: 2,
        user: "Pierre D.",
        avatar: "👨",
        text: "Moi je suis partant ! Départ 7h30 aux Granges d'Astau ?",
        time: "10:45",
        likes: 3,
        isMe: false,
      },
      {
        id: 3,
        user: "Alex R.",
        avatar: "🧑‍🦱",
        text: "Je viens aussi, on se retrouve au parking ?",
        time: "11:02",
        likes: 5,
        isMe: true,
      },
      {
        id: 4,
        user: "Sophie M.",
        avatar: "👩‍🦰",
        text: "Attention la météo annonce des orages en fin d'après-midi ⛈️",
        time: "11:15",
        likes: 12,
        isMe: false,
      },
      {
        id: 5,
        user: "Thomas G.",
        avatar: "🧔",
        text: "Merci Sophie, on fera un aller-retour rapide alors. Partez léger mais prenez une cape !",
        time: "11:28",
        likes: 4,
        isMe: false,
      },
    ],
  },
  {
    id: 2,
    nom: "Chasseurs de Sommets 🦅",
    membres: 89,
    avatar: "🗻",
    messages: [
      {
        id: 1,
        user: "Lucas R.",
        avatar: "👦",
        text: "Brèche de Roland faite hier, conditions parfaites ! Neige en haut mais bien tassée.",
        time: "08:15",
        likes: 21,
        isMe: false,
      },
      {
        id: 2,
        user: "Emma B.",
        avatar: "👧",
        text: "Photos magnifiques Lucas ! Tu y es monté en combien de temps ?",
        time: "09:30",
        likes: 3,
        isMe: false,
      },
      {
        id: 3,
        user: "Lucas R.",
        avatar: "👦",
        text: "3h30 depuis le col des Tentes, avec une bonne pause au refuge Sarradets 🏕️",
        time: "09:45",
        likes: 7,
        isMe: false,
      },
    ],
  },
  {
    id: 3,
    nom: "Randonneurs Toulousains 🌞",
    membres: 234,
    avatar: "🏠",
    messages: [
      {
        id: 1,
        user: "Claire V.",
        avatar: "👩‍🦳",
        text: "Covoiturage Toulouse → Cauterets dimanche, 3 places dispo !",
        time: "14:20",
        likes: 15,
        isMe: false,
      },
      {
        id: 2,
        user: "Marc T.",
        avatar: "👨‍🦲",
        text: "Je prends une place ! Tu pars de quel quartier ?",
        time: "14:35",
        likes: 2,
        isMe: false,
      },
    ],
  },
  {
    id: 4,
    nom: "Faune & Flore Pyrénées 🌿",
    membres: 112,
    avatar: "🦌",
    messages: [
      {
        id: 1,
        user: "Dr. Dupont",
        avatar: "🧑‍🔬",
        text: "Observation exceptionnelle : un desman des Pyrénées au lac d'Oô ce matin !",
        time: "07:45",
        likes: 45,
        isMe: false,
      },
      {
        id: 2,
        user: "Emma B.",
        avatar: "👧",
        text: "Incroyable ! C'est vraiment très rare. Tu as pu le photographier ?",
        time: "08:00",
        likes: 6,
        isMe: false,
      },
    ],
  },
];

// ── SOCIAL FEED ──
const SOCIAL_FEED_DB = [
  {
    id: 1,
    user: "Marie L.",
    avatar: "👩",
    time: "il y a 2h",
    niveau: 12,
    type: "rando",
    randoId: 1,
    randoNom: "Lac de Gaube",
    text: "Journée magique au lac de Gaube ! Les couleurs d'automne sont incroyables cette année. On a même aperçu un isard en montant 🦌",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75",
    likes: 34,
    comments: 8,
    shares: 3,
    liked: false,
    topComments: [
      {
        user: "Pierre D.",
        avatar: "👨",
        text: "Superbe ! J'y vais la semaine prochaine 🏔️",
      },
      {
        user: "Sophie M.",
        avatar: "👩‍🦰",
        text: "Les rhododendrons sont encore en fleurs ?",
      },
    ],
  },
  {
    id: 2,
    user: "Lucas R.",
    avatar: "👦",
    time: "il y a 5h",
    niveau: 9,
    type: "badge",
    badgeEmoji: "🗻",
    badgeNom: "3000m",
    text: "Nouveau badge débloqué ! La Brèche de Roland à 2807m... presque les 3000 ! La vue sur l'Espagne est dingue.",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=75",
    likes: 56,
    comments: 12,
    shares: 5,
    liked: true,
    topComments: [
      {
        user: "Thomas G.",
        avatar: "🧔",
        text: "GG ! Prochain objectif : le Vignemale ?",
      },
    ],
  },
  {
    id: 3,
    user: "Sophie M.",
    avatar: "👩‍🦰",
    time: "il y a 1j",
    niveau: 11,
    type: "scan",
    scanNom: "Gypaète barbu",
    scanEmoji: "🦅",
    text: "OBSERVATION EXCEPTIONNELLE : un gypaète barbu au-dessus du Cirque de Gavarnie ! 2.8m d'envergure, ça impressionne toujours autant. +75 XP",
    image:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=75",
    likes: 89,
    comments: 23,
    shares: 14,
    liked: false,
    topComments: [
      {
        user: "Dr. Dupont",
        avatar: "🧑‍🔬",
        text: "Magnifique ! Il y en a environ 40 couples dans les Pyrénées françaises.",
      },
      {
        user: "Marie L.",
        avatar: "👩",
        text: "J'en rêve ! On peut les voir souvent à Gavarnie ?",
      },
    ],
  },
  {
    id: 4,
    user: "Emma B.",
    avatar: "👧",
    time: "il y a 2j",
    niveau: 8,
    type: "rando",
    randoId: 7,
    randoNom: "Lacs d'Ayous",
    text: "Le reflet du Pic d'Ossau dans le lac Gentau au lever du soleil... il n'y a pas de mots. On a dormi au refuge d'Ayous, je recommande !",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=75",
    likes: 112,
    comments: 31,
    shares: 18,
    liked: true,
    topComments: [
      {
        user: "Claire V.",
        avatar: "👩‍🦳",
        text: "Le plus beau spot des Pyrénées, sans hésitation.",
      },
    ],
  },  {
    id: 5,
    user: "Isard",
    avatar: "⛰️",
    time: "il y a 1h",
    niveau: 10,
    type: "rando",
    randoId: 8,
    randoNom: "Pyrénées",
    text: "Découvrez la beauté sauvage des Pyrénées avec Isard ! Chaque sentier est une nouvelle aventure. 🏔️✨ #Isard #Randonnée #Pyrénées #Occitanie",
    image: "https://i.postimg.cc/3J32G3F7/Capture-d-e-cran-2026-02-24-a-16-47-55.avif",
    likes: 87,
    comments: 15,
    shares: 12,
    liked: false,
    topComments: [
      {
        user: "Laura L.",
        avatar: "👩",
        text: "Magnifique capture ! Les Pyrénées dans toute leur splendeur.",
      },
    ],
  },

];

// ── DIRECT MESSAGES ──
const DM_DB = [
  {
    id: "dm1",
    user: "Marie L.",
    avatar: "👩",
    online: true,
    lastSeen: "En ligne",
    unread: 2,
    messages: [
      {
        id: 1,
        user: "Marie L.",
        text: "Salut ! Tu fais quoi ce weekend ?",
        time: "09:15",
        isMe: false,
      },
      {
        id: 2,
        user: "Alex R.",
        text: "Je pensais monter au lac de Gaube, ça te dit ?",
        time: "09:20",
        isMe: true,
      },
      {
        id: 3,
        user: "Marie L.",
        text: "Carrément ! Quelle heure de départ ?",
        time: "09:22",
        isMe: false,
      },
      {
        id: 4,
        user: "Marie L.",
        text: "J'ai vérifié la météo, grand soleil samedi ☀️",
        time: "09:23",
        isMe: false,
      },
    ],
  },
  {
    id: "dm2",
    user: "Lucas R.",
    avatar: "👦",
    online: false,
    lastSeen: "Il y a 2h",
    unread: 0,
    messages: [
      {
        id: 1,
        user: "Lucas R.",
        text: "Tu as vu mon post sur la Brèche ?",
        time: "14:30",
        isMe: false,
      },
      {
        id: 2,
        user: "Alex R.",
        text: "Oui magnifique ! Bien joué 💪",
        time: "14:45",
        isMe: true,
      },
    ],
  },
  {
    id: "dm3",
    user: "Sophie M.",
    avatar: "👩‍🦰",
    online: true,
    lastSeen: "En ligne",
    unread: 1,
    messages: [
      {
        id: 1,
        user: "Sophie M.",
        text: "J'organise une sortie Cirque de Gavarnie vendredi, tu viens ?",
        time: "16:00",
        isMe: false,
      },
    ],
  },
];

// ── HIKING EVENTS ──
const EVENTS_DB = [
  {
    id: "ev1",
    titre: "Sortie groupe Lac d'Oô",
    date: "2026-02-21",
    heure: "07:30",
    lieu: "Granges d'Astau",
    rando: "Lac d'Oô",
    organisateur: "Marie L.",
    avatar: "👩",
    participants: ["Marie L.", "Pierre D.", "Alex R."],
    maxParticipants: 8,
    difficulte: "modere",
    description:
      "Sortie groupe au lac d'Oô avec pique-nique au bord du lac. Retour prévu vers 14h.",
  },
  {
    id: "ev2",
    titre: "Challenge Brèche de Roland",
    date: "2026-03-01",
    heure: "06:00",
    lieu: "Col des Tentes",
    rando: "Brèche de Roland",
    organisateur: "Lucas R.",
    avatar: "👦",
    participants: ["Lucas R.", "Thomas G."],
    maxParticipants: 6,
    difficulte: "difficile",
    description:
      "Départ tôt pour profiter du lever de soleil à la Brèche. Crampons recommandés.",
  },
  {
    id: "ev3",
    titre: "Initiation naturaliste Bethmale",
    date: "2026-02-28",
    heure: "09:00",
    lieu: "Parking du Lac",
    rando: "Lac de Bethmale",
    organisateur: "Dr. Dupont",
    avatar: "🧑‍🔬",
    participants: ["Dr. Dupont", "Emma B.", "Claire V.", "Sophie M."],
    maxParticipants: 12,
    difficulte: "facile",
    description:
      "Balade naturaliste autour du lac de Bethmale. Identification d'espèces et discussion écologique.",
  },
];

// ── WEATHER DATA ──
const METEO_DB = [
  {
    zone: "Ouest",
    lieu: "Pau / Ossau",
    temp: 8,
    vent: 25,
    icon: "cloud-sun",
    desc: "Nuageux",
    pluie: 20,
    neige: 1800,
    humidite: 72,
    lever: "07:42",
    coucher: "18:25",
  },
  {
    zone: "Centre",
    lieu: "Lourdes / Gavarnie",
    temp: 5,
    vent: 35,
    icon: "cloud-rain",
    desc: "Averses",
    pluie: 65,
    neige: 1500,
    humidite: 85,
    lever: "07:40",
    coucher: "18:27",
  },
  {
    zone: "Centre-Est",
    lieu: "Luchon / Oô",
    temp: 6,
    vent: 20,
    icon: "cloud",
    desc: "Couvert",
    pluie: 40,
    neige: 1700,
    humidite: 78,
    lever: "07:38",
    coucher: "18:29",
  },
  {
    zone: "Est",
    lieu: "Ariège / Canigou",
    temp: 10,
    vent: 15,
    icon: "sun",
    desc: "Ensoleillé",
    pluie: 5,
    neige: 2200,
    humidite: 55,
    lever: "07:35",
    coucher: "18:32",
  },
];

const DIFF = {
  facile: { label: "Facile", color: "#4ADE80", bg: "rgba(74,222,128,0.15)" },
  modere: { label: "Modéré", color: "#60A5FA", bg: "rgba(96,165,250,0.15)" },
  difficile: {
    label: "Difficile",
    color: "#F87171",
    bg: "rgba(248,113,113,0.15)",
  },
};

const rarityColor = (r) => {
  const m = {
    commun: TEXT_DIM,
    "peu commun": "#60A5FA",
    rare: "#A78BFA",
    "très rare": "#F472B6",
    légendaire: ACCENT,
  };
  return m[r] || TEXT_DIM;
};

const MeteoIcon = ({ type, size = 20 }) => {
  const s = size;
  const icons = {
    sun: <Sun size={s} color="#FBBF24" />,
    cloud: <Cloud size={s} color="#94A3B8" />,
    "cloud-sun": <CloudSun size={s} color="#FBBF24" />,
    "cloud-rain": <CloudRain size={s} color="#60A5FA" />,
    snow: <CloudSnow size={s} color="#E2E8F0" />,
    storm: <CloudLightning size={s} color="#F59E0B" />,
  };
  return icons[type] || <Sun size={s} color="#FBBF24" />;
};

// ═══════════════════════════════════
// CUSTOM HOOKS — REAL DEVICE APIs
// ═══════════════════════════════════

// ── REAL BATTERY ──
function useRealBattery() {
  const [battery, setBattery] = useState({
    level: 0.92,
    charging: false,
    supported: false,
  });
  useEffect(() => {
    if (!navigator.getBattery) return;
    navigator
      .getBattery()
      .then((batt) => {
        const update = () =>
          setBattery({
            level: batt.level,
            charging: batt.charging,
            supported: true,
          });
        update();
        batt.addEventListener("levelchange", update);
        batt.addEventListener("chargingchange", update);
        return () => {
          batt.removeEventListener("levelchange", update);
          batt.removeEventListener("chargingchange", update);
        };
      })
      .catch(() => {});
  }, []);
  return battery;
}

// ── WAKE LOCK (keep screen on) ──
function useWakeLock(active) {
  const wakeLockRef = useRef(null);
  useEffect(() => {
    if (!active || !navigator.wakeLock) return;
    let released = false;
    navigator.wakeLock
      .request("screen")
      .then((lock) => {
        if (released) {
          lock.release();
          return;
        }
        wakeLockRef.current = lock;
      })
      .catch(() => {});
    return () => {
      released = true;
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
    };
  }, [active]);
}

// ── DEVICE ORIENTATION (compass) ──
function useDeviceOrientation() {
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
    supported: false,
  });
  const [permGranted, setPermGranted] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);

  const requestPermission = useCallback(async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        const perm = await DeviceOrientationEvent.requestPermission();
        setPermGranted(perm === "granted");
        setNeedsPermission(false);
        return perm === "granted";
      } catch {
        return false;
      }
    }
    setPermGranted(true);
    setNeedsPermission(false);
    return true;
  }, []);

  useEffect(() => {
    // Check if iOS needs explicit permission
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      setNeedsPermission(true);
    }
    const handler = (e) => {
      if (e.alpha !== null) {
        setOrientation({
          alpha: e.alpha,
          beta: e.beta,
          gamma: e.gamma,
          supported: true,
        });
        setPermGranted(true);
        setNeedsPermission(false);
      }
    };
    window.addEventListener("deviceorientation", handler, true);
    return () => window.removeEventListener("deviceorientation", handler, true);
  }, []);

  return { ...orientation, requestPermission, permGranted, needsPermission };
}

// ── REAL WEATHER (Open-Meteo API, free, no key) ──
function useRealWeather(locations) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!locations || locations.length === 0 || fetchedRef.current) return;
    fetchedRef.current = true;
    setLoading(true);
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          locations.map(async (loc) => {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=sunrise,sunset,precipitation_probability_max,snowfall_sum&timezone=Europe/Paris&forecast_days=1`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Weather fetch failed");
            const data = await res.json();
            const wmo = data.current?.weather_code || 0;
            let icon = "sun",
              desc = "Ensoleillé";
            if (wmo <= 1) {
              icon = data.current?.is_day ? "sun" : "sun";
              desc = "Ensoleillé";
            } else if (wmo <= 3) {
              icon = "cloud-sun";
              desc = "Nuageux";
            } else if (wmo <= 48) {
              icon = "cloud";
              desc = "Couvert";
            } else if (wmo <= 67) {
              icon = "cloud-rain";
              desc = "Pluie";
            } else if (wmo <= 77) {
              icon = "snow";
              desc = "Neige";
            } else if (wmo <= 82) {
              icon = "cloud-rain";
              desc = "Averses";
            } else {
              icon = "storm";
              desc = "Orage";
            }
            return {
              zone: loc.zone,
              lieu: loc.lieu,
              temp: Math.round(data.current?.temperature_2m || 0),
              vent: Math.round(data.current?.wind_speed_10m || 0),
              humidite: Math.round(data.current?.relative_humidity_2m || 0),
              icon,
              desc,
              wmoCode: wmo,
              pluie: data.daily?.precipitation_probability_max?.[0] || 0,
              neige:
                Math.round((data.daily?.snowfall_sum?.[0] || 0) * 100) || 0,
              lever: data.daily?.sunrise?.[0]?.slice(11, 16) || "--:--",
              coucher: data.daily?.sunset?.[0]?.slice(11, 16) || "--:--",
              realtime: true,
            };
          })
        );
        setWeatherData(results);
      } catch (err) {
        console.warn("Open-Meteo fetch failed, using fallback:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [locations]);

  return { weatherData, loading, error };
}

// ── VOICE GUIDANCE (Web Speech API) ──
function useVoiceGuidance() {
  const synthRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
      setSupported(true);
    }
  }, []);

  const speak = useCallback(
    (text, opts = {}) => {
      if (!synthRef.current || muted) return;
      synthRef.current.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "fr-FR";
      utter.rate = opts.rate || 0.95;
      utter.pitch = opts.pitch || 1;
      utter.volume = opts.volume || 0.9;
      // Try to find a French voice
      const voices = synthRef.current.getVoices();
      const frVoice = voices.find((v) => v.lang.startsWith("fr"));
      if (frVoice) utter.voice = frVoice;
      synthRef.current.speak(utter);
    },
    [muted]
  );

  const stop = useCallback(() => {
    if (synthRef.current) synthRef.current.cancel();
  }, []);
  const toggle = useCallback(() => setMuted((m) => !m), []);

  return { speak, stop, muted, toggle, supported };
}

// ── VIBRATION HELPER ──
function vibrate(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

// ── REAL-TIME GPS POSITION (continuous) ──
function useRealPosition() {
  const [pos, setPos] = useState(null);
  const [error, setError] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const watchRef = useRef(null);
  const retryRef = useRef(0);
  useEffect(() => {
    if (!navigator.geolocation) {
      setPos({
        lat: 43.6047,
        lng: 1.4442,
        alt: 150,
        speed: 0,
        heading: 0,
        isDefault: true,
      });
      setError("Géolocalisation non supportée");
      return;
    }
    const success = (p) => {
      setPos({
        lat: p.coords.latitude,
        lng: p.coords.longitude,
        alt: p.coords.altitude || 0,
        speed: p.coords.speed || 0,
        heading: p.coords.heading || 0,
        accuracy: p.coords.accuracy || 50,
        timestamp: p.timestamp,
        isDefault: false,
      });
      setAccuracy(p.coords.accuracy);
      retryRef.current = 0;
    };
    const fail = (e) => {
      setError(e.message);
      // Retry with lower accuracy if high accuracy fails
      if (retryRef.current < 3) {
        retryRef.current++;
        navigator.geolocation.getCurrentPosition(
          success,
          () => {
            if (!pos)
              setPos({
                lat: 43.6047,
                lng: 1.4442,
                alt: 150,
                speed: 0,
                heading: 0,
                isDefault: true,
              });
          },
          { enableHighAccuracy: false, timeout: 10000, maximumAge: 30000 }
        );
      } else {
        if (!pos)
          setPos({
            lat: 43.6047,
            lng: 1.4442,
            alt: 150,
            speed: 0,
            heading: 0,
            isDefault: true,
          });
      }
    };
    // Get initial position fast with low accuracy
    navigator.geolocation.getCurrentPosition(success, fail, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 60000,
    });
    // Then watch with high accuracy
    watchRef.current = navigator.geolocation.watchPosition(success, fail, {
      enableHighAccuracy: true,
      maximumAge: 3000,
      timeout: 15000,
    });
    return () => {
      if (watchRef.current !== null)
        navigator.geolocation.clearWatch(watchRef.current);
    };
  }, []);
  return { pos, error, accuracy };
}

// ── WEB SHARE ──
async function webShare(data) {
  if (navigator.share) {
    try {
      await navigator.share(data);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

// Weather fetch locations for Pyrénées
const METEO_LOCATIONS = [
  { zone: "Ouest", lieu: "Pau / Ossau", lat: 42.84, lng: -0.44 },
  { zone: "Centre", lieu: "Lourdes / Gavarnie", lat: 42.74, lng: -0.01 },
  { zone: "Centre-Est", lieu: "Luchon / Oô", lat: 42.78, lng: 0.5 },
  { zone: "Est", lieu: "Ariège / Canigou", lat: 42.52, lng: 2.46 },
];

// ═══════ OVERPASS API: NEARBY HIKING TRAILS ═══════
function useNearbyTrails(userLoc, radiusKm) {
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastFetch = useRef(null);
  const rad = radiusKm || 15;

  useEffect(() => {
    if (!userLoc || userLoc.isDefault) return;
    const key = `${userLoc.lat.toFixed(2)}_${userLoc.lng.toFixed(2)}`;
    if (lastFetch.current === key) return;
    lastFetch.current = key;
    setLoading(true);
    const query = `[out:json][timeout:15];(way["route"="hiking"](around:${
      rad * 1000
    },${userLoc.lat},${userLoc.lng});relation["route"="hiking"](around:${
      rad * 1000
    },${userLoc.lat},${userLoc.lng}););out tags center;`;
    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: `data=${encodeURIComponent(query)}`,
    })
      .then((r) => r.json())
      .then((data) => {
        const imgs = [
          "1506905925346-21bda4d32df4",
          "1464822759023-fed622ff2c3b",
          "1486870591958-9b9d0d1dda99",
          "1501785888041-af3ef285b470",
          "1454496522488-7a8e488e8606",
          "1439066615861-d1af74d74000",
          "1470071459604-3b5ec3a7fe05",
          "1519681393784-d120267933ba",
        ];
        const parsed = (data.elements || [])
          .filter((e) => e.tags?.name)
          .slice(0, 25)
          .map((e, i) => ({
            id: `osm_${e.id}`,
            nom: e.tags.name,
            lieu: e.tags.from || e.tags.network || "Pyrénées",
            region: e.tags.network || "OpenStreetMap",
            source: "osm",
            difficulte:
              e.tags.sac_scale === "hiking"
                ? "facile"
                : e.tags.sac_scale === "mountain_hiking"
                ? "modere"
                : e.tags.sac_scale
                ? "difficile"
                : "modere",
            distance: parseFloat(e.tags.distance) || 5 + Math.random() * 10,
            duree:
              parseInt(e.tags.duration) ||
              120 + Math.floor(Math.random() * 240),
            denivele:
              parseInt(e.tags.ascent) || Math.floor(200 + Math.random() * 600),
            altitudeMax:
              parseInt(e.tags.ele) || Math.floor(1000 + Math.random() * 1500),
            note: +(4.0 + Math.random() * 0.9).toFixed(1),
            avis: Math.floor(10 + Math.random() * 200),
            description:
              e.tags.description ||
              `Sentier ${e.tags.ref || ""} · ${
                e.tags.network || "Réseau local"
              }`.trim(),
            tags: [e.tags.ref, e.tags.network, "OSM"].filter(Boolean),
            image: `https://images.unsplash.com/photo-${
              imgs[i % 8]
            }?w=800&q=80`,
            coordonnees: e.center
              ? { lat: e.center.lat, lng: e.center.lon }
              : { lat: userLoc.lat, lng: userLoc.lng },
            traceGPS: [],
            scanPoints: [],
            faune: [],
            flore: [],
            patrimoine: [],
            depart: e.tags.from || "Voir carte",
            acces: "",
            meilleureSaison: "Juin-Oct",
            balisage: e.tags.osmc_symbol || e.tags.ref || "",
            altitude_depart: parseInt(e.tags.ele) || 800,
            offline: false,
            garesProches: [],
          }));
        setTrails(parsed);
        setError(null);
        try {
          window.storage?.set(
            "cached-osm-trails",
            JSON.stringify({ key, trails: parsed, ts: Date.now() })
          );
        } catch {}
      })
      .catch((err) => {
        setError(err.message);
        try {
          window.storage
            ?.get("cached-osm-trails")
            .then((r) => {
              if (r?.value) {
                const c = JSON.parse(r.value);
                if (c.trails) setTrails(c.trails);
              }
            })
            .catch(() => {});
        } catch {}
      })
      .finally(() => setLoading(false));
  }, [userLoc, rad]);

  return { trails, loading, error };
}

// ═══════ GPS TRACK RECORDER ═══════
function useGPSTrack(isActive) {
  const [track, setTrack] = useState([]);
  const [totalDist, setTotalDist] = useState(0);
  const watchRef = useRef(null);
  const lastPosRef = useRef(null);

  const haversine = useCallback((lat1, lng1, lat2, lng2) => {
    const R = 6371,
      dLat = ((lat2 - lat1) * Math.PI) / 180,
      dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }, []);

  useEffect(() => {
    if (!isActive) {
      if (watchRef.current != null)
        navigator.geolocation.clearWatch(watchRef.current);
      return;
    }
    watchRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const pt = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          alt: pos.coords.altitude,
          ts: Date.now(),
          acc: pos.coords.accuracy,
        };
        if (pt.acc > 50) return;
        if (lastPosRef.current) {
          const d = haversine(
            lastPosRef.current.lat,
            lastPosRef.current.lng,
            pt.lat,
            pt.lng
          );
          if (d < 0.003) return;
          setTotalDist((prev) => prev + d);
        }
        lastPosRef.current = pt;
        setTrack((prev) => [...prev, pt]);
      },
      () => {},
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
    );
    return () => {
      if (watchRef.current != null)
        navigator.geolocation.clearWatch(watchRef.current);
    };
  }, [isActive, haversine]);

  const reset = useCallback(() => {
    setTrack([]);
    setTotalDist(0);
    lastPosRef.current = null;
  }, []);
  return { track, totalDist, reset };
}

// ── PERSISTENT STORAGE ──
function usePersistedState(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const loaded = useRef(false);
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage?.get(key);
        if (r?.value) setValue(JSON.parse(r.value));
      } catch {}
      loaded.current = true;
    })();
  }, [key]);
  const set = useCallback(
    async (nv) => {
      const resolved = typeof nv === "function" ? nv(value) : nv;
      setValue(resolved);
      try {
        await window.storage?.set(key, JSON.stringify(resolved));
      } catch {}
    },
    [key, value]
  );
  return [value, set];
}

// ── NIGHT MODE AUTO ──
function useNightMode(weatherData) {
  const [isNight, setIsNight] = useState(false);
  useEffect(() => {
    const check = () => {
      const h = new Date().getHours(),
        m = new Date().getMinutes(),
        now = h * 60 + m;
      if (weatherData?.[0]?.lever) {
        const [lh, lm] = weatherData[0].lever.split(":").map(Number);
        const [ch, cm] = weatherData[0].coucher.split(":").map(Number);
        setIsNight(now < lh * 60 + lm || now > ch * 60 + cm);
      } else setIsNight(h < 7 || h >= 20);
    };
    check();
    const iv = setInterval(check, 60000);
    return () => clearInterval(iv);
  }, [weatherData]);
  return isNight;
}

// ── ALTITUDE PROFILE GENERATOR ──
function genAltProfile(rando) {
  const pts = [],
    total = rando.distance,
    steps = 24;
  const sAlt = rando.altitude_depart || 1200,
    maxAlt = rando.altitudeMax || 2000;
  const peak =
    rando.difficulte === "facile"
      ? 0.45
      : rando.difficulte === "modere"
      ? 0.55
      : 0.62;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps,
      km = +(t * total).toFixed(1);
    let alt;
    if (t <= peak) {
      const p = t / peak,
        e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      alt = sAlt + (maxAlt - sAlt) * e;
    } else {
      const p = (t - peak) / (1 - peak),
        e = 1 - Math.pow(1 - p, 2);
      alt = maxAlt - (maxAlt - sAlt - 50) * e;
    }
    alt += Math.sin(t * 14) * 18 + Math.sin(t * 7) * 12;
    pts.push({ km, alt: Math.round(alt) });
  }
  return pts;
}

// ── ALTITUDE PROFILE COMPONENT ──
function AltitudeProfile({ rando, progress, compact }) {
  const data = useMemo(() => genAltProfile(rando), [rando]);
  const curKm =
    progress != null ? +((rando.distance * progress) / 100).toFixed(1) : null;
  return (
    <div
      style={{
        background: CARD,
        borderRadius: 14,
        padding: compact ? "6px 2px 2px" : "10px 6px 2px",
        border: `1px solid ${BORDER}`,
      }}
    >
      {!compact && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 8px 6px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: TEXT_MED,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <TrendingUp size={12} color={ACCENT} /> Profil altimétrique
          </span>
          <span style={{ fontSize: 9, color: TEXT_DIM }}>
            {rando.altitude_depart || "~1200"}m → {rando.altitudeMax}m
          </span>
        </div>
      )}
      <ResponsiveContainer width="100%" height={compact ? 80 : 120}>
        <AreaChart
          data={data}
          margin={{ top: 4, right: 4, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
              <stop offset="95%" stopColor={ACCENT} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="km"
            tick={{ fontSize: 8, fill: TEXT_DIM }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 8, fill: TEXT_DIM }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 50", "dataMax + 50"]}
          />
          <Area
            type="monotone"
            dataKey="alt"
            stroke={ACCENT}
            strokeWidth={2}
            fill="url(#ag)"
          />
          {curKm != null && (
            <ReferenceLine
              x={curKm}
              stroke="#F87171"
              strokeWidth={2}
              strokeDasharray="4 2"
              label={{
                value: "▼",
                position: "top",
                fill: "#F87171",
                fontSize: 10,
              }}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── ONBOARDING ──
function Onboarding({ onDone }) {
  const [step, setStep] = useState(0);
  const slides = [
    {
      emoji: "🦌",
      title: "Bienvenue sur ISARD",
      desc: "Votre compagnon de randonnée augmentée dans les Pyrénées.",
      color: ACCENT,
    },
    {
      emoji: "📱",
      title: "Scanner en RA",
      desc: "Pointez votre caméra pour identifier les espèces et gagner des XP.",
      color: "#4ADE80",
    },
    {
      emoji: "🗺️",
      title: "Carte interactive",
      desc: "Carte topo réelle, météo live, tracés GPS et points d'intérêt.",
      color: "#60A5FA",
    },
    {
      emoji: "🏆",
      title: "Progressez ensemble",
      desc: "Badges, défis, classement et partage de vos aventures.",
      color: "#F59E0B",
    },
  ];
  const s = slides[step];
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        maxWidth: 430,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Poppins', sans-serif",
        padding: "60px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 280,
          height: 280,
          background: `radial-gradient(circle, ${s.color}18, transparent 70%)`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div key={step} style={{ animation: "fadeUp 0.4s ease" }}>
          <div style={{ fontSize: 72, marginBottom: 28 }}>{s.emoji}</div>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: s.color,
              marginBottom: 10,
            }}
          >
            {s.title}
          </h1>
          <p
            style={{
              fontSize: 14,
              color: TEXT_MED,
              lineHeight: 1.7,
              maxWidth: 300,
              margin: "0 auto",
            }}
          >
            {s.desc}
          </p>
        </div>
        <style>{`@keyframes fadeUp { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform: translateY(0); } }`}</style>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === step ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === step ? s.color : BORDER,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => (step < 3 ? setStep(step + 1) : onDone())}
          style={{
            width: "100%",
            padding: 17,
            borderRadius: 16,
            background: s.color,
            border: "none",
            color: BG,
            fontWeight: 800,
            fontSize: 15,
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          {step < 3 ? "Suivant" : "Commencer l'aventure"}
        </button>
        {step < 3 && (
          <button
            onClick={onDone}
            style={{
              width: "100%",
              padding: 12,
              background: "none",
              border: "none",
              color: TEXT_DIM,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "Poppins",
              marginTop: 6,
            }}
          >
            Passer
          </button>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════
// MAIN APP
// ═══════════════════════════════════
export default function IsardApp() {
  const [screen, setScreen] = useState("splash");
  const [tab, setTab] = useState("discover");
  const [selectedRando, setSelectedRando] = useState(null);
  const [isNav, setIsNav] = useState(false);
  const [navData, setNavData] = useState(null);
  const [scanMode, setScanMode] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [searchQ, setSearchQ] = useState("");
  const [filterDiff, setFilterDiff] = useState("tous");
  const [toast, setToast] = useState(null);

  // ── REAL-TIME GPS (continuous) ──
  const { pos: realPos, accuracy: gpsAccuracy } = useRealPosition();
  const userLoc = realPos;
  const gps = userLoc; // alias for hooks that expect gps obj

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Marie L. a aimé votre post",
      time: "il y a 5min",
      read: false,
    },
    {
      id: 2,
      text: "Nouveau défi disponible : Scanner Pro",
      time: "il y a 1h",
      read: false,
    },
    {
      id: 3,
      text: "Sophie M. vous a mentionné dans un commentaire",
      time: "il y a 3h",
      read: true,
    },
  ]);
  const [showNotifs, setShowNotifs] = useState(false);

  // ── REAL APIs ──
  const realBattery = useRealBattery();
  const voice = useVoiceGuidance();
  const { weatherData, loading: weatherLoading } =
    useRealWeather(METEO_LOCATIONS);
  const liveMeteo = weatherData || METEO_DB;

  // ── NIGHT MODE ──
  const isNight = useNightMode(weatherData);
  const [nightOverride, setNightOverride] = useState(null); // null=auto, true/false=manual
  const nightMode = nightOverride !== null ? nightOverride : isNight;

  // ── PERSISTENCE ──
  const [onboardDone, setOnboardDone] = usePersistedState(
    "isard:onboard",
    false
  );
  const [favorites, setFavorites] = usePersistedState("isard:favs", [1, 3]);
  const [persistedStats, setPersistedStats] = usePersistedState(
    "isard:stats",
    null
  );
  const [persistedXp, setPersistedXp] = usePersistedState("isard:xp", null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const [user, setUser] = useState({
    nom: "Randonneur",
    prenom: "Alex",
    niveau: 5,
    xp: 1250,
    ville: "Toulouse",
    avatar: "🧑‍🦱",
    followers: 45,
    following: 32,
  });

  const [stats, setStats] = useState({
    totalDist: 45.6,
    totalDeniv: 2340,
    totalRandos: 8,
    totalHeures: 24,
    altMax: 2450,
    floraScans: [1, 2, 3],
    faunaScans: [101, 102, 105],
    patrimoineScans: [],
    scanCollection: [],
    activiteHebdo: [5.2, 0, 8.1, 0, 3.4, 12.5, 6.8],
    challengeProgress: { 1: 18.5, 2: 1, 3: 8 },
    regionsVisited: ["Hautes-Pyrénées", "Haute-Garonne"],
  });

  // Restore persisted stats/xp on mount
  useEffect(() => {
    if (persistedStats) setStats((s) => ({ ...s, ...persistedStats }));
    if (persistedXp) setUser((u) => ({ ...u, xp: persistedXp }));
  }, [persistedStats, persistedXp]);

  // ── DYNAMIC BADGE SYSTEM ──
  const [badgeToasts, setBadgeToasts] = useState([]);
  const prevBadgesRef = useRef(new Set());
  const unlockedBadges = useMemo(() => {
    const ids = [];
    BADGES_DB.forEach((b) => {
      const c = b.cond;
      let met = false;
      if (c.type === "randos") met = stats.totalRandos >= c.val;
      else if (c.type === "alt") met = stats.altMax >= c.val;
      else if (c.type === "flore") met = stats.floraScans.length >= c.val;
      else if (c.type === "faune") met = stats.faunaScans.length >= c.val;
      else if (c.type === "dist") met = stats.totalDist >= c.val;
      else if (c.type === "scans")
        met = stats.floraScans.length + stats.faunaScans.length >= c.val;
      else if (c.type === "legendaire")
        met = stats.scanCollection.some((id) => {
          const all = [...ESPECES_DB.flore, ...ESPECES_DB.faune];
          const sp = all.find((s) => s.id === id);
          return sp?.rarete === "très rare" || sp?.rarete === "légendaire";
        });
      else if (c.type === "regions")
        met = (stats.regionsVisited?.length || 0) >= c.val;
      else if (c.type === "patrimoine")
        met = stats.scanCollection.length >= c.val;
      if (met) ids.push(b.id);
    });
    return ids;
  }, [stats]);
  // Toast on new badge unlock
  useEffect(() => {
    const prev = prevBadgesRef.current;
    unlockedBadges.forEach((id) => {
      if (!prev.has(id)) {
        const badge = BADGES_DB.find((b) => b.id === id);
        if (badge && prev.size > 0) {
          showToast(
            `🏆 Badge débloqué: ${badge.emoji} ${badge.nom} ! +${badge.xp} XP`
          );
          setUser((p) => ({ ...p, xp: p.xp + badge.xp }));
        }
      }
    });
    prevBadgesRef.current = new Set(unlockedBadges);
  }, [unlockedBadges, showToast]);
  const [appSettings, setAppSettings] = useState({
    notifications: true,
    offline: true,
    battery: false,
    sound: true,
  });
  const [carnetEntries, setCarnetEntries] = useState([]);
  const [offlineReady, setOfflineReady] = useState(false);

  // ── CARNET PERSISTENCE ──
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage?.get("isard-carnet");
        if (r?.value) setCarnetEntries(JSON.parse(r.value));
      } catch {}
    })();
  }, []);
  const saveToCarnet = useCallback(
    async (entry) => {
      const updated = [entry, ...carnetEntries].slice(0, 200);
      setCarnetEntries(updated);
      try {
        await window.storage?.set("isard-carnet", JSON.stringify(updated));
      } catch {}
    },
    [carnetEntries]
  );

  const prepareOffline = useCallback(
    async (rando) => {
      try {
        const data = {
          rando,
          traceGPS: rando.traceGPS,
          scanPoints: rando.scanPoints,
          timestamp: Date.now(),
        };
        await window.storage?.set(
          "isard-offline-" + rando.id,
          JSON.stringify(data)
        );
        setOfflineReady(true);
        showToast("Données hors-ligne sauvegardées !");
      } catch {
        showToast("Erreur sauvegarde hors-ligne");
      }
    },
    [showToast]
  );

  useEffect(() => {
    if (screen === "splash")
      setTimeout(() => setScreen(onboardDone ? "main" : "onboard"), 2200);
  }, [screen, onboardDone]);

  const calcDist = useCallback((lat1, lon1, lat2, lon2) => {
    const R = 6371,
      dLat = ((lat2 - lat1) * Math.PI) / 180,
      dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }, []);

  // ── OVERPASS API: dynamic nearby trails ──
  const { trails: osmTrails, loading: osmLoading } = useNearbyTrails(userLoc);
  const allRandos = useMemo(
    () => [...RANDONNEES_DB, ...osmTrails],
    [osmTrails]
  );

  // ── GPS TRACK RECORDER ──
  const { track: gpsTrack, totalDist: gpsDistance } = useGPSTrack(
    isNav && navData && !navData.paused
  );

  const filteredRandos = useMemo(() => {
    return allRandos
      .filter((r) => {
        const matchS =
          r.nom.toLowerCase().includes(searchQ.toLowerCase()) ||
          r.lieu.toLowerCase().includes(searchQ.toLowerCase()) ||
          r.tags.some((t) => t.toLowerCase().includes(searchQ.toLowerCase()));
        const matchD = filterDiff === "tous" || r.difficulte === filterDiff;
        return matchS && matchD;
      })
      .map((r) => ({
        ...r,
        distFromUser: userLoc
          ? calcDist(
              userLoc.lat,
              userLoc.lng,
              r.coordonnees.lat,
              r.coordonnees.lng
            )
          : null,
      }))
      .sort((a, b) => (a.distFromUser || 999) - (b.distFromUser || 999));
  }, [searchQ, filterDiff, userLoc, calcDist, allRandos]);

  // AR scan points for current context
  const [arScanPoints, setArScanPoints] = useState([]);

  const doScan = useCallback((randoScanPoints) => {
    setArScanPoints(randoScanPoints || []);
    setScanMode(true);
    setScanResult(null);
  }, []);

  // ── NEARBY SPECIES: compute from ALL rando scanPoints + user GPS ──
  const nearbySpecies = useMemo(() => {
    if (!userLoc) return [];
    const species = [];
    allRandos.forEach((r) => {
      if (!r.scanPoints) return;
      r.scanPoints.forEach((sp) => {
        if (!sp.lat || !sp.lng) return;
        const distKm = calcDist(userLoc.lat, userLoc.lng, sp.lat, sp.lng);
        const distM = Math.round(distKm * 1000);
        species.push({
          ...sp,
          nom: sp.name || sp.nom,
          randoId: r.id,
          randoNom: r.nom,
          distance: distM,
          spawnLat: sp.lat,
          spawnLng: sp.lng,
          scannable: distM < 500,
        });
      });
    });
    return species.sort((a, b) => a.distance - b.distance).slice(0, 20);
  }, [userLoc, calcDist, allRandos]);

  // ── PROXIMITY ALERTS: auto-detect nearby species ──
  const proxAlertedRef = useRef(new Set());
  useEffect(() => {
    if (!nearbySpecies || !nearbySpecies.length) return;
    nearbySpecies.forEach((sp) => {
      if (
        sp.distance < 200 &&
        sp.scannable &&
        !proxAlertedRef.current.has(sp.id)
      ) {
        proxAlertedRef.current.add(sp.id);
        vibrate([50, 30, 50]);
        showToast(
          `${sp.emoji} ${sp.nom || sp.name} détecté à ${sp.distance}m !`
        );
      }
    });
  }, [nearbySpecies, showToast]);

  const handleScanSpecies = useCallback(
    (sp) => {
      doScan([sp]);
    },
    [doScan]
  );

  const handleARClose = useCallback(
    (discoveredItems) => {
      setScanMode(false);
      setScanResult(null);
      if (discoveredItems && discoveredItems.length > 0) {
        let totalXp = 0;
        discoveredItems.forEach((item) => {
          totalXp += item.xp || 0;
          const isFlora = item.id < 100;
          const key = isFlora ? "floraScans" : "faunaScans";
          setStats((prev) => ({
            ...prev,
            scanCollection: prev.scanCollection.includes(item.id)
              ? prev.scanCollection
              : [...prev.scanCollection, item.id],
            [key]: prev[key].includes(item.id)
              ? prev[key]
              : [...prev[key], item.id],
          }));
        });
        if (totalXp > 0) {
          setUser((prev) => ({ ...prev, xp: prev.xp + totalXp }));
          showToast(
            `+${totalXp} XP gagnés ! (${discoveredItems.length} espèce${
              discoveredItems.length > 1 ? "s" : ""
            })`
          );
        }
      }
    },
    [showToast]
  );

  if (screen === "splash") return <Splash />;
  if (screen === "onboard")
    return (
      <Onboarding
        onDone={() => {
          setOnboardDone(true);
          setScreen("main");
        }}
      />
    );
  if (scanMode)
    return (
      <ARScanScreen
        saveToCarnet={saveToCarnet}
        scanPoints={arScanPoints}
        traceGPS={selectedRando?.traceGPS || []}
        voice={voice}
        onClose={handleARClose}
        realPos={userLoc}
        liveMeteo={liveMeteo}
        stats={stats}
        showToast={showToast}
      />
    );

  if (selectedRando && !isNav) {
    return (
      <RandoDetail
        rando={selectedRando}
        userLoc={userLoc}
        calcDist={calcDist}
        isFav={favorites.includes(selectedRando.id)}
        onBack={() => setSelectedRando(null)}
        showToast={showToast}
        onFav={() => {
          setFavorites((p) =>
            p.includes(selectedRando.id)
              ? p.filter((i) => i !== selectedRando.id)
              : [...p, selectedRando.id]
          );
          showToast(
            favorites.includes(selectedRando.id)
              ? "Retiré des favoris"
              : "Ajouté aux favoris ❤️"
          );
        }}
        onStart={() => {
          setNavData({ startTime: Date.now(), progress: 0, paused: false });
          setIsNav(true);
        }}
        onScan={() => doScan(selectedRando.scanPoints)}
      />
    );
  }

  if (isNav && navData) {
    return (
      <NavScreen
        rando={selectedRando}
        navData={navData}
        setNavData={setNavData}
        onScan={() => doScan(selectedRando.scanPoints)}
        showToast={showToast}
        realBattery={realBattery}
        voice={voice}
        realPos={userLoc}
        gpsTrack={gpsTrack}
        gpsDistance={gpsDistance}
        traceGPS={selectedRando.traceGPS || []}
        prepareOffline={() => prepareOffline(selectedRando)}
        offlineReady={offlineReady}
        onStop={(s) => {
          setIsNav(false);
          setNavData(null);
          if (s?.completed) {
            setStats((p) => {
              const ns = {
                ...p,
                totalDist: p.totalDist + s.distance,
                totalDeniv: p.totalDeniv + s.denivele,
                totalRandos: p.totalRandos + 1,
                totalHeures: p.totalHeures + s.duree / 60,
                altMax: Math.max(p.altMax, selectedRando.altitudeMax),
                regionsVisited: [
                  ...new Set([...p.regionsVisited, selectedRando.region]),
                ],
              };
              setPersistedStats({
                totalDist: ns.totalDist,
                totalDeniv: ns.totalDeniv,
                totalRandos: ns.totalRandos,
                totalHeures: ns.totalHeures,
                altMax: ns.altMax,
              });
              return ns;
            });
            const newXp =
              user.xp + Math.floor(s.distance * 10 + s.denivele / 10);
            setUser((p) => ({ ...p, xp: newXp }));
            setPersistedXp(newXp);
          }
          setTab("profile");
        }}
      />
    );
  }

  return (
    <div
      style={{
        background: BG,
        color: TEXT,
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        maxWidth: 430,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        h1, h2, h3, h4, h5, h6, p, span, label, b, strong, a, li, td, th, dt, dd, figcaption, blockquote, pre, code, small { color: inherit !important; }
        div { color: inherit; }
        input, textarea, select { color: ${TEXT} !important; background: ${CARD} !important; border-color: ${BORDER} !important; }
        input::placeholder, textarea::placeholder { color: ${TEXT_DIM} !important; }
        button { font-family: 'Poppins', sans-serif; color: inherit; }
        input[type="range"] { accent-color: ${ACCENT}; }
        .leaflet-popup-content-wrapper, .leaflet-popup-content, .leaflet-popup-content * { color: #333 !important; }
      `}</style>
      {/* Night mode overlay */}
      {nightMode && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,5,30,0.15)",
            pointerEvents: "none",
            zIndex: 999,
            mixBlendMode: "multiply",
          }}
        />
      )}
      <TopBar
        user={user}
        notifications={notifications}
        showNotifs={showNotifs}
        setShowNotifs={setShowNotifs}
        setNotifications={setNotifications}
        nightMode={nightMode}
        nightOverride={nightOverride}
        setNightOverride={setNightOverride}
      />
      <main style={{ paddingBottom: 90 }}>
        {tab === "discover" && (
          <Discover
            randos={filteredRandos}
            searchQ={searchQ}
            setSearchQ={setSearchQ}
            filterDiff={filterDiff}
            setFilterDiff={setFilterDiff}
            favorites={favorites}
            onSelect={setSelectedRando}
            onScan={() => doScan([])}
            osmLoading={osmLoading}
            osmCount={osmTrails.length}
          />
        )}
        {tab === "map" && (
          <MapView
            randos={allRandos}
            onSelect={setSelectedRando}
            userLoc={userLoc}
            gpsAccuracy={gpsAccuracy}
            liveMeteo={liveMeteo}
            weatherLoading={weatherLoading}
            gpsTrack={gpsTrack}
          />
        )}
        {tab === "scanner" && (
          <ScannerTab
            userLoc={userLoc}
            gpsAccuracy={gpsAccuracy}
            nearbySpecies={nearbySpecies}
            onScan={doScan}
            onScanSpecies={handleScanSpecies}
            stats={stats}
            user={user}
            showToast={showToast}
            liveMeteo={liveMeteo}
          />
        )}
        {tab === "social" && (
          <SocialHub
            user={user}
            stats={stats}
            challenges={CHALLENGES_DB}
            leaderboard={LEADERBOARD}
            showToast={showToast}
          />
        )}
        {tab === "profile" && (
          <Profile
            user={user}
            stats={stats}
            badges={BADGES_DB}
            unlocked={unlockedBadges}
            partenaires={PARTENAIRES_DB}
            showToast={showToast}
            appSettings={appSettings}
            setAppSettings={setAppSettings}
            carnetEntries={carnetEntries}
          />
        )}
      </main>
      <BottomNav tab={tab} setTab={setTab} />
      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 56,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
            padding: "10px 20px",
            borderRadius: 14,
            background: ACCENT,
            color: BG,
            fontWeight: 700,
            fontSize: 13,
            fontFamily: "Poppins",
            boxShadow: `0 8px 32px ${ACCENT}40`,
            animation: "toastIn 0.3s ease",
          }}
        >
          {toast}
          <style>{`@keyframes toastIn { from { opacity:0; transform: translateX(-50%) translateY(-10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }`}</style>
        </div>
      )}
    </div>
  );
}

// ═══════ SPLASH ═══════
function Splash() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 430,
        margin: "0 auto",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: 30,
          overflow: "hidden",
        }}
      >
        <img
          src={LOGO_URL}
          alt="ISARD"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 42,
          fontWeight: 900,
          color: ACCENT,
          marginTop: 24,
          letterSpacing: 6,
        }}
      >
        ISARD
      </h1>
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: TEXT_DIM,
          marginTop: 4,
          fontSize: 14,
          letterSpacing: 2,
        }}
      >
        RANDONNÉE AUGMENTÉE
      </p>
      <div
        style={{
          marginTop: 40,
          width: 40,
          height: 4,
          background: ACCENT,
          borderRadius: 2,
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      >
        <style>{`@keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
      </div>
    </div>
  );
}

// ═══════ TOP BAR ═══════
function TopBar({
  user,
  notifications,
  showNotifs,
  setShowNotifs,
  setNotifications,
  nightMode,
  nightOverride,
  setNightOverride,
}) {
  const xpNext =
    [0, 200, 500, 1000, 2000, 4000, 8000, 16000, 32000][user.niveau] || 64000;
  const xpPrev =
    [0, 200, 500, 1000, 2000, 4000, 8000, 16000, 32000][user.niveau - 1] || 0;
  const pct = Math.min(((user.xp - xpPrev) / (xpNext - xpPrev)) * 100, 100);
  const unread = notifications.filter((n) => !n.read).length;
  return (
    <header
      style={{
        background: CARD,
        padding: "48px 16px 16px",
        borderBottom: `1px solid ${BORDER}`,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <img
              src={LOGO_URL}
              alt="ISARD"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: ACCENT,
              letterSpacing: 2,
            }}
          >
            ISARD
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* Night mode toggle */}
          <button
            onClick={() =>
              setNightOverride(
                nightOverride === null
                  ? !nightMode
                  : nightOverride
                  ? false
                  : null
              )
            }
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: nightMode ? "#312E81" : "transparent",
              border: "none",
              color: nightMode ? "#A78BFA" : TEXT_DIM,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            title={
              nightOverride === null
                ? "Mode nuit: auto"
                : nightMode
                ? "Actif"
                : "Inactif"
            }
          >
            {nightMode ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          {/* Notifications bell */}
          <button
            onClick={() => setShowNotifs(!showNotifs)}
            style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: showNotifs ? ACCENT_DIM : "transparent",
              border: "none",
              color: showNotifs ? ACCENT : TEXT_DIM,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Bell size={18} />
            {unread > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#F87171",
                  fontSize: 8,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {unread}
              </div>
            )}
          </button>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: 11, color: TEXT_DIM }}>
              Niv.{user.niveau}
            </span>
            <div
              style={{
                width: 60,
                height: 3,
                background: BORDER,
                borderRadius: 2,
                marginTop: 2,
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: ACCENT,
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: ACCENT_DIM,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              border: `1px solid ${ACCENT}40`,
            }}
          >
            {user.avatar}
          </div>
        </div>
      </div>
      {/* Notifications dropdown */}
      {showNotifs && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 16,
            zIndex: 200,
            width: 300,
            background: CARD2,
            borderRadius: 16,
            border: `1px solid ${BORDER}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              borderBottom: `1px solid ${BORDER}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 14, color: TEXT }}>
              Notifications
            </span>
            <button
              onClick={() => {
                setNotifications((prev) =>
                  prev.map((n) => ({ ...n, read: true }))
                );
              }}
              style={{
                background: "none",
                border: "none",
                color: ACCENT,
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Poppins",
              }}
            >
              Tout lire
            </button>
          </div>
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() =>
                setNotifications((prev) =>
                  prev.map((nn) =>
                    nn.id === n.id ? { ...nn, read: true } : nn
                  )
                )
              }
              style={{
                padding: "12px 16px",
                borderBottom: `1px solid ${BORDER}`,
                display: "flex",
                gap: 10,
                alignItems: "center",
                cursor: "pointer",
                background: n.read ? "transparent" : `${ACCENT}08`,
              }}
            >
              {!n.read && (
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: ACCENT,
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: 12,
                    color: n.read ? TEXT_DIM : TEXT,
                    lineHeight: 1.4,
                  }}
                >
                  {n.text}
                </p>
                <p style={{ fontSize: 9, color: TEXT_DIM, marginTop: 2 }}>
                  {n.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

// ═══════ BOTTOM NAV ═══════
function BottomNav({ tab, setTab }) {
  const tabs = [
    { id: "discover", icon: Compass, label: "Explorer" },
    { id: "map", icon: Map, label: "Carte" },
    { id: "scanner", icon: Scan, label: "Scanner" },
    { id: "social", icon: Globe, label: "Social" },
    { id: "profile", icon: User, label: "Profil" },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: 430,
        margin: "0 auto",
        background: CARD,
        borderTop: `1px solid ${BORDER}`,
        display: "flex",
        padding: "8px 4px",
        zIndex: 100,
      }}
    >
      {tabs.map((t) => {
        const active = tab === t.id;
        const isCenter = t.id === "scanner";
        return (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: isCenter ? "4px" : "6px 0",
              background: isCenter
                ? active
                  ? ACCENT
                  : ACCENT_DIM
                : active
                ? ACCENT_DIM
                : "transparent",
              border: isCenter ? `2px solid ${ACCENT}` : "none",
              borderRadius: isCenter ? 16 : 12,
              color: isCenter
                ? active
                  ? BG
                  : ACCENT
                : active
                ? ACCENT
                : TEXT_DIM,
              cursor: "pointer",
              margin: isCenter ? "0 2px" : 0,
              transform: isCenter ? "translateY(-8px)" : "none",
              boxShadow: isCenter ? "0 4px 16px rgba(204,255,0,0.3)" : "none",
            }}
          >
            <t.icon
              size={isCenter ? 24 : 20}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <span
              style={{
                fontSize: 9,
                marginTop: 2,
                fontWeight: active || isCenter ? 700 : 400,
                color: isCenter
                  ? active
                    ? BG
                    : ACCENT
                  : active
                  ? ACCENT
                  : TEXT_DIM,
              }}
            >
              {t.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

// ═══════ DISCOVER TAB ═══════
function Discover({
  randos,
  searchQ,
  setSearchQ,
  filterDiff,
  setFilterDiff,
  favorites,
  onSelect,
  onScan,
  osmLoading,
  osmCount,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [maxDuration, setMaxDuration] = useState(600);
  const [maxDist, setMaxDist] = useState(20);
  const [sortBy, setSortBy] = useState("note");

  const filtered = useMemo(() => {
    let list = randos.filter(
      (r) => r.duree <= maxDuration && r.distance <= maxDist
    );
    if (sortBy === "note") list = [...list].sort((a, b) => b.note - a.note);
    else if (sortBy === "distance")
      list = [...list].sort((a, b) => a.distance - b.distance);
    else if (sortBy === "duree")
      list = [...list].sort((a, b) => a.duree - b.duree);
    else if (sortBy === "denivele")
      list = [...list].sort((a, b) => b.denivele - a.denivele);
    return list;
  }, [randos, maxDuration, maxDist, sortBy]);

  return (
    <div style={{ padding: "20px 16px" }}>
      {/* OSM Trail Status */}
      {osmCount > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 8,
            padding: "6px 12px",
            background: "#3B82F610",
            borderRadius: 10,
            border: "1px solid #3B82F620",
          }}
        >
          <Globe size={12} color="#3B82F6" />
          <span style={{ fontSize: 10, color: "#3B82F6", fontWeight: 600 }}>
            {osmCount} sentiers OSM chargés autour de vous
          </span>
        </div>
      )}
      {osmLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 8,
            padding: "6px 12px",
            background: ACCENT_DIM,
            borderRadius: 10,
          }}
        >
          <Loader2
            size={12}
            color={ACCENT}
            style={{ animation: "spin 1s linear infinite" }}
          />
          <span style={{ fontSize: 10, color: ACCENT }}>
            Chargement sentiers à proximité...
          </span>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
      <div style={{ position: "relative", marginBottom: 12 }}>
        <Search
          size={18}
          color={TEXT_DIM}
          style={{ position: "absolute", left: 14, top: 14 }}
        />
        <input
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Sentier, lieu, thème..."
          style={{
            width: "100%",
            padding: "12px 48px 12px 42px",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            color: TEXT,
            fontSize: 14,
            fontFamily: "Poppins",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            position: "absolute",
            right: 8,
            top: 6,
            width: 36,
            height: 36,
            borderRadius: 10,
            background: showFilters ? ACCENT_DIM : CARD2,
            border: `1px solid ${showFilters ? ACCENT : BORDER}`,
            color: showFilters ? ACCENT : TEXT_DIM,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <SlidersHorizontal size={16} />
        </button>
      </div>
      {showFilters && (
        <div
          style={{
            background: CARD,
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: TEXT_MED,
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <SlidersHorizontal size={12} color={ACCENT} /> Filtres avancés
          </p>
          {/* Difficulty pills */}
          <div
            style={{
              display: "flex",
              gap: 6,
              marginBottom: 14,
              flexWrap: "wrap",
            }}
          >
            {["tous", "facile", "modere", "difficile"].map((d) => (
              <button
                key={d}
                onClick={() => setFilterDiff(d)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "Poppins",
                  cursor: "pointer",
                  background: filterDiff === d ? ACCENT : CARD2,
                  color: filterDiff === d ? BG : TEXT_DIM,
                  border: `1px solid ${filterDiff === d ? ACCENT : BORDER}`,
                }}
              >
                {d === "tous" ? "Tous" : DIFF[d]?.label || d}
              </button>
            ))}
          </div>
          {/* Duration slider */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 10, color: TEXT_DIM }}>Durée max</span>
              <span style={{ fontSize: 10, color: ACCENT, fontWeight: 600 }}>
                {Math.floor(maxDuration / 60)}h
                {maxDuration % 60 > 0
                  ? (maxDuration % 60).toString().padStart(2, "0")
                  : ""}
              </span>
            </div>
            <input
              type="range"
              min={60}
              max={600}
              step={30}
              value={maxDuration}
              onChange={(e) => setMaxDuration(+e.target.value)}
              style={{ width: "100%", accentColor: ACCENT, height: 4 }}
            />
          </div>
          {/* Distance slider */}
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 10, color: TEXT_DIM }}>
                Distance max
              </span>
              <span style={{ fontSize: 10, color: ACCENT, fontWeight: 600 }}>
                {maxDist}km
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={25}
              step={1}
              value={maxDist}
              onChange={(e) => setMaxDist(+e.target.value)}
              style={{ width: "100%", accentColor: ACCENT, height: 4 }}
            />
          </div>
          {/* Sort */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: TEXT_DIM, lineHeight: "28px" }}>
              Tri :
            </span>
            {[
              { k: "note", l: "Note" },
              { k: "distance", l: "Distance" },
              { k: "duree", l: "Durée" },
              { k: "denivele", l: "D+" },
            ].map((s) => (
              <button
                key={s.k}
                onClick={() => setSortBy(s.k)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 12,
                  fontSize: 10,
                  fontWeight: 600,
                  fontFamily: "Poppins",
                  cursor: "pointer",
                  background: sortBy === s.k ? ACCENT_DIM : "transparent",
                  color: sortBy === s.k ? ACCENT : TEXT_DIM,
                  border: `1px solid ${
                    sortBy === s.k ? ACCENT + "50" : BORDER
                  }`,
                }}
              >
                {s.l}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={onScan}
        style={{
          width: "100%",
          padding: "16px",
          marginBottom: 20,
          borderRadius: 16,
          background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}08)`,
          border: `1px solid ${ACCENT}40`,
          display: "flex",
          alignItems: "center",
          gap: 14,
          cursor: "pointer",
          color: TEXT,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: ACCENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Aperture size={24} color={BG} />
        </div>
        <div style={{ textAlign: "left" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Poppins",
              color: TEXT,
            }}
          >
            Scanner autour de moi
          </p>
          <p style={{ fontSize: 11, color: TEXT_DIM, fontFamily: "Poppins" }}>
            Identifiez faune, flore et patrimoine en RA
          </p>
        </div>
        <ChevronRight size={18} color={ACCENT} style={{ marginLeft: "auto" }} />
      </button>
      <p style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 12 }}>
        {filtered.length} sentier{filtered.length > 1 ? "s" : ""}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map((r) => (
          <button
            key={r.id}
            onClick={() => onSelect(r)}
            style={{
              width: "100%",
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${BORDER}`,
              background: CARD,
              display: "flex",
              cursor: "pointer",
              textAlign: "left",
              color: TEXT,
              padding: 0,
            }}
          >
            <div
              style={{
                width: 110,
                minHeight: 110,
                position: "relative",
                flexShrink: 0,
              }}
            >
              <img
                src={r.image}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  padding: "2px 8px",
                  borderRadius: 8,
                  fontSize: 10,
                  fontWeight: 700,
                  background: (DIFF[r.difficulte] || DIFF.modere).bg,
                  color: (DIFF[r.difficulte] || DIFF.modere).color,
                  fontFamily: "Poppins",
                }}
              >
                {(DIFF[r.difficulte] || DIFF.modere).label}
              </div>
              {favorites.includes(r.id) && (
                <Heart
                  size={14}
                  fill="#F87171"
                  color="#F87171"
                  style={{ position: "absolute", top: 8, right: 8 }}
                />
              )}
            </div>
            <div
              style={{
                flex: 1,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    fontFamily: "Poppins",
                    marginBottom: 2,
                    color: TEXT,
                  }}
                >
                  {r.nom}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: TEXT_DIM,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <MapPin size={10} />
                  {r.lieu}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 11,
                  color: TEXT_MED,
                  marginTop: 8,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Clock size={12} />
                  {Math.floor(r.duree / 60)}h
                  {r.duree % 60 > 0
                    ? (r.duree % 60).toString().padStart(2, "0")
                    : ""}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <TrendingUp size={12} />
                  {r.denivele}m
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Route size={12} />
                  {r.distance}km
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    marginLeft: "auto",
                    color: ACCENT,
                  }}
                >
                  <Star size={12} fill={ACCENT} />
                  {r.note}
                </span>
              </div>
              {r.distFromUser != null && (
                <p
                  style={{
                    fontSize: 10,
                    color: r.distFromUser < 20 ? "#4ADE80" : ACCENT,
                    fontWeight: r.distFromUser < 20 ? 600 : 400,
                    marginTop: 4,
                  }}
                >
                  {r.distFromUser < 1
                    ? `📍 ${Math.round(r.distFromUser * 1000)}m`
                    : r.distFromUser < 20
                    ? `📍 ${r.distFromUser.toFixed(1)}km`
                    : `📍 ${r.distFromUser.toFixed(0)}km`}
                  {r.distFromUser < 5 ? " · Proche !" : ""}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ═══════ MAP VIEW + MÉTÉO ═══════
function MapView({
  randos,
  onSelect,
  userLoc,
  gpsAccuracy,
  liveMeteo,
  weatherLoading,
  gpsTrack,
}) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [mapFilter, setMapFilter] = useState("tous");
  const [showMeteo, setShowMeteo] = useState(false);
  const [selectedMeteo, setSelectedMeteo] = useState(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const [followUser, setFollowUser] = useState(true);
  const [mapStyle, setMapStyle] = useState("osm"); // osm | ign | satellite
  const [showRefuges, setShowRefuges] = useState(true);
  const [nearbyRefuges, setNearbyRefuges] = useState(REFUGES_DB);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const refugeMarkersRef = useRef([]);
  const tileLayerRef = useRef(null);
  const userMarkerRef = useRef(null);
  const userCircleRef = useRef(null);

  const meteoData = liveMeteo || METEO_DB;

  // ── Load Leaflet dynamically ──
  useEffect(() => {
    if (window.L) {
      setLeafletReady(true);
      return;
    }
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(css);
    const js = document.createElement("script");
    js.src =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    js.onload = () => setLeafletReady(true);
    js.onerror = () => setLeafletReady(true); // graceful fallback
    document.head.appendChild(js);
  }, []);

  const filtered =
    mapFilter === "tous"
      ? randos
      : randos.filter((r) => r.difficulte === mapFilter);

  // ── Init/update Leaflet map ──
  useEffect(() => {
    if (!leafletReady || !mapContainerRef.current) return;
    const L = window.L;
    if (!L) return;
    try {
      if (!mapInstanceRef.current) {
        const center = userLoc ? [userLoc.lat, userLoc.lng] : [42.8, 0.5];
        const zoom = userLoc && !userLoc.isDefault ? 13 : 8;
        mapInstanceRef.current = L.map(mapContainerRef.current, {
          center,
          zoom,
          zoomControl: false,
          attributionControl: false,
        });
        const tiles = {
          osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          ign: "https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&FORMAT=image/png&STYLE=normal",
          satellite:
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        };
        tileLayerRef.current = L.tileLayer(tiles[mapStyle] || tiles.osm, {
          maxZoom: 18,
        }).addTo(mapInstanceRef.current);
        L.control
          .zoom({ position: "bottomright" })
          .addTo(mapInstanceRef.current);
        setTimeout(() => mapInstanceRef.current?.invalidateSize(), 300);
      }
      // Switch tile layer on style change
      if (tileLayerRef.current && mapInstanceRef.current) {
        const tiles = {
          osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          ign: "https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&FORMAT=image/png&STYLE=normal",
          satellite:
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        };
        tileLayerRef.current.setUrl(tiles[mapStyle] || tiles.osm);
      }
      // Clear refuge markers
      refugeMarkersRef.current.forEach((m) => m.remove());
      refugeMarkersRef.current = [];
      // Add refuge markers
      if (showRefuges) {
        nearbyRefuges.forEach((ref) => {
          const refIcon = L.divIcon({
            html:
              '<div style="font-size:16px;text-shadow:0 1px 3px rgba(0,0,0,0.5);cursor:pointer;">' +
              ref.emoji +
              "</div>",
            className: "",
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          });
          const rm = L.marker([ref.lat, ref.lng], { icon: refIcon }).addTo(
            mapInstanceRef.current
          );
          rm.bindPopup(
            '<div style="font-family:sans-serif;min-width:120px;"><b style="font-size:11px;">' +
              ref.nom +
              '</b><p style="font-size:9px;color:#666;margin:2px 0;">' +
              (ref.alt || "") +
              "m" +
              (ref.places ? " · " + ref.places + " places" : "") +
              (ref.gardé != null
                ? " · " + (ref.gardé ? "Gardé" : "Non gardé")
                : "") +
              "</p></div>",
            { closeButton: false, maxWidth: 180 }
          );
          refugeMarkersRef.current.push(rm);
        });
      }
      // Clear trail markers (not user marker)
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      // Add trail markers
      filtered.forEach((r) => {
        const dc = DIFF[r.difficulte];
        const icon = L.divIcon({
          html: `<div style="width:24px;height:24px;border-radius:50%;background:${dc.color};border:2px solid white;box-shadow:0 0 8px ${dc.color}80;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 2 15H2L8 3z"/></svg>
          </div>`,
          className: "",
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });
        const marker = L.marker([r.coordonnees.lat, r.coordonnees.lng], {
          icon,
        }).addTo(mapInstanceRef.current);
        marker.on("click", () => {
          setSelectedPin((prev) => (prev === r.id ? null : r.id));
          marker
            .bindPopup(
              `<div style="font-family:sans-serif;min-width:150px;"><img src="${r.image}" style="width:100%;height:70px;object-fit:cover;border-radius:6px;margin-bottom:4px;"/><b style="font-size:12px;">${r.nom}</b><p style="font-size:10px;color:#666;margin:2px 0;">${r.distance}km · +${r.denivele}m</p></div>`,
              { closeButton: false, maxWidth: 180 }
            )
            .openPopup();
        });
        markersRef.current.push(marker);
        if (r.traceGPS && r.traceGPS.length > 1) {
          const line = L.polyline(r.traceGPS, {
            color: dc.color,
            weight: 3,
            opacity: 0.6,
            dashArray: "8 4",
          }).addTo(mapInstanceRef.current);
          markersRef.current.push(line);
        }
      });
    } catch (e) {
      console.warn("Leaflet error:", e);
    }
  }, [leafletReady, filtered, selectedPin, mapStyle, showRefuges]);

  // ── Real-time user position update (separate from trail markers) ──
  useEffect(() => {
    if (!leafletReady || !mapInstanceRef.current || !userLoc) return;
    const L = window.L;
    if (!L) return;
    try {
      // Update or create user marker
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng([userLoc.lat, userLoc.lng]);
      } else {
        const ui = L.divIcon({
          html: `<div style="position:relative"><div style="width:16px;height:16px;border-radius:50%;background:#3B82F6;border:3px solid white;box-shadow:0 0 12px #3B82F680;position:relative;z-index:2"></div><div style="position:absolute;top:-8px;left:-8px;width:32px;height:32px;border-radius:50%;background:#3B82F620;animation:mapPulse 2s ease-in-out infinite;z-index:1"></div></div>`,
          className: "",
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        userMarkerRef.current = L.marker([userLoc.lat, userLoc.lng], {
          icon: ui,
          zIndexOffset: 1000,
        }).addTo(mapInstanceRef.current);
        userMarkerRef.current.bindTooltip(
          `Vous${gpsAccuracy ? ` · ±${Math.round(gpsAccuracy)}m` : ""}${
            userLoc.alt ? ` · ${Math.round(userLoc.alt)}m alt.` : ""
          }`,
          { direction: "top" }
        );
      }
      // Update or create accuracy circle
      const acc = gpsAccuracy || 50;
      if (userCircleRef.current) {
        userCircleRef.current
          .setLatLng([userLoc.lat, userLoc.lng])
          .setRadius(acc);
      } else {
        userCircleRef.current = L.circle([userLoc.lat, userLoc.lng], {
          radius: acc,
          color: "#3B82F6",
          fillColor: "#3B82F6",
          fillOpacity: 0.08,
          weight: 1,
          opacity: 0.3,
        }).addTo(mapInstanceRef.current);
      }
      // Follow user
      if (followUser)
        mapInstanceRef.current.setView(
          [userLoc.lat, userLoc.lng],
          mapInstanceRef.current.getZoom(),
          { animate: true, duration: 0.5 }
        );
    } catch (e) {
      console.warn("User position update error:", e);
    }
  }, [leafletReady, userLoc, gpsAccuracy, followUser]);

  const locateMe = useCallback(() => {
    if (mapInstanceRef.current && userLoc) {
      mapInstanceRef.current.setView([userLoc.lat, userLoc.lng], 14, {
        animate: true,
      });
      setFollowUser(true);
    }
  }, [userLoc]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ padding: "16px 16px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h2
          style={{
            fontWeight: 800,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: TEXT,
          }}
        >
          <Map size={20} color={ACCENT} /> Carte des Sentiers
        </h2>
        <button
          onClick={() => setShowMeteo(!showMeteo)}
          style={{
            padding: "6px 12px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Poppins",
            background: showMeteo ? "#FBBF2420" : CARD,
            color: showMeteo ? "#FBBF24" : TEXT_DIM,
            border: `1px solid ${showMeteo ? "#FBBF2450" : BORDER}`,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Sun size={14} /> Météo{" "}
          {meteoData[0]?.realtime && (
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#4ADE80",
                display: "inline-block",
                marginLeft: 2,
              }}
            />
          )}
        </button>
      </div>

      {/* Map style toggle + Filters */}
      <div
        style={{ display: "flex", gap: 6, marginBottom: 8, overflow: "auto" }}
      >
        {[
          { id: "osm", label: "🗺️ OSM" },
          { id: "ign", label: "🏔️ IGN" },
          { id: "satellite", label: "🛰️ Satellite" },
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => setMapStyle(s.id)}
            style={{
              padding: "5px 12px",
              borderRadius: 14,
              fontSize: 10,
              fontWeight: 600,
              fontFamily: "Poppins",
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: mapStyle === s.id ? ACCENT : CARD,
              color: mapStyle === s.id ? BG : TEXT_DIM,
              border: `1px solid ${mapStyle === s.id ? ACCENT : BORDER}`,
            }}
          >
            {s.label}
          </button>
        ))}
        <button
          onClick={() => setShowRefuges(!showRefuges)}
          style={{
            padding: "5px 12px",
            borderRadius: 14,
            fontSize: 10,
            fontWeight: 600,
            fontFamily: "Poppins",
            cursor: "pointer",
            whiteSpace: "nowrap",
            background: showRefuges ? "#F59E0B20" : CARD,
            color: showRefuges ? "#F59E0B" : TEXT_DIM,
            border: `1px solid ${showRefuges ? "#F59E0B50" : BORDER}`,
          }}
        >
          {showRefuges ? "🏠 Refuges" : "🏠"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: 6,
          marginBottom: 14,
          overflowX: "auto",
          paddingBottom: 4,
        }}
      >
        {["tous", "facile", "modere", "difficile"].map((d) => (
          <button
            key={d}
            onClick={() => {
              setMapFilter(d);
              setSelectedPin(null);
            }}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "Poppins",
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: mapFilter === d ? ACCENT : CARD,
              color: mapFilter === d ? BG : TEXT_DIM,
              border: `1px solid ${mapFilter === d ? ACCENT : BORDER}`,
            }}
          >
            {d === "tous" ? "Tous" : DIFF[d]?.label}
          </button>
        ))}
      </div>

      {/* ── MÉTÉO LIVE SECTION ── */}
      {showMeteo && (
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              background: `linear-gradient(135deg, #0F172A, #1E293B)`,
              borderRadius: 16,
              border: `1px solid #334155`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "12px 14px",
                borderBottom: "1px solid #334155",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Thermometer size={16} color="#FBBF24" />
                <span
                  style={{ fontWeight: 700, fontSize: 13, color: "#F1F5F9" }}
                >
                  Météo Pyrénées
                </span>
                {weatherLoading && (
                  <Loader2
                    size={12}
                    color="#FBBF24"
                    style={{ animation: "spin 1s linear infinite" }}
                  />
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {meteoData[0]?.realtime && (
                  <span
                    style={{
                      fontSize: 8,
                      color: "#4ADE80",
                      fontWeight: 600,
                      padding: "2px 6px",
                      background: "#4ADE8015",
                      borderRadius: 8,
                      border: "1px solid #4ADE8030",
                    }}
                  >
                    LIVE
                  </span>
                )}
                <span style={{ fontSize: 9, color: "#94A3B8" }}>
                  {new Date().toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
                background: "#334155",
              }}
            >
              {meteoData.map((m, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setSelectedMeteo(selectedMeteo === i ? null : i)
                  }
                  style={{
                    padding: "12px",
                    background: selectedMeteo === i ? "#1E3A5F" : "#0F172A",
                    cursor: "pointer",
                    border: "none",
                    color: "#F1F5F9",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: "#94A3B8",
                        fontWeight: 600,
                      }}
                    >
                      {m.zone}
                    </span>
                    <MeteoIcon type={m.icon} size={18} />
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: TEXT }}>
                    {m.temp}°C
                  </div>
                  <div style={{ fontSize: 9, color: "#94A3B8" }}>{m.desc}</div>
                  {selectedMeteo === i && (
                    <div
                      style={{
                        marginTop: 8,
                        paddingTop: 8,
                        borderTop: "1px solid #334155",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 4,
                      }}
                    >
                      <div style={{ fontSize: 9, color: "#94A3B8" }}>
                        <Wind size={10} style={{ verticalAlign: "middle" }} />{" "}
                        {m.vent} km/h
                      </div>
                      <div style={{ fontSize: 9, color: "#94A3B8" }}>
                        <Droplets
                          size={10}
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        {m.humidite}%
                      </div>
                      <div style={{ fontSize: 9, color: "#94A3B8" }}>
                        <CloudRain
                          size={10}
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        {m.pluie}%
                      </div>
                      <div style={{ fontSize: 9, color: "#94A3B8" }}>
                        <CloudSnow
                          size={10}
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        Neige {m.neige}m
                      </div>
                      <div style={{ fontSize: 9, color: "#94A3B8" }}>
                        <Sunrise
                          size={10}
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        {m.lever}
                      </div>
                      <div style={{ fontSize: 9, color: "#94A3B8" }}>
                        <Sunset size={10} style={{ verticalAlign: "middle" }} />{" "}
                        {m.coucher}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── LEAFLET MAP with fallback ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: showMeteo ? 280 : 380,
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${BORDER}`,
          transition: "height 0.3s",
        }}
      >
        {(!leafletReady || !window.L) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(160deg, #0D1B2A 0%, #1B2838 30%, #1A3A2A 60%, #2D1F0E 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
            }}
          >
            {!leafletReady ? (
              <>
                <Loader2
                  size={24}
                  color={ACCENT}
                  style={{ animation: "spin 1s linear infinite" }}
                />
                <span style={{ marginLeft: 8, fontSize: 12, color: TEXT_DIM }}>
                  Chargement carte...
                </span>
                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
              </>
            ) : (
              <span style={{ fontSize: 12, color: TEXT_DIM }}>
                Carte non disponible
              </span>
            )}
          </div>
        )}
        <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
        {/* GPS Track Polyline */}
        {gpsTrack?.length > 1 &&
          leafletReady &&
          (() => {
            try {
              const L = window.L;
              if (
                L &&
                mapInstanceRef.current &&
                !mapInstanceRef.current._gpsTrackLine
              ) {
                mapInstanceRef.current._gpsTrackLine = L.polyline(
                  gpsTrack.map((p) => [p.lat, p.lng]),
                  {
                    color: "#3B82F6",
                    weight: 3,
                    opacity: 0.8,
                    dashArray: "8 4",
                  }
                ).addTo(mapInstanceRef.current);
              } else if (mapInstanceRef.current?._gpsTrackLine) {
                mapInstanceRef.current._gpsTrackLine.setLatLngs(
                  gpsTrack.map((p) => [p.lat, p.lng])
                );
              }
            } catch {}
            return null;
          })()}
        {gpsTrack?.length > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: 55,
              right: 12,
              zIndex: 800,
              background: "rgba(0,0,0,0.7)",
              borderRadius: 10,
              padding: "5px 10px",
              backdropFilter: "blur(8px)",
            }}
          >
            <p style={{ fontSize: 9, color: "#3B82F6", fontWeight: 600 }}>
              📍 {gpsTrack.length} pts
            </p>
          </div>
        )}
        {/* Locate me button */}
        <button
          onClick={locateMe}
          style={{
            position: "absolute",
            bottom: 48,
            left: 12,
            width: 38,
            height: 38,
            borderRadius: 12,
            background: followUser ? ACCENT : CARD,
            border: `1px solid ${followUser ? ACCENT : BORDER}`,
            color: followUser ? BG : TEXT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            zIndex: 400,
          }}
        >
          <Locate size={16} />
        </button>
        {/* GPS status badge */}
        {userLoc && (
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "rgba(0,0,0,0.65)",
              borderRadius: 10,
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              gap: 5,
              zIndex: 400,
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: userLoc.isDefault ? "#F59E0B" : "#4ADE80",
                boxShadow: `0 0 6px ${
                  userLoc.isDefault ? "#F59E0B" : "#4ADE80"
                }`,
              }}
            />
            <span style={{ fontSize: 8, color: "#FFF", fontWeight: 600 }}>
              {userLoc.isDefault
                ? "GPS en attente..."
                : `GPS · ±${Math.round(gpsAccuracy || 50)}m`}
              {userLoc.alt && !userLoc.isDefault
                ? ` · ${Math.round(userLoc.alt)}m`
                : ""}
            </span>
          </div>
        )}
        <style>{`.leaflet-popup-content-wrapper { border-radius: 12px !important; } .leaflet-popup-content { margin: 8px !important; }
          @keyframes mapPulse { 0%,100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.8); opacity: 0.1; } }
          @keyframes bobFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        `}</style>
      </div>

      {/* Trail list under map */}
      <div style={{ marginTop: 16, paddingBottom: 16 }}>
        <p style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 10 }}>
          {filtered.length} sentiers affichés
        </p>
        {filtered.map((r) => (
          <button
            key={r.id}
            onClick={() => {
              onSelect(r);
            }}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: 10,
              background: selectedPin === r.id ? ACCENT_DIM : CARD,
              borderRadius: 12,
              border: `1px solid ${
                selectedPin === r.id ? ACCENT + "50" : BORDER
              }`,
              marginBottom: 6,
              cursor: "pointer",
              color: TEXT,
              textAlign: "left",
            }}
          >
            <img
              src={r.image}
              alt=""
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 600, fontSize: 12, color: TEXT }}>
                {r.nom}{" "}
                {r.source === "osm" && (
                  <span
                    style={{
                      fontSize: 8,
                      padding: "1px 5px",
                      borderRadius: 6,
                      background: "#3B82F615",
                      color: "#3B82F6",
                      fontWeight: 700,
                      marginLeft: 4,
                    }}
                  >
                    OSM
                  </span>
                )}
              </p>
              <p style={{ fontSize: 10, color: TEXT_DIM }}>
                {r.lieu} · {DIFF[r.difficulte]?.label || r.difficulte}
              </p>
            </div>
            <ChevronRight size={16} color={TEXT_DIM} />
          </button>
        ))}
      </div>
    </div>
  );
}

// ═══════ SCANNER TAB — CORE FEATURE (Radar + AR Launch) ═══════
function ScannerTab({
  userLoc,
  gpsAccuracy,
  nearbySpecies,
  onScan,
  onScanSpecies,
  stats,
  user,
  showToast,
  liveMeteo,
}) {
  const compass = useDeviceOrientation();
  const heading = compass.alpha || 0;
  const [radarAngle, setRadarAngle] = useState(0);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [subTab, setSubTab] = useState("radar");
  const camRef = useRef(null);
  const streamRef = useRef(null);
  const [hasCam, setHasCam] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => setRadarAngle((a) => (a + 2) % 360), 50);
    return () => clearInterval(iv);
  }, []);

  // Mini camera preview
  useEffect(() => {
    if (subTab !== "radar") return;
    let ok = true;
    (async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            width: { ideal: 640 },
            height: { ideal: 360 },
          },
          audio: false,
        });
        if (!ok) {
          s.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = s;
        if (camRef.current) {
          camRef.current.srcObject = s;
          await camRef.current.play();
          setHasCam(true);
        }
      } catch {
        setHasCam(false);
      }
    })();
    return () => {
      ok = false;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      setHasCam(false);
    };
  }, [subTab]);

  const calcBearing = useCallback((lat1, lng1, lat2, lng2) => {
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const la1 = (lat1 * Math.PI) / 180,
      la2 = (lat2 * Math.PI) / 180;
    const y = Math.sin(dLng) * Math.cos(la2);
    const x =
      Math.cos(la1) * Math.sin(la2) -
      Math.sin(la1) * Math.cos(la2) * Math.cos(dLng);
    return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
  }, []);

  const scannableCount = (nearbySpecies || []).filter(
    (s) => s.scannable
  ).length;
  const totalScanned =
    (stats?.floraScans?.length || 0) + (stats?.faunaScans?.length || 0);
  const allSpecies = [
    ...ESPECES_DB.flore.map((s) => ({ ...s, type: "flore" })),
    ...ESPECES_DB.faune.map((s) => ({ ...s, type: "faune" })),
  ];
  const alt = userLoc?.alt ? Math.round(userLoc.alt) : null;
  const biome = alt ? getBiome(alt) : null;
  const biomeLabels = {
    collineen: "Collinéen",
    montagnard: "Montagnard",
    subalpin: "Subalpin",
    alpin: "Alpin",
    nival: "Nival",
  };

  return (
    <div style={{ padding: "8px 16px", color: TEXT }}>
      {/* Header with sub-tabs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <h2
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: TEXT,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Scan size={20} color={ACCENT} /> Scanner
        </h2>
        <div style={{ display: "flex", gap: 4 }}>
          {[
            { id: "radar", label: "Radar" },
            { id: "pokedex", label: "Collection" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setSubTab(t.id)}
              style={{
                padding: "5px 12px",
                borderRadius: 10,
                fontSize: 10,
                fontWeight: 600,
                cursor: "pointer",
                background: subTab === t.id ? ACCENT : CARD,
                color: subTab === t.id ? BG : TEXT_DIM,
                border: `1px solid ${subTab === t.id ? ACCENT : BORDER}`,
                fontFamily: "Poppins",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {subTab === "radar" && (
        <>
          {/* ═══ MINI CAMERA PREVIEW ═══ */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 160,
              borderRadius: 18,
              overflow: "hidden",
              marginBottom: 12,
              background: "#0A0A0A",
              border: `1px solid ${BORDER}`,
            }}
          >
            <video
              ref={camRef}
              autoPlay
              playsInline
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: hasCam ? 1 : 0,
              }}
            />
            {!hasCam && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #1a3a5c, #0a1a2c)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Camera size={32} color={ACCENT} style={{ opacity: 0.3 }} />
              </div>
            )}
            {/* AR overlay markers on cam */}
            {hasCam &&
              (nearbySpecies || []).slice(0, 5).map((sp) => {
                if (!userLoc || !sp.spawnLat) return null;
                const b = calcBearing(
                  userLoc.lat,
                  userLoc.lng,
                  sp.spawnLat,
                  sp.spawnLng
                );
                const diff = ((b - heading + 540) % 360) - 180;
                if (Math.abs(diff) > 60) return null;
                const x = 50 + diff * 0.7;
                return (
                  <div
                    key={sp.id}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: "40%",
                      transform: "translate(-50%,-50%)",
                      textAlign: "center",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 22,
                        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.8))",
                      }}
                    >
                      {sp.emoji}
                    </span>
                    <p
                      style={{
                        fontSize: 7,
                        color: "#FFF",
                        background: "rgba(0,0,0,0.6)",
                        padding: "1px 5px",
                        borderRadius: 4,
                        marginTop: 2,
                      }}
                    >
                      {sp.distance}m
                    </p>
                  </div>
                );
              })}
            {/* HUD overlay */}
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                display: "flex",
                gap: 6,
                zIndex: 3,
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  padding: "2px 6px",
                  borderRadius: 6,
                  background: "rgba(0,0,0,0.5)",
                  color: "#4ADE80",
                  fontWeight: 600,
                }}
              >
                {Math.round(heading)}°{" "}
                {heading < 45 || heading > 315
                  ? "N"
                  : heading < 135
                  ? "E"
                  : heading < 225
                  ? "S"
                  : "O"}
              </span>
              {alt && (
                <span
                  style={{
                    fontSize: 8,
                    padding: "2px 6px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.5)",
                    color: ACCENT,
                    fontWeight: 600,
                  }}
                >
                  {alt}m
                </span>
              )}
              {biome && (
                <span
                  style={{
                    fontSize: 8,
                    padding: "2px 6px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.5)",
                    color: "#60A5FA",
                    fontWeight: 600,
                  }}
                >
                  {biomeLabels[biome] || biome}
                </span>
              )}
            </div>
            <div
              style={{ position: "absolute", bottom: 8, right: 8, zIndex: 3 }}
            >
              <span
                style={{
                  fontSize: 8,
                  padding: "2px 6px",
                  borderRadius: 6,
                  background:
                    scannableCount > 0
                      ? "rgba(74,222,128,0.2)"
                      : "rgba(0,0,0,0.5)",
                  color: scannableCount > 0 ? "#4ADE80" : TEXT_DIM,
                  fontWeight: 600,
                }}
              >
                {scannableCount} espèce{scannableCount !== 1 ? "s" : ""} à
                portée
              </span>
            </div>
            {/* Scan line effect */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${ACCENT}80, transparent)`,
                top: `${30 + (radarAngle % 100)}%`,
                zIndex: 2,
                filter: "blur(1px)",
                opacity: 0.5,
              }}
            />
          </div>

          {/* ═══ BIG AR LAUNCH BUTTON ═══ */}
          <button
            onClick={() => {
              streamRef.current?.getTracks().forEach((t) => t.stop());
              onScan((nearbySpecies || []).filter((s) => s.scannable));
            }}
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 18,
              background: `linear-gradient(135deg, ${ACCENT}, #A8CC00)`,
              border: "none",
              color: BG,
              fontWeight: 900,
              fontSize: 16,
              fontFamily: "Poppins",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              boxShadow: `0 8px 32px ${ACCENT}40`,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Aperture size={22} />
            </div>
            <div style={{ textAlign: "left" }}>
              <span style={{ display: "block", fontSize: 15 }}>
                SCANNER EN AR
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: 9,
                  fontWeight: 500,
                  opacity: 0.7,
                }}
              >
                {scannableCount > 0
                  ? `${scannableCount} cible${
                      scannableCount > 1 ? "s" : ""
                    } · Combo XP activé`
                  : "Scanner les alentours"}
              </span>
            </div>
            <ChevronRight size={18} />
          </button>

          {/* ═══ RADAR ═══ */}
          <div
            style={{
              position: "relative",
              width: "65%",
              paddingBottom: "65%",
              margin: "0 auto 14px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${CARD} 0%, ${BG} 70%)`,
                border: `2px solid ${BORDER}`,
                overflow: "hidden",
              }}
            >
              {[0.33, 0.66].map((r) => (
                <div
                  key={r}
                  style={{
                    position: "absolute",
                    top: `${50 - r * 50}%`,
                    left: `${50 - r * 50}%`,
                    width: `${r * 100}%`,
                    height: `${r * 100}%`,
                    borderRadius: "50%",
                    border: `1px solid ${BORDER}`,
                    pointerEvents: "none",
                  }}
                />
              ))}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 1,
                  background: BORDER,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: BORDER,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "50%",
                  height: 2,
                  transformOrigin: "0 50%",
                  transform: `rotate(${radarAngle}deg)`,
                  background: `linear-gradient(90deg, ${ACCENT}60, transparent)`,
                }}
              />
              {[
                { d: "N", a: 0 },
                { d: "E", a: 90 },
                { d: "S", a: 180 },
                { d: "O", a: 270 },
              ].map((c) => {
                const angle = (c.a - heading + 360) % 360;
                const rad = (angle * Math.PI) / 180;
                return (
                  <span
                    key={c.d}
                    style={{
                      position: "absolute",
                      left: `${50 + Math.sin(rad) * 44}%`,
                      top: `${50 - Math.cos(rad) * 44}%`,
                      transform: "translate(-50%,-50%)",
                      fontSize: 9,
                      fontWeight: 700,
                      color: c.d === "N" ? "#F87171" : TEXT_DIM,
                    }}
                  >
                    {c.d}
                  </span>
                );
              })}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#3B82F6",
                  border: "2px solid white",
                  boxShadow: "0 0 8px #3B82F680",
                  zIndex: 5,
                }}
              />
              {(nearbySpecies || []).slice(0, 10).map((sp) => {
                if (!userLoc || !sp.spawnLat) return null;
                const bearing = calcBearing(
                  userLoc.lat,
                  userLoc.lng,
                  sp.spawnLat,
                  sp.spawnLng
                );
                const relAngle =
                  (((bearing - heading + 360) % 360) * Math.PI) / 180;
                const r = Math.min(0.42, (sp.distance / 5000) * 0.42);
                return (
                  <button
                    key={sp.id}
                    onClick={() => setSelectedSpecies(sp)}
                    style={{
                      position: "absolute",
                      left: `${50 + Math.sin(relAngle) * r * 100}%`,
                      top: `${50 - Math.cos(relAngle) * r * 100}%`,
                      transform: "translate(-50%,-50%)",
                      fontSize: sp.scannable ? 18 : 12,
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                      filter: sp.scannable
                        ? "none"
                        : "grayscale(0.6) opacity(0.5)",
                      zIndex: 6,
                      padding: 0,
                      lineHeight: 1,
                      animation: sp.scannable
                        ? "rP 2s ease-in-out infinite"
                        : "none",
                    }}
                  >
                    {sp.emoji}
                  </button>
                );
              })}
              <style>{`@keyframes rP { 0%,100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.2); } }`}</style>
            </div>
          </div>

          {/* ═══ SELECTED SPECIES ═══ */}
          {selectedSpecies && (
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                padding: 14,
                marginBottom: 12,
                border: `1px solid ${
                  selectedSpecies.scannable ? ACCENT + "50" : BORDER
                }`,
                animation: "sI .3s ease",
              }}
            >
              <style>{`@keyframes sI { from { opacity:0; transform: translateY(8px); } to { opacity:1; } }`}</style>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 32 }}>{selectedSpecies.emoji}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: TEXT }}>
                    {selectedSpecies.nom || selectedSpecies.name}
                  </p>
                  <div style={{ display: "flex", gap: 6, marginTop: 3 }}>
                    <span
                      style={{
                        fontSize: 9,
                        color: selectedSpecies.scannable
                          ? "#4ADE80"
                          : "#F59E0B",
                        fontWeight: 600,
                      }}
                    >
                      {selectedSpecies.distance > 1000
                        ? `${(selectedSpecies.distance / 1000).toFixed(1)}km`
                        : `${selectedSpecies.distance}m`}
                    </span>
                    <span style={{ fontSize: 9, color: ACCENT }}>
                      ⚡{selectedSpecies.xp} XP
                    </span>
                  </div>
                </div>
                {selectedSpecies.scannable && (
                  <button
                    onClick={() => {
                      onScanSpecies(selectedSpecies);
                      setSelectedSpecies(null);
                    }}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 10,
                      background: ACCENT,
                      border: "none",
                      color: BG,
                      fontWeight: 700,
                      fontSize: 11,
                      cursor: "pointer",
                      fontFamily: "Poppins",
                    }}
                  >
                    Scanner
                  </button>
                )}
                <button
                  onClick={() => setSelectedSpecies(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: TEXT_DIM,
                    cursor: "pointer",
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ═══ SPECIES LIST ═══ */}
          {(nearbySpecies || []).length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginBottom: 12,
              }}
            >
              {nearbySpecies.slice(0, 6).map((sp) => (
                <button
                  key={sp.id}
                  onClick={() => setSelectedSpecies(sp)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 10px",
                    background: CARD,
                    borderRadius: 10,
                    border: `1px solid ${
                      sp.scannable ? ACCENT + "30" : BORDER
                    }`,
                    cursor: "pointer",
                    color: TEXT,
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      fontSize: 20,
                      filter: sp.scannable
                        ? "none"
                        : "grayscale(0.5) opacity(0.5)",
                    }}
                  >
                    {sp.emoji}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: 11, color: TEXT }}>
                      {sp.nom || sp.name}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: sp.scannable ? "#4ADE80" : TEXT_DIM,
                    }}
                  >
                    {sp.distance > 1000
                      ? `${(sp.distance / 1000).toFixed(1)}km`
                      : `${sp.distance}m`}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Env info */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[
              alt && { label: `${alt}m`, icon: Mountain, color: ACCENT },
              biome && {
                label: biomeLabels[biome],
                icon: TreePine,
                color: "#4ADE80",
              },
              liveMeteo?.temp != null && {
                label: `${liveMeteo.temp}°C`,
                icon: Thermometer,
                color: "#F59E0B",
              },
              liveMeteo?.windSpeed != null && {
                label: `${liveMeteo.windSpeed}km/h`,
                icon: Wind,
                color: "#60A5FA",
              },
            ]
              .filter(Boolean)
              .map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "4px 10px",
                    background: CARD,
                    borderRadius: 10,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <s.icon size={12} color={s.color} />
                  <span style={{ fontSize: 9, fontWeight: 600, color: TEXT }}>
                    {s.label}
                  </span>
                </div>
              ))}
          </div>
        </>
      )}

      {/* ═══ POKÉDEX / COLLECTION ═══ */}
      {subTab === "pokedex" && (
        <div>
          {/* Progress */}
          <div
            style={{
              background: CARD,
              borderRadius: 14,
              padding: 14,
              marginBottom: 14,
              border: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>
                Encyclopédie
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: ACCENT }}>
                {totalScanned}/{allSpecies.length}
              </span>
            </div>
            <div style={{ height: 6, background: BORDER, borderRadius: 3 }}>
              <div
                style={{
                  width: `${(totalScanned / allSpecies.length) * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${ACCENT}, #4ADE80)`,
                  borderRadius: 3,
                  transition: "width 0.5s",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              {[
                {
                  label: "Flore",
                  count: stats?.floraScans?.length || 0,
                  total: ESPECES_DB.flore.length,
                  color: "#4ADE80",
                },
                {
                  label: "Faune",
                  count: stats?.faunaScans?.length || 0,
                  total: ESPECES_DB.faune.length,
                  color: "#F59E0B",
                },
              ].map((c, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: c.color }}>
                    {c.count}
                    <span style={{ fontSize: 10, color: TEXT_DIM }}>
                      /{c.total}
                    </span>
                  </p>
                  <p style={{ fontSize: 9, color: TEXT_DIM }}>{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Species grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
            }}
          >
            {allSpecies.map((sp) => {
              const discovered = stats?.scanCollection?.includes(sp.id);
              return (
                <div
                  key={sp.id}
                  style={{
                    background: CARD,
                    borderRadius: 14,
                    padding: 12,
                    border: `1px solid ${discovered ? ACCENT + "30" : BORDER}`,
                    textAlign: "center",
                    opacity: discovered ? 1 : 0.5,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      filter: discovered
                        ? "none"
                        : "brightness(0) opacity(0.3)",
                    }}
                  >
                    {sp.emoji}
                  </span>
                  <p
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: discovered ? TEXT : TEXT_DIM,
                      marginTop: 4,
                    }}
                  >
                    {discovered ? sp.nom : "???"}
                  </p>
                  <p style={{ fontSize: 7, color: TEXT_DIM }}>
                    {sp.type === "flore" ? "🌿" : "🦌"} {sp.rarete}
                  </p>
                  {discovered && (
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "#4ADE80",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={8} color={BG} strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════ SOCIAL HUB — UNIFIED SOCIAL EXPERIENCE ═══════
function SocialHub({ user, stats, challenges, leaderboard, showToast }) {
  const [sub, setSub] = useState("feed");
  const [feedLikes, setFeedLikes] = useState({});
  const [feedComments, setFeedComments] = useState({});
  const [showComments, setShowComments] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  // Messages state
  const [selectedConvo, setSelectedConvo] = useState(null); // {type:'group'|'dm', id}
  const [newMsg, setNewMsg] = useState("");
  const [convoMessages, setConvoMessages] = useState({});
  const [customGroups, setCustomGroups] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [typingIndicator, setTypingIndicator] = useState(null);
  const [dmUnreads, setDmUnreads] = useState(
    Object.fromEntries(DM_DB.map((d) => [d.id, d.unread]))
  );
  // Events state
  const [joinedEvents, setJoinedEvents] = useState(["ev1"]);
  const [showNewEvent, setShowNewEvent] = useState(false);
  const msgEndRef = useRef(null);

  const toggleLike = (id) =>
    setFeedLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  const allPosts = [...userPosts, ...SOCIAL_FEED_DB];
  const allGroups = [...GROUPES_MSG_DB, ...customGroups];
  const totalUnread = Object.values(dmUnreads).reduce((s, v) => s + v, 0);

  const getMessages = useCallback(
    (type, id) => {
      const key = `${type}_${id}`;
      if (convoMessages[key]) return convoMessages[key];
      if (type === "group")
        return GROUPES_MSG_DB.find((g) => g.id === id)?.messages || [];
      if (type === "dm") return DM_DB.find((d) => d.id === id)?.messages || [];
      return [];
    },
    [convoMessages]
  );

  const sendMessage = useCallback(() => {
    if (!newMsg.trim() || !selectedConvo) return;
    const key = `${selectedConvo.type}_${selectedConvo.id}`;
    const msg = {
      id: Date.now(),
      user: "Alex R.",
      avatar: "🧑‍🦱",
      text: newMsg.trim(),
      time: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
    };
    setConvoMessages((prev) => ({
      ...prev,
      [key]: [...getMessages(selectedConvo.type, selectedConvo.id), msg],
    }));
    setNewMsg("");
    // Simulate typing response
    setTypingIndicator(selectedConvo.id);
    setTimeout(() => {
      setTypingIndicator(null);
      const responses = [
        "D'accord, super ! 👍",
        "Bonne idée !",
        "Je note ça 📝",
        "On en reparle bientôt",
        "Parfait, j'ai hâte !",
        "Trop bien ! 🏔️",
        "Ok, je m'organise",
        "Merci pour l'info !",
      ];
      const autoReply = {
        id: Date.now() + 1,
        user:
          selectedConvo.type === "dm"
            ? DM_DB.find((d) => d.id === selectedConvo.id)?.user ||
              "Utilisateur"
            : "Membre",
        avatar:
          selectedConvo.type === "dm"
            ? DM_DB.find((d) => d.id === selectedConvo.id)?.avatar || "👤"
            : "👤",
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: false,
      };
      setConvoMessages((prev) => ({
        ...prev,
        [key]: [
          ...(prev[key] || getMessages(selectedConvo.type, selectedConvo.id)),
          autoReply,
        ],
      }));
    }, 1500 + Math.random() * 2000);
  }, [newMsg, selectedConvo, getMessages]);

  const createGroup = () => {
    if (!newGroupName.trim()) return;
    setCustomGroups((prev) => [
      ...prev,
      {
        id: Date.now(),
        nom: newGroupName.trim(),
        membres: 1,
        avatar: "🏔️",
        messages: [],
      },
    ]);
    setNewGroupName("");
    setShowCreate(false);
    showToast("Groupe créé !");
  };

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [convoMessages, selectedConvo]);

  // ═══ CONVERSATION VIEW ═══
  if (selectedConvo) {
    const isGroup = selectedConvo.type === "group";
    const data = isGroup
      ? allGroups.find((g) => g.id === selectedConvo.id)
      : DM_DB.find((d) => d.id === selectedConvo.id);
    const msgs = getMessages(selectedConvo.type, selectedConvo.id);
    const name = isGroup ? data?.nom : data?.user;
    const avatar = data?.avatar || "👤";
    const online = !isGroup && data?.online;
    const members = isGroup ? data?.membres : null;

    // Clear unreads on open
    if (!isGroup && dmUnreads[selectedConvo.id] > 0) {
      setTimeout(
        () => setDmUnreads((prev) => ({ ...prev, [selectedConvo.id]: 0 })),
        500
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 160px)",
          fontFamily: "'Poppins', sans-serif",
          color: TEXT,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "12px 16px",
            background: CARD,
            borderBottom: `1px solid ${BORDER}`,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <button
            onClick={() => setSelectedConvo(null)}
            style={{
              background: "none",
              border: "none",
              color: TEXT,
              cursor: "pointer",
              padding: 4,
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <div style={{ position: "relative" }}>
            <span style={{ fontSize: 28 }}>{avatar}</span>
            {online && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: -2,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#4ADE80",
                  border: `2px solid ${CARD}`,
                }}
              />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: 14, color: TEXT }}>{name}</p>
            <p style={{ fontSize: 10, color: online ? "#4ADE80" : TEXT_DIM }}>
              {typingIndicator === selectedConvo.id
                ? "✏️ écrit..."
                : isGroup
                ? `${members} membres`
                : online
                ? "En ligne"
                : data?.lastSeen}
            </p>
          </div>
          {isGroup && (
            <span
              style={{
                fontSize: 9,
                padding: "3px 8px",
                borderRadius: 8,
                background: ACCENT_DIM,
                color: ACCENT,
                fontWeight: 600,
              }}
            >
              Groupe
            </span>
          )}
        </div>
        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {msgs.map((m, i) => {
            const showAvatar =
              !m.isMe &&
              (i === 0 || msgs[i - 1]?.isMe || msgs[i - 1]?.user !== m.user);
            return (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: m.isMe ? "row-reverse" : "row",
                  gap: 8,
                  alignItems: "flex-end",
                }}
              >
                {!m.isMe && showAvatar ? (
                  <span style={{ fontSize: 22, flexShrink: 0 }}>
                    {m.avatar}
                  </span>
                ) : (
                  !m.isMe && <div style={{ width: 22 }} />
                )}
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "10px 14px",
                    borderRadius: m.isMe
                      ? "16px 16px 4px 16px"
                      : "16px 16px 16px 4px",
                    background: m.isMe ? ACCENT : CARD2,
                    border: m.isMe ? "none" : `1px solid ${BORDER}`,
                  }}
                >
                  {!m.isMe && isGroup && showAvatar && (
                    <p
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: ACCENT,
                        marginBottom: 3,
                      }}
                    >
                      {m.user}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: m.isMe ? BG : TEXT,
                    }}
                  >
                    {m.text}
                  </p>
                  <span
                    style={{
                      fontSize: 8,
                      color: m.isMe ? "rgba(10,10,10,0.5)" : TEXT_DIM,
                      display: "block",
                      textAlign: "right",
                      marginTop: 3,
                    }}
                  >
                    {m.time} {m.isMe && "✓✓"}
                  </span>
                </div>
              </div>
            );
          })}
          {typingIndicator === selectedConvo.id && (
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <span style={{ fontSize: 22 }}>{avatar}</span>
              <div
                style={{
                  padding: "10px 18px",
                  borderRadius: "16px 16px 16px 4px",
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div style={{ display: "flex", gap: 4 }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: TEXT_DIM,
                        animation: `dotBounce 1.4s ease-in-out ${
                          i * 0.2
                        }s infinite`,
                      }}
                    />
                  ))}
                </div>
                <style>{`@keyframes dotBounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }`}</style>
              </div>
            </div>
          )}
          <div ref={msgEndRef} />
        </div>
        {/* Input */}
        <div
          style={{
            padding: "10px 16px",
            background: CARD,
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: TEXT_DIM,
              cursor: "pointer",
              padding: 4,
            }}
          >
            <MapPin size={18} />
          </button>
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            style={{
              flex: 1,
              padding: "10px 16px",
              background: CARD2,
              border: `1px solid ${BORDER}`,
              borderRadius: 24,
              color: TEXT,
              fontSize: 13,
              fontFamily: "Poppins",
              outline: "none",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: newMsg.trim() ? ACCENT : CARD2,
              border: "none",
              color: newMsg.trim() ? BG : TEXT_DIM,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    );
  }

  // ═══ MAIN SOCIAL HUB ═══
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: TEXT }}>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "16px 16px 0",
          overflow: "auto",
        }}
      >
        {[
          { id: "feed", label: "📰 Feed" },
          {
            id: "messages",
            label: `💬 Messages${totalUnread > 0 ? ` (${totalUnread})` : ""}`,
          },
          { id: "events", label: "📅 Sorties" },
          { id: "classement", label: "🏆 Classement" },
          { id: "challenges", label: "🎯 Défis" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setSub(t.id)}
            style={{
              padding: "10px 14px",
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: sub === t.id ? ACCENT : CARD,
              color: sub === t.id ? BG : TEXT_DIM,
              border: `1px solid ${sub === t.id ? ACCENT : BORDER}`,
              fontFamily: "Poppins",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ═══ FEED ═══ */}
      {sub === "feed" && (
        <div style={{ padding: 16 }}>
          {!showNewPost && (
            <button
              onClick={() => setShowNewPost(true)}
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 14,
                background: CARD,
                border: `1px solid ${BORDER}`,
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                color: TEXT_DIM,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: ACCENT_DIM,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                🧑‍🦱
              </div>
              <span style={{ fontSize: 13, color: TEXT_DIM }}>
                Partagez votre aventure...
              </span>
            </button>
          )}
          {showNewPost && (
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                padding: 16,
                marginBottom: 14,
                border: `1px solid ${ACCENT}40`,
              }}
            >
              <textarea
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="Partagez votre aventure..."
                rows={3}
                style={{
                  width: "100%",
                  padding: 10,
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  color: TEXT,
                  fontSize: 13,
                  fontFamily: "Poppins",
                  outline: "none",
                  resize: "none",
                  boxSizing: "border-box",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "flex-end",
                  marginTop: 10,
                }}
              >
                <button
                  onClick={() => setShowNewPost(false)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 10,
                    background: CARD2,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_DIM,
                    fontWeight: 600,
                    fontSize: 12,
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    if (!newPostText.trim()) return;
                    setUserPosts((p) => [
                      {
                        id: Date.now(),
                        user: "Alex R.",
                        avatar: "🧑‍🦱",
                        time: "À l'instant",
                        niveau: user.niveau,
                        type: "rando",
                        text: newPostText.trim(),
                        likes: 0,
                        comments: 0,
                        shares: 0,
                        liked: false,
                        topComments: [],
                      },
                      ...p,
                    ]);
                    setNewPostText("");
                    setShowNewPost(false);
                    showToast("Post publié !");
                  }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 10,
                    background: newPostText.trim() ? ACCENT : CARD2,
                    border: "none",
                    color: newPostText.trim() ? BG : TEXT_DIM,
                    fontWeight: 700,
                    fontSize: 12,
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Publier
                </button>
              </div>
            </div>
          )}
          {allPosts.map((post) => {
            const isLiked =
              feedLikes[post.id] !== undefined
                ? feedLikes[post.id]
                : post.liked;
            const likeCount =
              post.likes +
              (feedLikes[post.id] === true && !post.liked
                ? 1
                : feedLikes[post.id] === false && post.liked
                ? -1
                : 0);
            const extraComments = feedComments[post.id] || [];
            const allComments = [...(post.topComments || []), ...extraComments];
            return (
              <div
                key={post.id}
                style={{
                  background: CARD,
                  borderRadius: 20,
                  overflow: "hidden",
                  marginBottom: 14,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div
                  style={{
                    padding: "14px 16px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: ACCENT_DIM,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      border: `1px solid ${ACCENT}30`,
                    }}
                  >
                    {post.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <span
                        style={{ fontWeight: 700, fontSize: 13, color: TEXT }}
                      >
                        {post.user}
                      </span>
                      <span
                        style={{
                          padding: "1px 6px",
                          borderRadius: 6,
                          fontSize: 8,
                          fontWeight: 700,
                          background: ACCENT_DIM,
                          color: ACCENT,
                        }}
                      >
                        Niv.{post.niveau}
                      </span>
                    </div>
                    <p style={{ fontSize: 10, color: TEXT_DIM }}>
                      {post.time}
                      {post.type === "scan"
                        ? " · 🔬 Scan"
                        : post.type === "badge"
                        ? " · 🏆 Badge"
                        : ""}
                    </p>
                  </div>
                </div>
                <div style={{ padding: "0 16px 12px" }}>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: TEXT }}>
                    {post.text}
                  </p>
                </div>
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                )}
                <div style={{ padding: "10px 16px", display: "flex", gap: 16 }}>
                  <button
                    onClick={() => toggleLike(post.id)}
                    style={{
                      background: "none",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                      color: isLiked ? "#F87171" : TEXT_DIM,
                      fontSize: 12,
                      fontFamily: "Poppins",
                      padding: 0,
                    }}
                  >
                    <Heart size={16} fill={isLiked ? "#F87171" : "none"} />{" "}
                    {likeCount}
                  </button>
                  <button
                    onClick={() =>
                      setShowComments(showComments === post.id ? null : post.id)
                    }
                    style={{
                      background: "none",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                      color: TEXT_DIM,
                      fontSize: 12,
                      fontFamily: "Poppins",
                      padding: 0,
                    }}
                  >
                    <MessageCircle size={16} />{" "}
                    {post.comments + extraComments.length}
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                      color: TEXT_DIM,
                      fontSize: 12,
                      fontFamily: "Poppins",
                      padding: 0,
                      marginLeft: "auto",
                    }}
                  >
                    <Share2 size={16} /> {post.shares}
                  </button>
                </div>
                {showComments === post.id && (
                  <div
                    style={{
                      padding: "0 16px 14px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    {allComments.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 8,
                          padding: "8px 0",
                          borderBottom:
                            i < allComments.length - 1
                              ? `1px solid ${BORDER}`
                              : "none",
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{c.avatar}</span>
                        <div>
                          <p style={{ fontSize: 11, color: TEXT }}>
                            <span style={{ fontWeight: 700 }}>{c.user}</span>{" "}
                            {c.text}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      <input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Commenter..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && newComment.trim()) {
                            setFeedComments((prev) => ({
                              ...prev,
                              [post.id]: [
                                ...(prev[post.id] || []),
                                {
                                  user: "Alex R.",
                                  avatar: "🧑‍🦱",
                                  text: newComment.trim(),
                                },
                              ],
                            }));
                            setNewComment("");
                          }
                        }}
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          background: CARD2,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 20,
                          color: TEXT,
                          fontSize: 12,
                          fontFamily: "Poppins",
                          outline: "none",
                        }}
                      />
                      <button
                        onClick={() => {
                          if (!newComment.trim()) return;
                          setFeedComments((prev) => ({
                            ...prev,
                            [post.id]: [
                              ...(prev[post.id] || []),
                              {
                                user: "Alex R.",
                                avatar: "🧑‍🦱",
                                text: newComment.trim(),
                              },
                            ],
                          }));
                          setNewComment("");
                        }}
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: newComment.trim() ? ACCENT : CARD2,
                          border: "none",
                          color: newComment.trim() ? BG : TEXT_DIM,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Send size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ═══ MESSAGES ═══ */}
      {sub === "messages" && (
        <div style={{ padding: 16 }}>
          {/* Create group */}
          <button
            onClick={() => setShowCreate(true)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 14,
              background: ACCENT_DIM,
              border: `1px dashed ${ACCENT}50`,
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
              color: TEXT,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: ACCENT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={18} color={BG} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 600 }}>
              Créer un groupe
            </span>
          </button>
          {showCreate && (
            <div
              style={{
                background: CARD2,
                borderRadius: 14,
                padding: 14,
                marginBottom: 14,
                border: `1px solid ${ACCENT}40`,
              }}
            >
              <input
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="Nom du groupe..."
                onKeyDown={(e) => e.key === "Enter" && createGroup()}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  color: TEXT,
                  fontSize: 13,
                  fontFamily: "Poppins",
                  outline: "none",
                  marginBottom: 10,
                  boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => setShowCreate(false)}
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 10,
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    color: TEXT_DIM,
                    fontWeight: 600,
                    fontSize: 12,
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Annuler
                </button>
                <button
                  onClick={createGroup}
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 10,
                    background: newGroupName.trim() ? ACCENT : CARD,
                    border: "none",
                    color: newGroupName.trim() ? BG : TEXT_DIM,
                    fontWeight: 700,
                    fontSize: 12,
                    fontFamily: "Poppins",
                    cursor: "pointer",
                  }}
                >
                  Créer
                </button>
              </div>
            </div>
          )}

          {/* DMs */}
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: TEXT_DIM,
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Messages directs
          </p>
          {DM_DB.map((dm) => {
            const msgs = getMessages("dm", dm.id);
            const lastMsg = msgs[msgs.length - 1];
            const unread = dmUnreads[dm.id] || 0;
            return (
              <button
                key={dm.id}
                onClick={() => setSelectedConvo({ type: "dm", id: dm.id })}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 12,
                  background: CARD,
                  borderRadius: 14,
                  border: `1px solid ${unread > 0 ? ACCENT + "40" : BORDER}`,
                  marginBottom: 6,
                  cursor: "pointer",
                  color: TEXT,
                  textAlign: "left",
                }}
              >
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: ACCENT_DIM,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    {dm.avatar}
                  </div>
                  {dm.online && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#4ADE80",
                        border: `2px solid ${CARD}`,
                      }}
                    />
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: unread > 0 ? 800 : 600,
                        fontSize: 13,
                      }}
                    >
                      {dm.user}
                    </p>
                    <span style={{ fontSize: 9, color: TEXT_DIM }}>
                      {lastMsg?.time}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      color: unread > 0 ? TEXT : TEXT_DIM,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontWeight: unread > 0 ? 600 : 400,
                    }}
                  >
                    {lastMsg?.isMe ? "Vous: " : ""}
                    {lastMsg?.text}
                  </p>
                </div>
                {unread > 0 && (
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: ACCENT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      color: BG,
                      flexShrink: 0,
                    }}
                  >
                    {unread}
                  </div>
                )}
              </button>
            );
          })}

          {/* Groups */}
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: TEXT_DIM,
              marginBottom: 8,
              marginTop: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Groupes
          </p>
          {allGroups.map((g) => {
            const msgs = getMessages("group", g.id);
            const lastMsg = msgs[msgs.length - 1];
            return (
              <button
                key={g.id}
                onClick={() => setSelectedConvo({ type: "group", id: g.id })}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 12,
                  background: CARD,
                  borderRadius: 14,
                  border: `1px solid ${BORDER}`,
                  marginBottom: 6,
                  cursor: "pointer",
                  color: TEXT,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: ACCENT_DIM,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                    border: `1px solid ${ACCENT}30`,
                  }}
                >
                  {g.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontWeight: 700, fontSize: 13 }}>{g.nom}</p>
                    <span style={{ fontSize: 9, color: TEXT_DIM }}>
                      {lastMsg?.time}
                    </span>
                  </div>
                  {lastMsg && (
                    <p
                      style={{
                        fontSize: 11,
                        color: TEXT_DIM,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {lastMsg.user}: {lastMsg.text}
                    </p>
                  )}
                  <span style={{ fontSize: 9, color: ACCENT }}>
                    {g.membres} membres
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* ═══ EVENTS / SORTIES ═══ */}
      {sub === "events" && (
        <div style={{ padding: 16 }}>
          <p style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 14 }}>
            Sorties organisées par la communauté
          </p>
          {EVENTS_DB.map((ev) => {
            const joined = joinedEvents.includes(ev.id);
            const dObj = new Date(ev.date);
            const dayName = dObj.toLocaleDateString("fr-FR", {
              weekday: "short",
            });
            const dayNum = dObj.getDate();
            const monthName = dObj.toLocaleDateString("fr-FR", {
              month: "short",
            });
            const diffCol =
              ev.difficulte === "facile"
                ? "#4ADE80"
                : ev.difficulte === "difficile"
                ? "#F87171"
                : "#60A5FA";
            return (
              <div
                key={ev.id}
                style={{
                  background: CARD,
                  borderRadius: 18,
                  overflow: "hidden",
                  marginBottom: 12,
                  border: `1px solid ${joined ? ACCENT + "40" : BORDER}`,
                }}
              >
                <div style={{ display: "flex", gap: 14, padding: 16 }}>
                  {/* Date badge */}
                  <div
                    style={{ width: 52, textAlign: "center", flexShrink: 0 }}
                  >
                    <div
                      style={{
                        background: ACCENT_DIM,
                        borderRadius: 12,
                        padding: "8px 4px",
                        border: `1px solid ${ACCENT}30`,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 8,
                          fontWeight: 700,
                          color: ACCENT,
                          textTransform: "uppercase",
                        }}
                      >
                        {dayName}
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: 900,
                          color: TEXT,
                          lineHeight: 1,
                        }}
                      >
                        {dayNum}
                      </p>
                      <p style={{ fontSize: 8, color: TEXT_DIM }}>
                        {monthName}
                      </p>
                    </div>
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: 6,
                          fontSize: 9,
                          fontWeight: 700,
                          background: `${diffCol}15`,
                          color: diffCol,
                        }}
                      >
                        {ev.difficulte}
                      </span>
                      <span style={{ fontSize: 9, color: TEXT_DIM }}>
                        🕐 {ev.heure}
                      </span>
                    </div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: TEXT,
                        marginBottom: 2,
                      }}
                    >
                      {ev.titre}
                    </p>
                    <p
                      style={{ fontSize: 11, color: TEXT_DIM, marginBottom: 6 }}
                    >
                      📍 {ev.lieu}
                    </p>
                    <p
                      style={{ fontSize: 11, color: TEXT_MED, lineHeight: 1.5 }}
                    >
                      {ev.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 10,
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        {ev.participants.slice(0, 4).map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: ACCENT_DIM,
                              border: `2px solid ${CARD}`,
                              marginLeft: i > 0 ? -6 : 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 11,
                            }}
                          >
                            {["👩", "👨", "🧑‍🦱", "👧"][i]}
                          </div>
                        ))}
                      </div>
                      <span style={{ fontSize: 10, color: TEXT_DIM }}>
                        {ev.participants.length}/{ev.maxParticipants}
                      </span>
                      <span style={{ fontSize: 9, color: ACCENT }}>
                        Organisé par {ev.organisateur}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{ padding: "0 16px 14px", display: "flex", gap: 8 }}
                >
                  <button
                    onClick={() => {
                      setJoinedEvents((prev) =>
                        prev.includes(ev.id)
                          ? prev.filter((e) => e !== ev.id)
                          : [...prev, ev.id]
                      );
                      showToast(joined ? "Désinscrit" : "Inscrit !");
                    }}
                    style={{
                      flex: 1,
                      padding: 12,
                      borderRadius: 12,
                      background: joined ? ACCENT : CARD2,
                      border: `1px solid ${joined ? ACCENT : BORDER}`,
                      color: joined ? BG : TEXT,
                      fontWeight: 700,
                      fontSize: 12,
                      fontFamily: "Poppins",
                      cursor: "pointer",
                    }}
                  >
                    {joined ? "✓ Inscrit" : "Participer"}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedConvo({ type: "group", id: 1 });
                      setSub("messages");
                    }}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: CARD2,
                      border: `1px solid ${BORDER}`,
                      color: TEXT_DIM,
                      cursor: "pointer",
                    }}
                  >
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ═══ CLASSEMENT ═══ */}
      {sub === "classement" && (
        <div style={{ padding: 16 }}>
          {leaderboard.map((l, i) => (
            <div
              key={l.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 14,
                background:
                  i < 3 ? `${[ACCENT, "#C0C0C0", "#CD7F32"][i]}08` : CARD,
                borderRadius: 14,
                border: `1px solid ${
                  i < 3 ? `${[ACCENT, "#C0C0C0", "#CD7F32"][i]}25` : BORDER
                }`,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontWeight: 900,
                  fontSize: i < 3 ? 18 : 14,
                  color: i < 3 ? [ACCENT, "#C0C0C0", "#CD7F32"][i] : TEXT_DIM,
                  width: 28,
                  textAlign: "center",
                }}
              >
                {i < 3 ? ["🥇", "🥈", "🥉"][i] : `${i + 1}`}
              </span>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: ACCENT_DIM,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                {l.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: TEXT }}>
                  {l.nom}
                </p>
                <p style={{ fontSize: 10, color: TEXT_DIM }}>
                  Niv. {l.niveau} · {l.badges} badges
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontWeight: 800, fontSize: 14, color: ACCENT }}>
                  {l.xp.toLocaleString()}
                </p>
                <p style={{ fontSize: 9, color: TEXT_DIM }}>XP</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ═══ DÉFIS ═══ */}
      {sub === "challenges" && (
        <div style={{ padding: 16 }}>
          {challenges.map((c) => {
            const progress =
              c.type === "distance"
                ? Math.min((stats.totalDist / c.objectif) * 100, 100)
                : c.type === "denivele"
                ? Math.min((stats.totalDeniv / c.objectif) * 100, 100)
                : c.type === "scans"
                ? Math.min(
                    (stats.scanCollection.length / c.objectif) * 100,
                    100
                  )
                : c.type === "regions"
                ? Math.min(
                    (stats.regionsVisited.length / c.objectif) * 100,
                    100
                  )
                : 0;
            const done = progress >= 100;
            return (
              <div
                key={c.id}
                style={{
                  background: CARD,
                  borderRadius: 16,
                  padding: 16,
                  marginBottom: 10,
                  border: `1px solid ${done ? "#4ADE8040" : BORDER}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 10,
                  }}
                >
                  <span style={{ fontSize: 28 }}>{c.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        color: done ? "#4ADE80" : TEXT,
                      }}
                    >
                      {c.nom}
                    </p>
                    <p style={{ fontSize: 10, color: TEXT_DIM }}>{c.desc}</p>
                  </div>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      color: done ? "#4ADE80" : ACCENT,
                    }}
                  >
                    {Math.floor(progress)}%
                  </span>
                </div>
                <div style={{ height: 4, background: BORDER, borderRadius: 2 }}>
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: done
                        ? "#4ADE80"
                        : `linear-gradient(90deg, ${ACCENT}, #60A5FA)`,
                      borderRadius: 2,
                      transition: "width 0.5s",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 6,
                  }}
                >
                  <span style={{ fontSize: 9, color: TEXT_DIM }}>
                    {c.recompense}
                  </span>
                  {done && (
                    <span
                      style={{ fontSize: 9, color: "#4ADE80", fontWeight: 700 }}
                    >
                      ✓ Complété
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ═══════ AR SCAN SCREEN — IMMERSIVE CAMERA AR ═══════
function ARScanScreen({
  saveToCarnet,
  scanPoints,
  traceGPS,
  onClose,
  voice,
  realPos,
  liveMeteo,
  stats,
  showToast,
}) {
  // ═══ STATE ═══
  const [arObjects, setArObjects] = useState([]);
  const [surfaceReady, setSurfaceReady] = useState(false);
  const [discovered, setDiscovered] = useState([]);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [tick, setTick] = useState(0);
  const [touchYaw, setTouchYaw] = useState(180);
  const [touchPitch, setTouchPitch] = useState(0);
  const [cameraMode, setCameraMode] = useState("loading");
  const [showPeaks, setShowPeaks] = useState(true);
  const [combo, setCombo] = useState(0);
  const [comboTimer, setComboTimer] = useState(0);
  const [lastScanTime, setLastScanTime] = useState(0);
  // Camera-first scan states
  const [scanPhase, setScanPhase] = useState("idle"); // idle | capturing | analyzing | candidates | confirmed
  const [capturedFrame, setCapturedFrame] = useState(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisSteps, setAnalysisSteps] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [contextMatch, setContextMatch] = useState(null);
  // Terrain mode (no gamification)
  const [terrainMode, setTerrainMode] = useState(false);
  // ═══ NEW AR FEATURES STATE ═══
  const [nightMode, setNightMode] = useState(false);
  const [measureMode, setMeasureMode] = useState(false);
  const [measureTarget, setMeasureTarget] = useState(null);
  const [autoScanHint, setAutoScanHint] = useState(null);
  const [proximityAlerts, setProximityAlerts] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [showPOI, setShowPOI] = useState(true);
  const [photoOverlayMode, setPhotoOverlayMode] = useState(false);

  const touchStartRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null);
  const analysisTimerRef = useRef(null);
  const autoScanRef = useRef(null);
  const lastProxAlertRef = useRef({});
  const breadcrumbTimerRef = useRef(null);

  const compass = useDeviceOrientation();
  const hasGyro = compass.supported;
  const heading = hasGyro ? compass.alpha || 0 : touchYaw;
  const pitch = hasGyro
    ? Math.max(-30, Math.min(30, (compass.beta || 60) - 60))
    : touchPitch;
  const compassDir =
    heading < 45 || heading > 315
      ? "N"
      : heading < 135
      ? "E"
      : heading < 225
      ? "S"
      : "O";
  const biomeLabels = {
    collineen: "Collinéen",
    montagnard: "Montagnard",
    subalpin: "Subalpin",
    alpin: "Alpin",
    nival: "Nival",
  };

  // ═══ CAMERA SETUP ═══
  useEffect(() => {
    let ok = true;
    // Wait a tick for video element to be in DOM
    const timer = setTimeout(async () => {
      try {
        // Request camera
        const constraints = {
          video: {
            facingMode: "environment",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        };
        let stream;
        try {
          stream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (e1) {
          // Retry without facingMode (some browsers don't support it)
          try {
            stream = await navigator.mediaDevices.getUserMedia({
              video: true,
              audio: false,
            });
          } catch (e2) {
            if (ok) setCameraMode("fallback");
            return;
          }
        }
        if (!ok) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        // Connect stream to video element
        const connectVideo = () => {
          if (videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
            videoRef.current
              .play()
              .then(() => {
                if (ok) setCameraMode("live");
              })
              .catch(() => {
                if (ok) setCameraMode("fallback");
              });
          } else {
            // Retry connecting after a short delay
            setTimeout(connectVideo, 100);
          }
        };
        connectVideo();
      } catch {
        if (ok) setCameraMode("fallback");
      }
    }, 100);
    return () => {
      ok = false;
      clearTimeout(timer);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const handlePhoto = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setCapturedFrame(ev.target.result);
        startAnalysis(ev.target.result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // ═══ AUTO-SCAN CONTINU (low-res every 10s) ═══
  useEffect(() => {
    if (cameraMode !== "live" || scanPhase !== "idle" || !surfaceReady) return;
    autoScanRef.current = setInterval(() => {
      if (scanPhase !== "idle" || !videoRef.current) return;
      try {
        const c = document.createElement("canvas");
        c.width = 320;
        c.height = 240;
        c.getContext("2d").drawImage(videoRef.current, 0, 0, 320, 240);
        const mini = c.toDataURL("image/jpeg", 0.4).split(",")[1];
        // Quick pre-scan: detect if something interesting is in frame
        fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 100,
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image",
                    source: {
                      type: "base64",
                      media_type: "image/jpeg",
                      data: mini,
                    },
                  },
                  {
                    type: "text",
                    text: 'En 1 mot: cette image contient-elle un animal, une plante remarquable, ou un champignon clairement visible? Réponds UNIQUEMENT "OUI animal", "OUI plante", "OUI champignon" ou "NON".',
                  },
                ],
              },
            ],
          }),
        })
          .then((r) => r.json())
          .then((d) => {
            const txt = d.content?.[0]?.text || "";
            if (txt.includes("OUI")) {
              const type = txt.includes("animal")
                ? "🦌 Animal"
                : txt.includes("champignon")
                ? "🍄 Champignon"
                : "🌿 Plante";
              setAutoScanHint({ type, time: Date.now() });
              vibrate([50, 30, 50]);
            }
          })
          .catch(() => {});
      } catch {}
    }, 12000);
    return () => clearInterval(autoScanRef.current);
  }, [cameraMode, scanPhase, surfaceReady]);

  // Auto-clear hint after 5s
  useEffect(() => {
    if (!autoScanHint) return;
    const t = setTimeout(() => setAutoScanHint(null), 5000);
    return () => clearTimeout(t);
  }, [autoScanHint]);

  // ═══ PROXIMITY NOTIFICATIONS ═══
  useEffect(() => {
    if (!realPos || realPos.isDefault || !surfaceReady) return;
    const now = Date.now();
    const alerts = [];
    const allPOI = [
      ...REFUGES_DB.map((r) => ({ ...r, poiType: "refuge" })),
      ...SOMMETS_DB.map((s) => ({
        ...s,
        poiType: "sommet",
        lat: s.lat,
        lng: s.lng,
      })),
    ];
    allPOI.forEach((poi) => {
      const d =
        Math.sqrt((poi.lat - realPos.lat) ** 2 + (poi.lng - realPos.lng) ** 2) *
        111000;
      const lastAlert = lastProxAlertRef.current[poi.id || poi.nom] || 0;
      if (d < 500 && d > 50 && now - lastAlert > 300000) {
        const thresh = d < 100 ? "100m" : d < 200 ? "200m" : "500m";
        alerts.push({
          id: poi.id || poi.nom,
          nom: poi.nom,
          dist: Math.round(d),
          emoji: poi.emoji || (poi.poiType === "refuge" ? "🏠" : "⛰️"),
          thresh,
        });
        lastProxAlertRef.current[poi.id || poi.nom] = now;
        if (d < 200) {
          vibrate([100, 50, 100]);
          voice?.speak(
            `${
              poi.emoji === "💧"
                ? "Point d'eau"
                : poi.poiType === "refuge"
                ? "Refuge"
                : "Sommet"
            } ${poi.nom} à ${Math.round(d)} mètres.`
          );
        }
      }
    });
    if (alerts.length) setProximityAlerts(alerts);
    const t = setTimeout(() => setProximityAlerts([]), 8000);
    return () => clearTimeout(t);
  }, [realPos?.lat, realPos?.lng, surfaceReady]);

  // ═══ BREADCRUMBS RECORDER ═══
  useEffect(() => {
    if (!realPos || realPos.isDefault) return;
    breadcrumbTimerRef.current = setInterval(() => {
      if (realPos && !realPos.isDefault) {
        setBreadcrumbs((prev) => {
          const last = prev[prev.length - 1];
          if (last) {
            const d =
              Math.sqrt(
                (last.lat - realPos.lat) ** 2 + (last.lng - realPos.lng) ** 2
              ) * 111000;
            if (d < 15) return prev; // Don't record if < 15m moved
          }
          return [
            ...prev.slice(-100),
            {
              lat: realPos.lat,
              lng: realPos.lng,
              alt: realPos.alt,
              t: Date.now(),
            },
          ];
        });
      }
    }, 5000);
    return () => clearInterval(breadcrumbTimerRef.current);
  }, [realPos?.lat, realPos?.lng]);

  // ═══ MEASURE DISTANCE (tap on peak in measure mode) ═══
  const handleMeasure = useCallback(
    (peak) => {
      if (!realPos || realPos.isDefault) return;
      const R = 6371000,
        dLat = ((peak.lat - realPos.lat) * Math.PI) / 180,
        dLng = ((peak.lng - realPos.lng) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((realPos.lat * Math.PI) / 180) *
          Math.cos((peak.lat * Math.PI) / 180) *
          Math.sin(dLng / 2) ** 2;
      const distM = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const deniv = peak.alt - (realPos.alt || 800);
      const pente = (Math.atan2(Math.abs(deniv), distM) * 180) / Math.PI;
      setMeasureTarget({
        nom: peak.nom,
        emoji: peak.emoji,
        alt: peak.alt,
        dist: distM,
        deniv,
        pente: Math.round(pente),
      });
      vibrate(50);
      voice?.speak(
        `${peak.nom}, ${peak.alt} mètres. Distance ${
          distM < 1000
            ? Math.round(distM) + " mètres"
            : (distM / 1000).toFixed(1) + " kilomètres"
        }. Dénivelé ${deniv > 0 ? "positif" : "négatif"} ${Math.abs(
          Math.round(deniv)
        )} mètres.`
      );
      setTimeout(() => setMeasureTarget(null), 8000);
    },
    [realPos, voice]
  );

  // ═══ ENRICHED PHOTO CAPTURE ═══
  const captureEnrichedPhoto = useCallback(() => {
    if (!videoRef.current) return null;
    const c = document.createElement("canvas");
    const vw = videoRef.current.videoWidth || 640,
      vh = videoRef.current.videoHeight || 480;
    c.width = vw;
    c.height = vh;
    const ctx = c.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, vw, vh);
    // Watermark overlay
    const pad = 16,
      fs = Math.round(vw * 0.025);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, vh - 70, vw, 70);
    ctx.font = `bold ${fs}px Poppins, sans-serif`;
    ctx.fillStyle = "#CCFF00";
    ctx.fillText("ISARD", pad, vh - 48);
    ctx.font = `${Math.round(fs * 0.7)}px Poppins, sans-serif`;
    ctx.fillStyle = "#FFFFFF";
    const date =
      new Date().toLocaleDateString("fr-FR") +
      " " +
      new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    ctx.fillText(date, pad, vh - 30);
    if (realPos?.alt)
      ctx.fillText("Alt. " + Math.round(realPos.alt) + "m", pad + 160, vh - 30);
    ctx.fillText(Math.round(heading) + "° " + compassDir, pad + 280, vh - 30);
    if (realPos && !realPos.isDefault) {
      ctx.fillStyle = "#CCFF00";
      ctx.fillText(
        realPos.lat.toFixed(4) + "°N " + realPos.lng.toFixed(4) + "°E",
        pad,
        vh - 12
      );
    }
    return c.toDataURL("image/jpeg", 0.92);
  }, [realPos, heading, compassDir]);

  // Enriched or standard capture
  const captureFrameEnhanced = useCallback(() => {
    if (photoOverlayMode) {
      const enriched = captureEnrichedPhoto();
      if (enriched) {
        setCapturedFrame(enriched);
        startAnalysis(enriched.split(",")[1]);
        return;
      }
    }
    // Use original capture
    if (!videoRef.current) return;
    const c = document.createElement("canvas");
    c.width = videoRef.current.videoWidth || 640;
    c.height = videoRef.current.videoHeight || 480;
    c.getContext("2d").drawImage(videoRef.current, 0, 0);
    const base64 = c.toDataURL("image/jpeg", 0.8);
    setCapturedFrame(base64);
    setScanPhase("capturing");
    startAnalysis(base64.split(",")[1]);
  }, [photoOverlayMode, captureEnrichedPhoto]);

  // ═══ CONTEXTUAL MATCHING ═══
  const getContextScore = useCallback(
    (species) => {
      const alt = realPos?.alt || 1200;
      const month = new Date().getMonth() + 1;
      const currentBiome = getBiome(alt);
      let score = 0;
      const checks = [];

      // Check altitude range
      const allSpecies = [...ESPECES_DB.flore, ...ESPECES_DB.faune];
      const match = allSpecies.find(
        (s) =>
          s.scientifique?.toLowerCase() ===
            species.scientifique?.toLowerCase() ||
          s.nom?.toLowerCase() === species.nom?.toLowerCase()
      );

      if (match) {
        score += 30;
        checks.push({
          label: "Espèce répertoriée Pyrénées",
          ok: true,
          detail: "Base ISARD",
        });
        if (alt >= (match.altMin || 0) && alt <= (match.altMax || 9999)) {
          score += 25;
          checks.push({
            label: `Altitude compatible (${match.altMin}-${match.altMax}m)`,
            ok: true,
            detail: `${Math.round(alt)}m actuel`,
          });
        } else {
          checks.push({
            label: `Altitude hors plage (${match.altMin}-${match.altMax}m)`,
            ok: false,
            detail: `${Math.round(alt)}m actuel`,
          });
        }
        if (match.mois?.includes(month)) {
          score += 20;
          checks.push({
            label: "Saison d'observation correcte",
            ok: true,
            detail: new Date().toLocaleDateString("fr-FR", { month: "long" }),
          });
        } else {
          checks.push({
            label: "Hors saison typique",
            ok: false,
            detail: new Date().toLocaleDateString("fr-FR", { month: "long" }),
          });
        }
        if (match.biome === currentBiome || currentBiome === "zone_humide") {
          score += 15;
          checks.push({
            label: `Biome compatible (${
              biomeLabels[match.biome] || match.biome
            })`,
            ok: true,
          });
        } else {
          score += 5;
          checks.push({
            label: `Biome différent (${biomeLabels[match.biome] || "—"})`,
            ok: false,
            detail: biomeLabels[currentBiome],
          });
        }
        // Check if species is known on this trail
        const onTrail = (scanPoints || []).some((sp) =>
          (sp.scientifique || sp.name || "")
            .toLowerCase()
            .includes((species.nom || "").toLowerCase())
        );
        if (onTrail) {
          score += 10;
          checks.push({
            label: "Signalée sur ce sentier",
            ok: true,
            detail: "Base terrain",
          });
        }

        return {
          score,
          checks,
          dbMatch: match,
          confidence: score >= 70 ? "haute" : score >= 40 ? "moyenne" : "basse",
        };
      }

      // Unknown species — basic checks
      checks.push({
        label: "Espèce non répertoriée",
        ok: false,
        detail: "Absente de la base ISARD",
      });
      if (species.type === "flore" || species.type === "faune") {
        score += 10;
        checks.push({ label: `Type identifié: ${species.type}`, ok: true });
      }
      return { score, checks, dbMatch: null, confidence: "basse" };
    },
    [realPos, scanPoints]
  );

  // ═══ CAPTURE & AI MULTI-CANDIDATE IDENTIFICATION ═══
  const captureFrame = useCallback(() => {
    if (!videoRef.current || scanPhase !== "idle") return;
    setScanPhase("capturing");
    playScanTick(10);
    vibrate([30, 20, 30]);
    try {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
      setCapturedFrame(dataUrl);
      const base64 = dataUrl.split(",")[1];
      setTimeout(() => startAnalysis(base64), 300);
    } catch (err) {
      console.warn("Capture error:", err);
      setScanPhase("idle");
    }
  }, [scanPhase]);

  const startAnalysis = useCallback(
    (base64) => {
      setScanPhase("analyzing");
      setAnalysisProgress(0);
      setAnalysisSteps([]);
      setCandidates([]);
      setSelectedCandidate(null);
      setContextMatch(null);

      // Progressive analysis animation
      const steps = [
        { t: "Capture image...", c: "#AAA", pct: 5 },
        { t: "Pré-traitement...", c: "#60A5FA", pct: 12 },
        { t: "Détection organisme vivant", c: "#60A5FA", pct: 20 },
        { t: "Extraction morphologique", c: "#818CF8", pct: 35 },
        { t: "Comparaison base de données", c: "#A78BFA", pct: 50 },
        { t: "Analyse taxonomique", c: "#C084FC", pct: 65 },
        { t: "Cross-référencement habitat", c: "#4ADE80", pct: 80 },
        { t: "Calcul confiance", c: ACCENT, pct: 92 },
      ];
      let stepIdx = 0;
      analysisTimerRef.current = setInterval(() => {
        if (stepIdx < steps.length) {
          setAnalysisSteps((prev) => [...prev, steps[stepIdx]]);
          setAnalysisProgress(steps[stepIdx].pct);
          const freq = 400 + stepIdx * 100;
          playScanTick(steps[stepIdx].pct);
          stepIdx++;
        }
      }, 350);

      // AI call for multi-candidates
      const alt = realPos?.alt ? Math.round(realPos.alt) : 1200;
      const month = new Date().getMonth() + 1;
      const biome = biomeLabels[getBiome(alt)] || "montagnard";
      const knownSpecies = (scanPoints || [])
        .map((sp) => sp.name || sp.nom)
        .filter(Boolean)
        .join(", ");

      fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 800,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: "image/jpeg",
                    data: base64,
                  },
                },
                {
                  type: "text",
                  text: `Tu es un naturaliste expert des Pyrénées françaises. Contexte terrain:
- Altitude: ${alt}m
- Biome: ${biome}
- Mois: ${month} (${new Date().toLocaleDateString("fr-FR", { month: "long" })})
- Espèces signalées ici: ${knownSpecies || "aucune"}
- Coordonnées: ${realPos?.lat?.toFixed(4) || "42.80"}°N, ${
                    realPos?.lng?.toFixed(4) || "0.50"
                  }°E

Analyse cette photo et propose 3 à 5 espèces candidates classées par probabilité décroissante.
Réponds UNIQUEMENT en JSON valide (pas de markdown):
{"candidats":[{"nom":"nom commun","scientifique":"nom latin","type":"flore|faune","confiance":85,"emoji":"1 emoji","description":"1-2 phrases","famille":"famille taxonomique","indice":"détail visuel qui motive ce choix"}],"contexte":"1 phrase sur ce que tu vois dans l'image"}
Si rien d'identifiable: {"candidats":[{"nom":"Non identifiable","scientifique":"","type":"autre","confiance":0,"emoji":"❓","description":"Aucun organisme identifiable","famille":"","indice":""}],"contexte":"Pas d'organisme visible"}`,
                },
              ],
            },
          ],
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          clearInterval(analysisTimerRef.current);
          const text = (data.content || []).map((c) => c.text || "").join("");
          const clean = text.replace(/```json|```/g, "").trim();
          const parsed = JSON.parse(clean);
          const cands = (parsed.candidats || []).map((c, i) => ({
            ...c,
            rank: i + 1,
            context: getContextScore(c),
          }));
          setAnalysisProgress(100);
          setAnalysisSteps((prev) => [
            ...prev,
            {
              t: `${cands.length} candidat${
                cands.length > 1 ? "s" : ""
              } identifié${cands.length > 1 ? "s" : ""}`,
              c: ACCENT,
              pct: 100,
            },
          ]);
          playScanComplete();
          vibrate([80, 40, 80]);
          setTimeout(() => {
            setCandidates(cands);
            setScanPhase("candidates");
          }, 600);
        })
        .catch((err) => {
          clearInterval(analysisTimerRef.current);
          console.warn("AI error:", err);
          setAnalysisProgress(100);
          setCandidates([
            {
              nom: "Erreur d'analyse",
              scientifique: "",
              type: "autre",
              confiance: 0,
              emoji: "❌",
              description: "Impossible de contacter le serveur.",
              rank: 1,
              context: { score: 0, checks: [], confidence: "basse" },
            },
          ]);
          setScanPhase("candidates");
        });
    },
    [realPos, scanPoints, getContextScore]
  );

  // Cleanup
  useEffect(
    () => () => {
      if (analysisTimerRef.current) clearInterval(analysisTimerRef.current);
    },
    []
  );

  // ═══ CONFIRM CANDIDATE ═══
  // ═══ iNaturalist cross-reference ═══
  const [iNatData, setINatData] = useState(null);
  const [iNatLoading, setINatLoading] = useState(false);

  const fetchINaturalist = useCallback(
    async (speciesName) => {
      setINatLoading(true);
      try {
        const lat = realPos?.lat || 42.8,
          lng = realPos?.lng || 0.5;
        const res = await fetch(
          "https://api.inaturalist.org/v1/observations?taxon_name=" +
            encodeURIComponent(speciesName) +
            "&lat=" +
            lat +
            "&lng=" +
            lng +
            "&radius=10&per_page=5&order=desc&order_by=observed_on"
        );
        const data = await res.json();
        const total = data.total_results || 0;
        const recent = (data.results || []).slice(0, 3).map((r) => ({
          date: r.observed_on,
          place: r.place_guess,
          photo: r.photos?.[0]?.url?.replace("square", "small"),
        }));
        setINatData({ total, recent, radius: 10 });
      } catch {
        setINatData({ total: 0, recent: [], radius: 10, error: true });
      }
      setINatLoading(false);
    },
    [realPos]
  );

  const confirmCandidate = useCallback(
    (cand) => {
      setSelectedCandidate(cand);
      setContextMatch(cand.context);
      setScanPhase("confirmed");
      playDetectPing();
      vibrate([60, 30, 60, 30, 120]);

      // Fetch iNaturalist data
      if (cand.scientifique) fetchINaturalist(cand.scientifique);

      // Save to carnet de terrain
      if (saveToCarnet) {
        saveToCarnet({
          id: "scan_" + Date.now(),
          nom: cand.nom,
          scientifique: cand.scientifique,
          type: cand.type,
          emoji: cand.emoji,
          confiance: cand.confiance,
          contextScore: cand.context?.score || 0,
          photo: capturedFrame,
          lat: realPos?.lat,
          lng: realPos?.lng,
          alt: realPos?.alt,
          biome: getBiome(realPos?.alt || 1200),
          date: new Date().toISOString(),
          heading: Math.round(heading),
          meteo: liveMeteo?.temp ? liveMeteo.temp + "°C" : null,
        });
      }

      // Award XP
      const baseXp =
        cand.context?.dbMatch?.xp || (cand.confiance >= 70 ? 30 : 15);
      const now = Date.now();
      const timeSince = now - lastScanTime;
      setLastScanTime(now);
      let nc =
        timeSince < 45000 && lastScanTime > 0 ? Math.min(combo + 1, 5) : 0;
      setCombo(nc);
      setComboTimer(45);
      const mult = nc >= 3 ? 2 : nc >= 1 ? 1.5 : 1;
      const totalXp = Math.round(baseXp * mult);
      setTotalXpEarned((prev) => prev + totalXp);
      setDiscovered((prev) => [...prev, `ai_${Date.now()}`]);

      if (!terrainMode) {
        voice?.speak(
          `${cand.nom} identifié. Confiance ${cand.confiance} pourcent. Plus ${totalXp} points d'expérience.`
        );
      } else {
        voice?.speak(
          `${cand.nom}, ${cand.scientifique || "espèce inconnue"}. ${
            cand.context?.confidence === "haute"
              ? "Habitat compatible."
              : "Vérification recommandée."
          }`
        );
      }
    },
    [combo, lastScanTime, terrainMode, voice]
  );

  // ═══ RESET SCAN ═══
  const resetScan = useCallback(() => {
    setScanPhase("idle");
    setCapturedFrame(null);
    setAnalysisProgress(0);
    setAnalysisSteps([]);
    setCandidates([]);
    setSelectedCandidate(null);
    setContextMatch(null);
  }, []);

  // ═══ AR OBJECTS (hint markers only) ═══
  const calcBearing = useCallback((lat1, lng1, lat2, lng2) => {
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const la1 = (lat1 * Math.PI) / 180,
      la2 = (lat2 * Math.PI) / 180;
    const y = Math.sin(dLng) * Math.cos(la2);
    const x =
      Math.cos(la1) * Math.sin(la2) -
      Math.sin(la1) * Math.cos(la2) * Math.cos(dLng);
    return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
  }, []);
  const calcDistM = useCallback((lat1, lng1, lat2, lng2) => {
    const R = 6371000,
      dLat = ((lat2 - lat1) * Math.PI) / 180,
      dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }, []);

  useEffect(() => {
    const uLat = realPos?.lat || 43.6047,
      uLng = realPos?.lng || 1.4442;
    const objs = [];
    if (scanPoints?.length) {
      scanPoints.forEach((sp) => {
        const hasCo = sp.lat && sp.lng;
        objs.push({
          id: sp.id || `sp_${Math.random()}`,
          nom: sp.name || sp.nom,
          emoji: sp.emoji || "✨",
          type: sp.type || "flore",
          rarity: sp.rarity || "commun",
          scientifique: sp.scientifique,
          bearing: hasCo
            ? calcBearing(uLat, uLng, sp.lat, sp.lng)
            : Math.random() * 360,
          distM: hasCo
            ? Math.round(calcDistM(uLat, uLng, sp.lat, sp.lng))
            : 50 + Math.random() * 200,
          bobPhase: Math.random() * Math.PI * 2,
          groundY: 50 + Math.random() * 18,
        });
      });
    }
    setArObjects(objs);
  }, [scanPoints, realPos, calcBearing, calcDistM]);

  useEffect(() => {
    const t = setTimeout(() => {
      setSurfaceReady(true);
      vibrate(50);
    }, 1400);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const iv = setInterval(() => setTick((t) => t + 1), 60);
    return () => clearInterval(iv);
  }, []);
  useEffect(() => {
    if (comboTimer <= 0) return;
    const iv = setInterval(
      () =>
        setComboTimer((t) => {
          if (t <= 1) {
            setCombo(0);
            return 0;
          }
          return t - 1;
        }),
      1000
    );
    return () => clearInterval(iv);
  }, [comboTimer > 0]);

  const handlePointerMove = useCallback(
    (e) => {
      if (!touchStartRef.current || hasGyro) return;
      const dx = e.clientX - touchStartRef.current.x,
        dy = e.clientY - touchStartRef.current.y;
      setTouchYaw((prev) => (prev - dx * 0.3 + 360) % 360);
      setTouchPitch((prev) => Math.max(-25, Math.min(25, prev + dy * 0.15)));
      touchStartRef.current = { x: e.clientX, y: e.clientY };
    },
    [hasGyro]
  );

  const FOV = 120;
  const getAngleDiff = useCallback((a, b) => ((b - a + 540) % 360) - 180, []);
  const visibleObjects = useMemo(() => {
    if (!surfaceReady) return [];
    return arObjects.map((obj) => {
      const diff = getAngleDiff(heading, obj.bearing);
      return {
        ...obj,
        inFOV: Math.abs(diff) < FOV / 2,
        screenX: Math.abs(diff) < FOV / 2 ? diff / (FOV / 2) : null,
        angleDiff: Math.abs(diff),
      };
    });
  }, [arObjects, heading, surfaceReady, getAngleDiff]);

  const closeAll = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    onClose(discovered.map((id) => ({ id, xp: 0 })));
  }, [discovered, onClose]);

  const pOff = -(heading / 360) * 100;

  // ═══════════════════════════════════════════════════
  // RENDER: CONFIRMED FIELD CARD
  // ═══════════════════════════════════════════════════
  if (scanPhase === "confirmed" && selectedCandidate) {
    const c = selectedCandidate;
    const ctx = contextMatch || { checks: [], confidence: "basse", score: 0 };
    const dbM = ctx.dbMatch;
    const mult = combo >= 3 ? 2 : combo >= 1 ? 1.5 : 1;
    const baseXp = dbM?.xp || (c.confiance >= 70 ? 30 : 15);
    const xp = Math.round(baseXp * mult);
    const dt = new Date();
    const confColor =
      ctx.confidence === "haute"
        ? "#4ADE80"
        : ctx.confidence === "moyenne"
        ? "#F59E0B"
        : "#F87171";

    return (
      <div
        style={{
          minHeight: "100vh",
          maxWidth: 430,
          margin: "0 auto",
          background: BG,
          fontFamily: "'Poppins', sans-serif",
          color: TEXT,
          overflow: "auto",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <div style={{ padding: "16px 16px 100px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 600, color: TEXT_DIM }}>
              {terrainMode ? "CARNET DE TERRAIN" : "RAPPORT DE TERRAIN"} #
              {String(discovered.length).padStart(3, "0")}
            </span>
            <span style={{ fontSize: 9, color: TEXT_DIM }}>
              {dt.toLocaleDateString("fr-FR")} ·{" "}
              {dt.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {/* Photo */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 220,
              borderRadius: 18,
              overflow: "hidden",
              marginBottom: 16,
              border: `1px solid ${BORDER}`,
            }}
          >
            {capturedFrame ? (
              <img
                src={capturedFrame}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#0A1A0A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 64 }}>{c.emoji}</span>
              </div>
            )}
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                display: "flex",
                gap: 6,
              }}
            >
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 8,
                  fontSize: 9,
                  fontWeight: 700,
                  background: "rgba(0,0,0,0.7)",
                  color: c.type === "flore" ? "#4ADE80" : "#F59E0B",
                  backdropFilter: "blur(8px)",
                }}
              >
                {c.type === "flore" ? "🌿 FLORE" : "🦌 FAUNE"}
              </span>
              {dbM?.rarete && (
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 8,
                    fontSize: 9,
                    fontWeight: 700,
                    background: "rgba(0,0,0,0.7)",
                    color: rarityColor(dbM.rarete),
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {dbM.rarete}
                </span>
              )}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                display: "flex",
                gap: 6,
              }}
            >
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 8,
                  fontSize: 9,
                  fontWeight: 600,
                  background: "rgba(0,0,0,0.7)",
                  color: confColor,
                  backdropFilter: "blur(8px)",
                }}
              >
                IA · {c.confiance}%
              </span>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 8,
                  fontSize: 9,
                  fontWeight: 600,
                  background: "rgba(0,0,0,0.7)",
                  color: confColor,
                  backdropFilter: "blur(8px)",
                }}
              >
                Habitat: {ctx.confidence}
              </span>
            </div>
          </div>

          {/* Species */}
          <div style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT }}>
              {c.emoji} {c.nom}
            </h2>
            {c.scientifique && (
              <p style={{ fontStyle: "italic", color: ACCENT, fontSize: 13 }}>
                {c.scientifique}
              </p>
            )}
            {c.famille && (
              <p style={{ fontSize: 10, color: TEXT_DIM, marginTop: 2 }}>
                Famille: {c.famille}
              </p>
            )}
            <p
              style={{
                color: TEXT_MED,
                fontSize: 12,
                lineHeight: 1.5,
                marginTop: 6,
              }}
            >
              {dbM?.description || c.description}
            </p>
            {c.indice && (
              <p
                style={{
                  fontSize: 10,
                  color: "#60A5FA",
                  marginTop: 4,
                  fontStyle: "italic",
                }}
              >
                Indice visuel: {c.indice}
              </p>
            )}
          </div>

          {/* Contextual validation */}
          <div
            style={{
              background: "#0A0F0A",
              borderRadius: 14,
              padding: 14,
              marginBottom: 14,
              border: `1px solid ${confColor}20`,
            }}
          >
            <p
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: confColor,
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {ctx.confidence === "haute"
                ? "✅"
                : ctx.confidence === "moyenne"
                ? "⚠️"
                : "❌"}{" "}
              VALIDATION CONTEXTUELLE — Score {ctx.score}/100
            </p>
            {ctx.checks.map((ch, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 3,
                  fontFamily: "monospace",
                }}
              >
                <span style={{ fontSize: 10, width: 14, textAlign: "center" }}>
                  {ch.ok ? "✓" : "✗"}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: ch.ok ? "#4ADE80" : "#F87171",
                    flex: 1,
                  }}
                >
                  {ch.label}
                </span>
                {ch.detail && (
                  <span style={{ fontSize: 8, color: TEXT_DIM }}>
                    {ch.detail}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* iNaturalist community observations */}
          {(iNatData || iNatLoading) && (
            <div
              style={{
                background: "#0A0F14",
                borderRadius: 14,
                padding: 14,
                marginBottom: 14,
                border: "1px solid #1E3A5F",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#60A5FA",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                🔬 iNATURALIST — Observations communautaires (
                {iNatData?.radius || 10}km)
              </p>
              {iNatLoading ? (
                <p style={{ fontSize: 10, color: TEXT_DIM }}>
                  Recherche en cours...
                </p>
              ) : iNatData?.total > 0 ? (
                <div>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#60A5FA",
                      marginBottom: 6,
                    }}
                  >
                    {iNatData.total} observation{iNatData.total > 1 ? "s" : ""}{" "}
                    dans la zone
                  </p>
                  {iNatData.recent.map((obs, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 4,
                        fontSize: 9,
                        color: TEXT_DIM,
                      }}
                    >
                      <span style={{ color: "#4ADE80" }}>●</span>
                      <span>{obs.date || "Date inconnue"}</span>
                      {obs.place && <span>· {obs.place}</span>}
                    </div>
                  ))}
                  <p
                    style={{
                      fontSize: 8,
                      color: TEXT_DIM,
                      marginTop: 6,
                      fontStyle: "italic",
                    }}
                  >
                    Source: iNaturalist.org — données communautaires
                  </p>
                </div>
              ) : (
                <p style={{ fontSize: 10, color: TEXT_DIM }}>
                  {iNatData?.error
                    ? "Hors connexion"
                    : "Aucune observation dans cette zone"}
                </p>
              )}
            </div>
          )}

          {/* Taxonomy */}
          {(c.scientifique || dbM) && (
            <div
              style={{
                background: "#0A0F0A",
                borderRadius: 14,
                padding: 14,
                marginBottom: 14,
                border: "1px solid #1a2a1a",
                fontFamily: "monospace",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  color: "#4ADE8080",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                CLASSIFICATION
              </p>
              {[
                {
                  label: "Règne",
                  val: c.type === "flore" ? "Plantae" : "Animalia",
                  c: "#60A5FA",
                },
                {
                  label: "Famille",
                  val: c.famille || dbM?.famille || "—",
                  c: "#818CF8",
                },
                {
                  label: "Genre",
                  val: (c.scientifique || "").split(" ")[0] || "—",
                  c: "#A78BFA",
                },
                { label: "Espèce", val: c.scientifique || "—", c: ACCENT },
                ...(dbM?.protection
                  ? [{ label: "Protection", val: dbM.protection, c: "#F87171" }]
                  : []),
                ...(dbM?.statut
                  ? [{ label: "Statut UICN", val: dbM.statut, c: "#F59E0B" }]
                  : []),
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 3,
                  }}
                >
                  <span style={{ fontSize: 9, color: "#4ADE8060", width: 8 }}>
                    {">"}
                  </span>
                  <span style={{ fontSize: 9, color: "#888", width: 80 }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: 10, color: row.c, fontWeight: 600 }}>
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Field data */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
              marginBottom: 14,
            }}
          >
            {[
              {
                icon: "📍",
                label: "Position",
                val: `${(realPos?.lat || 42.8).toFixed(4)}°N`,
              },
              {
                icon: "⛰️",
                label: "Altitude",
                val: `${Math.round(realPos?.alt || 1200)}m`,
              },
              {
                icon: "🌿",
                label: "Biome",
                val: biomeLabels[getBiome(realPos?.alt || 1200)] || "—",
              },
              {
                icon: "🧭",
                label: "Azimut",
                val: `${Math.round(heading)}° ${compassDir}`,
              },
              {
                icon: "📅",
                label: "Date",
                val: dt.toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                }),
              },
              {
                icon: "🌡️",
                label: "Météo",
                val: liveMeteo?.temp != null ? `${liveMeteo.temp}°C` : "—",
              },
            ].map((d, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  borderRadius: 10,
                  padding: "8px 10px",
                  border: `1px solid ${BORDER}`,
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 14 }}>{d.icon}</span>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: TEXT,
                    marginTop: 2,
                  }}
                >
                  {d.val}
                </p>
                <p style={{ fontSize: 7, color: TEXT_DIM }}>{d.label}</p>
              </div>
            ))}
          </div>

          {/* XP (hidden in terrain mode) */}
          {!terrainMode && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: 14,
                background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}05)`,
                borderRadius: 14,
                border: `1px solid ${ACCENT}25`,
                marginBottom: 14,
              }}
            >
              <Zap size={20} color={ACCENT} />
              <span style={{ fontWeight: 900, fontSize: 22, color: ACCENT }}>
                +{xp} XP
              </span>
              {mult > 1 && (
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: 8,
                    background: "#F59E0B20",
                    color: "#F59E0B",
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  COMBO x{mult}
                </span>
              )}
            </div>
          )}

          {/* Actions */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={resetScan}
              style={{
                flex: 1,
                padding: 15,
                borderRadius: 14,
                background: CARD,
                border: `1px solid ${BORDER}`,
                color: TEXT,
                fontWeight: 600,
                fontSize: 13,
                fontFamily: "Poppins",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Camera size={16} /> Nouveau scan
            </button>
            <button
              onClick={closeAll}
              style={{
                flex: 1,
                padding: 15,
                borderRadius: 14,
                background: ACCENT,
                color: BG,
                fontWeight: 800,
                fontSize: 13,
                fontFamily: "Poppins",
                border: "none",
                cursor: "pointer",
              }}
            >
              Terminer
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // RENDER: MULTI-CANDIDATE SELECTION
  // ═══════════════════════════════════════════════════
  if (scanPhase === "candidates" && candidates.length > 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          maxWidth: 430,
          margin: "0 auto",
          background: BG,
          fontFamily: "'Poppins', sans-serif",
          color: TEXT,
          overflow: "auto",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <div style={{ padding: "16px 16px 40px" }}>
          {/* Captured photo thumbnail */}
          {capturedFrame && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 160,
                borderRadius: 18,
                overflow: "hidden",
                marginBottom: 16,
                border: `1px solid ${BORDER}`,
              }}
            >
              <img
                src={capturedFrame}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 16,
                  right: 16,
                }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, color: TEXT }}>
                  {candidates.length} candidat{candidates.length > 1 ? "s" : ""}{" "}
                  identifié{candidates.length > 1 ? "s" : ""}
                </p>
                <p style={{ fontSize: 9, color: TEXT_DIM }}>
                  Sélectionnez l'espèce correcte ou rejetez tous
                </p>
              </div>
            </div>
          )}

          {/* Candidate list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {candidates.map((cand, i) => {
              const confColor =
                cand.confiance >= 70
                  ? "#4ADE80"
                  : cand.confiance >= 40
                  ? "#F59E0B"
                  : "#F87171";
              const ctxColor =
                cand.context?.confidence === "haute"
                  ? "#4ADE80"
                  : cand.context?.confidence === "moyenne"
                  ? "#F59E0B"
                  : "#F87171";
              return (
                <button
                  key={i}
                  onClick={() => confirmCandidate(cand)}
                  style={{
                    width: "100%",
                    padding: 14,
                    borderRadius: 16,
                    background: CARD,
                    border: `1px solid ${i === 0 ? ACCENT + "40" : BORDER}`,
                    cursor: "pointer",
                    textAlign: "left",
                    color: TEXT,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: i === 0 ? `${ACCENT}15` : CARD2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {cand.emoji || "✨"}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 2,
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: 14 }}>
                        {cand.nom}
                      </span>
                      {i === 0 && (
                        <span
                          style={{
                            fontSize: 8,
                            padding: "1px 6px",
                            borderRadius: 4,
                            background: `${ACCENT}20`,
                            color: ACCENT,
                            fontWeight: 700,
                          }}
                        >
                          MEILLEUR
                        </span>
                      )}
                    </div>
                    {cand.scientifique && (
                      <p
                        style={{
                          fontSize: 10,
                          fontStyle: "italic",
                          color: ACCENT,
                          marginBottom: 3,
                        }}
                      >
                        {cand.scientifique}
                      </p>
                    )}
                    {cand.indice && (
                      <p
                        style={{
                          fontSize: 9,
                          color: TEXT_DIM,
                          marginBottom: 4,
                        }}
                      >
                        {cand.indice}
                      </p>
                    )}
                    {/* Confidence bars */}
                    <div
                      style={{ display: "flex", gap: 8, alignItems: "center" }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 2,
                          }}
                        >
                          <span style={{ fontSize: 8, color: TEXT_DIM }}>
                            IA
                          </span>
                          <span
                            style={{
                              fontSize: 8,
                              color: confColor,
                              fontWeight: 700,
                            }}
                          >
                            {cand.confiance}%
                          </span>
                        </div>
                        <div
                          style={{
                            height: 3,
                            background: "rgba(255,255,255,0.08)",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${cand.confiance}%`,
                              height: "100%",
                              background: confColor,
                              borderRadius: 2,
                              transition: "width 0.8s ease",
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 2,
                          }}
                        >
                          <span style={{ fontSize: 8, color: TEXT_DIM }}>
                            Habitat
                          </span>
                          <span
                            style={{
                              fontSize: 8,
                              color: ctxColor,
                              fontWeight: 700,
                            }}
                          >
                            {cand.context?.score || 0}/100
                          </span>
                        </div>
                        <div
                          style={{
                            height: 3,
                            background: "rgba(255,255,255,0.08)",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${cand.context?.score || 0}%`,
                              height: "100%",
                              background: ctxColor,
                              borderRadius: 2,
                              transition: "width 0.8s ease",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button
              onClick={resetScan}
              style={{
                flex: 1,
                padding: 14,
                borderRadius: 14,
                background: CARD,
                border: `1px solid ${BORDER}`,
                color: TEXT_DIM,
                fontWeight: 600,
                fontSize: 12,
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
            >
              Rescanner
            </button>
            <button
              onClick={closeAll}
              style={{
                flex: 1,
                padding: 14,
                borderRadius: 14,
                background: CARD,
                border: `1px solid ${BORDER}`,
                color: TEXT_DIM,
                fontWeight: 600,
                fontSize: 12,
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
            >
              Rejeter tout
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // RENDER: MAIN AR VIEW
  // ═══════════════════════════════════════════════════
  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: 430,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
        touchAction: "none",
        userSelect: "none",
        color: TEXT,
      }}
      onPointerDown={(e) => {
        if (!hasGyro) touchStartRef.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={() => {
        touchStartRef.current = null;
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handlePhoto}
        style={{ display: "none" }}
      />

      {/* ═══ BACKGROUND ═══ */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          display: cameraMode === "live" ? "block" : "none",
        }}
      />
      {cameraMode !== "live" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateY(${pitch * 0.5}px)`,
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "40%",
              background:
                "linear-gradient(180deg, #1a3a5c 0%, #3a6a8a 20%, #6a9ab5 45%, #95c0d5 70%, #c5dde8 100%)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: `${55 + pOff * 0.12}%`,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#FEF3C7",
                boxShadow: "0 0 50px 15px rgba(254,243,199,0.35)",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "38%",
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${pOff * 0.5}%`,
                width: "300%",
                height: "100%",
                background:
                  "linear-gradient(180deg, #6b8a3a 0%, #4a7a2a 15%, #3a6a1a 35%, #2a5a10 60%, #1a4a08 100%)",
              }}
            />
          </div>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          zIndex: 1,
        }}
      />

      {/* ═══ CAPTURED FRAME FREEZE ═══ */}
      {(scanPhase === "capturing" || scanPhase === "analyzing") &&
        capturedFrame && (
          <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
            <img
              src={capturedFrame}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
              }}
            />
          </div>
        )}

      {/* ═══ TRAIL PATH — ALWAYS VISIBLE ON CAMERA ═══ */}
      {surfaceReady &&
        traceGPS &&
        traceGPS.length >= 2 &&
        (() => {
          // Use real GPS or fall back to first trail point for demo
          const uLat =
            realPos && !realPos.isDefault ? realPos.lat : traceGPS[0][0];
          const uLng =
            realPos && !realPos.isDefault ? realPos.lng : traceGPS[0][1];
          const R = 6371000;
          const toRad = (d) => (d * Math.PI) / 180;
          const pts = traceGPS.map(([lat, lng], idx) => {
            const dLat = toRad(lat - uLat),
              dLng = toRad(lng - uLng);
            const y2 = Math.sin(dLng) * Math.cos(toRad(lat));
            const x2 =
              Math.cos(toRad(uLat)) * Math.sin(toRad(lat)) -
              Math.sin(toRad(uLat)) * Math.cos(toRad(lat)) * Math.cos(dLng);
            const bearing = ((Math.atan2(y2, x2) * 180) / Math.PI + 360) % 360;
            const a2 =
              Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(uLat)) *
                Math.cos(toRad(lat)) *
                Math.sin(dLng / 2) ** 2;
            const distM = R * 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
            const diff = ((bearing - heading + 540) % 360) - 180;
            const depth = Math.max(0, Math.min(1, 1 - distM / 3000));
            // Perspective projection: further points -> higher on screen (closer to horizon)
            const screenY = 380 - depth * 300;
            const screenX = 215 + diff * (2 + depth * 2.5);
            return {
              screenX,
              screenY,
              inView: Math.abs(diff) < 80,
              distM,
              depth,
              bearing,
              idx,
            };
          });

          // Find nearest trail point (for "you are here" and next waypoint)
          let nearIdx = 0,
            nearDist = Infinity;
          pts.forEach((p, i) => {
            if (p.distM < nearDist) {
              nearDist = p.distM;
              nearIdx = i;
            }
          });
          const nextIdx = Math.min(nearIdx + 1, pts.length - 1);
          const nextPt = pts[nextIdx];

          const visPts = pts.filter((p) => p.inView && p.distM < 3000);
          if (visPts.length < 2) {
            // Show direction arrow to trail even when not visible
            if (nextPt && !nextPt.inView) {
              const arrowDir = ((nextPt.bearing - heading + 540) % 360) - 180;
              return (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: arrowDir > 0 ? "auto" : 16,
                    right: arrowDir > 0 ? 16 : "auto",
                    zIndex: 15,
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      borderRadius: 14,
                      padding: "10px 16px",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 18,
                        transform: `rotate(${arrowDir > 0 ? 90 : -90}deg)`,
                      }}
                    >
                      ➤
                    </span>
                    <div>
                      <p
                        style={{ fontSize: 10, fontWeight: 700, color: ACCENT }}
                      >
                        Sentier {arrowDir > 0 ? "→" : "←"}
                      </p>
                      <p style={{ fontSize: 8, color: TEXT_DIM }}>
                        {Math.round(nextPt.distM)}m · Tournez{" "}
                        {arrowDir > 0 ? "à droite" : "à gauche"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }

          // Build path with perspective-correct width
          const pathD = visPts
            .map(
              (p, i) =>
                `${i === 0 ? "M" : "L"}${p.screenX.toFixed(
                  1
                )} ${p.screenY.toFixed(1)}`
            )
            .join(" ");

          // Separate completed (behind user) and remaining (ahead) portions
          const behindPts = visPts.filter((p) => p.idx <= nearIdx);
          const aheadPts = visPts.filter((p) => p.idx >= nearIdx);
          const aheadD =
            aheadPts.length >= 2
              ? aheadPts
                  .map(
                    (p, i) =>
                      `${i === 0 ? "M" : "L"}${p.screenX.toFixed(
                        1
                      )} ${p.screenY.toFixed(1)}`
                  )
                  .join(" ")
              : "";
          const behindD =
            behindPts.length >= 2
              ? behindPts
                  .map(
                    (p, i) =>
                      `${i === 0 ? "M" : "L"}${p.screenX.toFixed(
                        1
                      )} ${p.screenY.toFixed(1)}`
                  )
                  .join(" ")
              : "";

          // Direction arrows along the path (every few points)
          const arrowPts = aheadPts.filter(
            (_, i) =>
              i > 0 && i % Math.max(1, Math.floor(aheadPts.length / 5)) === 0
          );

          return (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 430 400"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="trailAhead" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor={ACCENT} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={ACCENT} stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="trailBehind" x1="0" y1="1" x2="0" y2="0">
                    <stop
                      offset="0%"
                      stopColor="rgba(255,255,255,0.3)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(255,255,255,0.05)"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                  <filter id="trailGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Shadow */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(0,0,0,0.4)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Completed trail (behind) */}
                {behindD && (
                  <path
                    d={behindD}
                    fill="none"
                    stroke="url(#trailBehind)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="6 8"
                  />
                )}

                {/* Active trail (ahead) — glowing */}
                {aheadD && (
                  <path
                    d={aheadD}
                    fill="none"
                    stroke="url(#trailAhead)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#trailGlow)"
                  />
                )}
                {aheadD && (
                  <path
                    d={aheadD}
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="12 6"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="36"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </path>
                )}

                {/* Waypoint dots */}
                {visPts
                  .filter(
                    (_, i) =>
                      i % Math.max(1, Math.floor(visPts.length / 10)) === 0
                  )
                  .map((p, i) => (
                    <circle
                      key={i}
                      cx={p.screenX}
                      cy={p.screenY}
                      r={1.5 + p.depth * 3}
                      fill={p.idx <= nearIdx ? "rgba(255,255,255,0.3)" : ACCENT}
                      opacity={0.4 + p.depth * 0.5}
                    />
                  ))}

                {/* Direction arrows along ahead path */}
                {arrowPts.map((p, i) => {
                  const prevP = aheadPts[aheadPts.indexOf(p) - 1] || p;
                  const angle =
                    (Math.atan2(
                      p.screenY - prevP.screenY,
                      p.screenX - prevP.screenX
                    ) *
                      180) /
                    Math.PI;
                  const sz = 3 + p.depth * 5;
                  return (
                    <g
                      key={"arr" + i}
                      transform={`translate(${p.screenX}, ${p.screenY}) rotate(${angle})`}
                    >
                      <polygon
                        points={`${sz},0 ${-sz / 2},${-sz / 2} ${-sz / 2},${
                          sz / 2
                        }`}
                        fill={ACCENT}
                        opacity={0.5 + p.depth * 0.4}
                      />
                    </g>
                  );
                })}

                {/* Next waypoint pulse */}
                {nextPt && nextPt.inView && (
                  <g>
                    <circle
                      cx={nextPt.screenX}
                      cy={nextPt.screenY}
                      r="10"
                      fill="none"
                      stroke={ACCENT}
                      strokeWidth="1.5"
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        values="6;14;6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.7;0.1;0.7"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={nextPt.screenX}
                      cy={nextPt.screenY}
                      r="4"
                      fill={ACCENT}
                      opacity="0.8"
                    />
                  </g>
                )}
              </svg>

              {/* Next waypoint info overlay */}
              {nextPt && nextPt.inView && (
                <div
                  style={{
                    position: "absolute",
                    left:
                      Math.min(
                        350,
                        Math.max(10, (nextPt.screenX / 430) * 100)
                      ) + "%",
                    top: Math.max(10, (nextPt.screenY / 400) * 100 - 12) + "%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(0,0,0,0.75)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      backdropFilter: "blur(8px)",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <p style={{ fontSize: 9, fontWeight: 700, color: ACCENT }}>
                      {nextPt.distM < 1000
                        ? Math.round(nextPt.distM) + "m"
                        : (nextPt.distM / 1000).toFixed(1) + "km"}
                    </p>
                  </div>
                </div>
              )}

              {/* Trail status bar at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 120,
                  left: 16,
                  right: 16,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    borderRadius: 10,
                    padding: "6px 12px",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      color: TEXT_DIM,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Navigation size={10} color={ACCENT} /> Tracé GPS
                  </span>
                  <div
                    style={{
                      width: 60,
                      height: 3,
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.round(
                          (nearIdx / Math.max(1, pts.length - 1)) * 100
                        )}%`,
                        height: "100%",
                        background: ACCENT,
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 9, color: ACCENT, fontWeight: 600 }}>
                    {Math.round((nearIdx / Math.max(1, pts.length - 1)) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })()}

      {/* ═══ TOP HUD ═══ */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 12,
          right: 12,
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            borderRadius: 14,
            padding: "8px 12px",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 3,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: surfaceReady ? "#4ADE80" : "#FBBF24",
                boxShadow: `0 0 8px ${surfaceReady ? "#4ADE80" : "#FBBF24"}`,
              }}
            />
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: surfaceReady ? "#4ADE80" : "#FBBF24",
              }}
            >
              {terrainMode
                ? "🔬 TERRAIN"
                : cameraMode === "live"
                ? "📷 LIVE AR"
                : "🏔️ AR"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Compass
              size={10}
              color={ACCENT}
              style={{
                transform: `rotate(${-heading}deg)`,
                transition: "transform 0.15s",
              }}
            />
            <span style={{ fontSize: 9, color: ACCENT, fontWeight: 700 }}>
              {Math.round(heading)}° {compassDir}
            </span>
            {realPos?.alt && !realPos.isDefault && (
              <span style={{ fontSize: 8, color: TEXT_DIM, marginLeft: 4 }}>
                {Math.round(realPos.alt)}m
              </span>
            )}
          </div>
          {/* Sensor status indicators */}
          <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
            <span
              style={{
                fontSize: 7,
                padding: "1px 5px",
                borderRadius: 4,
                background: cameraMode === "live" ? "#4ADE8025" : "#F8717125",
                color: cameraMode === "live" ? "#4ADE80" : "#F87171",
                fontWeight: 600,
              }}
            >
              {cameraMode === "live"
                ? "📷 CAM"
                : cameraMode === "loading"
                ? "⏳ CAM"
                : "❌ CAM"}
            </span>
            <span
              style={{
                fontSize: 7,
                padding: "1px 5px",
                borderRadius: 4,
                background:
                  realPos && !realPos.isDefault ? "#4ADE8025" : "#F59E0B25",
                color: realPos && !realPos.isDefault ? "#4ADE80" : "#F59E0B",
                fontWeight: 600,
              }}
            >
              {realPos && !realPos.isDefault ? "📍 GPS" : "⚠️ GPS"}
            </span>
            <span
              style={{
                fontSize: 7,
                padding: "1px 5px",
                borderRadius: 4,
                background: hasGyro ? "#4ADE8025" : "#F59E0B25",
                color: hasGyro ? "#4ADE80" : "#F59E0B",
                fontWeight: 600,
              }}
            >
              {hasGyro ? "🧭 GYRO" : "👆 TOUCH"}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {/* AR Mode toggles */}
          <div
            style={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "flex-end",
              maxWidth: 200,
            }}
          >
            <button
              onClick={() => setTerrainMode(!terrainMode)}
              style={{
                background: terrainMode ? `${ACCENT}30` : "rgba(0,0,0,0.6)",
                borderRadius: 14,
                padding: "4px 8px",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  terrainMode ? ACCENT : "rgba(255,255,255,0.1)"
                }`,
                cursor: "pointer",
                color: terrainMode ? ACCENT : TEXT_DIM,
                fontSize: 9,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {terrainMode ? "🔬" : "🎮"}
            </button>
            <button
              onClick={() => setNightMode(!nightMode)}
              style={{
                background: nightMode ? "#312E8150" : "rgba(0,0,0,0.6)",
                borderRadius: 14,
                padding: "4px 8px",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  nightMode ? "#A78BFA" : "rgba(255,255,255,0.1)"
                }`,
                cursor: "pointer",
                color: nightMode ? "#A78BFA" : TEXT_DIM,
                fontSize: 9,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {nightMode ? "⭐" : "🌙"}
            </button>
            <button
              onClick={() => {
                setMeasureMode(!measureMode);
                setMeasureTarget(null);
              }}
              style={{
                background: measureMode ? "#60A5FA30" : "rgba(0,0,0,0.6)",
                borderRadius: 14,
                padding: "4px 8px",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  measureMode ? "#60A5FA" : "rgba(255,255,255,0.1)"
                }`,
                cursor: "pointer",
                color: measureMode ? "#60A5FA" : TEXT_DIM,
                fontSize: 9,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              📏
            </button>
            <button
              onClick={() => setShowPOI(!showPOI)}
              style={{
                background: showPOI ? "#4ADE8030" : "rgba(0,0,0,0.6)",
                borderRadius: 14,
                padding: "4px 8px",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  showPOI ? "#4ADE80" : "rgba(255,255,255,0.1)"
                }`,
                cursor: "pointer",
                color: showPOI ? "#4ADE80" : TEXT_DIM,
                fontSize: 9,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              🏠
            </button>
            <button
              onClick={() => setPhotoOverlayMode(!photoOverlayMode)}
              style={{
                background: photoOverlayMode ? "#F59E0B30" : "rgba(0,0,0,0.6)",
                borderRadius: 14,
                padding: "4px 8px",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  photoOverlayMode ? "#F59E0B" : "rgba(255,255,255,0.1)"
                }`,
                cursor: "pointer",
                color: photoOverlayMode ? "#F59E0B" : TEXT_DIM,
                fontSize: 9,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              🖼️
            </button>
          </div>
          {cameraMode === "fallback" && (
            <button
              onClick={() => fileInputRef.current?.click()}
              style={{
                background: "rgba(0,0,0,0.6)",
                borderRadius: 20,
                padding: "5px 12px",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: 4,
                border: `1px solid ${ACCENT}40`,
                cursor: "pointer",
                color: ACCENT,
                fontSize: 10,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              <Camera size={12} /> Photo
            </button>
          )}
          <div
            style={{
              background: "rgba(0,0,0,0.6)",
              borderRadius: 20,
              padding: "5px 12px",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: 5,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Aperture size={11} color={ACCENT} />
            <span style={{ fontSize: 11, fontWeight: 800, color: TEXT }}>
              {discovered.length}
            </span>
          </div>
          <button
            onClick={closeAll}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: TEXT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(12px)",
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* ═══ COMPASS STRIP ═══ */}
      {surfaceReady && scanPhase === "idle" && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 15,
            display: "flex",
            alignItems: "center",
            background: "rgba(0,0,0,0.5)",
            borderRadius: 20,
            padding: "4px 14px",
            backdropFilter: "blur(8px)",
          }}
        >
          {[-60, -45, -30, -15, 0, 15, 30, 45, 60].map((offset) => {
            const deg = (heading + offset + 360) % 360;
            const dirs = {
              0: "N",
              45: "NE",
              90: "E",
              135: "SE",
              180: "S",
              225: "SO",
              270: "O",
              315: "NO",
            };
            const dirLabel = dirs[(Math.round(deg / 45) * 45) % 360];
            const isCenter = offset === 0;
            const hasHint = arObjects.some(
              (o) => Math.abs(getAngleDiff(deg, o.bearing)) < 8
            );
            return (
              <div
                key={offset}
                style={{
                  width: isCenter ? 20 : 16,
                  textAlign: "center",
                  opacity:
                    Math.abs(offset) > 45 ? 0.3 : 1 - Math.abs(offset) / 90,
                }}
              >
                {dirLabel && Math.abs(offset) <= 45 ? (
                  <span
                    style={{
                      fontSize: 7,
                      fontWeight: 700,
                      color: isCenter ? ACCENT : "#FFF",
                    }}
                  >
                    {dirLabel}
                  </span>
                ) : (
                  <div
                    style={{
                      width: 1,
                      height: isCenter ? 8 : 4,
                      background: isCenter ? ACCENT : "rgba(255,255,255,0.3)",
                      margin: "0 auto",
                    }}
                  />
                )}
                {hasHint && (
                  <div
                    style={{
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.3)",
                      margin: "2px auto 0",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ═══ iOS PERMISSIONS BANNER ═══ */}
      {compass.needsPermission &&
        !compass.permGranted &&
        surfaceReady &&
        scanPhase === "idle" && (
          <div
            style={{
              position: "absolute",
              top: 135,
              left: 12,
              right: 12,
              zIndex: 25,
            }}
          >
            <button
              onClick={async () => {
                await compass.requestPermission();
              }}
              style={{
                width: "100%",
                padding: "10px 16px",
                borderRadius: 14,
                background: "rgba(0,0,0,0.85)",
                border: `1px solid ${ACCENT}40`,
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: TEXT,
              }}
            >
              <Compass size={18} color={ACCENT} />
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: ACCENT }}>
                  Activer la boussole AR
                </p>
                <p style={{ fontSize: 9, color: TEXT_DIM }}>
                  Nécessaire pour l'orientation en réalité augmentée
                </p>
              </div>
              <ChevronRight size={16} color={ACCENT} />
            </button>
          </div>
        )}

      {/* ═══ HINT MARKERS (known species in area) ═══ */}
      {surfaceReady &&
        scanPhase === "idle" &&
        visibleObjects
          .filter((o) => o.inFOV)
          .map((obj, i) => {
            const bob = Math.sin(tick * 0.04 + obj.bobPhase) * 3;
            const xPct = 50 + obj.screenX * 42;
            const scale = 0.5 + (1 - obj.angleDiff / (FOV / 2)) * 0.4;
            const yPos = obj.groundY - obj.angleDiff * 0.04;
            return (
              <div
                key={obj.id}
                style={{
                  position: "absolute",
                  left: `${xPct}%`,
                  top: `${yPos}%`,
                  transform: `translate(-50%, -100%) scale(${scale})`,
                  zIndex: 5,
                  opacity: 0.5,
                  pointerEvents: "none",
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  style={{ transform: `translateY(${bob}px)` }}
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                  />
                  <circle cx="24" cy="24" r="2" fill="rgba(255,255,255,0.25)" />
                </svg>
                <div style={{ textAlign: "center", marginTop: -4 }}>
                  <span
                    style={{
                      fontSize: 7,
                      color: "rgba(255,255,255,0.35)",
                      background: "rgba(0,0,0,0.3)",
                      padding: "1px 5px",
                      borderRadius: 4,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {obj.nom} · {obj.distM}m
                  </span>
                </div>
              </div>
            );
          })}

      {/* ═══ PEAKFINDER ═══ */}
      {surfaceReady &&
        scanPhase === "idle" &&
        showPeaks &&
        realPos &&
        !realPos.isDefault &&
        SOMMETS_DB.map((peak) => {
          const dLng = ((peak.lng - realPos.lng) * Math.PI) / 180;
          const la1 = (realPos.lat * Math.PI) / 180,
            la2 = (peak.lat * Math.PI) / 180;
          const y = Math.sin(dLng) * Math.cos(la2);
          const x =
            Math.cos(la1) * Math.sin(la2) -
            Math.sin(la1) * Math.cos(la2) * Math.cos(dLng);
          const bearing = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
          const diff = ((bearing - heading + 540) % 360) - 180;
          if (Math.abs(diff) > 55) return null;
          const R = 6371,
            dLat = ((peak.lat - realPos.lat) * Math.PI) / 180;
          const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
          const distKm = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          if (distKm > 80) return null;
          const xPct = 50 + diff * 0.75;
          const elevAngle =
            (Math.atan2(peak.alt - (realPos.alt || 800), distKm * 1000) * 180) /
            Math.PI;
          const yPct = Math.max(8, 40 - elevAngle * 2 - pitch * 0.3);
          return (
            <div
              key={peak.nom}
              onClick={() => measureMode && handleMeasure(peak)}
              style={{
                position: "absolute",
                left: `${xPct}%`,
                top: `${yPct}%`,
                transform: "translateX(-50%)",
                zIndex: 4,
                textAlign: "center",
                pointerEvents: measureMode ? "auto" : "none",
                cursor: measureMode ? "pointer" : "default",
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 20,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)",
                  margin: "0 auto",
                }}
              />
              <div
                style={{
                  background: "rgba(0,0,0,0.65)",
                  borderRadius: 8,
                  padding: "3px 8px",
                  backdropFilter: "blur(6px)",
                  whiteSpace: "nowrap",
                }}
              >
                <p style={{ fontSize: 9, fontWeight: 700, color: "#FFF" }}>
                  {peak.emoji} {peak.nom}
                </p>
                <p style={{ fontSize: 7, color: TEXT_DIM }}>
                  {peak.alt}m ·{" "}
                  {distKm < 1
                    ? `${Math.round(distKm * 1000)}m`
                    : `${distKm.toFixed(1)}km`}
                </p>
              </div>
            </div>
          );
        })}

      {/* ═══ POI AR: Refuges, Water, Shelters ═══ */}
      {surfaceReady &&
        showPOI &&
        realPos &&
        !realPos.isDefault &&
        REFUGES_DB.map((poi) => {
          const dLng = ((poi.lng - realPos.lng) * Math.PI) / 180;
          const la1 = (realPos.lat * Math.PI) / 180,
            la2 = (poi.lat * Math.PI) / 180;
          const y = Math.sin(dLng) * Math.cos(la2);
          const x =
            Math.cos(la1) * Math.sin(la2) -
            Math.sin(la1) * Math.cos(la2) * Math.cos(dLng);
          const bearing = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
          const diff = ((bearing - heading + 540) % 360) - 180;
          if (Math.abs(diff) > 55) return null;
          const R2 = 6371,
            dLat2 = ((poi.lat - realPos.lat) * Math.PI) / 180;
          const a2 =
            Math.sin(dLat2 / 2) ** 2 +
            Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
          const distKm = R2 * 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
          if (distKm > 15) return null;
          const xPct = 50 + diff * 0.75;
          const elevAngle =
            (Math.atan2(poi.alt - (realPos.alt || 800), distKm * 1000) * 180) /
            Math.PI;
          const yPct = Math.max(12, 42 - elevAngle * 2 - pitch * 0.3);
          const typeColor =
            poi.type === "eau"
              ? "#60A5FA"
              : poi.type === "abri"
              ? "#F59E0B"
              : "#4ADE80";
          return (
            <div
              key={poi.id}
              style={{
                position: "absolute",
                left: `${xPct}%`,
                top: `${yPct}%`,
                transform: "translateX(-50%)",
                zIndex: 6,
                textAlign: "center",
                pointerEvents: measureMode ? "auto" : "none",
                cursor: measureMode ? "pointer" : "default",
              }}
            >
              <div
                style={{
                  background: `${typeColor}25`,
                  borderRadius: 10,
                  padding: "4px 10px",
                  border: `1px solid ${typeColor}50`,
                  backdropFilter: "blur(6px)",
                }}
              >
                <span style={{ fontSize: 14 }}>{poi.emoji}</span>
                <p
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: typeColor,
                    whiteSpace: "nowrap",
                  }}
                >
                  {poi.nom.length > 20 ? poi.nom.slice(0, 18) + "..." : poi.nom}
                </p>
                <p style={{ fontSize: 7, color: "rgba(255,255,255,0.6)" }}>
                  {poi.alt}m ·{" "}
                  {distKm < 1
                    ? `${Math.round(distKm * 1000)}m`
                    : `${distKm.toFixed(1)}km`}
                  {poi.places ? ` · ${poi.places}pl.` : ""}
                </p>
              </div>
            </div>
          );
        })}

      {/* ═══ DANGER ZONES AR ═══ */}
      {surfaceReady &&
        realPos &&
        !realPos.isDefault &&
        DANGER_ZONES_DB.map((dz) => {
          const dLng = ((dz.lng - realPos.lng) * Math.PI) / 180;
          const la1 = (realPos.lat * Math.PI) / 180,
            la2 = (dz.lat * Math.PI) / 180;
          const y = Math.sin(dLng) * Math.cos(la2);
          const x =
            Math.cos(la1) * Math.sin(la2) -
            Math.sin(la1) * Math.cos(la2) * Math.cos(dLng);
          const bearing = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
          const diff = ((bearing - heading + 540) % 360) - 180;
          if (Math.abs(diff) > 55) return null;
          const distM =
            Math.sqrt(
              (dz.lat - realPos.lat) ** 2 + (dz.lng - realPos.lng) ** 2
            ) * 111000;
          if (distM > 2000) return null;
          const xPct = 50 + diff * 0.75;
          const depth = Math.max(0, 1 - distM / 2000);
          const yPct = 35 + (1 - depth) * 30;
          const dangerCol =
            dz.severity === "high"
              ? "#F87171"
              : dz.severity === "medium"
              ? "#F59E0B"
              : "#60A5FA";
          const width = 30 + depth * 60;
          return (
            <div
              key={dz.id}
              style={{
                position: "absolute",
                left: `${xPct}%`,
                top: `${yPct}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 3,
                pointerEvents: "none",
                width: width,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  height: 3,
                  background: `linear-gradient(90deg, transparent, ${dangerCol}80, transparent)`,
                  borderRadius: 2,
                  marginBottom: 4,
                }}
              />
              {distM < 500 && (
                <div
                  style={{
                    background: `${dangerCol}30`,
                    borderRadius: 6,
                    padding: "2px 6px",
                    border: `1px solid ${dangerCol}50`,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <p style={{ fontSize: 7, fontWeight: 700, color: dangerCol }}>
                    ⚠️{" "}
                    {dz.type === "falaise"
                      ? "FALAISE"
                      : dz.type === "eboulement"
                      ? "ÉBOULIS"
                      : dz.type === "torrent"
                      ? "GUÉ"
                      : "EXPOSÉ"}
                  </p>
                  <p style={{ fontSize: 6, color: "rgba(255,255,255,0.5)" }}>
                    {Math.round(distM)}m
                  </p>
                </div>
              )}
            </div>
          );
        })}

      {/* ═══ BREADCRUMBS AR (your trail behind you) ═══ */}
      {surfaceReady &&
        breadcrumbs.length > 1 &&
        (() => {
          const uLat = realPos?.lat || 43.6,
            uLng = realPos?.lng || 1.4;
          const toRad = (d) => (d * Math.PI) / 180;
          const visCrumbs = breadcrumbs
            .map((bc, idx) => {
              const dLat = toRad(bc.lat - uLat),
                dLng2 = toRad(bc.lng - uLng);
              const y2 = Math.sin(dLng2) * Math.cos(toRad(bc.lat));
              const x2 =
                Math.cos(toRad(uLat)) * Math.sin(toRad(bc.lat)) -
                Math.sin(toRad(uLat)) *
                  Math.cos(toRad(bc.lat)) *
                  Math.cos(dLng2);
              const bearing =
                ((Math.atan2(y2, x2) * 180) / Math.PI + 360) % 360;
              const distM =
                Math.sqrt((bc.lat - uLat) ** 2 + (bc.lng - uLng) ** 2) * 111000;
              const diff = ((bearing - heading + 540) % 360) - 180;
              const depth = Math.max(0, 1 - distM / 2000);
              return {
                x: 215 + diff * (2 + depth * 2.5),
                y: 380 - depth * 300,
                inView: Math.abs(diff) < 80 && distM < 2000,
                depth,
                distM,
                idx,
              };
            })
            .filter((c) => c.inView);
          if (visCrumbs.length < 2) return null;
          const pathD = visCrumbs
            .map(
              (p, i) =>
                `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`
            )
            .join(" ");
          return (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 430 400"
                preserveAspectRatio="none"
              >
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(96,165,250,0.3)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="4 8"
                />
                {visCrumbs
                  .filter((_, i) => i % 3 === 0)
                  .map((c, i) => (
                    <circle
                      key={i}
                      cx={c.x}
                      cy={c.y}
                      r={1 + c.depth * 2.5}
                      fill="#60A5FA"
                      opacity={0.2 + c.depth * 0.4}
                    />
                  ))}
              </svg>
            </div>
          );
        })()}

      {/* ═══ NIGHT AR: CONSTELLATIONS ═══ */}
      {nightMode &&
        surfaceReady &&
        realPos &&
        (() => {
          const lat = (realPos.lat * Math.PI) / 180;
          const now = new Date();
          const JD = 2440587.5 + now.getTime() / 86400000;
          const T = (JD - 2451545.0) / 36525;
          const GMST =
            (280.46061837 + 360.98564736629 * (JD - 2451545.0)) % 360;
          const LST = (GMST + (realPos.lng || 1.4)) % 360;

          const starPositions = STARS_DB.map((star) => {
            const ha = (((LST - star.ra + 360) % 360) * Math.PI) / 180;
            const dec = (star.dec * Math.PI) / 180;
            const alt = Math.asin(
              Math.sin(lat) * Math.sin(dec) +
                Math.cos(lat) * Math.cos(dec) * Math.cos(ha)
            );
            const az = Math.atan2(
              -Math.cos(dec) * Math.sin(ha),
              Math.sin(dec) * Math.cos(lat) -
                Math.cos(dec) * Math.sin(lat) * Math.cos(ha)
            );
            const azDeg = ((az * 180) / Math.PI + 360) % 360;
            const altDeg = (alt * 180) / Math.PI;
            if (altDeg < 5) return null;
            const diff = ((azDeg - heading + 540) % 360) - 180;
            if (Math.abs(diff) > 60) return null;
            const xPct = 50 + diff * 0.8;
            const yPct = Math.max(5, 50 - altDeg * 0.6 - pitch * 0.3);
            const brightness = Math.max(0.3, 1 - star.mag / 3);
            const size = Math.max(1.5, 4 - star.mag);
            return { ...star, xPct, yPct, brightness, size, azDeg, altDeg };
          }).filter(Boolean);

          return (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 4,
                pointerEvents: "none",
              }}
            >
              {/* Constellation lines */}
              <svg
                width="100%"
                height="100%"
                style={{ position: "absolute", inset: 0 }}
              >
                {CONSTELLATION_LINES.map((cl) =>
                  cl.pairs.map(([a, b], pi) => {
                    const sa = starPositions.find((s) => s.nom === a);
                    const sb = starPositions.find((s) => s.nom === b);
                    if (!sa || !sb) return null;
                    return (
                      <line
                        key={cl.nom + pi}
                        x1={`${sa.xPct}%`}
                        y1={`${sa.yPct}%`}
                        x2={`${sb.xPct}%`}
                        y2={`${sb.yPct}%`}
                        stroke="rgba(147,197,253,0.2)"
                        strokeWidth="1"
                      />
                    );
                  })
                )}
              </svg>
              {/* Stars */}
              {starPositions.map((s) => (
                <div
                  key={s.nom}
                  style={{
                    position: "absolute",
                    left: `${s.xPct}%`,
                    top: `${s.yPct}%`,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <div
                    style={{
                      width: s.size * 2,
                      height: s.size * 2,
                      borderRadius: "50%",
                      background: `rgba(255,255,255,${s.brightness})`,
                      boxShadow: `0 0 ${s.size * 3}px rgba(200,220,255,${
                        s.brightness * 0.5
                      })`,
                    }}
                  />
                  {s.mag < 1.5 && (
                    <div
                      style={{
                        position: "absolute",
                        top: s.size * 2 + 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 7,
                          color: `rgba(147,197,253,${s.brightness * 0.8})`,
                          fontWeight: 600,
                          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {s.nom}
                      </p>
                      <p
                        style={{ fontSize: 5, color: "rgba(147,197,253,0.4)" }}
                      >
                        {s.constellation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })()}

      {/* ═══ ENV HUD ═══ */}
      {surfaceReady && scanPhase === "idle" && (
        <div
          style={{
            position: "absolute",
            top: 130,
            right: 10,
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {[
            realPos?.alt &&
              !realPos.isDefault && {
                icon: "⛰️",
                val: `${Math.round(realPos.alt)}m`,
                color: ACCENT,
              },
            realPos?.alt && {
              icon: "🌿",
              val: biomeLabels[getBiome(realPos.alt)] || "",
              color: "#4ADE80",
            },
            liveMeteo?.temp != null && {
              icon: "🌡️",
              val: `${liveMeteo.temp}°`,
              color: "#F59E0B",
            },
          ]
            .filter(Boolean)
            .map((h, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: 8,
                  padding: "3px 7px",
                  backdropFilter: "blur(6px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 10 }}>{h.icon}</span>
                <span style={{ fontSize: 8, fontWeight: 600, color: h.color }}>
                  {h.val}
                </span>
              </div>
            ))}
        </div>
      )}

      {/* ═══ COMBO (non terrain mode) ═══ */}
      {!terrainMode && combo > 0 && surfaceReady && scanPhase === "idle" && (
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 12,
            zIndex: 15,
            background: "rgba(0,0,0,0.7)",
            borderRadius: 14,
            padding: "6px 10px",
            backdropFilter: "blur(8px)",
            border: `1px solid ${combo >= 3 ? "#F59E0B" : ACCENT}40`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Flame size={14} color={combo >= 3 ? "#F59E0B" : ACCENT} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: combo >= 3 ? "#F59E0B" : ACCENT,
              }}
            >
              x{combo >= 3 ? "2.0" : "1.5"}
            </span>
            <span style={{ fontSize: 8, color: TEXT_DIM }}>{comboTimer}s</span>
          </div>
        </div>
      )}

      {/* ═══ SURFACE DETECTION ═══ */}
      {!surfaceReady && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: 36 }).map((_, i) => {
            const row = Math.floor(i / 6),
              col = i % 6,
              d = row / 6,
              sp = 0.3 + d * 0.7;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${50 + (col - 2.5) * 13 * sp}%`,
                  top: `${42 + row * 8}%`,
                  width: 3 + d * 4,
                  height: 3 + d * 4,
                  borderRadius: "50%",
                  background: "#4ADE80",
                  animation: `gd ${1 + (i % 5) * 0.2}s ease-in-out infinite ${
                    (i % 8) * 0.12
                  }s`,
                }}
              />
            );
          })}
          <style>{`@keyframes gd { 0%,100% { opacity: 0.06; transform: scale(1); } 50% { opacity: 0.45; transform: scale(1.3); } }`}</style>
          <div
            style={{
              position: "absolute",
              top: "48%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                margin: "0 auto 12px",
                position: "relative",
              }}
            >
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="rgba(74,222,128,0.15)"
                  strokeWidth="2"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="#4ADE80"
                  strokeWidth="2"
                  strokeDasharray="20 131"
                  strokeLinecap="round"
                  style={{
                    animation: "spn 1.5s linear infinite",
                    transformOrigin: "center",
                  }}
                />
              </svg>
              <style>{`@keyframes spn { to { transform: rotate(360deg); } }`}</style>
              <Scan
                size={20}
                color="#4ADE80"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#4ADE80",
                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              Initialisation
            </p>
          </div>
        </div>
      )}

      {/* ═══ ANALYSIS OVERLAY ═══ */}
      {scanPhase === "analyzing" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.85)",
              borderRadius: 24,
              padding: 24,
              width: "85%",
              maxWidth: 360,
              backdropFilter: "blur(20px)",
              border: `1px solid ${ACCENT}20`,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  margin: "0 auto 12px",
                  position: "relative",
                }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="rgba(74,222,128,0.15)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="#4ADE80"
                    strokeWidth="2"
                    strokeDasharray="20 131"
                    strokeLinecap="round"
                    style={{
                      animation: "spn 1.5s linear infinite",
                      transformOrigin: "center",
                    }}
                  />
                </svg>
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>
                Identification en cours
              </p>
              <p style={{ fontSize: 10, color: TEXT_DIM, marginTop: 4 }}>
                Analyse IA + validation habitat
              </p>
            </div>
            {/* Progress bar */}
            <div
              style={{
                height: 4,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
                overflow: "hidden",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: `${analysisProgress}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, #60A5FA, ${ACCENT})`,
                  borderRadius: 2,
                  transition: "width 0.3s",
                }}
              />
            </div>
            {/* Terminal */}
            <div
              style={{
                fontFamily: "monospace",
                maxHeight: 200,
                overflow: "auto",
              }}
            >
              {analysisSteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 9,
                    color: step.c,
                    marginBottom: 2,
                    display: "flex",
                    gap: 6,
                    animation: "tIn 0.2s ease both",
                  }}
                >
                  <span style={{ color: "#4ADE8060" }}>{">"}</span>
                  <span>{step.t}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#4ADE8060",
                      fontSize: 8,
                    }}
                  >
                    {step.pct}%
                  </span>
                </div>
              ))}
              {analysisProgress < 100 && (
                <div
                  style={{
                    fontSize: 9,
                    color: "#4ADE8060",
                    animation: "blink 1s infinite",
                  }}
                >
                  _ en attente serveur...
                </div>
              )}
              <style>{`@keyframes tIn { from { opacity:0; transform: translateX(-6px); } to { opacity:1; transform: translateX(0); } } @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }`}</style>
            </div>
          </div>
        </div>
      )}

      {/* ═══ CENTER VIEWFINDER ═══ */}
      {surfaceReady && scanPhase === "idle" && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 7,
            pointerEvents: "none",
          }}
        >
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <path
              d="M15 5 L5 5 L5 15"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M75 5 L85 5 L85 15"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 75 L5 85 L15 85"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M85 75 L85 85 L75 85"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="45" cy="45" r="2" fill="rgba(255,255,255,0.4)" />
          </svg>
        </div>
      )}

      {/* ═══ AUTO-SCAN HINT ═══ */}
      {autoScanHint && scanPhase === "idle" && (
        <div
          style={{
            position: "absolute",
            bottom: 160,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 25,
            animation: "slideUp 0.3s ease",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.85)",
              borderRadius: 16,
              padding: "10px 20px",
              backdropFilter: "blur(12px)",
              border: `1px solid ${ACCENT}40`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 20 }}>
              {autoScanHint.type.split(" ")[0]}
            </span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: ACCENT }}>
                {autoScanHint.type.split(" ")[1]} détecté
              </p>
              <p style={{ fontSize: 9, color: TEXT_DIM }}>
                Appuyez pour identifier
              </p>
            </div>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: ACCENT,
                animation: "pulse 1s infinite",
              }}
            />
          </div>
          <style>{`@keyframes slideUp { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }`}</style>
        </div>
      )}

      {/* ═══ MEASURE RESULT OVERLAY ═══ */}
      {measureTarget && (
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 25,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.9)",
              borderRadius: 20,
              padding: "16px 24px",
              backdropFilter: "blur(16px)",
              border: "1px solid #60A5FA40",
              textAlign: "center",
              minWidth: 200,
            }}
          >
            <span style={{ fontSize: 28 }}>{measureTarget.emoji}</span>
            <p
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: TEXT,
                marginTop: 4,
              }}
            >
              {measureTarget.nom}
            </p>
            <p style={{ fontSize: 11, color: "#60A5FA", fontWeight: 600 }}>
              {measureTarget.alt}m
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                marginTop: 10,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 18, fontWeight: 800, color: ACCENT }}>
                  {measureTarget.dist < 1000
                    ? Math.round(measureTarget.dist) + "m"
                    : (measureTarget.dist / 1000).toFixed(1) + "km"}
                </p>
                <p style={{ fontSize: 8, color: TEXT_DIM }}>Distance</p>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: measureTarget.deniv > 0 ? "#4ADE80" : "#F87171",
                  }}
                >
                  {measureTarget.deniv > 0 ? "+" : ""}
                  {Math.round(measureTarget.deniv)}m
                </p>
                <p style={{ fontSize: 8, color: TEXT_DIM }}>Dénivelé</p>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 18, fontWeight: 800, color: "#F59E0B" }}>
                  {measureTarget.pente}°
                </p>
                <p style={{ fontSize: 8, color: TEXT_DIM }}>Pente</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ PROXIMITY ALERTS ═══ */}
      {proximityAlerts.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 12,
            zIndex: 22,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {proximityAlerts.map((a) => (
            <div
              key={a.id}
              style={{
                background: "rgba(0,0,0,0.8)",
                borderRadius: 12,
                padding: "6px 12px",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(74,222,128,0.3)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                animation: "slideRight 0.3s ease",
              }}
            >
              <span style={{ fontSize: 16 }}>{a.emoji}</span>
              <div>
                <p style={{ fontSize: 9, fontWeight: 700, color: "#4ADE80" }}>
                  {a.nom}
                </p>
                <p style={{ fontSize: 8, color: TEXT_DIM }}>{a.dist}m</p>
              </div>
            </div>
          ))}
          <style>{`@keyframes slideRight { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }`}</style>
        </div>
      )}

      {/* ═══ MEASURE MODE INDICATOR ═══ */}
      {measureMode && !measureTarget && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 22,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              borderRadius: 12,
              padding: "8px 16px",
              backdropFilter: "blur(8px)",
              border: "1px solid #60A5FA30",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, color: "#60A5FA" }}>
              📏 Mode mesure
            </p>
            <p style={{ fontSize: 8, color: TEXT_DIM }}>
              Touchez un sommet pour mesurer
            </p>
          </div>
        </div>
      )}

      {/* ═══ BOTTOM: CAPTURE BUTTON ═══ */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "0 16px 32px",
        }}
      >
        {/* Discovered pills */}
        {!terrainMode && discovered.length > 0 && scanPhase === "idle" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 10, color: TEXT_DIM }}>
              {discovered.length} scan{discovered.length > 1 ? "s" : ""}
            </span>
            {!terrainMode && totalXpEarned > 0 && (
              <span style={{ fontSize: 10, color: ACCENT, fontWeight: 700 }}>
                · {totalXpEarned} XP
              </span>
            )}
          </div>
        )}

        {surfaceReady && scanPhase === "idle" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            {/* Hint indicator */}
            {arObjects.length > 0 && (
              <div
                style={{
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: 12,
                  padding: "8px 14px",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 8, color: TEXT_DIM }}>
                  {arObjects.length} espèce{arObjects.length > 1 ? "s" : ""}
                </p>
                <p style={{ fontSize: 7, color: "rgba(255,255,255,0.3)" }}>
                  signalée{arObjects.length > 1 ? "s" : ""} ici
                </p>
              </div>
            )}
            {/* SHUTTER BUTTON */}
            <button
              onClick={
                cameraMode === "live"
                  ? captureFrameEnhanced
                  : () => fileInputRef.current?.click()
              }
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "transparent",
                border: "3px solid rgba(255,255,255,0.8)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.1s",
                }}
              >
                <Camera size={24} color="#0A0A0A" />
              </div>
            </button>
            {/* Mode label */}
            <div
              style={{
                background: "rgba(0,0,0,0.5)",
                borderRadius: 12,
                padding: "8px 14px",
                backdropFilter: "blur(8px)",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 8, color: ACCENT, fontWeight: 700 }}>
                {terrainMode ? "TERRAIN" : "SCANNER"}
              </p>
              <p style={{ fontSize: 7, color: "rgba(255,255,255,0.3)" }}>
                Cadrez & capturez
              </p>
            </div>
          </div>
        ) : scanPhase === "capturing" ? (
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              borderRadius: 18,
              padding: "14px 20px",
              textAlign: "center",
              backdropFilter: "blur(12px)",
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>
              📸 Capture en cours...
            </p>
          </div>
        ) : null}

        {surfaceReady && scanPhase === "idle" && (
          <p
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            {cameraMode === "live"
              ? "Cadrez un organisme puis appuyez pour identifier"
              : "Prenez une photo pour identifier"}
          </p>
        )}
      </div>
    </div>
  );
}

// ═══════ RANDO DETAIL ═══════
function RandoDetail({
  rando,
  userLoc,
  calcDist,
  isFav,
  onBack,
  onFav,
  onStart,
  onScan,
  showToast,
}) {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "Vérifier la météo du jour", done: false },
    { id: 2, text: "Charger le téléphone à 100%", done: false },
    { id: 3, text: "Prendre 1.5L d'eau minimum", done: false },
    {
      id: 4,
      text: `Prévoir vêtements pour ${
        rando.altitudeMax > 2000
          ? "haute altitude (froid, vent)"
          : "la montagne"
      }`,
      done: false,
    },
    { id: 5, text: "Prévenir quelqu'un de l'itinéraire", done: false },
    ...(rando.altitudeMax > 2500
      ? [{ id: 6, text: "Bâtons de randonnée recommandés", done: false }]
      : []),
    ...(rando.difficulte === "difficile"
      ? [
          {
            id: 7,
            text: "Vérifier état du sentier (éboulements, neige)",
            done: false,
          },
        ]
      : []),
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [showTodo, setShowTodo] = useState(false);
  const [showStations, setShowStations] = useState(false);

  const dist =
    userLoc && rando.coordonnees
      ? calcDist(
          userLoc.lat,
          userLoc.lng,
          rando.coordonnees.lat,
          rando.coordonnees.lng
        )
      : null;
  const shareLink = `https://isard.app/rando/${rando.id}`;
  const shareText = `Hey, j'ai vu cette rando sur Isard : "${rando.nom}" à ${rando.lieu} (${rando.distance}km, +${rando.denivele}m). Tu veux venir avec moi ? ${shareLink}`;

  const handleCopy = () => {
    setCopied(true);
    showToast("Lien copié !");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleShareSMS = () => {
    window.open(`sms:?body=${encodeURIComponent(shareText)}`);
  };
  const handleShareWA = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`);
  };
  const handleShareTG = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        shareLink
      )}&text=${encodeURIComponent(shareText)}`
    );
  };
  const handleNativeShare = async () => {
    const ok = await webShare({
      title: `ISARD — ${rando.nom}`,
      text: shareText,
      url: shareLink,
    });
    if (ok) {
      setShowShare(false);
      showToast("Partagé !");
    }
  };
  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: newTodo.trim(), done: false },
    ]);
    setNewTodo("");
  };
  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        maxWidth: 430,
        margin: "0 auto",
        fontFamily: "'Poppins', sans-serif",
        color: TEXT,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div style={{ position: "relative", height: 280 }}>
        <img
          src={rando.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 60%)",
          }}
        />
        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: 48,
            left: 16,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            color: TEXT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
          }}
        >
          <ArrowLeft size={20} />
        </button>
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 16,
            display: "flex",
            gap: 8,
          }}
        >
          <button
            onClick={() => setShowShare(true)}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: TEXT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <Share2 size={20} />
          </button>
          <button
            onClick={onFav}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: isFav ? "#F87171" : "rgba(0,0,0,0.5)",
              border: "none",
              color: TEXT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <Heart size={20} fill={isFav ? TEXT : "none"} />
          </button>
        </div>
        <div style={{ position: "absolute", bottom: 20, left: 16, right: 16 }}>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 8,
              fontSize: 11,
              fontWeight: 700,
              background: (DIFF[rando.difficulte] || DIFF.modere).bg,
              color: (DIFF[rando.difficulte] || DIFF.modere).color,
              display: "inline-block",
            }}
          >
            {(DIFF[rando.difficulte] || DIFF.modere).label}
          </span>
          <h1
            style={{ fontSize: 24, fontWeight: 800, marginTop: 6, color: TEXT }}
          >
            {rando.nom}
          </h1>
          <p
            style={{
              fontSize: 13,
              color: TEXT_MED,
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginTop: 2,
            }}
          >
            <MapPin size={13} />
            {rando.lieu} — {rando.region}
          </p>
        </div>
      </div>

      {/* Share Modal */}
      {showShare && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            onClick={() => setShowShare(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 430,
              background: CARD,
              borderRadius: "24px 24px 0 0",
              padding: 24,
              zIndex: 201,
              animation: "slideUp 0.3s ease",
            }}
          >
            <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>
            <div
              style={{
                width: 40,
                height: 4,
                background: BORDER,
                borderRadius: 2,
                margin: "0 auto 20px",
              }}
            />
            <h3
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 4,
                color: TEXT,
              }}
            >
              Partager cette rando
            </h3>
            <p style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 20 }}>
              Invite tes amis à randonner avec toi !
            </p>
            <div
              style={{
                background: CARD2,
                borderRadius: 14,
                padding: 14,
                marginBottom: 16,
                border: `1px solid ${BORDER}`,
              }}
            >
              <p style={{ fontSize: 12, color: TEXT_MED, lineHeight: 1.6 }}>
                {shareText}
              </p>
            </div>
            {navigator.share && (
              <button
                onClick={handleNativeShare}
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 14,
                  background: ACCENT,
                  border: "none",
                  color: BG,
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "Poppins",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <Share2 size={16} /> Partage natif
              </button>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {[
                {
                  emoji: "💬",
                  label: "SMS",
                  color: "#4ADE80",
                  action: handleShareSMS,
                },
                {
                  emoji: "📱",
                  label: "WhatsApp",
                  color: "#25D366",
                  action: handleShareWA,
                },
                {
                  emoji: "✈️",
                  label: "Telegram",
                  color: "#0088CC",
                  action: handleShareTG,
                },
                {
                  emoji: "📋",
                  label: "Copier",
                  color: ACCENT,
                  action: handleCopy,
                },
              ].map((s, i) => (
                <button
                  key={i}
                  onClick={s.action}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: 12,
                    background: `${s.color}15`,
                    borderRadius: 14,
                    border: `1px solid ${s.color}30`,
                    cursor: "pointer",
                    color: TEXT,
                  }}
                >
                  <span style={{ fontSize: 24 }}>
                    {s.label === "Copier" && copied ? "✅" : s.emoji}
                  </span>
                  <span
                    style={{ fontSize: 10, fontWeight: 600, color: s.color }}
                  >
                    {s.label === "Copier" && copied ? "Copié !" : s.label}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowShare(false)}
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 14,
                background: CARD2,
                border: `1px solid ${BORDER}`,
                color: TEXT_DIM,
                fontWeight: 600,
                fontSize: 13,
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <div style={{ padding: "20px 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginBottom: 20,
          }}
        >
          {[
            {
              icon: Clock,
              val: `${Math.floor(rando.duree / 60)}h${
                rando.duree % 60 > 0
                  ? (rando.duree % 60).toString().padStart(2, "0")
                  : ""
              }`,
              label: "Durée",
            },
            { icon: Route, val: `${rando.distance}km`, label: "Distance" },
            { icon: TrendingUp, val: `${rando.denivele}m`, label: "D+" },
            { icon: Mountain, val: `${rando.altitudeMax}m`, label: "Altitude" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                borderRadius: 14,
                padding: 12,
                textAlign: "center",
                border: `1px solid ${BORDER}`,
              }}
            >
              <s.icon
                size={18}
                color={ACCENT}
                style={{ margin: "0 auto 4px" }}
              />
              <p style={{ fontWeight: 700, fontSize: 13, color: TEXT }}>
                {s.val}
              </p>
              <p style={{ fontSize: 9, color: TEXT_DIM }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Altitude Profile */}
        <div style={{ marginBottom: 16 }}>
          <AltitudeProfile rando={rando} />
        </div>

        {dist && (
          <div
            style={{
              background: ACCENT_DIM,
              borderRadius: 14,
              padding: 14,
              marginBottom: 16,
              border: `1px solid ${ACCENT}30`,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Locate size={20} color={ACCENT} />
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, color: ACCENT }}>
                {dist.toFixed(0)} km de vous
              </p>
              <p style={{ fontSize: 11, color: TEXT_MED }}>
                ≈ {Math.round(dist * 1.3)} min en voiture · Départ :{" "}
                {rando.depart}
              </p>
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <div
            style={{
              flex: 1,
              background: CARD,
              borderRadius: 14,
              padding: 14,
              border: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Star size={28} fill={ACCENT} color={ACCENT} />
            <div>
              <p style={{ fontWeight: 800, fontSize: 20, color: TEXT }}>
                {rando.note}
              </p>
              <p style={{ fontSize: 10, color: TEXT_DIM }}>
                {(rando.avis || 0).toLocaleString()} avis
              </p>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: CARD,
              borderRadius: 14,
              padding: 14,
              border: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Aperture size={28} color={ACCENT} />
            <div>
              <p style={{ fontWeight: 800, fontSize: 20, color: TEXT }}>
                {rando.scanPoints?.length || 0}
              </p>
              <p style={{ fontSize: 10, color: TEXT_DIM }}>Points à scanner</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 15,
              marginBottom: 6,
              color: TEXT,
            }}
          >
            Description
          </h3>
          <p style={{ fontSize: 13, color: TEXT_MED, lineHeight: 1.6 }}>
            {rando.description}
          </p>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}
          >
            {(rando.tags || []).map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  background: ACCENT_DIM,
                  color: ACCENT,
                  border: `1px solid ${ACCENT}30`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Gares proches */}
        <button
          onClick={() => setShowStations(!showStations)}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: showStations ? "14px 14px 0 0" : 14,
            background: CARD,
            border: `1px solid ${BORDER}`,
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
            color: TEXT,
            marginBottom: showStations ? 0 : 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#3B82F620",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Train size={18} color="#3B82F6" />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <p style={{ fontWeight: 700, fontSize: 13 }}>Gares proches</p>
            <p style={{ fontSize: 10, color: TEXT_DIM }}>
              Transport en commun pour y accéder
            </p>
          </div>
          {showStations ? (
            <ChevronUp size={18} color={TEXT_DIM} />
          ) : (
            <ChevronDown size={18} color={TEXT_DIM} />
          )}
        </button>
        {showStations && rando.garesProches && (
          <div
            style={{
              background: CARD,
              borderRadius: "0 0 14px 14px",
              borderTop: `1px solid ${BORDER}`,
              padding: 14,
              marginBottom: 16,
              border: `1px solid ${BORDER}`,
              borderTop: "none",
            }}
          >
            {rando.garesProches.map((g, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom:
                    i < rando.garesProches.length - 1
                      ? `1px solid ${BORDER}`
                      : "none",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: g.type === "train" ? "#3B82F615" : "#F5970015",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {g.type === "train" ? (
                    <Train size={16} color="#3B82F6" />
                  ) : (
                    <Bus size={16} color="#F59700" />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: 12, color: TEXT }}>
                    {g.nom}
                  </p>
                  <p style={{ fontSize: 10, color: TEXT_DIM }}>
                    {g.distance} · {g.temps}
                  </p>
                  <p style={{ fontSize: 10, color: ACCENT, marginTop: 2 }}>
                    {g.navette}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Todo list */}
        <button
          onClick={() => setShowTodo(!showTodo)}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: showTodo ? "14px 14px 0 0" : 14,
            background: CARD,
            border: `1px solid ${BORDER}`,
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
            color: TEXT,
            marginBottom: showTodo ? 0 : 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: `${ACCENT}20`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckSquare size={18} color={ACCENT} />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <p style={{ fontWeight: 700, fontSize: 13 }}>
              Checklist de préparation
            </p>
            <p style={{ fontSize: 10, color: TEXT_DIM }}>
              {doneCount}/{todos.length} éléments prêts
            </p>
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: `${ACCENT}15`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: doneCount === todos.length ? "#4ADE80" : ACCENT,
            }}
          >
            {Math.round((doneCount / todos.length) * 100)}%
          </div>
        </button>
        {showTodo && (
          <div
            style={{
              background: CARD,
              borderRadius: "0 0 14px 14px",
              padding: 14,
              marginBottom: 16,
              border: `1px solid ${BORDER}`,
              borderTop: "none",
            }}
          >
            <div
              style={{
                height: 4,
                background: BORDER,
                borderRadius: 2,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: `${(doneCount / todos.length) * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${ACCENT}, #4ADE80)`,
                  borderRadius: 2,
                  transition: "width 0.3s",
                }}
              />
            </div>
            {todos.map((t) => (
              <div
                key={t.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <button
                  onClick={() => toggleTodo(t.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: t.done ? ACCENT : TEXT_DIM,
                  }}
                >
                  {t.done ? <CheckSquare size={18} /> : <Square size={18} />}
                </button>
                <span
                  style={{
                    flex: 1,
                    fontSize: 12,
                    color: t.done ? TEXT_DIM : TEXT,
                    textDecoration: t.done ? "line-through" : "none",
                  }}
                >
                  {t.text}
                </span>
                <button
                  onClick={() => removeTodo(t.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: TEXT_DIM,
                    cursor: "pointer",
                    padding: 2,
                    opacity: 0.5,
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Ajouter un élément..."
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  color: TEXT,
                  fontSize: 12,
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <button
                onClick={addTodo}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: newTodo.trim() ? ACCENT : CARD2,
                  border: `1px solid ${newTodo.trim() ? ACCENT : BORDER}`,
                  color: newTodo.trim() ? BG : TEXT_DIM,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Infos pratiques */}
        <div
          style={{
            background: CARD,
            borderRadius: 14,
            padding: 16,
            marginBottom: 16,
            border: `1px solid ${BORDER}`,
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginBottom: 10,
              color: TEXT,
            }}
          >
            Infos pratiques
          </h3>
          {[
            { label: "Départ", val: rando.depart },
            { label: "Accès", val: rando.acces },
            { label: "Balisage", val: rando.balisage },
            { label: "Saison", val: rando.meilleureSaison },
            { label: "Alt. départ", val: `${rando.altitude_depart}m` },
          ].map((info, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom: i < 4 ? `1px solid ${BORDER}` : "none",
              }}
            >
              <span style={{ fontSize: 12, color: TEXT_DIM }}>
                {info.label}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  textAlign: "right",
                  maxWidth: "60%",
                  color: TEXT,
                }}
              >
                {info.val}
              </span>
            </div>
          ))}
        </div>

        {rando.scanPoints && rando.scanPoints.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 10,
                color: TEXT,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Aperture size={16} color={ACCENT} />
              Points à scanner
            </h3>
            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                paddingBottom: 8,
              }}
            >
              {rando.scanPoints.map((sp) => (
                <div
                  key={sp.id}
                  style={{
                    flexShrink: 0,
                    width: 140,
                    background: CARD,
                    borderRadius: 14,
                    padding: 12,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: rarityColor(sp.rarity),
                      marginBottom: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    {sp.rarity}
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>
                    {sp.name}
                  </p>
                  <p style={{ fontSize: 10, color: TEXT_DIM, marginTop: 2 }}>
                    {sp.type} · +{sp.xp} XP
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              background: CARD,
              borderRadius: 14,
              padding: 14,
              border: `1px solid ${BORDER}`,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 12,
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: TEXT,
              }}
            >
              <Leaf size={14} color="#4ADE80" />
              Flore
            </p>
            {(rando.flore || []).map((f, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  background: "#4ADE8015",
                  color: "#4ADE80",
                  padding: "3px 8px",
                  borderRadius: 8,
                  margin: "2px 2px",
                  fontWeight: 500,
                }}
              >
                {f}
              </span>
            ))}
          </div>
          <div
            style={{
              background: CARD,
              borderRadius: 14,
              padding: 14,
              border: `1px solid ${BORDER}`,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 12,
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: TEXT,
              }}
            >
              <Bird size={14} color="#F59E0B" />
              Faune
            </p>
            {(rando.faune || []).map((f, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  background: "#F59E0B15",
                  color: "#F59E0B",
                  padding: "3px 8px",
                  borderRadius: 8,
                  margin: "2px 2px",
                  fontWeight: 500,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {rando.patrimoine && (
          <div
            style={{
              background: CARD,
              borderRadius: 14,
              padding: 14,
              marginBottom: 20,
              border: `1px solid ${BORDER}`,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 12,
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: TEXT,
              }}
            >
              <Flag size={14} color={ACCENT} />
              Patrimoine
            </p>
            {(rando.patrimoine || []).map((p, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  background: ACCENT_DIM,
                  color: ACCENT,
                  padding: "3px 8px",
                  borderRadius: 8,
                  margin: "2px 2px",
                  fontWeight: 500,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: 10,
            position: "sticky",
            bottom: 16,
            zIndex: 10,
          }}
        >
          <button
            onClick={onScan}
            style={{
              flex: 1,
              padding: 16,
              borderRadius: 14,
              background: CARD,
              border: `1px solid ${ACCENT}50`,
              color: ACCENT,
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Poppins",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Aperture size={18} />
            Scanner
          </button>
          <button
            onClick={onStart}
            style={{
              flex: 2,
              padding: 16,
              borderRadius: 14,
              background: ACCENT,
              border: "none",
              color: BG,
              fontWeight: 800,
              fontSize: 15,
              fontFamily: "Poppins",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Play size={18} fill={BG} />
            Démarrer la rando
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════ NAV SCREEN ═══════
function NavScreen({
  rando,
  navData,
  setNavData,
  onScan,
  onStop,
  showToast,
  realBattery,
  voice,
  realPos,
  gpsTrack,
  gpsDistance,
  traceGPS,
  prepareOffline,
  offlineReady,
}) {
  const [showSOS, setShowSOS] = useState(false);
  const [lastMilestone, setLastMilestone] = useState(0);
  const [securityAlerts, setSecurityAlerts] = useState([]);
  const lastAltRef = useRef(null);
  const lastAlertTimeRef = useRef({});

  // ── SECURITY ALERTS ENGINE ──
  useEffect(() => {
    if (!realPos || realPos.isDefault || !traceGPS?.length) return;
    const alerts = [];
    const now = Date.now();
    const cooldown = (type) =>
      now - (lastAlertTimeRef.current[type] || 0) > 120000; // 2min cooldown

    // 1. Off-trail detection: distance from nearest trail point
    let minTrailDist = Infinity;
    traceGPS.forEach(([lat, lng]) => {
      const d =
        Math.sqrt((lat - realPos.lat) ** 2 + (lng - realPos.lng) ** 2) * 111000;
      if (d < minTrailDist) minTrailDist = d;
    });
    if (minTrailDist > 100 && cooldown("offtrail")) {
      alerts.push({
        type: "offtrail",
        icon: "⚠️",
        color: "#F59E0B",
        text: "Vous semblez hors sentier (" + Math.round(minTrailDist) + "m)",
        detail: "Vérifiez votre position sur la carte",
      });
      if (minTrailDist > 200) {
        lastAlertTimeRef.current.offtrail = now;
        vibrate([200, 100, 200]);
        voice?.speak(
          "Attention, vous semblez être à " +
            Math.round(minTrailDist) +
            " mètres du sentier balisé."
        );
      }
    }

    // 2. Rapid descent detection
    if (realPos.alt && lastAltRef.current) {
      const altDiff = lastAltRef.current - realPos.alt;
      if (altDiff > 50 && cooldown("descent")) {
        alerts.push({
          type: "descent",
          icon: "📉",
          color: "#F87171",
          text: "Descente rapide détectée (-" + Math.round(altDiff) + "m)",
          detail: "Assurez-vous que tout va bien",
        });
      }
    }
    lastAltRef.current = realPos.alt;

    // 3. Battery vs remaining time
    const battery = realBattery?.level
      ? Math.round(realBattery.level * 100)
      : null;
    const remainingPct = 100 - navData.progress;
    if (battery && battery < 20 && remainingPct > 30 && cooldown("battery")) {
      alerts.push({
        type: "battery",
        icon: "🔋",
        color: "#F87171",
        text:
          "Batterie critique (" +
          battery +
          "%) — " +
          Math.round(remainingPct) +
          "% de rando restant",
        detail: "Activez le mode économie",
      });
    }

    // 4. Nightfall alert
    const hour = new Date().getHours();
    if ((hour >= 17 || hour < 6) && remainingPct > 20 && cooldown("night")) {
      alerts.push({
        type: "night",
        icon: "🌙",
        color: "#818CF8",
        text: "Tombée de la nuit — prudence !",
        detail: "Pensez à utiliser une frontale",
      });
    }

    if (alerts.length > 0) setSecurityAlerts(alerts);
    else if (securityAlerts.length > 0)
      setTimeout(() => setSecurityAlerts([]), 10000);
  }, [realPos?.lat, realPos?.lng, realPos?.alt, navData.progress]);

  // ── WAKE LOCK: keep screen on during hike ──
  useWakeLock(!navData.paused);

  // Realistic progression: 1 real second = ~1 simulated hiking minute
  const hikeMinutes = rando.duree || 210;
  const progressPerTick = (100 / (hikeMinutes * 1)) * 1;
  const variationRef = useRef(0);

  useEffect(() => {
    if (navData.paused) return;
    const iv = setInterval(() => {
      setNavData((p) => {
        const phase = p.progress / 100;
        let speed = progressPerTick;
        if (phase < 0.3) speed *= 0.85 + Math.random() * 0.15;
        else if (phase < 0.6) speed *= 0.65 + Math.random() * 0.15;
        else if (phase < 0.85) speed *= 1.0 + Math.random() * 0.2;
        else speed *= 0.9 + Math.random() * 0.1;
        return { ...p, progress: Math.min(p.progress + speed, 100) };
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [navData.paused, setNavData, progressPerTick]);

  // ── VOICE GUIDANCE at milestones ──
  useEffect(() => {
    const pct = Math.floor(navData.progress);
    const milestones = [10, 25, 50, 75, 90, 100];
    const currentMilestone = milestones.filter((m) => pct >= m).pop() || 0;
    if (currentMilestone > lastMilestone && currentMilestone > 0) {
      setLastMilestone(currentMilestone);
      vibrate([100, 50, 100]);
      const distDone = ((rando.distance * currentMilestone) / 100).toFixed(1);
      if (currentMilestone === 100) {
        voice?.speak(
          `Félicitations ! Vous avez terminé la randonnée ${rando.nom}. ${rando.distance} kilomètres parcourus.`
        );
      } else if (currentMilestone === 50) {
        voice?.speak(
          `Mi-parcours atteint. ${distDone} kilomètres parcourus. Continuez !`
        );
      } else if (currentMilestone === 25) {
        voice?.speak(
          `25 pourcent du parcours complété. ${distDone} kilomètres.`
        );
      } else if (currentMilestone === 75) {
        voice?.speak(
          `75 pourcent. Plus que ${(
            rando.distance - parseFloat(distDone)
          ).toFixed(1)} kilomètres.`
        );
      }
    }
  }, [navData.progress, lastMilestone, rando, voice]);

  // ── VOICE: announce start ──
  useEffect(() => {
    voice?.speak(
      `Départ de la randonnée ${rando.nom}. ${rando.distance} kilomètres, ${rando.denivele} mètres de dénivelé. Bonne randonnée !`
    );
    return () => voice?.stop();
  }, []);

  const dist = ((rando.distance * navData.progress) / 100).toFixed(1);
  const elapsedSimulated = Math.floor((navData.progress / 100) * hikeMinutes);
  const elapsedH = Math.floor(elapsedSimulated / 60);
  const elapsedM = elapsedSimulated % 60;
  const elapsedStr =
    elapsedH > 0
      ? `${elapsedH}h${String(elapsedM).padStart(2, "0")}`
      : `${elapsedM}'`;

  // ── REAL BATTERY or simulated fallback ──
  const battery = realBattery?.supported
    ? Math.round(realBattery.level * 100)
    : Math.max(92 - Math.floor((elapsedSimulated / 60) * 12), 5);
  const batteryColor =
    battery > 40 ? "#4ADE80" : battery > 20 ? "#FBBF24" : "#F87171";
  const isCharging = realBattery?.supported ? realBattery.charging : false;

  const currentSpeed =
    elapsedSimulated > 0
      ? (parseFloat(dist) / (elapsedSimulated / 60)).toFixed(1)
      : "0.0";
  const remainingMinutes =
    navData.progress > 0
      ? Math.floor(
          ((100 - navData.progress) / navData.progress) * elapsedSimulated
        )
      : hikeMinutes;
  const etaH = Math.floor(remainingMinutes / 60);
  const etaM = remainingMinutes % 60;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        maxWidth: 430,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Poppins', sans-serif",
        color: TEXT,
        padding: "48px 16px 24px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ADE80",
                boxShadow: "0 0 8px #4ADE80",
              }}
            />
            <span style={{ fontSize: 11, color: "#4ADE80", fontWeight: 600 }}>
              GPS actif
            </span>
            {/* Voice toggle */}
            <button
              onClick={() => {
                voice?.toggle();
                showToast(
                  voice?.muted
                    ? "Guidance vocale activée"
                    : "Guidance vocale coupée"
                );
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 2,
              }}
            >
              {voice?.muted ? (
                <VolumeX size={14} color={TEXT_DIM} />
              ) : (
                <Volume2 size={14} color={ACCENT} />
              )}
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isCharging && <Zap size={10} color="#FBBF24" />}
            <Battery size={14} color={batteryColor} />
            <span
              style={{ fontSize: 12, color: batteryColor, fontWeight: 600 }}
            >
              {battery}%
            </span>
            {realBattery?.supported && (
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#4ADE80",
                  marginLeft: -2,
                }}
              />
            )}
          </div>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: ACCENT }}>
          {rando.nom}
        </h2>
        <p style={{ fontSize: 12, color: TEXT_DIM, marginTop: 2 }}>
          {rando.lieu} · {currentSpeed} km/h
        </p>
        {realPos && !realPos.isDefault && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 6,
              background: "rgba(74,222,128,0.08)",
              borderRadius: 8,
              padding: "3px 10px",
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#4ADE80",
                boxShadow: "0 0 4px #4ADE80",
              }}
            />
            <span style={{ fontSize: 9, color: "#4ADE80", fontWeight: 500 }}>
              GPS {realPos.lat.toFixed(4)}, {realPos.lng.toFixed(4)}
              {realPos.alt ? ` · ${Math.round(realPos.alt)}m alt.` : ""}
            </span>
          </div>
        )}
        {remainingMinutes > 0 && navData.progress < 100 && (
          <p style={{ fontSize: 11, color: TEXT_MED, marginTop: 4 }}>
            Arrivée estimée dans{" "}
            {etaH > 0
              ? `${etaH}h${String(etaM).padStart(2, "0")}`
              : `${etaM} min`}
          </p>
        )}
      </div>
      <div style={{ margin: "32px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <p
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: ACCENT,
              lineHeight: 1,
            }}
          >
            {navData.progress.toFixed(0)}%
          </p>
          <p style={{ fontSize: 13, color: TEXT_DIM }}>
            {dist} / {rando.distance} km
          </p>
        </div>
        <div style={{ height: 6, background: BORDER, borderRadius: 3 }}>
          <div
            style={{
              width: `${navData.progress}%`,
              height: "100%",
              background: `linear-gradient(90deg, ${ACCENT}, #A8CC00)`,
              borderRadius: 3,
              transition: "width 1s ease",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <span style={{ fontSize: 9, color: TEXT_DIM }}>
            {rando.altitude_depart}m
          </span>
          <span style={{ fontSize: 9, color: ACCENT, fontWeight: 600 }}>
            {elapsedStr}
          </span>
          <span style={{ fontSize: 9, color: TEXT_DIM }}>
            {rando.altitudeMax}m
          </span>
        </div>
      </div>
      {/* Altitude profile with current position */}
      <div style={{ margin: "0 0 16px" }}>
        <AltitudeProfile rando={rando} progress={navData.progress} compact />
      </div>

      {/* ═══ TRAIL GPS MINI-MAP ═══ */}
      {traceGPS &&
        traceGPS.length >= 2 &&
        (() => {
          const pts = traceGPS.map(([lat, lng]) => ({ lat, lng }));
          const lats = pts.map((p) => p.lat),
            lngs = pts.map((p) => p.lng);
          const minLat = Math.min(...lats),
            maxLat = Math.max(...lats);
          const minLng = Math.min(...lngs),
            maxLng = Math.max(...lngs);
          const pad = 0.15;
          const rangeLat = maxLat - minLat || 0.01,
            rangeLng = maxLng - minLng || 0.01;
          const toX = (lng) =>
            pad * 280 + ((lng - minLng) / rangeLng) * 280 * (1 - 2 * pad);
          const toY = (lat) =>
            pad * 160 + ((maxLat - lat) / rangeLat) * 160 * (1 - 2 * pad);
          const pathD = pts
            .map(
              (p, i) =>
                `${i === 0 ? "M" : "L"}${toX(p.lng).toFixed(1)} ${toY(
                  p.lat
                ).toFixed(1)}`
            )
            .join(" ");

          // User position on trail
          const uLat = realPos?.lat || pts[0].lat,
            uLng = realPos?.lng || pts[0].lng;
          const ux = toX(uLng),
            uy = toY(uLat);

          // Find nearest trail point + next waypoint
          let nearIdx = 0,
            nearDist = Infinity;
          pts.forEach((p, i) => {
            const d = Math.sqrt((p.lat - uLat) ** 2 + (p.lng - uLng) ** 2);
            if (d < nearDist) {
              nearDist = d;
              nearIdx = i;
            }
          });
          const nextIdx = Math.min(nearIdx + 1, pts.length - 1);
          const nextPt = pts[nextIdx];
          const nx = toX(nextPt.lng),
            ny = toY(nextPt.lat);

          // Progress on trail (% of waypoints passed)
          const trailProgress = Math.round((nearIdx / (pts.length - 1)) * 100);

          // Distance to next waypoint
          const R = 6371000;
          const dLat = ((nextPt.lat - uLat) * Math.PI) / 180,
            dLng2 = ((nextPt.lng - uLng) * Math.PI) / 180;
          const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos((uLat * Math.PI) / 180) *
              Math.cos((nextPt.lat * Math.PI) / 180) *
              Math.sin(dLng2 / 2) ** 2;
          const nextDistM = Math.round(
            R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
          );

          // Direction arrow angle
          const arrowAngle = (Math.atan2(nx - ux, -(ny - uy)) * 180) / Math.PI;

          // Completed portion of trail
          const completedD = pts
            .slice(0, nearIdx + 1)
            .map(
              (p, i) =>
                `${i === 0 ? "M" : "L"}${toX(p.lng).toFixed(1)} ${toY(
                  p.lat
                ).toFixed(1)}`
            )
            .join(" ");

          return (
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                padding: 12,
                marginBottom: 16,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: TEXT_MED,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Navigation size={12} color={ACCENT} /> Tracé GPS
                </span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {nextDistM < 5000 && (
                    <span
                      style={{ fontSize: 9, color: ACCENT, fontWeight: 600 }}
                    >
                      Prochain:{" "}
                      {nextDistM < 1000
                        ? `${nextDistM}m`
                        : `${(nextDistM / 1000).toFixed(1)}km`}
                    </span>
                  )}
                  <span style={{ fontSize: 9, color: TEXT_DIM }}>
                    {trailProgress}% parcouru
                  </span>
                </div>
              </div>
              <svg
                width="100%"
                height="160"
                viewBox="0 0 280 160"
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  background: "#0A120A",
                }}
              >
                <defs>
                  <linearGradient id="trailDone" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={ACCENT} stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Grid */}
                {[0.25, 0.5, 0.75].map((f) => (
                  <line
                    key={`h${f}`}
                    x1="0"
                    y1={f * 160}
                    x2="280"
                    y2={f * 160}
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="0.5"
                  />
                ))}
                {[0.25, 0.5, 0.75].map((f) => (
                  <line
                    key={`v${f}`}
                    x1={f * 280}
                    y1="0"
                    x2={f * 280}
                    y2="160"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Full trail (remaining) */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Completed trail */}
                {nearIdx > 0 && (
                  <path
                    d={completedD}
                    fill="none"
                    stroke="url(#trailDone)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {/* Waypoints */}
                {pts.map((p, i) => {
                  const done = i <= nearIdx;
                  return (
                    <circle
                      key={i}
                      cx={toX(p.lng)}
                      cy={toY(p.lat)}
                      r={i === 0 || i === pts.length - 1 ? 4 : 2}
                      fill={done ? ACCENT : "rgba(255,255,255,0.15)"}
                      stroke={
                        i === 0 || i === pts.length - 1
                          ? "rgba(255,255,255,0.4)"
                          : "none"
                      }
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Start label */}
                <text
                  x={toX(pts[0].lng)}
                  y={toY(pts[0].lat) - 8}
                  textAnchor="middle"
                  fill={ACCENT}
                  fontSize="7"
                  fontWeight="700"
                >
                  DÉPART
                </text>
                {/* End label */}
                <text
                  x={toX(pts[pts.length - 1].lng)}
                  y={toY(pts[pts.length - 1].lat) - 8}
                  textAnchor="middle"
                  fill="#F87171"
                  fontSize="7"
                  fontWeight="700"
                >
                  ARRIVÉE
                </text>
                {/* Direction line to next waypoint */}
                <line
                  x1={ux}
                  y1={uy}
                  x2={nx}
                  y2={ny}
                  stroke={ACCENT}
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity="0.5"
                />
                {/* Next waypoint pulse */}
                <circle
                  cx={nx}
                  cy={ny}
                  r="6"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    values="4;8;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.1;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* User position */}
                <circle cx={ux} cy={uy} r="8" fill={ACCENT} opacity="0.15">
                  <animate
                    attributeName="r"
                    values="6;12;6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={ux}
                  cy={uy}
                  r="5"
                  fill={ACCENT}
                  stroke="#0A0A0A"
                  strokeWidth="2"
                />
                {/* Direction arrow */}
                <g transform={`translate(${ux}, ${uy}) rotate(${arrowAngle})`}>
                  <polygon
                    points="0,-12 -4,-6 4,-6"
                    fill={ACCENT}
                    opacity="0.9"
                  />
                </g>
              </svg>
              {/* Bottom info */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <span style={{ fontSize: 9, color: TEXT_DIM }}>
                  📍 {uLat.toFixed(4)}°N, {uLng.toFixed(4)}°E
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color:
                      realPos && !realPos.isDefault ? "#4ADE80" : "#F59E0B",
                    fontWeight: 600,
                  }}
                >
                  {realPos && !realPos.isDefault
                    ? "● GPS réel"
                    : "○ Position estimée"}
                </span>
              </div>
            </div>
          );
        })()}

      {/* Security alerts */}
      {securityAlerts.map((alert, i) => (
        <div
          key={alert.type}
          style={{
            background: alert.color + "12",
            borderRadius: 12,
            padding: "10px 14px",
            marginBottom: 8,
            border: "1px solid " + alert.color + "30",
            display: "flex",
            alignItems: "center",
            gap: 10,
            animation: "alertSlide 0.3s ease",
          }}
        >
          <span style={{ fontSize: 18 }}>{alert.icon}</span>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: alert.color }}>
              {alert.text}
            </p>
            <p style={{ fontSize: 9, color: TEXT_DIM }}>{alert.detail}</p>
          </div>
          <button
            onClick={() =>
              setSecurityAlerts((prev) =>
                prev.filter((a) => a.type !== alert.type)
              )
            }
            style={{
              background: "none",
              border: "none",
              color: TEXT_DIM,
              cursor: "pointer",
              padding: 4,
            }}
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <style>{`@keyframes alertSlide { from { opacity:0; transform: translateX(-10px); } to { opacity:1; transform: translateX(0); } }`}</style>

      {/* Smart alerts */}
      {navData.progress > 45 && navData.progress < 55 && (
        <div
          style={{
            background: "#3B82F615",
            borderRadius: 12,
            padding: "10px 14px",
            marginBottom: 12,
            border: "1px solid #3B82F630",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Info size={14} color="#60A5FA" />
          <p style={{ fontSize: 11, color: "#93C5FD" }}>
            Mi-parcours — pensez à vous hydrater et manger un encas
          </p>
        </div>
      )}
      {battery < 25 && (
        <div
          style={{
            background: "#F8717115",
            borderRadius: 12,
            padding: "10px 14px",
            marginBottom: 12,
            border: "1px solid #F8717130",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Battery size={14} color="#F87171" />
          <p style={{ fontSize: 11, color: "#FCA5A5" }}>
            Batterie faible ({battery}%) — activez le mode économie si possible
          </p>
        </div>
      )}
      {navData.progress > 85 && navData.progress < 95 && (
        <div
          style={{
            background: "#4ADE8015",
            borderRadius: 12,
            padding: "10px 14px",
            marginBottom: 12,
            border: "1px solid #4ADE8030",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Flag size={14} color="#4ADE80" />
          <p style={{ fontSize: 11, color: "#86EFAC" }}>
            Bientôt arrivé ! Plus que{" "}
            {((rando.distance * (100 - navData.progress)) / 100).toFixed(1)}km
          </p>
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {[
          { icon: Timer, val: elapsedStr, label: "Temps" },
          {
            icon: TrendingUp,
            val: `${Math.floor((rando.denivele * navData.progress) / 100)}m`,
            label: "D+",
          },
          {
            icon: Zap,
            val: `${Math.floor(
              parseFloat(dist) * 55 + elapsedSimulated * 0.8
            )}`,
            label: "kcal",
          },
          {
            icon: Footprints,
            val: `${Math.floor(parseFloat(dist) * 1350)}`,
            label: "Pas",
          },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: CARD,
              borderRadius: 14,
              padding: 12,
              textAlign: "center",
              border: `1px solid ${BORDER}`,
            }}
          >
            <s.icon size={16} color={ACCENT} style={{ margin: "0 auto 4px" }} />
            <p style={{ fontWeight: 700, fontSize: 14, color: TEXT }}>
              {s.val}
            </p>
            <p style={{ fontSize: 9, color: TEXT_DIM }}>{s.label}</p>
          </div>
        ))}
      </div>
      {rando.scanPoints && rando.scanPoints.length > 0 && (
        <div
          style={{
            background: ACCENT_DIM,
            borderRadius: 14,
            padding: 14,
            marginBottom: 16,
            border: `1px solid ${ACCENT}30`,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Aperture size={20} color={ACCENT} />
          <div>
            <p style={{ fontWeight: 600, fontSize: 12, color: ACCENT }}>
              {rando.scanPoints.length} points à scanner
            </p>
            <p style={{ fontSize: 10, color: TEXT_MED }}>
              Ouvrez le scanner quand vous voyez 🔍
            </p>
          </div>
        </div>
      )}
      <div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <button
            onClick={onScan}
            style={{
              flex: 2,
              padding: 16,
              borderRadius: 14,
              background: ACCENT,
              border: "none",
              color: BG,
              fontWeight: 800,
              fontSize: 14,
              fontFamily: "Poppins",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Aperture size={20} />
            SCANNER
          </button>
          <button
            onClick={() => setNavData((p) => ({ ...p, paused: !p.paused }))}
            style={{
              padding: "16px 20px",
              borderRadius: 14,
              background: navData.paused ? "#4ADE80" : CARD2,
              border: `1px solid ${navData.paused ? "#4ADE80" : BORDER}`,
              color: navData.paused ? BG : TEXT,
              cursor: "pointer",
            }}
          >
            {navData.paused ? <Play size={20} /> : <Pause size={20} />}
          </button>
          <button
            onClick={() =>
              onStop({
                completed: navData.progress >= 90,
                distance: (rando.distance * navData.progress) / 100,
                denivele: Math.floor((rando.denivele * navData.progress) / 100),
                duree: (Date.now() - navData.startTime) / 60000,
              })
            }
            style={{
              padding: "16px 20px",
              borderRadius: 14,
              background: "#F8717120",
              border: "1px solid #F8717150",
              color: "#F87171",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        </div>
        <button
          onClick={() => setShowSOS(true)}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            background: "#F8717115",
            border: "1px solid #F8717130",
            color: "#F87171",
            fontWeight: 600,
            fontSize: 13,
            fontFamily: "Poppins",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Shield size={16} />
          SOS Urgence · 112
        </button>
        {showSOS && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.8)",
            }}
          >
            <div
              style={{
                background: CARD,
                borderRadius: 24,
                padding: 28,
                maxWidth: 320,
                textAlign: "center",
                border: `1px solid #F87171`,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#F8717120",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Phone size={28} color="#F87171" />
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#F87171",
                  marginBottom: 8,
                }}
              >
                Appel d'urgence
              </h3>
              <p style={{ fontSize: 12, color: TEXT_MED, marginBottom: 20 }}>
                Vous allez appeler le 112 (numéro d'urgence européen).
                Confirmez-vous ?
              </p>
              <a
                href="tel:112"
                style={{
                  display: "block",
                  width: "100%",
                  padding: 14,
                  borderRadius: 14,
                  background: "#F87171",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Appeler le 112
              </a>
              <button
                onClick={() => setShowSOS(false)}
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 14,
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                  color: TEXT_DIM,
                  fontWeight: 600,
                  fontSize: 13,
                  fontFamily: "Poppins",
                  cursor: "pointer",
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════ PROFILE ═══════
function Profile({
  user,
  stats,
  badges,
  unlocked,
  partenaires,
  showToast,
  appSettings,
  setAppSettings,
  carnetEntries,
}) {
  const [sub, setSub] = useState("stats");
  const [copiedCode, setCopiedCode] = useState(null);
  const xpThresholds = [0, 200, 500, 1000, 2000, 4000, 8000, 16000, 32000];
  const nextT = xpThresholds[user.niveau] || 64000;
  const prevT = xpThresholds[user.niveau - 1] || 0;
  const xpPct = ((user.xp - prevT) / (nextT - prevT)) * 100;

  const copyCode = (code) => {
    setCopiedCode(code);
    showToast(`Code ${code} copié !`);
    setTimeout(() => setCopiedCode(null), 2000);
  };
  const toggleSetting = (key) =>
    setAppSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: TEXT }}>
      <div
        style={{
          padding: "24px 16px",
          textAlign: "center",
          background: CARD,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: ACCENT_DIM,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
            fontSize: 36,
            border: `2px solid ${ACCENT}40`,
          }}
        >
          {user.avatar}
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: TEXT }}>
          {user.prenom} {user.nom}
        </h2>
        <p style={{ fontSize: 12, color: TEXT_DIM }}>
          Niveau {user.niveau} · {user.ville}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 28,
            marginTop: 16,
          }}
        >
          {[
            { val: stats.totalRandos, label: "Randos" },
            { val: user.followers, label: "Abonnés" },
            { val: user.following, label: "Suivis" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ fontWeight: 800, fontSize: 18, color: ACCENT }}>
                {s.val}
              </p>
              <p style={{ fontSize: 10, color: TEXT_DIM }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "12px 16px",
          borderBottom: `1px solid ${BORDER}`,
          overflow: "auto",
        }}
      >
        {[
          { id: "stats", label: "📊 Stats" },
          { id: "carnet", label: "📓 Carnet" },
          { id: "partenaires", label: "🎁 Avantages" },
          { id: "settings", label: "⚙️ Paramètres" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setSub(t.id)}
            style={{
              flex: 1,
              padding: "10px 0",
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: sub === t.id ? ACCENT : CARD,
              color: sub === t.id ? BG : TEXT_DIM,
              border: `1px solid ${sub === t.id ? ACCENT : BORDER}`,
              fontFamily: "Poppins",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {sub === "stats" && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: `linear-gradient(135deg, ${ACCENT}20, ${ACCENT}05)`,
              borderRadius: 20,
              padding: 20,
              marginBottom: 20,
              border: `1px solid ${ACCENT}30`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div>
                <p style={{ fontSize: 11, color: TEXT_DIM }}>Votre niveau</p>
                <p style={{ fontSize: 28, fontWeight: 900, color: ACCENT }}>
                  Niveau {user.niveau}
                </p>
              </div>
              <Trophy size={28} color={ACCENT} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                color: TEXT_MED,
                marginBottom: 4,
              }}
            >
              <span>{user.xp} XP</span>
              <span>{nextT} XP</span>
            </div>
            <div
              style={{
                height: 6,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 3,
              }}
            >
              <div
                style={{
                  width: `${xpPct}%`,
                  height: "100%",
                  background: ACCENT,
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 10,
              marginBottom: 20,
            }}
          >
            {[
              {
                icon: Route,
                val: stats.totalDist.toFixed(1),
                unit: "km",
                label: "Distance",
              },
              {
                icon: TrendingUp,
                val: stats.totalDeniv.toLocaleString(),
                unit: "m",
                label: "Dénivelé",
              },
              {
                icon: Target,
                val: stats.totalRandos,
                unit: "",
                label: "Randonnées",
              },
              {
                icon: Mountain,
                val: stats.altMax.toLocaleString(),
                unit: "m",
                label: "Alt. max",
              },
              {
                icon: Aperture,
                val: stats.floraScans.length + stats.faunaScans.length,
                unit: "",
                label: "Espèces scannées",
              },
              {
                icon: Clock,
                val: Math.floor(stats.totalHeures),
                unit: "h",
                label: "Heures",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  borderRadius: 16,
                  padding: 16,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <s.icon size={20} color={ACCENT} style={{ marginBottom: 8 }} />
                <p style={{ fontSize: 22, fontWeight: 800 }}>
                  {s.val}
                  <span
                    style={{ fontSize: 13, fontWeight: 400, color: TEXT_DIM }}
                  >
                    {s.unit}
                  </span>
                </p>
                <p style={{ fontSize: 11, color: TEXT_DIM }}>{s.label}</p>
              </div>
            ))}
          </div>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 15,
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: TEXT,
            }}
          >
            <Award size={18} color={ACCENT} />
            Badges ({unlocked.length}/{badges.length})
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              marginBottom: 20,
            }}
          >
            {badges.map((b) => {
              const got = unlocked.includes(b.id);
              return (
                <div
                  key={b.id}
                  style={{
                    aspectRatio: "1",
                    borderRadius: 14,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 6,
                    position: "relative",
                    background: got ? ACCENT_DIM : CARD,
                    border: `1px solid ${got ? ACCENT + "50" : BORDER}`,
                    opacity: got ? 1 : 0.35,
                  }}
                >
                  <span style={{ fontSize: 22 }}>{b.emoji}</span>
                  <span
                    style={{
                      fontSize: 8,
                      textAlign: "center",
                      fontWeight: 600,
                      color: got ? ACCENT : TEXT_DIM,
                      marginTop: 2,
                    }}
                  >
                    {b.nom}
                  </span>
                  {got && (
                    <div
                      style={{
                        position: "absolute",
                        top: -3,
                        right: -3,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: ACCENT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={10} color={BG} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Weekly activity — recharts */}
          <div
            style={{
              background: CARD,
              borderRadius: 16,
              padding: 16,
              border: `1px solid ${BORDER}`,
              marginBottom: 16,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: TEXT,
              }}
            >
              <BarChart3 size={16} color={ACCENT} />
              Activité semaine
            </h3>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart
                data={stats.activiteHebdo.map((km, i) => ({
                  jour: "LMMJVSD"[i],
                  km,
                }))}
              >
                <XAxis
                  dataKey="jour"
                  tick={{ fill: TEXT_DIM, fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="km" fill={ACCENT} radius={[4, 4, 0, 0]} />
                <Tooltip
                  contentStyle={{
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    fontSize: 11,
                  }}
                  labelStyle={{ color: TEXT }}
                />
              </BarChart>
            </ResponsiveContainer>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                marginTop: 8,
                color: TEXT_DIM,
              }}
            >
              <span style={{ fontWeight: 700, color: ACCENT }}>
                {stats.activiteHebdo.reduce((a, b) => a + b, 0).toFixed(1)} km
              </span>{" "}
              cette semaine
            </p>
          </div>

          {/* Monthly progression — line chart */}
          <div
            style={{
              background: CARD,
              borderRadius: 16,
              padding: 16,
              border: `1px solid ${BORDER}`,
              marginBottom: 16,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: TEXT,
              }}
            >
              <TrendingUp size={16} color="#60A5FA" />
              Progression mensuelle
            </h3>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart
                data={[
                  { mois: "Sep", km: 12, deniv: 800 },
                  { mois: "Oct", km: 25, deniv: 1500 },
                  { mois: "Nov", km: 18, deniv: 1200 },
                  { mois: "Déc", km: 8, deniv: 600 },
                  { mois: "Jan", km: 22, deniv: 1800 },
                  {
                    mois: "Fév",
                    km: Math.round(stats.totalDist) || 15,
                    deniv: stats.totalDeniv || 1000,
                  },
                ]}
              >
                <XAxis
                  dataKey="mois"
                  tick={{ fill: TEXT_DIM, fontSize: 9 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Line
                  type="monotone"
                  dataKey="km"
                  stroke={ACCENT}
                  strokeWidth={2}
                  dot={{ r: 3, fill: ACCENT }}
                />
                <Line
                  type="monotone"
                  dataKey="deniv"
                  stroke="#60A5FA"
                  strokeWidth={1.5}
                  dot={{ r: 2, fill: "#60A5FA" }}
                />
                <Tooltip
                  contentStyle={{
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    fontSize: 10,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                marginTop: 6,
              }}
            >
              <span
                style={{
                  fontSize: 9,
                  color: ACCENT,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 2,
                    background: ACCENT,
                    borderRadius: 1,
                  }}
                />
                Distance (km)
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: "#60A5FA",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 2,
                    background: "#60A5FA",
                    borderRadius: 1,
                  }}
                />
                Dénivelé (m)
              </span>
            </div>
          </div>

          {/* Species pie chart */}
          <div
            style={{
              background: CARD,
              borderRadius: 16,
              padding: 16,
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: TEXT,
              }}
            >
              <Aperture size={16} color="#A78BFA" />
              Découvertes naturalistes
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <ResponsiveContainer width={100} height={100}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Flore", value: stats.floraScans.length || 3 },
                      { name: "Faune", value: stats.faunaScans.length || 2 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    <Cell fill="#4ADE80" />
                    <Cell fill="#F59E0B" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: "#4ADE80",
                    }}
                  />
                  <span style={{ fontSize: 11, color: TEXT }}>
                    {stats.floraScans.length || 3} Plantes
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: "#F59E0B",
                    }}
                  />
                  <span style={{ fontSize: 11, color: TEXT }}>
                    {stats.faunaScans.length || 2} Animaux
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sub === "carnet" && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: TEXT,
              }}
            >
              <BookOpen size={18} color={ACCENT} />
              Carnet de terrain
            </h3>
            <span style={{ fontSize: 11, color: TEXT_DIM }}>
              {(carnetEntries || []).length} entrée
              {(carnetEntries || []).length > 1 ? "s" : ""}
            </span>
          </div>
          {!carnetEntries || carnetEntries.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: 40,
                background: CARD,
                borderRadius: 16,
                border: `1px solid \${BORDER}`,
              }}
            >
              <span style={{ fontSize: 48 }}>📓</span>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: TEXT,
                  marginTop: 12,
                }}
              >
                Votre carnet est vide
              </p>
              <p style={{ fontSize: 11, color: TEXT_DIM, marginTop: 4 }}>
                Scannez des espèces pour remplir votre journal naturaliste
              </p>
            </div>
          ) : (
            <div>
              {carnetEntries.map((e, i) => {
                const dt = new Date(e.date);
                return (
                  <div
                    key={e.id || i}
                    style={{
                      background: CARD,
                      borderRadius: 16,
                      marginBottom: 10,
                      overflow: "hidden",
                      border: `1px solid \${BORDER}`,
                    }}
                  >
                    <div style={{ display: "flex", gap: 12, padding: 12 }}>
                      {e.photo ? (
                        <img
                          src={e.photo}
                          alt=""
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 12,
                            objectFit: "cover",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 12,
                            background: ACCENT_DIM,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                            flexShrink: 0,
                          }}
                        >
                          {e.emoji || "✨"}
                        </div>
                      )}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            marginBottom: 2,
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: 13,
                              color: TEXT,
                            }}
                          >
                            {e.emoji} {e.nom}
                          </span>
                          <span
                            style={{
                              fontSize: 8,
                              padding: "1px 6px",
                              borderRadius: 4,
                              background:
                                e.type === "flore" ? "#4ADE8020" : "#F59E0B20",
                              color: e.type === "flore" ? "#4ADE80" : "#F59E0B",
                            }}
                          >
                            {e.type}
                          </span>
                        </div>
                        {e.scientifique && (
                          <p
                            style={{
                              fontSize: 10,
                              fontStyle: "italic",
                              color: ACCENT,
                            }}
                          >
                            {e.scientifique}
                          </p>
                        )}
                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            marginTop: 4,
                            flexWrap: "wrap",
                          }}
                        >
                          <span style={{ fontSize: 8, color: TEXT_DIM }}>
                            📅 {dt.toLocaleDateString("fr-FR")}
                          </span>
                          {e.alt && (
                            <span style={{ fontSize: 8, color: TEXT_DIM }}>
                              ⛰️ {Math.round(e.alt)}m
                            </span>
                          )}
                          {e.confiance && (
                            <span
                              style={{
                                fontSize: 8,
                                color:
                                  e.confiance >= 70 ? "#4ADE80" : "#F59E0B",
                              }}
                            >
                              IA {e.confiance}%
                            </span>
                          )}
                          {e.contextScore > 0 && (
                            <span
                              style={{
                                fontSize: 8,
                                color:
                                  e.contextScore >= 60 ? "#4ADE80" : TEXT_DIM,
                              }}
                            >
                              Habitat {e.contextScore}/100
                            </span>
                          )}
                        </div>
                        {e.lat && (
                          <p
                            style={{
                              fontSize: 8,
                              color: TEXT_DIM,
                              marginTop: 2,
                            }}
                          >
                            📍 {e.lat.toFixed(4)}°N, {e.lng.toFixed(4)}°E
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {sub === "partenaires" && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: `linear-gradient(135deg, #A855F720, #EC489920)`,
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
              border: "1px solid #A855F730",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Percent size={24} color="#A855F7" />
              <div>
                <p style={{ fontWeight: 700, fontSize: 15, color: "#A855F7" }}>
                  Avantages exclusifs
                </p>
                <p style={{ fontSize: 11, color: TEXT_DIM }}>
                  Réductions chez nos partenaires pyrénéens
                </p>
              </div>
            </div>
          </div>
          {partenaires.map((p) => (
            <div
              key={p.id}
              style={{
                background: CARD,
                borderRadius: 14,
                marginBottom: 10,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  padding: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 32 }}>{p.type}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <p style={{ fontWeight: 700, fontSize: 13, color: TEXT }}>
                      {p.nom}
                    </p>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: 8,
                        fontSize: 10,
                        fontWeight: 700,
                        background: ACCENT_DIM,
                        color: ACCENT,
                      }}
                    >
                      -{p.reduc}%
                    </span>
                  </div>
                  <p style={{ fontSize: 11, color: TEXT_DIM }}>{p.desc}</p>
                  <p style={{ fontSize: 10, color: TEXT_DIM, marginTop: 2 }}>
                    📍 {p.loc} · {p.cat}
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "10px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: CARD2,
                  borderTop: `1px solid ${BORDER}`,
                }}
              >
                <div>
                  <p style={{ fontSize: 9, color: TEXT_DIM }}>Code promo</p>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: 14,
                      color: ACCENT,
                    }}
                  >
                    {p.code}
                  </p>
                </div>
                <button
                  onClick={() => copyCode(p.code)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 10,
                    background: copiedCode === p.code ? "#4ADE80" : ACCENT,
                    border: "none",
                    color: BG,
                    fontWeight: 700,
                    fontSize: 11,
                    fontFamily: "Poppins",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {copiedCode === p.code ? (
                    <>
                      <Check size={12} />
                      Copié
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copier
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {sub === "settings" && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: CARD,
              borderRadius: 14,
              overflow: "hidden",
              border: `1px solid ${BORDER}`,
            }}
          >
            {[
              { key: "notifications", label: "Notifications", icon: Bell },
              { key: "offline", label: "Mode hors-ligne auto", icon: Download },
              { key: "battery", label: "Économie batterie", icon: Battery },
              { key: "sound", label: "Son des scans", icon: Volume2 },
            ].map((s, i) => (
              <button
                key={s.key}
                onClick={() => toggleSetting(s.key)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 16px",
                  borderBottom: i < 3 ? `1px solid ${BORDER}` : "none",
                  width: "100%",
                  background: "none",
                  border: "none",
                  borderBottom: i < 3 ? `1px solid ${BORDER}` : "none",
                  cursor: "pointer",
                  color: TEXT,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <s.icon size={16} color={TEXT_DIM} />
                  <span
                    style={{
                      fontSize: 13,
                      color: TEXT_MED,
                      fontFamily: "Poppins",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
                <div
                  style={{
                    width: 44,
                    height: 24,
                    borderRadius: 12,
                    background: appSettings[s.key] ? ACCENT : BORDER,
                    position: "relative",
                    transition: "background 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: TEXT,
                      position: "absolute",
                      top: 2,
                      left: appSettings[s.key] ? 22 : 2,
                      transition: "left 0.2s",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => showToast("Cache vidé !")}
            style={{
              width: "100%",
              marginTop: 16,
              padding: 14,
              borderRadius: 14,
              background: CARD,
              border: `1px solid ${BORDER}`,
              color: TEXT_MED,
              fontWeight: 600,
              fontSize: 13,
              fontFamily: "Poppins",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Trash2 size={16} /> Vider le cache
          </button>
          <button
            onClick={() => showToast("Données exportées !")}
            style={{
              width: "100%",
              marginTop: 8,
              padding: 14,
              borderRadius: 14,
              background: CARD,
              border: `1px solid ${BORDER}`,
              color: TEXT_MED,
              fontWeight: 600,
              fontSize: 13,
              fontFamily: "Poppins",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Download size={16} /> Exporter mes données
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: TEXT_DIM,
              marginTop: 32,
            }}
          >
            ISARD v17.1.0 · Made with 🦌 in Pyrénées
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: 10,
              color: ACCENT + "60",
              marginTop: 4,
            }}
          >
            Poppins · #CCFF00 · #010101
          </p>
        </div>
      )}
    </div>
  );
}
