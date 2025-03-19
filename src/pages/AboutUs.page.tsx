import Breadcrumbs from '@/components/ui/Breadcrumbs';

const AboutUs = () => {
    return (
        <div className="mainContainer">
            <div className="mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'About Us', path: '/about-us' },
                    ]}
                />
            </div>
        </div>
    );
};

export default AboutUs;

