# EZPAYSHOP 🛒📱

EZPAYSHOP is a cutting-edge mobile application for **cashier-less unmanned retail stores**, enabling customers to shop seamlessly using biometric entry, smart product scanning, and secure mobile payments. This project blends full-stack development with real-world retail automation.

## 🚀 Features

- 🔐 **Biometric Entry System**: Authenticate users via fingerprint or face recognition.
- 🛍️ **Product Scanning**: Scan QR codes using camera to add/remove items to/from cart.
- 📦 **Live Inventory Management**: Real-time stock updates and price management.
- 💸 **Secure Checkout**: Instant mobile-based checkout without queues or cashiers.
- 🗺️ **Store Navigation**: Interactive map to locate items in-store (planned).
- 🧾 **Receipt Generation**: Digital receipt generation with scan history and timestamps.

## 🛠️ Tech Stack

### Frontend (React Native)
- Expo(SDK 52), React Navigation 
- React Native Camera for scanning
- AsyncStorage for local caching

### Backend (Node.js + Express)
- RESTful APIs for authentication, inventory, order & scan management
- MongoDB for data persistence
- Biometric for secure authentication

### Additional Tools
- Biometric API (Android/iOS)
- QR Code Generation & Scanner


## 📂 Folder Structure

EZPAYSHOP/
├── .expo/
├── app/
│ ├── (tabs)/
│ │ ├── _layout.tsx
│ │ ├── Add_product.jsx
│ │ ├── chatbot.tsx
│ │ ├── RecipeScreen.jsx
│ │ ├── Suggestions.jsx
│ │ └── welcome.jsx
│ ├── (tabs1)/
│ │ ├── _layout.tsx
│ │ ├── AdminDashb.jsx
│ │ └── AdminUpdateScreen.jsx
│ └── components/
├── src/
│ ├── login1.png
│ ├── products.json
│ ├── _layout.tsx
│ ├── +not-found.tsx
│ ├── adminLoginScreen.jsx
│ ├── index.tsx
│ ├── login.tsx
│ ├── Payment.jsx
│ ├── ProductCard.jsx
│ └── Or.jsx
├── assets/
├── backend/
│ ├── models/
│ │ ├── Ingredient.js
│ │ └── Product.js
│ ├── routes/
│ │ ├── ingredients.js
│ │ ├── products.js
│ │ ├── recipy.js
│ │ └── seed.js
│ └── server.js
├── components/
├── constants/
├── hooks/
├── node_modules/
├── scripts/
├── server/
│ ├── admin.js
│ ├── cart.js
│ ├── product.js
│ └── server.js
├── .gitignore
├── app.json
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Abirpaul007/EZPAYSHOP.git
   cd EZPAYSHOP
   
2. **Install server dependencies**
   ```bash
   npm install
   npx expo start  
3. **Configure environment variables**
   ```bash
   MONGODB_URI=your_mongo_connection_string
**Future Enhancements**
--AI-powered product recommendation
--Offline QR scan caching
--Admin dashboard with analytics
--ML-based crowd prediction for slot booking
