'use Client';
import MayLike from '@/components/MayLike';
import PostSlide from '@/components/PostSlide';
import Profile from '@/components/Profile';
import { getPosts } from '@/service/posts';

export default async function Home() {
    const data = await getPosts();

    return (
        <main>
            <Profile />
            <MayLike data={data.filter((item) => item.featured === true)} />
            <PostSlide data={data} />
        </main>
    );
}
