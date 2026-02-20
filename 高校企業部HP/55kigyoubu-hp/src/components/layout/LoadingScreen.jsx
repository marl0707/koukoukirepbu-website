import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2秒で完了
        const intervalTime = 20;
        const steps = duration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const newProgress = Math.min((currentStep / steps) * 100, 100);
            setProgress(newProgress);

            if (currentStep >= steps) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []); // onCompleteは安定的とみなす

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* 1. Logo (Center) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >
                <img src="/images/logo.png" alt="全国高校起業部" className="h-16 md:h-20" />
            </motion.div>

            {/* 2. Progress Bar (Thin line below logo) */}
            <div className="w-48 md:w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            {/* 3. Percentage Text (Optional, small) */}
            <motion.p
                className="mt-2 text-xs font-bold text-gray-400 tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                LOADING... {Math.round(progress)}%
            </motion.p>
        </motion.div>
    );
};

export default LoadingScreen;
