import team3 from '@/assets/images/team3.png';
import team2 from '@/assets/images/team2.png';
import team1 from '@/assets/images/team1.png';
import { TbTruckDelivery } from 'react-icons/tb';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const dataStats = [
    { value: '10K', label: 'Sellers active on our site' },
    { value: '83%', label: 'The products are sold' },
    { value: '45.5K', label: 'Customers on our site' },
    { value: '25K', label: 'Annual gross sales' },
];
export const teamMembers = [
    { name: 'Tom Cruise', role: 'Founder & Chairman', img: team1 },
    { name: 'Will Smith', role: 'Product Designer', img: team3 },
    { name: 'Emma Watson', role: 'Managing Director', img: team2 },
    { name: 'Tom Cruise', role: 'Founder & Chairman', img: team1 },
    { name: 'Will Smith', role: 'Product Designer', img: team3 },
    { name: 'Emma Watson', role: 'Managing Director', img: team2 },
    { name: 'Will Smith', role: 'Product Designer', img: team3 },
];

interface ServiceItem {
    icon: React.ElementType;
    text: string;
    label: string;
}
export const serviceItems: ServiceItem[] = [
    { icon: TbTruckDelivery, text: 'Free Fast Delivery', label: 'Free delivery for all orders over $140' },
    { icon: TfiHeadphoneAlt, text: '24/7 Customer Service', label: 'Friendly 24/7 customer support' },
    { icon: IoMdCheckmarkCircleOutline, text: 'Money Back Guarantee', label: 'We reurn money within 30 days' },
];

