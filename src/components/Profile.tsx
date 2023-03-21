import Link from 'next/link';

export default function Profile() {
    return (
        <div className="text-center mb-10">
            <h3>HB, chanki kim</h3>
            <div>
                <Link href="/contact" className="bg-orange-400 text-white py-2 px-3 inline-flex my-3 hover:bg-orange-600">
                    Contact me
                </Link>
            </div>
        </div>
    );
}
