import { useState } from 'react';
import playstatioon1 from '@/assets/images/playstatioon (1).png';
import playstatioon2 from '@/assets/images/playstatioon (2).png';
import playstatioon3 from '@/assets/images/playstatioon (3).png';
import playstatioon4 from '@/assets/images/playstatioon (4).png';
import Wishlist from '@/assets/svg/Wishlist.svg';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import DeliveryInfo from '../shared/DeliveryInfo';
import { deliveryData } from '@/data/glabalData';

const ProductCardDetails = () => {
    const [quantity, setQuantity] = useState(2);
    const [selectedColor, setSelectedColor] = useState('white');
    const [selectedSize, setSelectedSize] = useState('M');

    const colors = ['white', 'red', 'black'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
        <div className="flex justify-center items-center p-2 sm:p-4 md:mb-[80px] sm:mb-[60px] mb-[40px]">
            <div className="bg-white rounded-lg shadow-lg w-full flex flex-col md:flex-row gap-6 md:gap-10">
                {/* صور المنتج */}
                <div className="w-full md:w-2/3 flex flex-col items-center">
                    <img
                        src={playstatioon1}
                        alt="Gamepad Main"
                        className="lg:max-w-[446px] md:max-w-[380px] sm:max-w-[310px] max-w-[250px] h-auto max-h-[315px] mx-auto"
                    />
                    <div className="flex flex-row md:gap-12 gap-5 md:mt-12 mt-6">
                        <img
                            src={playstatioon2}
                            alt="Gamepad Side 1"
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                        />
                        <img
                            src={playstatioon3}
                            alt="Gamepad Side 2"
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                        />
                        <img
                            src={playstatioon4}
                            alt="Gamepad Side 3"
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                        />
                    </div>
                </div>

                {/* تفاصيل المنتج */}
                <div className="w-full md:w-1/3 mb-3 px-2 sm:px-0">
                    <h1 className="text-[18px] lg:text-2xl font-bold text-black">Havic HV G-92 Gamepad</h1>
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-black/50 lg:text-[16px] text-[14px]">(150 Reviews)</span>
                        <span className="ml-4 text-green lg:text-[16px] text-[14px]">In Stock</span>
                    </div>

                    <p className="text-[18px] lg:text-2xl text-black mt-4">$192.00</p>

                    <p className="text-black/60 mt-4 lg:text-[16px] text-[14px]">
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free
                        install & mess free removal Pressure sensitive.
                    </p>

                    {/* خيارات الألوان */}
                    <div className="mt-4 sm:mt-6">
                        <h3 className="text-black font-medium lg:text-[16px] text-[14px]">Colours:</h3>
                        <div className="flex space-x-2 mt-2">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${
                                        selectedColor === color ? 'border-main' : 'border-gray-300'
                                    }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* خيارات الأحجام */}
                    <div className="mt-4">
                        <h3 className="text-black font-medium lg:text-[16px] text-[14px]">Size:</h3>
                        <div className="flex space-x-2 mt-2 flex-wrap gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-2 py-1 sm:px-3 sm:py-1 border rounded lg:text-[16px] text-[14px] ${
                                        selectedSize === size ? 'border-main bg-blue-100' : 'border-gray-300'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* الكمية وزر الشراء */}
                    <div className="mt-4 sm:mt-6 flex items-center space-x-2 sm:space-x-4 flex-wrap gap-2">
                        <div className="flex items-center border rounded">
                            <button
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                className="px-2 sm:px-3 py-1 text-gray-600"
                            >
                                <FiMinus />
                            </button>
                            <span className="px-3 sm:px-4 py-1 lg:text-[16px] text-[14px]">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="px-2 sm:px-3 py-1 text-black">
                                <GoPlus />
                            </button>
                        </div>
                        <button className="bg-txt-red text-white px-4 sm:px-6 py-2 rounded hover:bg-red-600 lg:text-[16px] text-[14px]">
                            Buy Now
                        </button>
                        <button className="border border-gray-300 p-2 rounded">
                            <img src={Wishlist} alt="Wishlist" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* Delivery */}
                    <div className="mt-4 sm:mt-6 border rounded p-3 sm:p-4 flex flex-col gap-3">
                        {deliveryData.map((data, index) => (
                            <DeliveryInfo key={index} {...data} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDetails;

