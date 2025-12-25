import React from 'react';

const Register = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Grow Your Business with Us</h1>
        <p className="text-slate-500 mt-2">Join 500+ professionals earning more through Service on Call.</p>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-5xl">
        {/* Left Side: Benefits */}
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg font-bold text-xl">$</div>
                <div>
                    <h3 className="font-bold text-lg text-slate-800">0% Joining Fee</h3>
                    <p className="text-slate-500 text-sm mt-1">Start your journey without investment. Pay only a small commission on completed jobs.</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                <div className="bg-green-100 text-green-600 p-3 rounded-lg font-bold text-xl">Job</div>
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Guaranteed Jobs</h3>
                    <p className="text-slate-500 text-sm mt-1">Get consistent bookings in your local area. No more waiting.</p>
                </div>
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Register as a Professional</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm text-slate-600 mb-1">Full Name</label>
                    <input type="text" placeholder="Enter your name as per ID" className="w-full border border-slate-300 rounded-md p-3 focus:outline-blue-600" />
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                     <div className="col-span-1">
                        <label className="block text-sm text-slate-600 mb-1">Code</label>
                        <input type="text" value="+91" disabled className="w-full border border-slate-300 rounded-md p-3 bg-slate-50 text-center" />
                     </div>
                     <div className="col-span-3">
                        <label className="block text-sm text-slate-600 mb-1">Mobile Number</label>
                        <input type="text" placeholder="98765 43210" className="w-full border border-slate-300 rounded-md p-3 focus:outline-blue-600" />
                     </div>
                </div>

                <div>
                    <label className="block text-sm text-slate-600 mb-1">Select Your Profession</label>
                    <select className="w-full border border-slate-300 rounded-md p-3 focus:outline-blue-600">
                        <option>Select Category</option>
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Carpenter</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-slate-600 mb-1">Experience (Years)</label>
                        <input type="number" placeholder="e.g. 5" className="w-full border border-slate-300 rounded-md p-3 focus:outline-blue-600" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-600 mb-1">City</label>
                        <input type="text" placeholder="e.g. Panipat" className="w-full border border-slate-300 rounded-md p-3 focus:outline-blue-600" />
                    </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-md mt-4 hover:bg-blue-700 transition">
                    Submit Application
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;