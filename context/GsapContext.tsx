import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GsapContextType {
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
}

const GsapContext = createContext < GsapContextType | undefined > (undefined);

export const GsapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Default smooth scrolling settings
        gsap.config({
            autoSleep: 60,
            force3D: true,
            nullTargetWarn: false
        });

        return () => {
            // Clean up ScrollTrigger on unmount
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <GsapContext.Provider value={{ gsap, ScrollTrigger }}>
            {children}
        </GsapContext.Provider>
    );
};

export const useGsap = (): GsapContextType => {
    const context = useContext(GsapContext);
    if (context === undefined) {
        throw new Error('useGsap must be used within a GsapProvider');
    }
    return context;
};