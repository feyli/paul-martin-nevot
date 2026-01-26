"use client";

import { useEffect, useState } from "react";

interface SnackbarProps {
    message: string;
    isOpen: boolean;
    onClose: () => void;
    duration?: number;
}

export default function Snackbar({ message, isOpen, onClose, duration = 3000 }: Readonly<SnackbarProps>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Trigger animation after a brief delay to ensure the element is rendered
            setTimeout(() => setIsVisible(true), 10);
            
            const timer = setTimeout(() => {
                setIsVisible(false);
                // Wait for animation to complete before closing
                setTimeout(() => onClose(), 300);
            }, duration);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isOpen, onClose, duration]);

    if (!isOpen) return null;

    return (
        <div 
            className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
            <div className="bg-gray-800 dark:bg-gray-700 text-white text-center px-6 py-3 rounded-lg shadow-lg">
                {message}
            </div>
        </div>
    );
}
