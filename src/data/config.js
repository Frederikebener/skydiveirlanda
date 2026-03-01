import heroBg from '../assets/Banner03-2.jpg';
import logoImageSrc from '../assets/LOGO 2 SKYDIVE THRU IRELAND.svg';
import heroVideo from '../assets/Video-1.mp4';

export const config = {
    hero: {
        backgroundType: 'video', // 'image' or 'video'
        videoUrl: heroVideo, // Local optimized video
        imageUrl: heroBg,
        enableCountdown: false // Toggle to show or hide the countdown bar
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
    showPressel: true // Set to false to disable the pressel page
};
