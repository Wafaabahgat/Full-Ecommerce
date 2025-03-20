import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { justForYouItems, wishlistItems } from '@/data/wishlistData';
import { MdOutlineStarOutline } from 'react-icons/md';
import cart from '@/assets/svg/Cart.svg';

const Wishlist = () => {
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
                        <div key={item.id} className="bg-white p-4 rounded-md shadow-md relative">
                            {/* Discount Badge */}
                            {item.discount && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    -{item.discount}%
                                </span>
                            )}
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-40 object-contain mb-4 lg:w-[160px] w-[120px] text-center mx-auto"
                            />
                            {/* Add to Cart Button */}
                            <button className="w-full py-2 bg-black text-white rounded-md flex items-center justify-center">
                                <img src={cart} alt="cart" className="filter invert" />
                                <span className="text-[14px]">Add to Cart</span>
                            </button>
                            {/* Product Name and Price */}
                            <h3 className="mt-2 md:text-sm text-[12px] font-medium">{item.name}</h3>
                            <div className="flex items-center mt-1">
                                <span className="text-red-500 font-bold">${item.price}</span>
                                {item.originalPrice && (
                                    <span className="ml-2 text-gray-500 line-through">${item.originalPrice}</span>
                                )}
                            </div>
                        </div>
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
                        <div key={item.id} className="bg-white p-4 rounded-md shadow-md relative">
                            {/* Discount or New Badge */}
                            {item.discount && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    -{item.discount}%
                                </span>
                            )}
                            {item.isNew && (
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    NEW
                                </span>
                            )}
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-40 object-contain mb-4 lg:w-[160px] w-[120px] mx-auto"
                            />
                            {/* Add to Cart Button */}
                            <button className="w-full py-2 bg-black text-white rounded-md flex items-center justify-center">
                                <img src={cart} alt="cart" className="filter invert" />
                                <span className="text-[14px]">Add to Cart</span>
                            </button>
                            {/* Product Name and Price */}
                            <h3 className="mt-2 md:text-sm text-[12px] font-medium">{item.name}</h3>
                            <div className="flex items-center mt-1">
                                <span className="text-red-500 font-bold">${item.price}</span>
                                {item.originalPrice && (
                                    <span className="ml-2 text-gray-500 line-through">${item.originalPrice}</span>
                                )}
                            </div>
                            {/* Rating */}
                            {item.rating && (
                                <div className="flex items-center mt-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <MdOutlineStarOutline key={i} className="text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-gray-500">({item.reviews})</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;

