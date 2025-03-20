import Breadcrumbs from '@/components/ui/Breadcrumbs';

import AbotHero from '@/components/about/AboutHero';
import Stats from '@/components/about/Stats';
import Team from '@/components/about/Team';
import Service from '@/components/about/Service';

const About = () => {
    return (
        <section className="mainContainer">
            <div className="mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'About Us', path: '/about-us' },
                    ]}
                />

                <AbotHero />
                <Stats />
                <Team />
                <Service />
            </div>
        </section>
    );
};

export default About;

