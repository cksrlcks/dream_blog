'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export default function PostSlide({ children }: { children: React.ReactNode }) {
    return (
        <Swiper spaceBetween={16} slidesPerView={3}>
            {React.Children.map(children, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
}
