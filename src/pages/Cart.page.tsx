import Breadcrumbs from '@/components/ui/Breadcrumbs';

const Cart = () => {
    return (
        <div className="mainContainer">
            <div className="mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'Cart', path: '/my-cart' },
                    ]}
                />
            </div>
        </div>
    );
};

export default Cart;

