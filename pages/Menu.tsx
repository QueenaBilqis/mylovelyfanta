import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, Snowflake, Sparkles, ChevronRight, Plus, Facebook, Mail } from 'lucide-react';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
      navigate('/checkout');
  }

  return (
    <div className="pb-24 animate-fade-in">
        <nav className="fixed top-0 w-full max-w-md z-50 bg-white/80 dark:bg-black/50 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all">
            <div className="px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <span className="font-display font-bold text-2xl text-primary tracking-wide">Fanta<span className="text-secondary">Floats</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <ShoppingBag size={24} />
                    </button>
                    <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <MenuIcon size={24} />
                    </button>
                </div>
            </div>
        </nav>

        <main className="pt-24">
            {/* Hero */}
            <section className="px-4 mb-12">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#FF9A3D] to-[#FF4E50] dark:from-[#D84315] dark:to-[#B71C1C] rounded-3xl p-6 h-[420px] shadow-soft flex flex-col justify-between">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-white/90 text-sm font-semibold mb-2">
                            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">New Arrival</span>
                            <span>Limited Edition</span>
                        </div>
                        <h1 className="font-display text-5xl text-white font-extrabold leading-tight drop-shadow-sm">
                            Fizz & <br/> Cream
                        </h1>
                        <p className="text-white/90 mt-2 text-lg font-medium max-w-[200px]">The perfect blend of sparkling soda and soft serve.</p>
                    </div>

                    <div className="absolute right-[-40px] bottom-[-40px] w-80 h-auto z-0 transform rotate-[-10deg]">
                        <img alt="Orange Float Hero" className="object-cover w-full h-full drop-shadow-2xl rounded-2xl opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABEukRGQrxRs8kVHNlaz6vxedlXNQtEiEdlqWa0N_c3AjQV0ASIXf2uXvJKajHV8EJ8bHeqk10A75wTnbMVug6GJc5H459wxWAKhSsnZiJ4rYYQZPMj1qI6WAevtiN2Hrwbhcos5JZsg5nXvvtuRKiwpjLJkjPZhIyw9lFJMASQQJP7qb1pKIK9yR-SJfCo1smdIQruWvvSU-og9eJEbYUB4B99cTpod_4kFc-5bfePWFd4yE8zpL2qZjuPU_po-PzG_m4u509BJoa" style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }} />
                    </div>

                    <div className="relative z-10 mt-auto">
                        <button onClick={handleAdd} className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all transform flex items-center gap-2">
                            Order Now <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Special */}
            <section className="px-6 mb-12">
                <h2 className="font-display text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why It's Special</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl flex flex-col items-start gap-3">
                        <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full text-blue-600 dark:text-blue-300">
                            <Snowflake size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Soft Serve</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Creamy vanilla base</p>
                        </div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-2xl flex flex-col items-start gap-3">
                        <div className="bg-orange-100 dark:bg-orange-800 p-2 rounded-full text-orange-600 dark:text-orange-300">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Real Fizz</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Maximum carbonation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assortment */}
            <section className="px-4 mb-8">
                <div className="flex justify-between items-end mb-6 px-2">
                    <div>
                        <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Flavor <br/>Assortment</h2>
                    </div>
                    <button className="text-primary font-semibold text-sm flex items-center">
                        See All <ChevronRight size={16} />
                    </button>
                </div>

                <div className="flex gap-3 mb-8 px-2 overflow-x-auto no-scrollbar pb-2">
                    <button className="flex-shrink-0 px-6 py-2 rounded-full bg-primary text-white shadow-lg shadow-orange-200 dark:shadow-none font-semibold text-sm transition-transform active:scale-95">Small</button>
                    <button className="flex-shrink-0 px-6 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Medium</button>
                    <button className="flex-shrink-0 px-6 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Large</button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {[
                        { name: "Strawberry Dream", price: "4.50", tag: "Best Seller", color: "pink", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8oH_6W6CDMcd0SMZr9ZeLg02CkpxnMmr1GBFSSBUDef67UOc-7WwwrR8qfDg1SNBugFl8dskiU76YKggDiedwF7NMGUFg4-r0KuJ6N9UOsxGdcjxWQD0RiF9hQHCjpFDEJFtIC00JHe1UpNLsexNYOK1Go_nfqTizuDJgtodp2FuOvuUULxw8RQ6Kkvec8kPrjo8l7ZKp01gNpdAbxKTvRKPp-WZj2EgwLWeEFzcADHA4LmA4JahyunVTLL0DSZmSxyU57vFnXT7C" },
                        { name: "Orange Sunset", price: "4.50", tag: "Classic", color: "orange", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLWZ_J0ymUcyQw7SybjGBYokZBfjHwACS_6laEl5VFiTY7SZ4J8vvPKA7FGybQmswyFU1jSXyvOxfC4KJcPFizaOIbrZPdon26Eoinb_AvxGlPH0MYinjn_k9Hgcjovu22uRxhrPL0_ShOpFu8k02h1S7lfebkBBLBaMrJalkhhOCuyyfU_pd0r5RBZWdMv1o3RTVmefgfWtTA8W-N5t5S9-PZqBaSaQPWAK3bds7zeIt3ZWn04JOshL1acAs371j88CgLiSddf-mz" },
                        { name: "Grape Galaxy", price: "4.50", tag: "Exotic", color: "purple", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClqjYE0gGGad9hQE5t5U7KW9vWxcLqmDltEhn7acWmvVYY-Z9elOx1NVaPxVIem4jo55KQ6s6b5iSO0S7lFlIP4Pi1MgfXkDjof6y7NDdb7vRvQFfEB_U4HEXMa9vkQ06jJauVwdTHD7s1SIjElaA0OrhZg-UkQ7Iji8I3Kqi2AkXP5lRXDHJqX_0g8IwU0Kde1eUUO471NESoZtJjwev0upUjGHSXl5tk-bGMc3Ude07Q3N4j5ihDLhS74092I0yMfIUYVe5pr5Xd" }
                    ].map((item, idx) => (
                        <div key={idx} className="group relative bg-white dark:bg-card-dark rounded-3xl p-4 shadow-soft hover:shadow-lg transition-all border border-gray-50 dark:border-gray-800 flex items-center overflow-hidden h-48">
                            <div className={`absolute right-0 top-0 w-32 h-full bg-${item.color}-50 dark:bg-${item.color}-900/20 rounded-l-full transform translate-x-8 group-hover:translate-x-6 transition-transform`}></div>
                            <div className="w-1/2 relative z-10 flex flex-col justify-center h-full pl-2">
                                <span className={`text-xs font-bold text-${item.color}-500 uppercase tracking-wider mb-1`}>{item.tag}</span>
                                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">{item.name}</h3>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">${item.price}</p>
                                <button onClick={handleAdd} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full py-2 px-4 text-sm font-bold w-max flex items-center gap-2 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors">
                                    Add <Plus size={16}/>
                                </button>
                            </div>
                            <div className="w-1/2 relative z-10 h-full flex items-center justify-center">
                                <img alt={item.name} className="h-36 w-36 object-cover rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-gray-800" src={item.img} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Create Your Mix */}
            <section className="px-4 mt-12">
                <div className="relative overflow-hidden rounded-3xl liquid-bg p-8 shadow-xl">
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-secondary/90 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center">
                        <h2 className="font-display text-3xl font-bold text-white mb-3">Create Your Mix</h2>
                        <p className="text-white/90 text-sm mb-6">Customize your float with extra toppings or mix flavors!</p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full rounded-xl border-none bg-white/90 py-3 px-4 text-sm placeholder-gray-500 focus:ring-2 focus:ring-white outline-none" placeholder="Your Name" type="text"/>
                            <div className="grid grid-cols-2 gap-4">
                                <select className="w-full rounded-xl border-none bg-white/90 py-3 px-4 text-sm text-gray-500 focus:ring-2 focus:ring-white outline-none">
                                    <option>Flavor...</option>
                                    <option>Strawberry</option>
                                    <option>Orange</option>
                                    <option>Grape</option>
                                </select>
                                <select className="w-full rounded-xl border-none bg-white/90 py-3 px-4 text-sm text-gray-500 focus:ring-2 focus:ring-white outline-none">
                                    <option>Size...</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>
                            <button onClick={handleAdd} className="w-full bg-white text-secondary font-bold py-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors" type="button">
                                Start Custom Order
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 text-center pb-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                <div className="flex justify-center gap-6 mb-4 text-gray-400 dark:text-gray-500">
                    <a className="hover:text-primary transition-colors text-sm" href="#">About</a>
                    <a className="hover:text-primary transition-colors text-sm" href="#">Locations</a>
                    <a className="hover:text-primary transition-colors text-sm" href="#">Contact</a>
                </div>
                <div className="flex justify-center gap-4 text-gray-300 dark:text-gray-600">
                    <Facebook size={20} />
                    <Mail size={20} />
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-600 mt-4">© 2023 Fanta Ice Cream Floats</p>
            </footer>
        </main>
    </div>
  );
};

export default Menu;