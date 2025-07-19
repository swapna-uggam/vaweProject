"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function BuyNow() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-3xl w-full rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg border"
        />
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-700">₹{product.price}</p>
          <p className="text-sm text-gray-600">In Stock: {product.quantity}</p>

          <button className="mt-4 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
