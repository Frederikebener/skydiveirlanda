import { useEffect, useRef } from 'react';
import { config } from '../../data/config';

const TrackingManager = () => {
    const loadedScripts = useRef({
        gtm: false
    });

    const initGTM = (id) => {
        if (loadedScripts.current.gtm || !id || id.includes('XXXXXXX')) return;

        const script = document.createElement('script');
        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${id}');`;
        document.head.appendChild(script);
        loadedScripts.current.gtm = true;
    };



    const runTracking = (consent) => {
        if (!consent) return;

        if (consent.analytics) {
            initGTM(config.tracking.gtmId);
        }
    };

    useEffect(() => {
        // Check initial consent from localStorage
        const savedConsent = localStorage.getItem('cookie_consent');
        if (savedConsent) {
            runTracking(JSON.parse(savedConsent));
        }

        // Listen for consent updates
        const handleUpdate = (event) => {
            runTracking(event.detail);
        };

        window.addEventListener('cookieConsentUpdated', handleUpdate);
        return () => window.removeEventListener('cookieConsentUpdated', handleUpdate);
    }, []);

    return null; // This component doesn't render anything
};

export default TrackingManager;
