import about from '@/assets/images/about-Image.png';

const AbotHero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between sm:gap-3 gap-1">
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Our Story</h1>
                <p className="text-gray-600 mb-4">
                    Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active
                    presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service
                    solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the
                    region.
                </p>
                <p className="text-gray-600">
                    Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a
                    diverse assortment in categories ranging from consumer electronics to fashion.
                </p>
            </div>
            <div className="md:w-1/2 mt-2 md:mt-0">
                <img src={about} alt="People shopping" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
};

export default AbotHero;

