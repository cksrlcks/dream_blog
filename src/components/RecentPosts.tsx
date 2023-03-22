import React from 'react';
import PostSlide from './PostSlide';
import { getPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function RecentPosts() {
    const data = await getPosts();
    return (
        <section className="mb-20">
            <h3>Posts</h3>
            <hr className="mt-4 mb-6" />
            <PostSlide>
                {data.map((item, index) => (
                    <PostCard item={item} key={index} />
                ))}
            </PostSlide>
        </section>
    );
}
