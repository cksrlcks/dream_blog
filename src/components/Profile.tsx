import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../../public/images/profile.png';
export default function Profile() {
    return (
        <div className="text-center mb-10">
            <figure className="w-[200px] h-[200px] overflow-hidden rounded-full mx-auto mb-4">
                <Image src={ProfileImg} alt="chanki" priority />
            </figure>
            <h3>HB, chanki kim</h3>
            <div>
                <Link href="/contact" className="bg-orange-400 text-white py-2 px-3 inline-flex my-3 hover:bg-orange-600">
                    Contact me
                </Link>
            </div>
        </div>
    );
}
