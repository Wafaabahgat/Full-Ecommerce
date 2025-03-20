import bag from '@/assets/images/bags.png';
import jacket from '@/assets/images/jacket (1).png';
import playStation from '@/assets/images/playStation.png';
import radio from '@/assets/images/radio.png';

export const wishlistItems = [
    {
        id: 1,
        name: 'Gucci duffle bag',
        price: 960,
        originalPrice: 1160,
        image: bag,
        discount: 35,
        isDeletable: true,
    },
    {
        id: 2,
        name: 'RGB liquid CPU Cooler',
        price: 1960,
        image: jacket,
        isDeletable: true,
    },
    {
        id: 3,
        name: 'GP11 Shooter USB Gamepad',
        price: 550,
        image: playStation,
        isDeletable: true,
    },
    {
        id: 4,
        name: 'Quilted Satin Jacket',
        price: 750,
        image: radio,
        isDeletable: true,
    },
];

export const justForYouItems = [
    {
        id: 5,
        name: 'ASUS FHD Gaming Laptop',
        price: 960,
        originalPrice: 1160,
        image: radio,
        discount: 30,
        rating: 5,
        reviews: 65,
    },
    {
        id: 6,
        name: 'IPS LCD Gaming Monitor',
        price: 1160,
        image: playStation,
        rating: 5,
        reviews: 65,
    },
    {
        id: 7,
        name: 'HAVIT HV-G92 Gamepad',
        price: 550,
        image: jacket,
        rating: 5,
        reviews: 65,
        isNew: true,
    },
    {
        id: 8,
        name: 'AK-900 Wired Keyboard',
        price: 200,
        image: bag,
        rating: 5,
        reviews: 65,
    },
];

