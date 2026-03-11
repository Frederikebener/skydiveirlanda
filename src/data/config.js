import heroBg from '../assets/Banner03-2.jpg';
import logoImageSrc from '../assets/LOGO 2 SKYDIVE THRU IRELAND.svg';
import heroVideo from '../assets/Video-1.mp4';

export const config = {
    hero: {
        backgroundType: 'image', // 'image' or 'video'
        videoUrl: heroVideo, // Local optimized video
        imageUrl: heroBg,
        enableCountdown: false, // Toggle to show or hide the countdown bar
        enableAudio: true // Toggle to show the audio play button in the hero
    },
    evaluation: {
        googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJFTJet6X3XEgRlDp9BaZEUZQ',
        formUrl: 'https://link.sucesu.com.br/widget/form/EVALUATION_FORM_ID', // Placeholder for internal form
        backgroundImage: heroBg,
        logoImage: logoImageSrc // Path to logo
    },
    experience: {
        type: 'static' // 'static' or '360'
    },
    map: {
        zoom: 7 // 7=all Ireland, 12=county, 14=neighborhood, 15=street level
    },
    showPressel: true, // Set to false to disable the pressel page
    tracking: {
        gtmId: 'GTM-NQKBHD9K', // Updated GTM ID
        gaId: 'G-XXXXXXXXXX', // Replace with your GA4 ID
        fbPixelId: 'XXXXXXXXXXXXXXX' // Replace with your FB Pixel ID
    }
};
