import { Post } from '@/types/Post';
import PostCard from './PostCard';

export default function PostSlide({ data }: { data: Post[] }) {
    return (
        <section className="mb-20">
            <h3>You may like</h3>
            <hr className="mt-4 mb-6" />
            <ul className="grid grid-cols-3 gap-4 gap-y-20">
                {data.map((item, index) => (
                    <PostCard item={item} key={index} />
                ))}
            </ul>
        </section>
    );
}
