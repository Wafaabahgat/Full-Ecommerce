import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useState } from 'react';
import Gamepad from '@/assets/images/Gamepad-Cart-Small.png';
import Monitor from '@/assets/images/Monitor-Cart-Small.png';

const Cart = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: Gamepad },
        { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: Monitor },
    ]);

    const handleQuantityChange = (id, delta) => {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta); // Prevent quantity from going below 1
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }),
        );
    };

    // Calculate subtotal for each item and total
    const calculateSubtotal = (price, quantity) => price * quantity;
    const total = items.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);

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

            <div className="md:mb-[80px] sm:mb-[60px] mb-[40px] flex flex-col gap-6">
                <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg p-6 gap-6">
                    {/* Cart Items Table */}
                    <div className="w-full">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b">
                                        <th className="p-2">Product</th>
                                        <th className="p-2">Price</th>
                                        <th className="p-2">Quantity</th>
                                        <th className="p-2">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="p-2 flex sm:flex-row flex-col items-center">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 mr-2" />
                                                <span className="md:text-[16px] sm:text-[13px] text-[10px]">
                                                    {item.name}
                                                </span>
                                            </td>
                                            <td className="p-2">${item.price}</td>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, -1)}
                                                        className="px-2 py-1 border rounded-l-md"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, 1)}
                                                        className="px-2 py-1 border rounded-r-md"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-2">${calculateSubtotal(item.price, item.quantity)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex sm:flex-row flex-col gap-2 justify-between mt-4">
                            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                                Return to Shop
                            </button>
                            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                                Update Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col w-full lg:gap-10 gap-6">
                    {/* Coupon Code Section */}
                    <div className="flex justify-between sm:flex-row flex-col gap-2 mt-4 md:w-1/2 w-full h-fit">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="p-2 border rounded-md sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button className="sm:ml-2 p-2 bg-red-600 text-white rounded-md sm:w-1/3">Apply Coupon</button>
                    </div>
                    {/* Cart Total Section */}
                    <div className="w-full border p-6 rounded-md md:w-1/2">
                        <h2 className="text-xl font-bold mb-4">Cart Total</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>${total}</span>
                            </div>
                            <div className="block bg-primary w-full h-[1px]"></div>
                            <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="block bg-primary w-full h-[1px]"></div>

                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>${total}</span>
                            </div>
                        </div>
                        <button className="p-2 bg-txt-red px-7 text-white rounded-md mt-4 text-center mx-auto flex">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

