/**
 * Centralized project data — single source of truth for all project pages.
 * Each project uses the Problem → Role → Stack → Outcome structure.
 */

const BASE_URL = import.meta.env.BASE_URL || '/'

/**
 * All projects — ordered newest-first.
 * `featured: true` projects appear on the homepage (max 3).
 */
export const allProjects = [
  {
    id: 'magicalswap',
    title: 'MagicalSwap — Rental Solution App',
    description:
      'Connects tenants and property owners with verified rental listings, featuring area-manager support and geolocation-based discovery.',
    tags: ['React Native', 'Branch.io', 'Deep Linking', 'App Store Connect', 'Google Play Console', 'Android Build Tools'],
    coverImage: `${BASE_URL}images/projectimages/magicalswapImages/cover.png`,
    githubLink: '',
    liveLink: 'https://play.google.com/store/apps/details?id=com.magicalswap.rent.android',
    codeLink: '',
    detailsLink: '/project-details/magicalswap',
    featured: true,
  },
  {
    id: 'drinking-buddy',
    title: 'Drinking Buddy — Social Networking App',
    description:
      'Club and venue discovery app with real-time chat, Google Maps integration, in-app payments, and secure OAuth authentication.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Socket.IO', 'Google Maps SDK', 'Reanimated'],
    coverImage: `${BASE_URL}images/covers/drinking-buddy-cover.webp`,
    githubLink: '',
    liveLink: '',
    codeLink: '',
    detailsLink: '/project-details/drinking-buddy',
    featured: true,
  },
  {
    id: 'crm-autodialer',
    title: 'CRM Autodialer — Mobile Sales App',
    description:
      'Automated lead-to-call pipeline that reduces manual dialing effort for sales teams with FCM-triggered auto-dial and call tracking.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'FCM', 'Jest'],
    coverImage: `${BASE_URL}images/covers/crm-autodialer-cover.webp`,
    githubLink: '',
    liveLink: '',
    codeLink: '',
    detailsLink: '/project-details/crm-autodialer',
    featured: true,
  },
]

/** Returns only the featured projects (for homepage). */
export const getFeaturedProjects = () =>
  allProjects.filter((p) => p.featured).slice(0, 3)

export const projectDetails = {
  magicalswap: {
    title: 'MagicalSwap — Rental Solution App',
    overview: `MagicalSwap connects tenants and property owners with verified rental listings in Indore, with local area-manager support. The app serves 5,000+ active users on the Play Store and App Store.`,
    problem:
      'Property search in Indore lacks a reliable digital platform — tenants and owners depend on word-of-mouth and unverified listings, leading to wasted time and trust issues.',
    role: `Played a key engineering role across a large-scale production codebase with 5,000+ active users. Implemented Branch.io deep linking for smart app links and attribution tracking across marketing campaigns. Managed end-to-end version deployments on both App Store Connect and Google Play Console (release notes, versioning, staged rollouts). Upgraded React Native version and Android build configurations, resolving complex dependency conflicts and compatibility issues. Performed rigorous regression testing across core flows (property listing, search/filter, owner-tenant interactions) after every major update, and continuously delivered UI/UX improvements and bug fixes.`,
    outcome:
      'Successful multi-store production deployments, seamless smart deep link attribution for marketing campaigns, and zero-downtime upgrades maintaining rock-solid stability for 5,000+ active users.',
    features: [
      'Zero-brokerage rental discovery connecting tenants directly with property owners',
      'Instant property listing flow for flat and house owners with photos, amenities, and rent details',
      'Geolocation-based search with filters for locality, budget, BHK, and furnishing',
      '100% verified listings and tenant verification for safety and trust',
      'Dedicated local area-manager support for assisted visits and onboarding',
      'Smart deep linking for 1-tap property sharing across WhatsApp and social platforms',
      'Seamless direct contact and inquiry flows between tenants and owners',
    ],
    images: [
      `${BASE_URL}images/projectimages/magicalswapImages/cover.png`,
      `${BASE_URL}images/projectimages/magicalswapImages/cover-mobile.png`,
      `${BASE_URL}images/projectimages/magicalswapImages/screen2.png`,
      `${BASE_URL}images/projectimages/magicalswapImages/screen3.png`,
      `${BASE_URL}images/projectimages/magicalswapImages/screen4.png`,
    ],
    technologies: [
      'React Native',
      'Branch.io',
      'Deep Linking',
      'App Store Connect',
      'Google Play Console',
      'Android Build Tools',
      'Regression Testing',
      'Release Management',
    ],
  },
  'drinking-buddy': {
    title: 'Drinking Buddy — Social Networking App',
    overview: `A club/venue discovery and social connection app that lets users find nearby venues, connect with others, and chat in real-time. Live on both iOS and Android.`,
    problem:
      'People looking for nightlife and social venues have no integrated way to discover clubs, connect with others going out, and communicate — all in one app.',
    role: `Built real-time chat (Socket.IO), club discovery via Google Maps SDK, in-app payment flows, secure Google Sign-In (OAuth 2.0) with token-based session handling, native-driven animations and gestures (Reanimated, Gesture Handler), NativeWind utility-first styling, and full EAS build/release management for both stores.`,
    outcome: 'Live on iOS and Android.',
    features: [
      'Real-time chat using Socket.IO',
      'Club discovery with Google Maps SDK',
      'In-app payment integration',
      'OAuth 2.0 Google Sign-In with token-based sessions',
      'Native animations with Reanimated & Gesture Handler',
      'NativeWind utility-first styling',
      'EAS build/release for App Store & Play Store',
    ],
    images: [`${BASE_URL}images/covers/drinking-buddy-cover.webp`],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Socket.IO', 'Google Maps SDK', 'Reanimated', 'NativeWind', 'OAuth 2.0'],
  },
  'crm-autodialer': {
    title: 'CRM Autodialer — Mobile Sales App',
    overview: `A mobile CRM tool that automates the lead-to-call pipeline for sales teams, reducing manual dialing effort through FCM-triggered auto-dial, call tracking, and backend sync.`,
    problem:
      'Sales teams waste significant time manually dialing leads, tracking call outcomes, and syncing data back to the CRM — a repetitive, error-prone workflow.',
    role: `Built the full lead-to-call pipeline — FCM push notification → native auto-dial trigger → call duration tracking via AppState → outcome capture → backend sync. Zustand for lead/call state, AsyncStorage for JWT persistence, Jest unit tests for core business logic.`,
    outcome:
      'End-to-end automated workflow reducing manual dialing effort.',
    features: [
      'FCM push notification → native auto-dial trigger',
      'Call duration tracking via AppState',
      'Outcome capture and backend sync',
      'Zustand state management for leads/calls',
      'AsyncStorage JWT persistence',
      'Jest unit tests for core business logic',
    ],
    images: [`${BASE_URL}images/covers/crm-autodialer-cover.webp`],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'FCM', 'Jest', 'AsyncStorage'],
  },
}
