import HeroImg from './HeroImg';
import Herocategories from './Herocategories';

const Hero = () => {
    return (
        <div className="w-full grid lg:grid-cols-7 grid-cols-1 lg:mb-[140px] md:mb-[110px] sm:mb-[80px] mb-[60px]">
            <div className="lg:col-span-5 col-span-1 lg:order-3 order-1">
                <HeroImg />
            </div>

            <div className="h-full w-[2px] bg-black lg:block hidden lg:order-2"></div>

            <div className="lg:order-1 order-2">
                <Herocategories />
            </div>
        </div>
    );
};

export default Hero;

