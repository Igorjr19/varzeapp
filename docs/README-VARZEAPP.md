# VarzeApp ⚽

A Progressive Web App (PWA) designed exclusively for mobile devices to manage soccer fields, teams, and matches.

## Features

- 📱 **Mobile-Only**: Restricted to mobile devices with a friendly message for desktop users
- 🔐 **Authentication**: Login system with routing
- 🚀 **PWA Capabilities**: Works offline and can be installed on mobile devices
- 🎨 **Modern UI**: Clean, mobile-first design with smooth animations
- ⚡ **Fast**: Built with Vite for optimal performance

## Device Restrictions

This app is designed exclusively for mobile devices. If you try to access it from a desktop or non-mobile device, you'll see a message advising that the app is mobile-only.

The detection system checks for:

- Mobile user agent
- Touch screen capability
- Screen size (≤768px)

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── MobileGuard.tsx      # Mobile device detection and restriction
│   └── MobileGuard.css
├── pages/
│   ├── Home.tsx             # Homepage with login button
│   ├── Home.css
│   ├── Login.tsx            # Login page
│   └── Login.css
├── utils/
│   └── deviceDetection.ts   # Device detection utilities
├── App.tsx                  # Main app component with routing
├── main.tsx                 # Entry point with PWA registration
└── index.css                # Global styles
```

## PWA Features

The app includes:

- Service worker for offline functionality
- Web app manifest for installation
- Optimized caching strategy
- Mobile-first responsive design

## Routes

- `/` - Homepage with login button
- `/login` - Login page

## Technology Stack

- **React** 19.1.1
- **TypeScript** 5.9.3
- **Vite** (Rolldown) 7.1.14
- **React Router** for navigation
- **Vite PWA Plugin** for Progressive Web App features

## Development

The app uses:

- ESLint for code quality
- TypeScript for type safety
- CSS modules for styling
- Mobile-first responsive design principles

## Browser Support

Modern mobile browsers with:

- Service Worker support
- ES6+ support
- Touch events support

## License

MIT
