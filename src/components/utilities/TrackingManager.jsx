import { useEffect, useRef } from 'react';
import { config } from '../../data/config';

const TrackingManager = () => {
    const loadedScripts = useRef({
        gtm: false,
        ga: false,
        fb: false
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
        console.log('Tracking: GTM Initialized');
    };

    const initGA = (id) => {
        if (loadedScripts.current.ga || !id || id.includes('XXXXXX')) return;

        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
        `;
        document.head.appendChild(script2);
        loadedScripts.current.ga = true;
        console.log('Tracking: GA4 Initialized');
    };

    const initFB = (id) => {
        if (loadedScripts.current.fb || !id || id.includes('XXXXXX')) return;

        const script = document.createElement('script');
        script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${id}');
            fbq('track', 'PageView');
        `;
        document.head.appendChild(script);
        loadedScripts.current.fb = true;
        console.log('Tracking: Facebook Pixel Initialized');
    };

    const runTracking = (consent) => {
        if (!consent) return;

        if (consent.analytics) {
            initGTM(config.tracking.gtmId);
            initGA(config.tracking.gaId);
        }

        if (consent.marketing) {
            initFB(config.tracking.fbPixelId);
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
