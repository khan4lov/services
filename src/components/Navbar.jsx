import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, User, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar for Admin/Login */}
      <div className="bg-white px-4 py-3 flex justify-between items-center container mx-auto">
        <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Phone size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900">Service on Call</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/register" className="hover:text-blue-600">Register as Professional</Link>
            
            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-200 transition">
                <User size={16} />
                Admin
            </button>
            <button className="text-slate-400 hover:text-slate-600">
                <LogOut size={20} />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;