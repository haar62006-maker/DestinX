# DestinX - Travel Reservation System

A professional travel website redesigned with W3.CSS framework, featuring a dark portfolio-style theme with sidebar navigation and clean card-based layouts.

## Features

- **W3.CSS Portfolio Design**: Complete redesign inspired by W3.CSS templates with dark theme
- **Sidebar Navigation**: Fixed sidebar on desktop, responsive top navbar on mobile
- **Multi-Section Homepage**: Hero section, about with services bars, pricing tables, testimonials, destinations photo grid, and contact form
- **Responsive Card Layouts**: W3.CSS grid system for destination cards and offers
- **Professional UI**: Clean black/white/grey color scheme with smooth hover effects
- **User Authentication**: Sign up/login forms with validation
- **Interactive Search**: Animated destination cards with W3.CSS styling- **Reservation Flow**: Booking, payment, confirmation, and cancellation
- **User Feedback**: Add reviews and suggestions directly from destination details
- **Admin Dashboard**: View reservations and user suggestions- **Responsive Design**: Mobile-first approach with W3.CSS responsive classes

## Technologies Used

- HTML5 with semantic markup
- W3.CSS framework for responsive design and components
- Font Awesome for navigation icons
- Google Fonts (Montserrat) for typography
- JavaScript (ES6) for interactive functionality
- Local Storage for data persistence

## Project Structure

```
DestinX/
├── index.html          # Portfolio homepage with sidebar navigation and sections
├── signup.html         # User registration form
├── login.html          # User authentication form
├── home.html           # Destination search with W3.CSS card grid
├── offer-details.html  # Offer details page
├── booking.html        # Booking form
├── payment.html        # Payment processing
├── confirmation.html   # Booking confirmation
├── css/
│   └── style.css       # W3.CSS framework integration with custom travel styles
├── js/
│   └── script.js       # JavaScript with W3.CSS class generation
└── images/             # Travel destination photos
```

## Design Features

- **Dark Portfolio Theme**: Black background with white/grey text and accents
- **Sidebar Navigation**: 120px fixed sidebar with icon-based navigation
- **W3.CSS Components**: Professional pricing tables, progress bars, testimonials
- **Responsive Grid**: W3.CSS row/column system for layouts
- **Clean Typography**: Montserrat font for modern, professional appearance
- **Interactive Elements**: Hover effects and smooth transitions
- **Clean White Cards**: Simple, elegant card designs with soft shadows
- **Purple Header**: Consistent purple gradient across navigation
- **Smooth Transitions**: Cubic-bezier animations for premium feel

## Animations Included

- **Page Transitions**: Fade in/out effects between pages
- **Button Interactions**: Hover effects with scale, shadow, and light sweep
- **Form Feedback**: Loading spinners, input focus animations
- **Card Animations**: Staggered loading, hover lift effects
- **Error Handling**: Shake animation for login errors
- **Loading States**: Spinners for form submissions
- **Floating Shapes**: Continuous rotation and movement
- **Micro-interactions**: Smooth transitions throughout

## Setup

## Setup

## Setup

1. Clone or download the repository
2. Add travel images to the `images/` folder (paris.jpg, tokyo.jpg, bali.jpg, nyc.jpg)
3. Open `index.html` in your browser or run a local server

## Local Testing

To test with animations enabled:

```bash
cd DestinX
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Usage

1. **Start**: Experience the animated logo bounce on the login page
2. **Sign Up/Login**: Watch loading animations during authentication
3. **Explore**: See staggered card animations on the home page
4. **Search**: Cards animate in with delays for smooth loading
5. **Book**: Experience page transitions and form animations
6. **Pay**: Dynamic field animations based on payment method
7. **Confirm**: Bounce animation celebrates successful booking

## Uploading to GitHub

1. Create a new repository on GitHub
2. Initialize git:
   ```
   git init
   git add .
   git commit -m "Add animated DestinX travel website"
   ```
3. Add remote and push:
   ```
   git remote add origin https://github.com/yourusername/destinx.git
   git push -u origin master
   ```
4. Your animated site will be live at `https://yourusername.github.io/destinx/`

## Browser Compatibility

- Modern browsers with CSS3 and ES6 support
- Optimized for Chrome, Firefox, Safari, and Edge
- Graceful degradation for older browsers

## Future Enhancements

- Add more destinations with real images
- Implement real backend for data persistence
- Add payment gateway integration
- Include user reviews and ratings
- Add booking calendar functionality