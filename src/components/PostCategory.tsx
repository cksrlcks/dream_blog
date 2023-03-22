'use client';
import { Post } from '@/service/posts';
import { useState } from 'react';
import PostList from './PostList';

export default function PostCategory({ data }: { data: Post[] }) {
    const [selected, setSelected] = useState('All Posts');
    const filterd = selected === 'All Posts' ? data : data.filter((post) => post.category === selected);
    // const category: string[] = ['all'];
    // for (let i = 0; i < data.length; i++) {
    //     if (!category.includes(data[i].category)) {
    //         category.push(data[i].category);
    //     }
    // }

    const category = ['All Posts', ...new Set(data.map((item) => item.category))];

    return (
        <div className="flex">
            <div className="flex-1">
                <PostList posts={filterd} />
            </div>
            <div className="pl-10">
                {category.map((item, index) => (
                    <div key={index} onClick={() => setSelected(item)} className={`cursor-pointer ${selected === item ? 'font-bold' : ''}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
