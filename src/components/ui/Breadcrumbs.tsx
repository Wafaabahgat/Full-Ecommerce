import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    path: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="mb-5">
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark">
                {items.map((item, index) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <li key={index} className={index !== 0 ? "before:content-['/'] before:px-1.5" : ''}>
                            <button
                                type="button"
                                onClick={() => navigate(item.path)}
                                className={`hover:text-black/70 dark:hover:text-white-light/70 ${
                                    isActive ? 'font-bold text-black dark:text-white' : 'text-gray-500'
                                }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Breadcrumbs;

