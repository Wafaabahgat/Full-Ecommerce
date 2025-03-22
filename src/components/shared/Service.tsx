import { serviceItems } from '@/data/aboutData';

const Service = () => {
    return (
        <div className="flex flex-col justify-around items-center sm:gap-3 gap-6 sm:flex-row lg:my-[140px] md:my-[110px] sm:my-[80px] my-[60px] xl:px-24 lg:px-16 md:px-6 px-0">
            {serviceItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center space-x-2 lg:gap-6 md:gap-5 gap-3"
                    >
                        <span className="text-4xl bg-black p-2 rounded-full text-white border-[10px] border-primary">
                            <IconComponent />
                        </span>
                        <div>
                            <h4 className="text-black font-semibold lg:text-[22px] md:text-[18px] text-[14px] md:mb-2 mb-1 text-center">
                                {item.text}
                            </h4>
                            <p className="text-black md:text-[14px] text-[12px]">{item.label}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Service;

