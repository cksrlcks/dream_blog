import fs from 'fs';
import path from 'path';

export type Post = {
    title: string;
    description: string;
    date: string;
    category: string;
    path: string;
    featured: boolean;
};

export type PostData = Post & { content: string };

export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return fs.promises
        .readFile(filePath, 'utf-8')
        .then<Post[]>((res) => JSON.parse(res))
        .then((post) => post.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
    return getPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getOtherPost(id: string): Promise<Post[] | undefined> {
    const data = await getPosts();
    const index = data.findIndex((post) => post.path === id);

    return [data[index - 1], data[index + 1]];
}

export async function getPostMetaData(id: string): Promise<Post | undefined> {
    const data = await getPosts();
    const post = data.find((post) => post.path === id);
    return post;
}

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const metaData = await getPostMetaData(fileName);

    if (!metaData) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);
    const content = await fs.promises.readFile(filePath, 'utf-8');

    return { ...metaData, content };
}
