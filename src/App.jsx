import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        {/* Simple Footer based on image */}
        <footer className="bg-slate-900 text-slate-400 py-10 mt-auto">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
                        Service on Call
                    </h3>
                    <p className="text-sm">Your trusted partner for all home services.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">For Partners</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Register as Professional</li>
                        <li>Partner Support</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Contact</h4>
                    <p className="text-sm">Kotma, Madhya Pradesh</p>
                    <p className="text-sm">+91 98765 43210</p>
                </div>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;