import Post from '@/components/Post';
import OtherPosts from '@/components/PostOther';
import { getOtherPost, getPostData, getPosts } from '@/service/posts';

type Props = {
    params: {
        slug: string;
    };
};

export default async function page({ params: { slug } }: Props) {
    const postData = getPostData(slug);
    const otherData = getOtherPost(slug);
    const [post, other] = await Promise.all([postData, otherData]);
    return (
        <>
            {!post ? (
                <>
                    <div>포스트를 찾을 수 없습니다.</div>
                </>
            ) : (
                <Post post={post} />
            )}

            <OtherPosts posts={other} />
        </>
    );
}

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.path,
    }));
}
