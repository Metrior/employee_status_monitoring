import React, { useState, useRef, useEffect } from 'react';

interface LazyRendererProps {
    children: React.ReactNode;
}

const LazyRenderer: React.FC<LazyRendererProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyRenderer;
