"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BannerCarousel from "./BannerCarousel"

import { motion } from "framer-motion";
import React from "react";
const Banner = () => {

    return (
        <section className='h-svh -mt-14 w-full max-w-7xl mx-auto text-center space-y-4' >
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <h1 className='text-5xl mt-8 font-bold'>Welcome to our store</h1>
                    <p className='text-2xl'>Get the best products at the best prices</p>
                    <div className="w-2/3 pt-4 mx-auto">
                        <BannerCarousel />
                    </div>
                </motion.div>
            </AuroraBackground>
        </section >
    )
}

export default Banner


