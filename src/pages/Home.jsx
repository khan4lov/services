import React from 'react';
import { Search, ShieldCheck, Star, Clock, Zap, Droplet, PaintBucket, Scissors, Bug, Hammer, Truck } from 'lucide-react';

const Home = () => {
  // Mock Data for UI (We will replace this with Supabase fetch later)
  const services = [
    { name: 'AC & Appliance Repair', icon: <Zap size={24}/> },
    { name: 'Home Cleaning', icon: <Star size={24}/>, active: true }, // Blue border example
    { name: 'Plumbing', icon: <Droplet size={24}/> },
    { name: 'Electrician', icon: <Zap size={24}/> },
    { name: 'Painting & Renovation', icon: <PaintBucket size={24}/> },
    { name: 'Men\'s Salon & Massage', icon: <Scissors size={24}/> },
    { name: 'Pest Control', icon: <Bug size={24}/> },
    { name: 'Carpentry', icon: <Hammer size={24}/> },
    { name: 'Car Rental & Taxi', icon: <Truck size={24}/> },
  ];

  const experts = [
    { name: 'Vikram Singh', role: 'Electrician', rating: 4.9, jobs: 1240, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop' },
    { name: 'Aslam Welder', role: 'Welding', rating: 4.8, jobs: 540, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' },
    { name: 'Deepak Interior', role: 'Ceiling', rating: 4.9, jobs: 320, img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop' },
    { name: 'Anita Sharma', role: 'Home Cleaning', rating: 4.8, jobs: 850, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Services at Your Doorstep</h1>
        <p className="text-slate-300 mb-8 text-lg">Verified professionals for cleaning, repairs, painting & more. Trusted by thousands.</p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex items-center">
            <Search className="text-slate-400 ml-3" />
            <input 
                type="text" 
                placeholder="What are you looking for? (e.g., 'AC is not cooling')"
                className="w-full p-3 text-slate-800 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium">
                Search
            </button>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-sm text-green-400">
            <span className="flex items-center gap-1"><ShieldCheck size={16}/> Verified Experts</span>
            <span className="flex items-center gap-1"><Star size={16}/> 4.8+ Rated</span>
        </div>
      </div>

      {/* All Services Grid */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">All Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center justify-center gap-4 border ${service.active ? 'border-blue-500' : 'border-transparent'}`}>
                    <div className={`p-4 rounded-full ${service.active ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-blue-500'}`}>
                        {service.icon}
                    </div>
                    <span className={`font-medium ${service.active ? 'text-blue-600' : 'text-slate-700'}`}>{service.name}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-y border-slate-100">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { num: '15k+', label: 'Happy Customers' },
                { num: '500+', label: 'Service Partners' },
                { num: '25+', label: 'Cities Covered' },
                { num: '4.8', label: 'Average Rating' },
            ].map((stat, idx) => (
                <div key={idx}>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.num}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* Meet Experts Section */}
      <div className="container mx-auto py-16 px-4">
         <h2 className="text-2xl font-bold text-slate-800 mb-2">Meet Our Experts</h2>
         <p className="text-slate-500 mb-8">Top rated professionals ready to help</p>
         
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {experts.map((expert, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                        <img src={expert.img} alt={expert.name} className="w-full h-full object-cover rounded-full border-2 border-white shadow-md" />
                        <div className="absolute bottom-0 right-0 bg-green-100 text-green-700 p-1 rounded-full border border-white">
                            <ShieldCheck size={12} />
                        </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">{expert.name}</h3>
                    <div className="flex justify-center items-center gap-2 text-sm text-slate-500 my-2">
                        <span className="flex items-center text-yellow-500 font-bold"><Star size={12} fill="currentColor"/> {expert.rating}</span>
                        <span>• {expert.jobs} Jobs</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">Expert in residential wiring and appliance repair.</p>
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium uppercase">{expert.role}</span>
                </div>
            ))}
         </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 bg-slate-100 h-64 rounded-xl flex items-center justify-center text-slate-400">
                {/* Placeholder for Mission Image */}
                Image Placeholder
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 mb-6">
                    We started with a simple thought: <strong>Why should premium home services be limited to big metros?</strong>
                    <br/><br/>
                    "Service on Call" organizes this fragmented market by verifying local experts and providing them with a technology platform.
                </p>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg flex gap-4">
                        <div className="bg-blue-100 p-2 rounded-full h-fit text-blue-600"><ShieldCheck size={20}/></div>
                        <div>
                            <h4 className="font-bold text-slate-800">100% Verified Partners</h4>
                            <p className="text-sm text-slate-500">Strict background checks for every professional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;