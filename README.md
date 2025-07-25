🛍️ Mini Store Frontend (React)
This is a React-based frontend for a mini e-commerce application. It connects to a Node.js + Express + Prisma backend and provides full CRUD operations for managing products.

🚀 Features
📦 View all products in a responsive grid

➕ Add a new product

📝 Edit existing products

❌ Delete products

🖼️ Image preview if image_url is provided

🧩 Clean component-based structure using:

ProductCard for displaying product cards

ProductForm for add/edit forms

🎨 Simple CSS styling (custom, no framework)

📂 Folder Structure
bash
Copier le code
src/
├── components/
│   ├── ProductCard.jsx       # UI for displaying one product
│   ├── ProductCard.css       # Styles for ProductCard
│   ├── ProductForm.jsx       # Reusable form (Add/Edit)
│   └── ProductForm.css       # Styles for ProductForm
│
├── pages/
│   ├── Home.jsx              # Main page – lists all products
│   └── AddProduct.jsx        # Page for creating or editing
│
├── App.jsx                   # Main app router and layout
├── main.jsx                  # React root
└── App.css / Home.css        # Global and layout styles
