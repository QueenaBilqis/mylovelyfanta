import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Menu, Check, Receipt, User, Phone, CreditCard, Banknote, ArrowRight } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden animate-fade-in">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-white/80 to-orange-100/50 dark:from-background-dark dark:via-background-dark dark:to-gray-900 z-0"></div>
            <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl"></div>
        </div>

        <nav className="relative z-50 px-6 py-4 flex justify-between items-center glass-panel sticky top-0 border-b border-white/20 dark:border-white/5">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/menu')}>
                <ChevronLeft className="text-gray-600 dark:text-gray-300" size={28} />
                <span className="font-display font-bold text-xl tracking-tight text-gray-800 dark:text-white">Checkout</span>
            </div>
            <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                <Menu className="text-gray-600 dark:text-gray-300" size={24} />
            </button>
        </nav>

        <main className="relative z-10 container mx-auto px-4 pt-6 pb-32 max-w-md">
            {/* Stepper */}
            <div className="flex justify-between items-center mb-8 px-4">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                        <Check size={16} />
                    </div>
                    <span className="text-xs mt-1 font-medium text-gray-500 dark:text-gray-400">Select</span>
                </div>
                <div className="h-[2px] flex-1 bg-primary/30 mx-2"></div>
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center font-bold text-sm">2</div>
                    <span className="text-xs mt-1 font-bold text-primary">Checkout</span>
                </div>
                <div className="h-[2px] flex-1 bg-gray-200 dark:bg-gray-700 mx-2"></div>
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 flex items-center justify-center font-bold text-sm">3</div>
                    <span className="text-xs mt-1 font-medium text-gray-400 dark:text-gray-500">Done</span>
                </div>
            </div>

            {/* Product Card */}
            <section className="mb-8 relative mt-16">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20 w-40 animate-float">
                    <img alt="Strawberry Ice Cream Float" className="w-full h-auto drop-shadow-2xl rounded-2xl rotate-6 border-4 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB1ZgKa3lj5dxGUyw_efkpFQOII8wSzN9WWCMotoHldCd5bQnEkg0aCgxXiqUXXEwJYPdmyopO_h0NI1VrxYDwxZKmqowmL_y_FN48CfNIshx8fKLhzBUHdbrKzqXbNlVXoWDJ1zM815rzdLF-8JxvY9ON5-GT2AJ_0RezE4wrW9adqw-_ZNVGhbQqSHesfadI3F4OWs9r5j--hjBWyluox6BvtERB_wfZ4lMBAxk93aClMbeJvXNgllEFA4XGwjXgXSEeqpDmrM3F"/>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 pt-24 shadow-xl border border-white/50 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    <div className="text-center mb-6">
                        <h2 className="font-display text-2xl font-bold text-gray-800 dark:text-white mb-1">Strawberry Cream Float</h2>
                        <p className="text-primary font-bold text-lg">$5.99</p>
                    </div>
                    <div className="space-y-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Size</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Medium (16oz)</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Ice Level</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Regular Ice</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Toppings</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Extra Oreo Crumbs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md rounded-t-3xl rounded-b-2xl p-6 shadow-lg border border-white/40 dark:border-white/5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-xl text-primary">
                        <Receipt size={24} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-800 dark:text-white">Your Details</h3>
                </div>
                <form action="#" className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider" htmlFor="name">Full Name</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-primary transition-colors">
                                <User size={20} />
                            </span>
                            <input className="w-full pl-12 pr-4 py-4 rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-2 dark:focus:ring-offset-gray-900 transition-all shadow-sm text-base outline-none" id="name" placeholder="John Doe" type="text"/>
                        </div>
                    </div>
                    <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-primary transition-colors">
                                <Phone size={20} />
                            </span>
                            <input className="w-full pl-12 pr-4 py-4 rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-2 dark:focus:ring-offset-gray-900 transition-all shadow-sm text-base outline-none" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
                        </div>
                    </div>
                    <div className="group">
                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 ml-1 uppercase tracking-wider" htmlFor="notes">Order Notes (Optional)</label>
                        <div className="relative">
                            <textarea className="w-full p-4 rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-2 dark:focus:ring-offset-gray-900 transition-all shadow-sm text-base resize-none outline-none" id="notes" placeholder="Any special requests? e.g. Less sugar, extra napkins..." rows={3}></textarea>
                        </div>
                    </div>
                    <div className="pt-2">
                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 ml-1 uppercase tracking-wider">Payment Method</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-primary bg-primary/5 text-primary font-semibold transition-all shadow-sm ring-1 ring-primary/20" type="button">
                                <CreditCard size={20} />
                                Card
                            </button>
                            <button className="flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all" type="button">
                                <Banknote size={20} />
                                Cash
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>

        {/* Sticky Footer */}
        <div className="fixed bottom-0 left-0 w-full z-40 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 p-6 shadow-2xl">
            <div className="max-w-md mx-auto flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Amount</span>
                    <span className="text-2xl font-display font-bold text-gray-800 dark:text-white">$5.99</span>
                </div>
                <button onClick={() => alert("Order Placed!")} className="flex-1 bg-primary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-primary/30 transform active:scale-95 transition-all flex items-center justify-center gap-2 group">
                    Place Order
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
            </div>
        </div>
        
        {/* Decorative fruits */}
        <div className="fixed -bottom-12 -right-12 w-40 h-40 opacity-50 dark:opacity-30 pointer-events-none z-20">
            <img alt="Floating Raspberry" className="w-full h-full object-contain rotate-12 drop-shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJvPdXbQENa_pQy6fo46zICA60_CmbWWjt4-Lz1ne-ug653f8fnGxLDEYlwJ6Ho6Qk5p9SOXoJDu2F4ACWp1RgcrqJWR2WKbg2hbwLginukOUODMyS3RadxOgqb_t1_fK3Fzmar33daxw9iXv-GHZsIweVaePMqclg3aWbxkL5zSLsyTSfw8Bt7B2lWmZVIExl_g8qtJxYqDV-MWDPzKVq4M3nsbJ8IDatW4xeRLp52wNKcg25JLmny-2XimzGY0MWh0-OeybF31_r"/>
        </div>
        <div className="fixed top-1/2 left-2 w-12 h-12 opacity-40 dark:opacity-20 pointer-events-none z-0 animate-float" style={{ animationDelay: '-2s' }}>
            <img alt="Floating Strawberry" className="w-full h-full object-contain rotate-45" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx1oj11Ab0NSVC0HZkIJfJkRscIjnRLdthgQPfOU1hTXogzMWghFZ-Nwc8UZfcPoyQv9Qh6gQmqYbhfj73tg8NApuwAXXd_TSkms7UwgG537DHBsE9kMSjAMxa5ZYE0c0F__IogWaAhIOAP0CG4gsiqv0LeKIjlQxZ621i6agBrGHx4nXSl5TwCsfKv828PtHVfNSyWovip8y8__KnnGos8dEPXjzlnhycf4MHBUi6kF-QZUL86_7_-tqwJheQcufc5dAvjSx0TeK7"/>
        </div>
    </div>
  );
};

export default Checkout;