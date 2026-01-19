"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export function BaseDialog({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
    const [render, setRender] = React.useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    useEffect(() => {
        function handler(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
        }

        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onClose]);

    if (!render) return null;

    const container = document.getElementById("modal-container");
    if (!container) return null; // still not mounted

    return createPortal(
        <div className={`modal-overlay ${isOpen && "show"}`}>
            {children}
        </div>,
        container
    );
}