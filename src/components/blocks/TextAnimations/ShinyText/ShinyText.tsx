/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

"use client"
import React from 'react';


interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number; // in seconds
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
    text,
    disabled = false,
    speed = 5,
    className = '',
}) => {
    return (
        <span
            className={`relative inline-block bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage:
                    'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animation: disabled
                    ? undefined
                    : `shine ${speed}s linear infinite`,
            }}
        >
            {text}

            {/* Inject the keyframes once per page */}
            {!disabled && (
                <style jsx>{`
                    @keyframes shine {
                        0% {
                            background-position: 200% 0;
                        }
                        100% {
                            background-position: -200% 0;
                        }
                    }
                `}</style>
            )}
        </span>
    );
};

export default ShinyText;

