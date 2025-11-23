# Testing Guide for VarzeApp

## Testing Mobile Detection

### Method 1: Browser DevTools (Recommended for Development)

1. Open the app in Chrome or Edge
2. Press `F12` to open DevTools
3. Click the "Toggle device toolbar" icon (or press `Ctrl+Shift+M`)
4. Select a mobile device from the dropdown (e.g., "iPhone 12 Pro")
5. Refresh the page
6. The app should now display the homepage

**To test desktop blocking:**

- Turn off the device toolbar
- Refresh the page
- You should see the "Mobile Only App" message

### Method 2: User Agent Switcher Extension

1. Install a User Agent Switcher extension
2. Set the user agent to a mobile device
3. Refresh the page

### Method 3: Real Mobile Device (Best for Production Testing)

#### Option A: Same Network

1. Find your computer's IP address:
   - Windows: `ipconfig` in CMD
   - Mac/Linux: `ifconfig` or `ip addr`
2. On your mobile device, open browser
3. Visit: `http://[YOUR-IP]:5174/`
4. Example: `http://192.168.1.100:5174/`

#### Option B: Tunneling Services (ngrok, localtunnel, etc.)

```bash
# Using ngrok (if installed)
ngrok http 5174
# Use the provided URL on your mobile device
```

## Testing PWA Features

### Service Worker Registration

1. Open DevTools → Application tab
2. Check "Service Workers" section
3. You should see the service worker registered

### Manifest

1. Open DevTools → Application tab
2. Check "Manifest" section
3. Verify all fields are populated correctly

### Offline Functionality

1. Visit the app normally
2. Open DevTools → Network tab
3. Check "Offline" checkbox
4. Refresh the page
5. The app should still load (may take a second visit to cache everything)

### Installation

1. On Chrome desktop (with device emulation):
   - Look for an install icon in the address bar
   - Click to install
2. On mobile:
   - Follow the instructions in INSTALLATION.md

## Testing Navigation

### Homepage → Login

1. Open the app
2. Click the "Login" button
3. Should navigate to `/login`

### Login → Back to Homepage

1. On the login page
2. Click the "← Back" button
3. Should navigate to `/`

## Expected Behaviors

### Desktop Access

- ❌ Should show "Mobile Only App" message
- ❌ Should NOT show homepage or login page
- ✅ Should display a purple gradient background
- ✅ Should show bouncing phone emoji

### Mobile Access

- ✅ Should show homepage with green gradient
- ✅ Should show login button
- ✅ Navigation should work
- ✅ PWA install prompt should appear

## Device Detection Logic

The app considers a device "mobile" if ALL of these are true:

1. User agent matches mobile pattern (android, iphone, etc.)
2. Has touch screen capability
3. Screen width ≤ 768px

## Common Issues and Solutions

### Issue: Mobile device shows desktop message

**Solution:**

- Check if browser is in "Desktop site" mode
- Try a different mobile browser
- Verify screen width is ≤ 768px

### Issue: Can't install as PWA

**Solution:**

- Ensure using HTTPS or localhost
- Check manifest is properly configured
- Try clearing browser cache
- Refresh the page and wait a few seconds

### Issue: Routing doesn't work

**Solution:**

- Check browser console for errors
- Verify React Router is properly installed
- Check that URLs match the defined routes

## Browser Compatibility

### Fully Supported

- ✅ Chrome (Android/Desktop)
- ✅ Safari (iOS)
- ✅ Edge (Android/Desktop)
- ✅ Samsung Internet

### Limited Support

- ⚠️ Firefox (PWA features may be limited)
- ⚠️ Older browsers (may not support service workers)

## Performance Testing

1. Open DevTools → Lighthouse
2. Run audit with:
   - Performance
   - PWA
   - Best Practices
3. Target scores:
   - Performance: >90
   - PWA: 100
   - Best Practices: >90

## Next Steps for Development

- [ ] Implement actual login functionality
- [ ] Add more pages (dashboard, profile, etc.)
- [ ] Add push notifications
- [ ] Implement offline data sync
- [ ] Add more features from the roadmap
