import { motion } from 'framer-motion';
import { ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 bg-gray-200">
        <img
          src={product.images?.[0] || 'https://via.placeholder.com/300'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.stock < 5 && product.stock > 0 && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-xs">
            Low Stock
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
            Out of Stock
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-primary-600 font-bold">${product.price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{product.brand} - {product.size}</p>
        <p className="text-gray-500 text-xs mb-4">{product.description?.substring(0, 60)}...</p>
        
        <div className="flex gap-2">
          <Link
            to={`/product/${product._id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition"
          >
            <EyeIcon className="h-4 w-4" />
            View
          </Link>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 bg-primary-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}