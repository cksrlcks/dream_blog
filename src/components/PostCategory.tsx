'use client';

import { Post } from '@/types/Post';
import { useState } from 'react';
import PostList from './PostList';

export default function PostCategory({ data }: { data: Post[] }) {
    const [filterd, setFiltered] = useState(data);

    const handleFilter = (category: string) => {
        setFiltered((prev) => {
            if (category === 'all') {
                return data;
            } else {
                return data.filter((item) => item.category === category);
            }
        });
    };

    const category: string[] = ['all'];
    for (let i = 0; i < data.length; i++) {
        if (!category.includes(data[i].category)) {
            category.push(data[i].category);
        }
    }

    return (
        <div className="flex">
            <div className="flex-1">
                <PostList posts={filterd} />
            </div>
            <div className="pl-10">
                {category.map((item, index) => (
                    <div key={index} onClick={() => handleFilter(item)} className="cursor-pointer">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
