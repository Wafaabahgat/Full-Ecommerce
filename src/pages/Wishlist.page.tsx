import Breadcrumbs from '@/components/ui/Breadcrumbs';

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
        </div>
    );
};

export default Wishlist;

