

"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const snap = await getDocs(collection(db, "products"));
      const allProducts = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  // FILTER
  let filteredProducts = showInStockOnly
    ? products.filter((p) => p.quantity > 0)
    : [...products];

  // SORT
  if (sortOption === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "nameAZ") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "nameZA") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div id="products" className="bg-white min-h-screen py-[20px] sm:mt-0 mt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-3xl font-extrabold text-center mb-6 text-gray-900">
          Explore Our Products
        </h1>

        {/* Filter & Sort Controls */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 mr-2"
              checked={showInStockOnly}
              onChange={() => setShowInStockOnly(!showInStockOnly)}
            />
            <span className="text-sm text-gray-700">Show In-Stock Only</span>
          </label>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-200 flex flex-col"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-contain p-2 rounded-t-lg bg-gray-50"
              />
              <div className="p-3 flex flex-col flex-grow">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h2>
                <p className="text-gray-700 text-sm mt-1">₹{product.price}</p>
                <p className={`mt-1 text-xs ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
                  {product.quantity > 0
                    ? `In Stock: ${product.quantity}`
                    : "Out of Stock"}
                </p>

                {/* Buttons */}
                <div className="mt-auto pt-3 flex flex-col sm:flex-row gap-2">
                  <button
                    disabled={product.quantity === 0}
                    className={`w-full px-3 py-1.5 text-sm text-white rounded 
                      ${product.quantity > 0 ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-400 cursor-not-allowed"}`}
                  >
                    Add to Cart
                  </button>
                  <Link href={`/buy-now?id=${product.id}`} className="w-1/2"></Link>
                  <button
                     disabled={product.quantity === 0}
                    className={`w-full px-3 py-1.5 text-sm text-white rounded 
                      ${product.quantity > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
