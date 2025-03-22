import { Link } from 'react-router-dom';
import WishlistCard from '../WishlistCard';
import { justForYouItems } from '@/data/wishlistData';

const OurProducts = () => {
    return (
        <div className="lg:mt-[71px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
            {/* Just For You Section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">
                    <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
                    Our Products
                </h2>
            </div>

            <div className="flex sm:flex-row flex-col justify-between sm:items-center mt-5 gap-2">
                <p className="text-black font-bold md:text-[28px] lg:text-[32px] text-[22px]">Explore Our Products</p>
                <Link
                    to=""
                    className="bg-txt-red h-fit w-fit text-white sm:px-6 px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
                >
                    View All Products
                </Link>
            </div>

            {/* Just For You Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {justForYouItems.map((item) => (
                    <WishlistCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default OurProducts;

