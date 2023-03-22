'use Client';
import MayLike from '@/components/MayLike';
import Profile from '@/components/Profile';
import RecentPosts from '@/components/RecentPosts';

export default async function Home() {
    return (
        <main>
            <Profile />
            {/* @ts-expect-error Server Component */}
            <MayLike />
            {/* @ts-expect-error Server Component */}
            <RecentPosts />
        </main>
    );
}
