import fs from 'fs';
import path from 'path';
import { Post } from '@/types/Post';

export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getPost(id: string): Promise<Post | undefined> {
    const data = await getPosts();
    const post = data.find((post) => post.path === id);
    return post;
}

export async function getOtherPost(id: string): Promise<Post[] | undefined> {
    const data = await getPosts();
    const index = data.findIndex((post) => post.path === id);

    return [data[index - 1], data[index + 1]];
}

export async function getMarkdown(id: string) {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);

    return fs.promises.readFile(filePath, 'utf-8');
}
