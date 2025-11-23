# VarzeApp - Installation Guide 📱

## How to Install the PWA on Your Mobile Device

### For Android (Chrome/Edge)

1. Open Chrome or Edge browser on your Android phone
2. Visit the app URL
3. Tap the menu (three dots) in the top right
4. Select "Install app" or "Add to Home screen"
5. Confirm the installation
6. The app icon will appear on your home screen

### For iOS (Safari)

1. Open Safari on your iPhone/iPad
2. Visit the app URL
3. Tap the Share button (square with arrow pointing up)
4. Scroll down and tap "Add to Home Screen"
5. Give it a name (or keep the default "VarzeApp")
6. Tap "Add"
7. The app icon will appear on your home screen

## Features After Installation

✅ Works offline
✅ Faster loading
✅ Full-screen experience
✅ Notifications (future feature)
✅ Home screen icon

## Testing the App

### On Desktop (Development)

- The app will show a message that it's mobile-only
- To test mobile features, use browser DevTools:
  - Press F12
  - Click the device toolbar icon (or Ctrl+Shift+M)
  - Select a mobile device from the dropdown

### On Mobile

- Simply open the URL in your mobile browser
- The app will work normally
- You can install it as described above

## Troubleshooting

**Problem**: Can't see "Install app" option

- Make sure you're using a compatible browser (Chrome, Edge, Safari)
- The app needs to be served over HTTPS (except localhost)
- Try refreshing the page

**Problem**: App shows "Mobile-only" message on my phone

- Check your browser's user agent settings
- Make sure you're not in "Desktop site" mode
- Try a different browser

**Problem**: App doesn't work offline

- Make sure you've installed it as a PWA
- The first visit needs internet to cache resources
- After that, it should work offline

## Current Features

### Homepage (/)

- Welcome screen with app logo
- Feature overview
- Login button

### Login Page (/login)

- Email and password inputs
- Back button to return home
- Forgot password link
- Sign up link

## Development Server

The app is currently running at: http://localhost:5174/

To access from your phone on the same network:

1. Find your computer's local IP address
2. On your phone, visit: http://[YOUR-IP]:5174/
3. Example: http://192.168.1.100:5174/
