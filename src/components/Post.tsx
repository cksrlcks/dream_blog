import { Post } from '@/types/Post';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

type Props = {
    post: Post;
    md: any;
};

export default function PostDetail({ post, md }: Props) {
    return (
        <div>
            <figure className="aspect-[4/2] bg-slate-300 relative mb-6">
                <Image src={`/images/posts/${post.path}.png`} alt={post.title} fill className="object-cover" />
            </figure>
            <h2 className="font-bold text-2xl">{post.title}</h2>
            <div className="border-1 border-b border-slate-200 pb-5">{post.description}</div>
            <div className="flex justify-between mb-10 pt-5">
                <div>
                    <span className="bg-lime-400 text-white py-1 px-2 inline-flex justify-center items-center text-sm rounded-md">{post.category}</span>
                </div>
                <div className="text-slate-500 text-right">{post.date}</div>
            </div>
            <div>
                <ReactMarkdown>{md}</ReactMarkdown>
            </div>
        </div>
    );
}
