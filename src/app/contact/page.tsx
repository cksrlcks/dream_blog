'use client';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContacPage() {
    const [form, setForm] = useState({
        email: '',
        subject: '',
        content: '',
    });
    const [loading, setLoading] = useState(false);

    const { email, subject, content } = form;

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim().length) {
            alert('이메일을 다시 확인해주세요');
            return false;
        }
        if (!subject.trim().length) {
            alert('제목을 다시 확인해주세요');
            return false;
        }
        if (!content.trim().length) {
            alert('내용을 다시 확인해주세요');
            return false;
        }

        toast.promise(
            fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(form),
            }),
            {
                pending: {
                    render() {
                        setLoading(true);
                        return '메일을 전송중입니다';
                    },
                },
                success: {
                    render() {
                        setLoading(false);
                        setForm({
                            email: '',
                            subject: '',
                            content: '',
                        });
                        return '전송성공!';
                    },
                },
                error: {
                    render() {
                        setLoading(false);
                        return '오류가 발생했습니다!';
                    },
                },
            },
            {
                position: 'bottom-center',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: 'dark',
            },
        );
    };
    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <fieldset disabled={loading}>
                    <div className="border border-1 border-slate-300 bg-white h-10 mb-2">
                        <input
                            type="email"
                            value={email}
                            name="email"
                            onChange={handleForm}
                            placeholder="이메일을 입력해주세요"
                            className="w-full h-full px-4"
                        />
                    </div>
                    <div className="border border-1 border-slate-300 bg-white h-10 mb-2">
                        <input
                            type="text"
                            value={subject}
                            name="subject"
                            onChange={handleForm}
                            placeholder="제목을 입력해주세요"
                            className="w-full h-full px-4"
                        />
                    </div>
                    <div className="border border-1 border-slate-300 bg-white h-40 mb-2">
                        <textarea
                            name="content"
                            value={content}
                            onChange={handleForm}
                            placeholder="내용을 입력해주세요"
                            className="w-full h-full p-4 resize-none"
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-lime-600 text-white w-full py-2 px-10 rounded-md">
                        전송
                    </button>
                </fieldset>
            </form>
        </>
    );
}
