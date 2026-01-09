import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, ThumbsUp, MessageCircle, MoreHorizontal, Filter } from 'lucide-react';

const Reviews: React.FC = () => {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      rating: 5,
      date: "2 days ago",
      text: "Absolutely mind-blowing! The combination of the spicy ginger ale and the vanilla soft serve is something I never knew I needed. 10/10 would recommend!",
      tags: ["Delicious", "Fast Delivery"],
      likes: 24,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLWZ_J0ymUcyQw7SybjGBYokZBfjHwACS_6laEl5VFiTY7SZ4J8vvPKA7FGybQmswyFU1jSXyvOxfC4KJcPFizaOIbrZPdon26Eoinb_AvxGlPH0MYinjn_k9Hgcjovu22uRxhrPL0_ShOpFu8k02h1S7lfebkBBLBaMrJalkhhOCuyyfU_pd0r5RBZWdMv1o3RTVmefgfWtTA8W-N5t5S9-PZqBaSaQPWAK3bds7zeIt3ZWn04JOshL1acAs371j88CgLiSddf-mz"
    },
    {
      id: 2,
      name: "Sarah Lee",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      rating: 4,
      date: "1 week ago",
      text: "Great taste, but I wish there was a bit more ice cream. The soda part was perfect though!",
      tags: ["Fresh", "Good Portion"],
      likes: 8
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      rating: 5,
      date: "2 weeks ago",
      text: "The 'Grape Galaxy' is out of this world. My kids loved it. Will order again for sure.",
      tags: ["Family Favorite", "Yummy"],
      likes: 42
    }
  ];

  return (
    <div className="pb-24 animate-fade-in bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <ChevronLeft className="text-gray-600 dark:text-gray-300" size={28} />
            <span className="font-display font-bold text-xl tracking-wide text-gray-900 dark:text-white">Reviews</span>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Filter size={20} className="text-gray-600 dark:text-gray-400"/>
        </button>
      </nav>

      <main className="px-4 pt-6">
        {/* Rating Overview */}
        <section className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-card mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <h2 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">4.8</h2>
            <div className="flex justify-center gap-1 mb-2 text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Based on 1,208 reviews</p>
            
            <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar pb-2 justify-center">
                {['All', '5 Stars', 'Photos', 'Taste', 'Service'].map((tag, i) => (
                    <button key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                        {tag}
                    </button>
                ))}
            </div>
        </section>

        {/* Reviews List */}
        <div className="space-y-6">
            {reviews.map((review) => (
                <div key={review.id} className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm" />
                            <div>
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white">{review.name}</h4>
                                <span className="text-xs text-gray-400">{review.date}</span>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={16} />
                        </button>
                    </div>

                    <div className="flex text-yellow-400 gap-0.5 mb-2">
                         {[...Array(5)].map((_, i) => (
                             <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-300" : ""} />
                         ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {review.text}
                    </p>

                    {review.image && (
                        <div className="mb-3 rounded-xl overflow-hidden h-32 w-full">
                            <img src={review.image} alt="Review attachment" className="w-full h-full object-cover" />
                        </div>
                    )}

                    {review.tags && (
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {review.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 rounded-md bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 font-medium border border-gray-100 dark:border-gray-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-6 pt-3 border-t border-gray-100 dark:border-gray-800">
                        <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary transition-colors">
                            <ThumbsUp size={14} />
                            Helpful ({review.likes})
                        </button>
                         <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary transition-colors">
                            <MessageCircle size={14} />
                            Comment
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </main>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40">
          <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default Reviews;