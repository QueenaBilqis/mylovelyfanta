import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, IceCream, Leaf, Droplets, Truck, Star, User, Phone, Plus } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 animate-fade-in">
      {/* Header */}
      <header className="fixed top-0 w-full max-w-md z-40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent dark:from-black/80 dark:to-transparent h-28 pointer-events-none"></div>
        <div className="px-6 pt-[54px] pb-2 flex items-center justify-between relative z-50">
          <div className="flex items-center gap-1.5">
            <div className="bg-primary rounded-full p-1">
                 <IceCream className="text-white" size={16} />
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-slate-900 dark:text-white">
              Fanta<span className="text-primary">Float</span>
            </span>
          </div>
          <button className="p-2.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-slate-700 dark:text-white hover:bg-white/50 transition-colors shadow-sm">
            <Search size={20} />
          </button>
        </div>
      </header>

      <main className="pt-4 px-4 space-y-8 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full rounded-[2.5rem] bg-gradient-to-br from-[#FF9A9E] via-[#FECFEF] to-[#FECFEF] dark:from-orange-900 dark:via-purple-900 dark:to-slate-900 shadow-glow overflow-hidden min-h-[580px] flex flex-col pt-28 pb-0">
            {/* Background Decorations */}
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-orange-400/30 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-pink-500/20 rounded-full blur-[60px]"></div>
            
            <div className="z-10 text-center px-6 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-4 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-white">New Recipe</span>
                </div>
                <h1 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-slate-900 dark:text-white drop-shadow-sm mb-4">
                    Fruity<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Fizzy</span><br/>
                    Creamy
                </h1>
                <p className="text-slate-700 dark:text-slate-200 font-medium text-sm max-w-[240px] mx-auto leading-relaxed opacity-90">
                    Premium vanilla bean ice cream meets sparkling orange soda.
                </p>
            </div>

            <div className="relative w-full flex-grow flex justify-center items-end mt-4 perspective-[1000px]">
                <div className="absolute bottom-20 text-[120px] font-display font-black text-white/20 dark:text-white/5 select-none z-0 transform translate-z-[-50px]">
                    YUM
                </div>
                <img 
                    alt="Refreshing Fanta Float Orange Drink" 
                    className="w-[85%] object-cover object-top relative z-10 transform translate-y-6 drop-shadow-2xl" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcr--0Fey0UWkiLf4Vvuv7HsMOpcqKLu9wAICHGTd8cd5bTVmLjkU1FNlQHCVYHCHHCdn_uyNgQpo9U1dlEijwwppEKZBAvWVRguw4Nz62nmNuqdDhTva-zzA-q-b2ClkZuUOTiBcfoYrhqB9_zmQfK3L7K0g7W_pCritP9h2DBAe3zyj7NIR5F45bu0hucg2f1a79lnlQoSXBTQDJI67ND8ocrb-aQl2haaa4FCTpTvWFt659lijP-R1PrkpXsQjEWwgIuf4bazDF" 
                    style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
                
                {/* Floating Elements */}
                <div className="absolute top-[20%] left-[10%] z-20 animate-[bounce_3s_infinite]">
                    <div className="glass-panel p-3 rounded-2xl shadow-lg transform -rotate-12">
                        <span className="text-2xl">🍊</span>
                    </div>
                </div>
                <div className="absolute top-[30%] right-[10%] z-20 animate-[bounce_4s_infinite] delay-700">
                    <div className="glass-panel p-3 rounded-2xl shadow-lg transform rotate-6">
                        <span className="text-2xl">🍦</span>
                    </div>
                </div>

                <div className="absolute bottom-8 z-30 w-full px-8">
                    <button 
                        onClick={() => navigate('/menu')}
                        className="w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-slate-900 dark:text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>Order Now</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section>
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Why It's Special</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {[
                    { title: "Premium Vanilla", sub: "Madagascar bean sourced", icon: IceCream, color: "orange" },
                    { title: "100% Natural", sub: "No artificial colors", icon: Leaf, color: "green" },
                    { title: "Double Fizz", sub: "Extra carbonation", icon: Droplets, color: "blue" },
                    { title: "Fast Delivery", sub: "Cold within 30 mins", icon: Truck, color: "purple" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-surface-dark p-5 rounded-[2rem] shadow-card hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-800 group cursor-default">
                        <div className={`w-10 h-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`text-${item.color}-600`} size={20} />
                        </div>
                        <h4 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-tight mb-1">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 font-medium leading-tight">{item.sub}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Curated Flavors Scroll */}
        <section>
            <div className="flex items-end justify-between px-2 mb-4">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Curated Flavors</h3>
                <button onClick={() => navigate('/menu')} className="text-xs font-bold text-primary flex items-center gap-1">
                    View All <ArrowRight size={14} />
                </button>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 px-2 -mx-2 no-scrollbar snap-x snap-mandatory">
                {[
                    { name: "Zesty Lime", price: "5.50", tag: "Best Seller", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ee5qBYRepm0582lRunTs-gISe0DjTU0UFcJs7zwkxugYVGzlFqVQFUFhwV2lasliq9oFSFHlIg_M-BdoHZCrHuwGrWfjHx8mhF7myX6-ZV_l_JzsvbI2GvDhXALZF0oOEczNw2R7G4o5GQZSsVzMn80Qkk_ubj0Dz3QiyfVBcO5AhSzexqPnHnXnA7OKiIw_VKBV0wVsuN7F9dx6tslvpd10z9st65f7dsNU9XNFyD8BzP9F73yhaYi8SQqHxxFfkdwi8-24UEBu", color: "green" },
                    { name: "Berry Swirl", price: "6.00", tag: "Sweet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUjegP2DbjrxYErchNXCq-YckXJoLNRudymVaJMP11hLT8YYPgSS-UhSyyqbhvUoFZyczbm-yGEUq7dX4Hj4RenBu5hpvKKce7NXtYnNbg_B5SKApI5lJ_Tam2bm4u2HagWuDk-LadY9L6wvO-Y1O8RMwGPdo6kBS6vTJMqBW_dS_lWaEQiGFOCKFDV0J_g0xYsEC4mbJ8zTJLOvurhvBn1zYysq7duie55HpiyTNeYBWrFRxKu9pHpY-qLcpX0RXSrpB8KdhCbQql", color: "pink" },
                    { name: "Orange Classic", price: "5.00", tag: "Classic", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXsQ2JclV2GgpkgaSMKAyypNzWtE81IL8CsZqIFPKro1YAWv-vkImAZ_e-DPP0P-ol3K9pOTfCmzL_8yLLvWvp9UmOYXhlWyOfXcfhFcPvEOorG_pd81XKeoDYLHylIQ6h3cXMQqjPpXoLLqIC4XoGgtIdebUMsMhbm0olkdDPd-P6jIsOn9P5LiMNy9K-fvGouieI0qQXkh698Y9GQs8KTZ8ZxcwL3C97_0FIqeH1njzvETlwTaEXQ1yKvBbiFTa9AVUlDUWlGZTL", color: "orange" }
                ].map((item, idx) => (
                    <div key={idx} className="snap-center shrink-0 w-[260px] bg-white dark:bg-surface-dark rounded-[2rem] p-5 shadow-card flex flex-col items-center relative group border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className={`absolute top-0 w-full h-1/2 bg-gradient-to-b from-${item.color}-50 to-transparent dark:from-${item.color}-900/10`}></div>
                        <div className="relative z-10 w-full flex justify-between items-start mb-2">
                            <span className="bg-white/80 dark:bg-black/50 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide">{item.tag}</span>
                            <button className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
                                <Star size={16} />
                            </button>
                        </div>
                        <div className="h-44 w-full flex items-center justify-center relative z-10 my-2">
                            <img alt={item.name} className="h-full object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500 ease-out" src={item.img} />
                        </div>
                        <div className="w-full z-10 mt-auto">
                            <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">{item.name}</h4>
                            <div className="flex items-center justify-between mt-3">
                                <span className="font-bold text-lg text-slate-700 dark:text-slate-200">${item.price}</span>
                                <button 
                                  onClick={() => navigate('/menu')}
                                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Happy Sippers */}
        <section className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-[2.5rem] opacity-10"></div>
             <div className="relative p-6 rounded-[2.5rem] overflow-hidden">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 px-2">Happy Sippers</h3>
                <div className="space-y-4">
                    <div className="glass-panel p-4 rounded-2xl flex gap-4 items-start border-none bg-white/60 dark:bg-zinc-800/60">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold">JD</div>
                        <div>
                            <div className="flex text-yellow-400 mb-1 gap-0.5">
                                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-2">"The combination of the orange fizz and the creamy vanilla is just purely magical. Best float ever."</p>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Jane Doe</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* Join Club */}
        <section className="relative rounded-[2.5rem] bg-slate-900 dark:bg-zinc-800 p-8 text-white overflow-hidden shadow-2xl mb-8">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
            <img alt="Strawberry" className="absolute top-[-30px] left-[-30px] w-32 h-32 object-cover rounded-full border-4 border-white/10 rotate-12 drop-shadow-2xl blur-[1px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmIKvnpYLV9uSzMN_lEbELhazNUjwMCxodTOayK5zNshumzhIfEEph2hX6KfnaD6w6X9e2bWkNanEZbGce0mu47HbvNonIElsoEeRfGv5XhMeBs9qd6ajRV7mRRYDfH5reVeXn3r39Y6AS4IpQk1cFppY_Nvk2ZzeutEdsTlS1Q0kaiUWEDcwRScDlRVFx-7q1lnSwvwv0HOtxKGBjNBetBo3w9ONfCjk32CYn0g5vd1k7oKs8nf4iaZx03RQktN2Z69imr7li7wOz" />
            
            <div className="relative z-10 mt-8">
                <h3 className="font-display font-bold text-3xl mb-2">Join the Club</h3>
                <p className="text-slate-400 text-sm mb-8">Get exclusive flavors dropped directly to your door.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><User size={20}/></span>
                        <input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 placeholder-slate-500 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" type="text"/>
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Phone size={20}/></span>
                        <input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 placeholder-slate-500 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Phone Number" type="tel"/>
                    </div>
                    <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-orange-600 text-white font-bold text-lg shadow-glow hover:shadow-lg transition-all mt-4 flex justify-center items-center gap-2">
                        <span>Sign Up</span>
                        <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Home;