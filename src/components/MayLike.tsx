import { getFeaturedPosts } from '@/service/posts';
import PostList from './PostList';

export default async function PostSlide() {
    const data = await getFeaturedPosts();
    return (
        <section className="mb-20">
            <h3>You may like</h3>
            <hr className="mt-4 mb-6" />
            <PostList posts={data} />
        </section>
    );
}
