import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { justForYouItems, wishlistItems } from '@/data/wishlistData';
import WishlistCard from '@/components/WishlistCard';
import { useState } from 'react';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState(wishlistItems);

    const handleDelete = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };
    return (
        <div className="mainContainer">
            <div className="mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'Wishlist', path: '/my-wishlist' },
                    ]}
                />
            </div>

            <div className="md:mb-[80px] sm:mb-[60px] mb-[40px]">
                {/* Wishlist Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Wishlist (4)</h2>
                    <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200">
                        Move All to Bag
                    </button>
                </div>

                {/* Wishlist Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {wishlistItems.map((item) => (
                        <WishlistCard item={item} key={item.id} />
                    ))}
                </div>

                {/* Just For You Section */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-black">
                        <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
                        Just For You
                    </h2>
                    <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200">See All</button>
                </div>

                {/* Just For You Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {justForYouItems.map((item) => (
                        <WishlistCard item={item} key={item.id} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;

