

// "use client";

// import { useState } from "react";
// import { Menu, X, Search } from "lucide-react";

// export default function Navbar({ onSearch }) {
//   const [search, setSearch] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     onSearch(value);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-blue-600 text-white shadow">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="text-xl font-bold whitespace-nowrap">🛍️ MyShop</div>

//         {/* Center: Search Bar */}
//         <div className="flex-1 flex justify-center px-4">
//           <div className="flex items-center bg-white rounded w-full max-w-lg overflow-hidden">
//             <input
//               type="text"
//               value={search}
//               onChange={handleChange}
//               placeholder="Search for products..."
//               className="w-full px-4 py-2 text-black outline-none"
//             />
//             <button className="bg-blue-500 px-3 py-2 text-white">
//               <Search size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Right: Links or Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Desktop Links */}
//         <nav className="hidden md:flex space-x-4 text-sm font-medium">
//           <a href="/" className="hover:underline">Home</a>
//           <a href="/reviews" className="hover:underline">Reviews</a>
//           <a href="/cart" className="hover:underline">Cart</a>
//           <a href="/orders" className="hover:underline">Orders</a>
//         </nav>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2 text-sm bg-blue-700">
//           <a href="/" className="block text-white hover:underline">Home</a>
//           <a href="/reviews" className="block text-white hover:underline">Reviews</a>
//           <a href="/cart" className="block text-white hover:underline">Cart</a>
//           <a href="/orders" className="block text-white hover:underline">Orders</a>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Home,
  MessageCircle,
  ShoppingCart,
  PackageCheck,
} from "lucide-react";

export default function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-pink-500 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl font-bold whitespace-nowrap">🛍️ MyShop</div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <div className="flex items-center bg-white rounded w-full max-w-lg overflow-hidden">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search for products..."
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-pink-500 px-3 py-2 text-white">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Right: Toggle for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <a href="/" className="flex items-center gap-1 hover:underline">
            <Home size={18} /> Home
          </a>
          <a href="/reviews" className="flex items-center gap-1 hover:underline">
            <MessageCircle size={18} /> Reviews
          </a>
          <a href="/cart" className="flex items-center gap-1 hover:underline">
            <ShoppingCart size={18} /> Cart
          </a>
          <a href="/orders" className="flex items-center gap-1 hover:underline">
            <PackageCheck size={18} /> Orders
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm bg-blue-700">
          <a href="/" className="flex items-center gap-2 text-white">
            <Home size={18} /> Home
          </a>
          <a href="/reviews" className="flex items-center gap-2 text-white">
            <MessageCircle size={18} /> Reviews
          </a>
          <a href="/cart" className="flex items-center gap-2 text-white">
            <ShoppingCart size={18} /> Cart
          </a>
          <a href="/orders" className="flex items-center gap-2 text-white">
            <PackageCheck size={18} /> Orders
          </a>
        </div>
      )}
    </header>
  );
}
