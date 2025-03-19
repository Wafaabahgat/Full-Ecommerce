import React from 'react';

type TextareaProps = {
    label?: string; // Optional label for the textarea
    placeholder?: string; // Optional placeholder
    value?: string; // Controlled value
    onChange?: (value: string) => void; // Function to handle changes
    rows?: number; // Number of rows (default: 4)
    className?: string; // Optional custom class for styling
    required?: boolean; // Optional required flag
};

const Textarea: React.FC<TextareaProps> = ({
    label,
    placeholder,
    value,
    onChange,
    rows = 4,
    className = '',
    required = false,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="mb-2 text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <textarea
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none "
                required={required}
            />
        </div>
    );
};

export default Textarea;

