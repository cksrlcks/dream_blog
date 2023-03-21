import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="flex justify-between px-4 py-6 border-solid border-b border-slate-200 bg-white">
            <Link href="/">
                <h1 className="text-xl text-slate-900 font-bold">BLOG</h1>
            </Link>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}
