# Quick Reference: Responsive Breakpoints

## All Screen Breakpoints (Mobile to 4K)

### 📱 Mobile Devices

#### Extra Small (< 320px)
```css
@media (max-width: 320px)
```
- Older/small devices
- Base font: 14px
- Logo: 40px height
- Slider: 50vh (min 350px)
- Padding: 30px 3%

#### Small Mobile Portrait (320px - 480px)
```css
@media (max-width: 480px)
```
- Standard smartphones (iPhone SE, etc.)
- H2: 1.4rem
- Logo: 44px height
- Slider: 55vh (min 400px)
- Padding: 35px 4%
- Touch targets: 36-40px

#### Mobile Landscape (480px - 600px)
```css
@media (max-width: 600px)
```
- Phones in landscape mode
- H2: 1.6rem
- Logo: 48px height
- Slider: 60vh (min 450px)
- Padding: 40px 5%
- Touch targets: 40-44px

---

### 📱 Tablets

#### Tablet Portrait (600px - 900px)
```css
@media (max-width: 900px)
```
- iPads, Android tablets (portrait)
- Mobile navigation activated
- H2: 1.8rem
- Logo: 52px height
- Padding: 50px 6%
- Grids: mostly single column

#### Tablet Landscape (900px - 1200px)
```css
@media (max-width: 1200px)
```
- Tablets in landscape
- Some 2-column layouts
- H2: default sizing
- Padding: 60px 8%
- Grids: 2-3 columns

#### Special: Tablet Landscape (600px - 1024px)
```css
@media (min-width: 600px) and (max-width: 1024px) and (orientation: landscape)
```
- Slider: 80vh
- Service hero: 70vh
- 2-column grids

---

### 💻 Desktop

#### Standard Desktop (1200px - 1400px)
```css
Default styles apply
```
- Full navigation
- Multi-column grids
- Max width: 1200px
- Full features enabled

#### Large Desktop (1400px - 1600px)
```css
@media (min-width: 1400px)
```
- Max width: 1400px containers
- Optimized for 1440p displays

#### Extra Large (1600px+)
```css
@media (min-width: 1600px)
```
- Max width: 1800px
- H2: 2.5rem
- Slider content: 3.5rem

---

### 🖥️ High-Resolution Displays

#### 2K Displays (1920px+)
```css
@media (min-width: 1920px)
```
- Max width: 1920px
- H2: 2.8rem
- Slider H2: 3.8rem
- Padding: 80px 12%

#### 4K/Ultra-Wide (2560px+)
```css
@media (min-width: 2560px)
```
- Max width: 2400px
- H2: 3.2rem
- Slider H2: 4.5rem
- Service images: 300px
- Padding: 100px 15%

---

### 📐 Orientation-Specific

#### Mobile Landscape (height < 500px)
```css
@media (max-height: 500px) and (orientation: landscape)
```
- Slider: 95vh (min 300px)
- Service hero: 85vh (min 250px)
- Reduced vertical padding
- Optimized for horizontal phones

---

## Component Breakdowns

### Navigation
- **Desktop (>900px)**: Horizontal menu with hover dropdowns
- **Mobile (≤900px)**: Hamburger menu with tap dropdowns

### Hero Slider Height
- **Extra Small**: 50vh (min 350px)
- **Mobile Portrait**: 55vh (min 400px)
- **Mobile Landscape**: 60vh (min 450px)
- **Tablet Portrait**: 72vh (min 520px)
- **Desktop**: 88vh (min 520px)
- **Landscape phones**: 95vh

### Logo Sizing
| Screen Size | Logo Height | Brand Font |
|-------------|-------------|------------|
| < 320px | 40px | 0.75rem |
| 320-480px | 44px | 0.8rem |
| 480-600px | 48px | 0.85rem |
| 600-900px | 52px | 0.95rem |
| > 900px | 64px | default |

### Grid Columns

#### Service Cards
- **Desktop**: 4 columns (min 250px)
- **Tablet**: 2 columns (min 220px)
- **Mobile**: 1 column

#### About Cards
- **Desktop**: 3 columns (min 280px)
- **Mobile**: 1 column

#### Statistics
- **Desktop**: 4 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column

#### Project Gallery
- **Desktop**: 4 columns (min 250px)
- **Tablet**: 2 columns
- **Mobile**: 1 column

---

## Touch Target Sizes

All interactive elements maintain minimum sizes:
- **Mobile**: 36-44px minimum
- **Enhanced touch devices**: 44px minimum
- Buttons, links, arrows, dots all comply

---

## Typography Fluid Scaling

Using `clamp()` for smooth scaling:

```css
/* Hero Heading */
clamp(1.8rem, 3.6vw, 3rem)

/* Hero Text */
clamp(0.95rem, 1.6vw, 1.1rem)

/* Service Hero Heading */
clamp(2rem, 4vw, 3.2rem)

/* Service Hero Text */
clamp(1rem, 1.8vw, 1.2rem)
```

---

## Image Heights by Breakpoint

### Service Cards
- **Extra Small**: 140px
- **Mobile**: 160-180px
- **Tablet/Desktop**: 200px
- **4K**: 300px

### Client Cards (Projects)
- **Extra Small**: 130px
- **Mobile**: 140-150px
- **Tablet**: 180px
- **Desktop**: 160px
- **4K**: 250px

### Gallery Items
- **Extra Small**: 160px
- **Mobile**: 180-200px
- **Tablet/Desktop**: 250px

---

## Quick Testing Commands

Test these resolutions in browser DevTools:

**Mobile**
- 320x568 (iPhone SE)
- 375x667 (iPhone 8)
- 390x844 (iPhone 12/13/14)
- 430x932 (iPhone 14 Pro Max)
- 360x640 (Android)

**Tablet**
- 768x1024 (iPad)
- 820x1180 (iPad Air)
- 1024x1366 (iPad Pro)

**Desktop**
- 1366x768 (Laptop)
- 1920x1080 (Full HD)
- 2560x1440 (2K)
- 3840x2160 (4K)

**Landscape**
- 667x375 (iPhone landscape)
- 1024x768 (iPad landscape)

---

## Browser DevTools Device Presets

Use these in Chrome/Edge DevTools:
- ✅ iPhone SE
- ✅ iPhone 12/13 Pro
- ✅ iPhone 14 Pro Max
- ✅ Pixel 5
- ✅ Samsung Galaxy S20/S21
- ✅ iPad
- ✅ iPad Pro
- ✅ Surface Pro 7
- ✅ Nest Hub
- ✅ Nest Hub Max

---

**Last Updated**: November 11, 2025
