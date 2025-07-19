export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm pt-10 pb-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Help</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Payments</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Cancellation</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Consumer Policy</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} MyShop. All rights reserved. | Designed with ❤️
      </div>
    </footer>
  );
}
