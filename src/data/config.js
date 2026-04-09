import heroBg from '../assets/skydive-ireland-hero-banner.webp';
import logoImageSrc from '../assets/skydive-ireland-icon.webp';
import heroVideoMp4 from '../assets/hero-background.mp4';
import heroVideoWebm from '../assets/hero-background.webm';

export const config = {
    hero: {
        backgroundType: 'video', // 'image' or 'video'
        videoUrlMp4: heroVideoMp4,   // Fallback para Safari/iOS (~6 MB)
        videoUrlWebm: heroVideoWebm, // Principal para Chrome/Firefox/Edge (~9 MB)
        imageUrl: heroBg,
        enableCountdown: true, // Toggle to show or hide the countdown bar
        enableAudio: true // Toggle to show the audio play button in the hero
    },
    evaluation: {
        googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJFTJet6X3XEgRlDp9BaZEUZQ',
        formUrl: 'https://link.sucesu.com.br/widget/form/EVALUATION_FORM_ID', // Placeholder for internal form
        backgroundImage: heroBg,
        logoImage: logoImageSrc // Path to logo
    },
    map: {
        zoom: 7 // 7=all Ireland, 12=county, 14=neighborhood, 15=street level
    },
    showPressel: true, // Set to false to disable the pressel page
    showRegistrationNumber: true, // Set to true to display the registration and VAT number in the footer
    tracking: {
        gtmId: 'GTM-NQKBHD9K' // Updated GTM ID
    }
};
