import { Post } from '@/service/posts';
import Link from 'next/link';

export default function OtherPosts({ posts }: { posts: Post[] | undefined }) {
    return (
        <div className="mt-10 flex border-1 border-t border-slate-200 py-10">
            {!posts ? (
                <>
                    <div>조회할 수 없습니다.</div>
                </>
            ) : (
                <>
                    <div className="flex-1 text-left">{posts[0] ? <Link href={`/posts/${posts[0].path}`}>{posts[0].title}</Link> : '없음'}</div>
                    <div className="flex-1 text-right">{posts[1] ? <Link href={`/posts/${posts[1].path}`}>{posts[1].title}</Link> : '없음'}</div>
                </>
            )}
        </div>
    );
}
