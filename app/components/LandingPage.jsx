
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug">
            <span className="mr-2">Your One-Stop</span>
            <span className="text-pink-600">
              <Typewriter
                words={["Shopping", "Saving", "Style Spot","Shopping", "Deals", "Gadgets", "Trendy Fashion", "Electronics"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-700 font-light max-w-md">
            Discover amazing styles, exclusive offers, and top brands that redefine your shopping journey.
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("ProductsPage")}
            className="mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md">
            Start Shopping
          </motion.button> */}
          <a
         href="#products"
         className="mt-4 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
         >
        Start Shopping
        </a>


        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="image2.jpg" // Replace with your actual image path
            alt="Shopping Banner"
            className="w-full max-w-md h-[340px] sm:h-[440px] object-cover rounded-xl shadow-xl border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
