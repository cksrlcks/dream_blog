import { Post } from '@/service/posts';
import PostCard from './PostCard';

export default function PostList({ posts }: { posts: Post[] }) {
    return (
        <ul className="grid grid-cols-3 gap-4 gap-y-20">
            {posts.map((item, index) => (
                <PostCard item={item} key={index} />
            ))}
        </ul>
    );
}
