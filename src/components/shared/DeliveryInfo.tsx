import React from 'react';

interface DeliveryInfoProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const DeliveryInfo: React.FC<DeliveryInfoProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-center space-x-2">
            <Icon className="text-2xl" />
            <div>
                <p className="text-gray-700 font-semibold">{title}</p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default DeliveryInfo;

