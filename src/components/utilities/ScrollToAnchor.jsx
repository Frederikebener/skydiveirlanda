import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is a hash, scroll to it
        if (hash) {
            // Small timeout to ensure DOM is ready
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const isPackage = id.startsWith('package-');
                    const isCourseJourney = id === 'coursejourney';
                    const isPackages = id === 'packages';
                    const isMobile = window.innerWidth <= 720;

                    let headerOffset = 0;

                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            // If no hash, scroll to top (unless it's a specific case like preserving scroll)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToAnchor;
