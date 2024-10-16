"use client";

import React, { useEffect } from 'react';
import Navbar from './Navbar'; 

const AppNavbar: React.FC = () => {
    useEffect(() => {
        const debounce = (fn: Function) => {
            let frame: number;
            return (...params: any[]) => {
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                frame = requestAnimationFrame(() => {
                    fn(...params);
                });
            };
        };

        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY.toString();
        }

        const debouncedStoreScroll = debounce(storeScroll);
        document.addEventListener('scroll', debouncedStoreScroll, { passive: true });

        storeScroll();

        return () => {
            document.removeEventListener('scroll', debouncedStoreScroll);
        };
    }, []);

    return (
        <Navbar /> 
    );
}

export default AppNavbar; 
