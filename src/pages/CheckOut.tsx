import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Input from '@/components/ui/Input';
import Gamepad from '@/assets/images/Gamepad-Cart-Small.png';
import Monitor from '@/assets/images/Monitor-Cart-Small.png';
import visa from '@/assets/images/Visa.png';
import nagad from '@/assets/images/Nagad.png';
import bkash from '@/assets/images/Bkash.png';
import mastercard from '@/assets/images/Mastercard.png';

const CheckOut = () => {
    return (
        <div className="mainContainer">
            <div className="flex mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'Check Out', path: '/checkout' },
                    ]}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-4 lg:gap-[80px] md:gap-[50px] md:mt-12 sm:mt-8 mt-6 md:mb-[80px] sm:mb-[60px] mb-[40px]">
                {/* Billing Details Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">BILLING DETAILS</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="check-label">FIRST NAME*</label>
                            <Input type="text" className="check-input" />
                        </div>
                        <div>
                            <label className="check-label">COMPANY NAME</label>
                            <Input type="text" className="check-input" />
                        </div>
                        <div>
                            <label className="check-label">STREET ADDRESS*</label>
                            <Input type="text" className="check-input" />
                        </div>
                        <div>
                            <label className="check-label">APARTMENT, FLOOR, ETC. (OPTIONAL)</label>
                            <Input type="text" className="check-input" />
                        </div>
                        <div>
                            <label className="check-label">TOWN/CITY*</label>
                            <Input type="text" className="check-input" />
                        </div>
                        <div>
                            <label className="check-label">PHONE NUMBER*</label>
                            <Input type="text" className="check-input" />
                        </div>
                        <div>
                            <label className="check-label">EMAIL ADDRESS*</label>
                            <Input type="email" className="check-input" />
                        </div>
                        <div className="flex items-center justify-start">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-600">
                                Save this information for faster check-out next time
                            </label>
                        </div>
                    </form>
                </div>

                {/* Order Summary Section */}
                <div className="w-full md:w-1/2">
                    <div className="space-y-4">
                        {/* Product List */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={Monitor} alt="LCD Monitor" className="w-12 h-12 mr-2" />
                                <span>LCD Monitor</span>
                            </div>
                            <span>$650</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={Gamepad} alt="Gamepad" className="w-12 h-12 mr-2" />
                                <span>H1 Gamepad</span>
                            </div>
                            <span>$1100</span>
                        </div>

                        {/* Subtotal and Shipping */}
                        <div className="border-t pt-4">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>$1750</span>
                            </div>
                            <div className="flex justify-between mt-2">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between mt-2 font-bold">
                                <span>Total:</span>
                                <span>$1750</span>
                            </div>
                        </div>

                        {/* Payment Options */}
                        <div className="mt-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="h-4 w-4 text-red-600 focus:ring-red-500"
                                />
                                <label className="ml-2">Bank</label>
                            </div>
                            <div className='flex justify-between sm:flex-row flex-col'>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="h-4 w-4 text-red-600 focus:ring-red-500"
                                    />
                                    <label className="ml-2">Cash on delivery</label>
                                </div>
                                <div className="flex mt-2 space-x-2">
                                    <img src={bkash} alt="Bkash" className="h-6" />
                                    <img src={visa} alt="Visa" className="h-6" />
                                    <img src={mastercard} alt="Mastercard" className="h-6" />
                                    <img src={nagad} alt="Nagad" className="h-6" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mt-4 sm:flex-row flex-col gap-1">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="p-2 border rounded-md sm:w-2/3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 text-[14px]"
                            />
                            <button className="sm:ml-2 py-2 bg-red-600 text-white rounded-md sm:w-1/3 w-full text-[14px]">
                                Apply Coupon
                            </button>
                        </div>
                        <button className="w-full p-2 bg-red-600 text-white rounded-md mt-4">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;

