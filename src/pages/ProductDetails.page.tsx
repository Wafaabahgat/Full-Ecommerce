import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { justForYouItems } from '@/data/wishlistData';
import WishlistCard from '@/components/WishlistCard';
import ProductCardDetails from '@/components/product/ProductCardDetails';

const ProductDetails = () => {
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

            <div>
                <ProductCardDetails />
            </div>

            {/*  Related Item */}
            <div className="md:mb-[80px] sm:mb-[60px] mb-[40px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-black">
                        <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
                        Related Item
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {justForYouItems.map((item) => (
                        <WishlistCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

