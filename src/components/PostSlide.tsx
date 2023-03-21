'use client';
import { Post } from '@/types/Post';
import PostCard from './PostCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export default function PostSlide({ data }: { data: Post[] }) {
    return (
        <section className="mb-20">
            <h3>Posts</h3>
            <hr className="mt-4 mb-6" />
            <Swiper spaceBetween={50} slidesPerView={3}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <PostCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
