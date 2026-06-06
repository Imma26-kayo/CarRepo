import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-primary-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              Rim & Tyre Pro
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-white hover:text-blue-200 px-3 py-2">
                Home
              </Link>
              <Link to="/admin" className="text-white hover:text-blue-200 px-3 py-2">
                Admin
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer hover:text-blue-200" />
            <UserIcon className="h-6 w-6 text-white cursor-pointer hover:text-blue-200" />
          </div>
        </div>
      </div>
    </nav>
  );
}