import Post from '@/components/Post';
import OtherPosts from '@/components/PostOther';
import { getMarkdown, getOtherPost, getPost, getPosts } from '@/service/posts';

type Props = {
    params: {
        slug: string;
    };
};

export default async function page({ params: { slug } }: Props) {
    const postData = getPost(slug);
    const mdData = getMarkdown(slug);
    const otherData = getOtherPost(slug);
    const [post, md, other] = await Promise.all([postData, mdData, otherData]);
    return (
        <>
            {!post ? (
                <>
                    <div>포스트를 찾을 수 없습니다.</div>
                </>
            ) : (
                <Post post={post} md={md} />
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
