import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { Hero } from '../sections/Hero';
import { Experience } from '../sections/Experience';
import { Packages } from '../sections/Packages';
import { Course } from '../sections/Course';
import { CourseJourney } from '../sections/CourseJourney';
import { About } from '../sections/About';
import { Dream } from '../sections/Dream';
import { FAQ } from '../sections/FAQ';
import Contact from '../sections/Contact';

export const Home = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('home.meta.title')}</title>
                <meta name="description" content={t('home.meta.description')} />
            </Helmet>
            <Hero />
            <Experience />
            <Packages />
            <Course />
            <CourseJourney />
            <About />
            <Dream />
            <Contact />
            <FAQ />
        </>
    );
};
