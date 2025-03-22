import React from 'react';
import cart from '@/assets/svg/Cart.svg';
import { MdOutlineStarOutline } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wishlist from '@/assets/svg/Wishlist.svg';
import { IoEyeOutline } from 'react-icons/io5';
export interface Item {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating?: number;
    reviews?: number;
    isDeletable?: boolean;
    isNew?: boolean;
    isFavourite?: boolean;
    seeDetails?: boolean;
}

interface WishlistCardProps {
    item: Item;
    onDelete?: (id: number) => void;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ item, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md relative">
            {item.isDeletable && (
                <button
                    // onClick={() => onDelete(item.id)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors"
                >
                    <FaTrash className="w-5 h-5" />
                </button>
            )}

            {item.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
            )}

            {item.isFavourite && (
                <span className="absolute top-2 right-2">
                    <img src={Wishlist} alt="Wishlist" className="md:w-7 w-6 md:h-7 h-6" />
                </span>
            )}
            {item.seeDetails && (
                <span className="absolute top-11 right-3 text-[21px]">
                    <IoEyeOutline />
                </span>
            )}

            {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{item.discount}%
                </span>
            )}

            {/* Product Image */}
            <Link to="/product-details">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 object-contain mb-4 lg:w-[160px] w-[120px] text-center mx-auto"
                />
            </Link>

            {/* Add to Cart Button */}
            <button className="w-full py-2 bg-black text-white rounded-md flex items-center justify-center">
                <img src={cart} alt="cart" className="filter invert" /> <span className="text-[14px]">Add to Cart</span>
            </button>

            {/* Product Name and Price */}
            <h3 className="mt-2 md:text-sm text-[12px] font-medium">{item.name}</h3>
            <div className="flex items-center mt-1">
                <span className="text-red-500 font-bold">${item.price}</span>
                {item.originalPrice && <span className="ml-2 text-gray-500 line-through">${item.originalPrice}</span>}
            </div>

            {/* Rating and Reviews */}
            {item.rating && (
                <div className="flex items-center mt-1">
                    {Array.from({ length: item.rating }, (_, i) => (
                        <MdOutlineStarOutline key={i} className="text-yellow-400" />
                    ))}
                    {item.reviews && <span className="ml-2 text-gray-500">({item.reviews})</span>}
                </div>
            )}
        </div>
    );
};

export default WishlistCard;

