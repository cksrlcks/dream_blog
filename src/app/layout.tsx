import Header from '@/components/Header';
import './globals.css';

type Props = {
    children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <html lang="ko">
            <body className="bg-[#f6f7fb]">
                <div id="app">
                    <Header />
                    <div className="max-w-screen-xl mx-auto py-10 min-h-[90vh] px-4">{children}</div>
                    <footer className="text-center p-10 bg-black text-white">copyright hb blog.</footer>
                </div>
            </body>
        </html>
    );
}
