import Hero from '@/components/home/Hero';
import BestSellingProducts from '@/components/home/BestSellingProducts';
import Service from '@/components/shared/Service';
import CategoryCard from '@/components/home/CategoryCard';
import heroImage2 from '@/assets/images/heroo.png';
import OurProducts from '@/components/home/OurProducts';
import Featured from '@/components/home/Featured';

const Home = () => {
    return (
        <div className="mainContainer lg:mt-10 md:mt-8 sm:mt-6 mt-4">
            <Hero />
            <CategoryCard />
            <div className="block w-full h-[1px] bg-black/50 my-[70px]"></div>
            <BestSellingProducts />
            <div className="w-full h-full lg:mt-[140px] md:mt-[110px] sm:mt-[80px] mt-[60px]">
                <img src={heroImage2} alt="" className="w-full h-full bg-cover max-h-[450px] aspect" />
            </div>
            <OurProducts />
            <Featured />
            <Service />
        </div>
    );
};

export default Home;

