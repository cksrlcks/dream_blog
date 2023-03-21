import PostCategory from '@/components/PostCategory';
import { getPosts } from '@/service/posts';

export default async function page() {
    const data = await getPosts();
    return <PostCategory data={data} />;
}
