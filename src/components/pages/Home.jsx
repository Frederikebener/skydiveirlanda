import React from 'react';
import { Hero } from '../sections/Hero';
import { Experience } from '../sections/Experience';
import { Packages } from '../sections/Packages';
import { Course } from '../sections/Course';
import { Video } from '../sections/Video';
import { About } from '../sections/About';
import { Dream } from '../sections/Dream';
import { FAQ } from '../sections/FAQ';
import Contact from '../sections/Contact';

export const Home = () => {
    return (
        <>
            <Hero />
            <Experience />
            <Video />
            <Packages />
            <Course />
            <About />
            <Dream />
            <Contact />
            <FAQ />
        </>
    );
};
