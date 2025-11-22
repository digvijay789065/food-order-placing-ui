# Foodie 🍕

A clean and responsive food-ordering UI built with React 19 and Tailwind CSS. Browse through a curated menu, add items to your cart, and explore exciting coupon offers!

## Features

✨ **Menu Display** - Browse through a variety of food items with descriptions and prices  
🛒 **Shopping Cart** - Add/remove items with real-time quantity and price tracking  
⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds  

## Tech Stack

- **Frontend:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+) with JSX
- **Linting:** ESLint
- **Runtime:** Node.js with ES modules

## Project Structure

```
foodie/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar with search
│   │   ├── PageContent.jsx     # Main layout container
│   │   ├── LeftContent.jsx     # Menu display section
│   │   ├── RightContent.jsx    # Coupon section
│   │   ├── Cards.jsx           # Individual food item card
│   │   ├── CouponCard.jsx      # Individual coupon card
│   │   └── Bottom.jsx          # Cart summary and order button
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── package.json
└── vite.config.js
```

## Component Overview

### Navbar
- Displays the application logo "Foodie"
- Contains a search bar for finding restaurants and items
- Shows the tagline "Taste the Tastiest Food"

### PageContent
- Two-column layout container
- Left: Menu items
- Right: Coupon offers

### LeftContent
- Displays menu items using the Cards component
- Manages total items count and total price
- Handles add/remove callbacks from child components

### RightContent
- Shows available discount coupons
- Maps through discount data to display CouponCard components

### Cards
- Individual food item card component
- Displays item image, name, description, and price
- Increment/decrement quantity buttons
- Notifies parent about price changes

### CouponCard
- Displays coupon information (title, details)
- Apply button for coupon redemption

### Bottom
- Fixed order summary bar
- Shows total items and total price
- "View Detailed Bill" link
- "Place Order" button for checkout

## Usage

1. **Browse Menu** - View the curated selection of food items on the left side
2. **Add Items** - Click the `+` button on any food card to add it to your cart
3. **Adjust Quantity** - Use `+` and `-` buttons to change item quantities
4. **View Cart** - Check the bottom bar for real-time item count and total price
5. **Apply Coupons** - Browse available discounts on the right panel
6. **Place Order** - Click "Place Order" to proceed with checkout

## Key Concepts

- **React Hooks** - State management using `useState`
- **Component Composition** - Modular, reusable components
- **Props & Callbacks** - Parent-child communication
- **Array Mapping** - Dynamic rendering of food and coupon lists
- **Tailwind CSS** - Utility-first styling approach

**Enjoy your food! 🍽️**
=======
    # Foodie 🍕

    A modern food ordering web application built with React and Vite. Browse through a curated menu, add items to your cart, and explore exciting coupon offers!

    ## Features

    ✨ **Menu Display** - Browse through a variety of food items with descriptions and prices  
    🛒 **Shopping Cart** - Add/remove items with real-time quantity and price tracking  
    🎟️ **Coupon System** - Apply discount codes from various payment platforms (PhonPe, Paytm, Amazon Pay)  
    🔍 **Search** - Search across 50+ restaurants and 650+ food items  
    📱 **Responsive Design** - Clean, intuitive UI optimized for all devices  
    ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds  

    ## Tech Stack

    - **Frontend:** React 19.1.1
    - **Build Tool:** Vite 7.1.7
    - **Styling:** Tailwind CSS
    - **Language:** JavaScript (ES6+) with JSX
    - **Linting:** ESLint
    - **Runtime:** Node.js with ES modules

    ## Project Structure

    ```
    foodie/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx          # Top navigation bar with search
    │   │   ├── PageContent.jsx     # Main layout container
    │   │   ├── LeftContent.jsx     # Menu display section
    │   │   ├── RightContent.jsx    # Coupon section
    │   │   ├── Cards.jsx           # Individual food item card
    │   │   ├── CouponCard.jsx      # Individual coupon card
    │   │   └── Bottom.jsx          # Cart summary and order button
    │   ├── App.jsx                 # Root component
    │   ├── main.jsx                # Entry point
    │   └── index.css               # Global styles
    ├── package.json
    └── vite.config.js
    ```

    ## Getting Started

    ### Prerequisites

    - Node.js (v16 or higher)
    - npm or yarn

    ### Installation

    1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd foodie
    ```

    2. Install dependencies:
    ```bash
    npm install
    ```

    ### Development

    Start the development server:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

    ### Build

    Build for production:
    ```bash
    npm run build
    ```

    ### Preview

    Preview the production build locally:
    ```bash
    npm run preview
    ```

    ### Lint

    Run ESLint to check code quality:
    ```bash
    npm run lint
    ```

    ## Component Overview

    ### Navbar
    - Displays the application logo "Foodie"
    - Contains a search bar for finding restaurants and items
    - Shows the tagline "Taste the Tastiest Food"

    ### PageContent
    - Two-column layout container
    - Left: Menu items
    - Right: Coupon offers

    ### LeftContent
    - Displays menu items using the Cards component
    - Manages total items count and total price
    - Handles add/remove callbacks from child components

    ### RightContent
    - Shows available discount coupons
    - Maps through discount data to display CouponCard components

    ### Cards
    - Individual food item card component
    - Displays item image, name, description, and price
    - Increment/decrement quantity buttons
    - Notifies parent about price changes

    ### CouponCard
    - Displays coupon information (title, details)
    - Apply button for coupon redemption

    ### Bottom
    - Fixed order summary bar
    - Shows total items and total price
    - "View Detailed Bill" link
    - "Place Order" button for checkout

    ## Usage

    1. **Browse Menu** - View the curated selection of food items on the left side
    2. **Add Items** - Click the `+` button on any food card to add it to your cart
    3. **Adjust Quantity** - Use `+` and `-` buttons to change item quantities
    4. **View Cart** - Check the bottom bar for real-time item count and total price
    5. **Apply Coupons** - Browse available discounts on the right panel
    6. **Place Order** - Click "Place Order" to proceed with checkout

    ## Available Scripts

    | Script | Purpose |
    |--------|----------|
    | `npm run dev` | Start development server with hot module reloading |
    | `npm run build` | Build optimized production bundle |
    | `npm run lint` | Run ESLint to check code quality |
    | `npm run preview` | Preview production build locally |

    ## Key Concepts

    - **React Hooks** - State management using `useState`
    - **Component Composition** - Modular, reusable components
    - **Props & Callbacks** - Parent-child communication
    - **Array Mapping** - Dynamic rendering of food and coupon lists
    - **Tailwind CSS** - Utility-first styling approach

    ## Future Enhancements

    - 🔐 User authentication and profiles
    - 💳 Payment gateway integration
    - 📦 Order tracking and history
    - ⭐ Restaurant and item ratings/reviews
    - 🗺️ Location-based filtering
    - 📱 Mobile app version
    - 🌙 Dark mode support

    ## License

    This project is open source and available under the MIT License.

    ## Author

    Created as a mini project to demonstrate modern React and web development practices.

    ---

    **Enjoy your food! 🍽️**
>>>>>>> b310ad4 (Updated UI components and README)
