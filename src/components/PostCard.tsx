import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    item: Post;
};

export default function PostCard({ item }: Props) {
    return (
        <Link href={`/posts/${item.path}`} className="block bg-white shadow-md rounded-md overflow-hidden">
            <figure className="aspect-[4/2] bg-slate-300 relative">
                <Image src={`/images/posts/${item.path}.png`} alt={item.title} fill={true} className="object-cover" />
            </figure>
            <div className="p-4">
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.date}</div>
                <div>{item.category}</div>
            </div>
        </Link>
    );
}
