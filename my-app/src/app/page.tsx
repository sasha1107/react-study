'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='block'>React</h1>
            <p>
                React 웹 및 네이티브 사용자 인터페이스를 위한 라이브러리
                <div className='flex justify-center gap-5 mt-5'>
                    <button className='border px-4 py-2 rounded-3xl bg-[#087EA4] hover:bg-[#4D98B6] text-white font-bold'>
                        <Link
                            style={{ textDecoration: 'none' }}
                            className='no-underline'
                            href='./describing-the-ui/your-first-component'
                        >
                            Learn React
                        </Link>
                    </button>
                    <button className='border px-4 py-2 rounded-3xl hover:bg-[#F8F9FA] font-bold'>
                        <Link
                            style={{ textDecoration: 'none' }}
                            href='./custom-hooks'
                        >
                            Custom Hooks
                        </Link>
                    </button>
                </div>
            </p>
        </div>
    );
}
