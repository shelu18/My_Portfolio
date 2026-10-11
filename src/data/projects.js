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
    id: 'oneradon',
    title: 'OneRADON Mobile — IoT BLE Companion App',
    description:
      'Cross-platform React Native 0.84 (New Architecture) IoT app that communicates with 4 radon monitor hardware models over BLE using a custom binary protocol — a full Qt/C++ desktop-to-mobile migration.',
    tags: ['React Native 0.84', 'New Architecture', 'BLE', 'TypeScript', 'Redux Toolkit', 'MMKV', 'Firebase Crashlytics'],
    coverImage: `${BASE_URL}images/covers/oneradon-cover.webp`,
    githubLink: '',
    liveLink: '',
    codeLink: '',
    detailsLink: '/project-details/oneradon',
    featured: true,
  },
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
    featured: false,
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
    featured: false,
  },
]

/** Returns only the featured projects (for homepage). */
export const getFeaturedProjects = () =>
  allProjects.filter((p) => p.featured).slice(0, 3)

export const projectDetails = {
  oneradon: {
    title: 'OneRADON Mobile — IoT BLE Companion App',
    overview: `OneRADON Mobile is a cross-platform React Native 0.84 companion app for professional radon measurement devices. Built with the New Architecture (TurboModules + Fabric) and Hermes engine, it communicates with 4 hardware models over BLE using a fully custom binary protocol — a ground-up migration of a legacy Qt/C++ desktop application.`,
    problem:
      'A legacy Qt/C++ desktop application was the only way to interface with OneRADON hardware devices, blocking field inspectors from a mobile workflow. The entire device communication protocol, binary data parsers, AES-128 encryption, and report generation pipeline needed to be reverse-engineered and rebuilt in React Native without any protocol documentation.',
    role: `Migrated the legacy Qt/C++ desktop application to React Native 0.84 (New Architecture), porting device communication, business logic, binary data parsing and AES-128 encryption to achieve byte-level parity across 4 hardware models and ~100 BLE device commands. Engineered a full custom BLE communication stack including binary packet building using the SNC05 protocol (preamble, checksum, command, payload), command queuing to prevent race conditions, retry logic with backoff, notification stream reassembly from fragmented chunks, and a keep-alive controller. Built an offline-capable test-data pipeline that downloads up to 999 measurement records per test slot via BLE, parses binary sensor data (temperature, humidity, pressure, VOC, CO2), computes EPA Protocol and test averages, and persists raw and processed data using Redux Toolkit and MMKV. Developed an inspection reporting module with 28 Redux actions managing photo capture, checklists, reusable templates, regulatory AARST/NRPP compliance data, ZIP export, backend PDF report generation, cloud upload, and native share on Android and iOS.`,
    outcome:
      'A production-grade cross-platform iOS and Android app replacing the Qt desktop tool entirely, enabling field inspectors to conduct BLE-connected radon inspections, process multi-sensor measurement data, and generate regulatory-compliant PDF inspection reports — all from their mobile device.',
    features: [
      'Full Qt/C++ desktop-to-mobile migration — BLE protocol, binary parsers, and AES-128-ECB encryption ported to byte-level parity',
      'Custom SNC05 binary BLE protocol: packet building with preamble, checksum, command, control byte, and payload encoding',
      'Auto-detection and support for 4 radon monitor hardware models (R1027, R1028, R1030, R1031) from hardware UnitId',
      'BLE command queue, retry with backoff, and notification stream reassembly for reliable device communication',
      'BLE keep-alive controller (5s pings) to prevent unexpected disconnection during data transfer',
      'Downloads up to 999 test records per device via BLE with per-record progress tracking',
      'Multi-sensor binary parsing: temperature, humidity, pressure, VOC, CO2 with model-specific byte layouts',
      'EPA Protocol Average computation and chart-ready data structures from raw measurement records',
      'Inspection report module with photo management, checklists, AARST/NRPP regulatory compliance data, and reusable templates',
      'ZIP export pipeline, backend PDF report generation (90s timeout), cloud upload, and native share on Android/iOS',
      'AES-128-ECB token-based device authentication with SHA-256 key derivation',
      'Multi-environment API infrastructure (PROD / UAT / QA) with runtime switching',
      'Redux Toolkit (8 slices) + MMKV high-performance storage with typed accessors and state hydration',
      'Firebase Crashlytics, custom in-app logging system (10,000 entries, MMKV-persisted, shareable)',
      'React Native 0.84 New Architecture (TurboModules + Fabric), Hermes JS engine, Nitro Modules',
    ],
    images: [`${BASE_URL}images/covers/oneradon-cover.webp`],
    technologies: [
      'React Native 0.84',
      'New Architecture (TurboModules + Fabric)',
      'TypeScript',
      'BLE (react-native-ble-plx)',
      'Redux Toolkit',
      'MMKV',
      'AES-128 Encryption',
      'Firebase Crashlytics',
      'Axios',
      'Hermes',
      'Nitro Modules',
      'Android',
      'iOS',
    ],
  },
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
