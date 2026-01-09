import React from 'react';
import { Settings, CreditCard, MapPin, LogOut, ChevronRight, Gift, Bell, Shield, Clock } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="pb-24 animate-fade-in bg-background-light dark:bg-background-dark min-h-screen">
       <div className="relative">
           {/* Background Pattern */}
           <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5 -z-10 rounded-b-[3rem]"></div>
           
           {/* Header */}
           <header className="px-6 pt-12 pb-6 flex justify-between items-start">
               <h1 className="font-display text-3xl font-bold text-gray-900 dark:text-white">My Profile</h1>
               <button className="p-2 bg-white dark:bg-surface-dark rounded-full shadow-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                   <Settings size={20} />
               </button>
           </header>

           <div className="px-6">
               {/* User Card */}
               <div className="flex items-center gap-4 mb-8">
                   <div className="relative">
                       <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-20 h-20 rounded-full border-4 border-white dark:border-surface-dark shadow-lg object-cover" />
                       <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
                   </div>
                   <div>
                       <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">Alex Johnson</h2>
                       <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">alex.j@example.com</p>
                       <span className="inline-block px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wider rounded-md">Gold Member</span>
                   </div>
               </div>

               {/* Loyalty Card */}
               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-pink-600 p-6 text-white shadow-lg shadow-orange-500/30 mb-8 transform transition-transform hover:scale-[1.02]">
                   <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
                   <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-2xl"></div>
                   
                   <div className="relative z-10 flex justify-between items-start mb-8">
                       <div>
                           <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Fanta Club Balance</p>
                           <h3 className="font-display text-4xl font-bold">2,450 <span className="text-lg font-normal opacity-80">pts</span></h3>
                       </div>
                       <Gift className="text-white/80" size={28} />
                   </div>
                   
                   <div className="relative z-10">
                       <div className="w-full bg-black/20 rounded-full h-1.5 mb-2 overflow-hidden">
                           <div className="bg-white h-full rounded-full w-[70%]"></div>
                       </div>
                       <p className="text-xs text-white/90 font-medium">550 pts until free Large Float!</p>
                   </div>
               </div>

               {/* Recent Activity */}
               <div className="mb-8">
                   <div className="flex items-center justify-between mb-4">
                       <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Recent Orders</h3>
                       <button className="text-primary text-xs font-bold">See All</button>
                   </div>
                   <div className="space-y-3">
                       {[
                           { item: "Strawberry Dream Float", date: "Today, 2:30 PM", price: "$5.99", status: "Delivered" },
                           { item: "Orange Sunset (Large)", date: "Yesterday", price: "$6.50", status: "Delivered" }
                       ].map((order, i) => (
                           <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                               <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                       <Clock size={18} />
                                   </div>
                                   <div>
                                       <h4 className="font-bold text-sm text-gray-800 dark:text-white">{order.item}</h4>
                                       <p className="text-xs text-gray-400">{order.date}</p>
                                   </div>
                               </div>
                               <div className="text-right">
                                   <span className="block font-bold text-gray-800 dark:text-white text-sm">{order.price}</span>
                                   <span className="text-[10px] text-green-500 font-bold uppercase">{order.status}</span>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>

               {/* Settings Menu */}
               <div>
                   <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">Account</h3>
                   <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                       {[
                           { icon: CreditCard, label: "Payment Methods", badge: "2" },
                           { icon: MapPin, label: "Address Book", badge: "" },
                           { icon: Bell, label: "Notifications", badge: "New" },
                           { icon: Shield, label: "Privacy & Security", badge: "" },
                       ].map((item, i) => (
                           <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0 group">
                               <div className="flex items-center gap-3">
                                   <div className="text-gray-400 group-hover:text-primary transition-colors">
                                       <item.icon size={20} />
                                   </div>
                                   <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">{item.label}</span>
                               </div>
                               <div className="flex items-center gap-2">
                                   {item.badge && (
                                       <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge === 'New' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                                           {item.badge}
                                       </span>
                                   )}
                                   <ChevronRight size={16} className="text-gray-300" />
                               </div>
                           </button>
                       ))}
                       <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group">
                           <LogOut size={20} className="text-red-400 group-hover:text-red-500" />
                           <span className="font-medium text-red-500 text-sm">Log Out</span>
                       </button>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};

export default Profile;