import { useRef } from 'react';

export default function CatFriends() {
    const firstCatRef = useRef<null | HTMLImageElement>(null);
    const secondCatRef = useRef<null | HTMLImageElement>(null);
    const thirdCatRef = useRef<null | HTMLImageElement>(null);

    function handleScrollToFirstCat() {
        firstCatRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    return (
        <>
            <nav className='mb-2'>
                <button className='border border-gray-500 rounded-md px-2 py-1' onClick={handleScrollToFirstCat}>Tom</button>
                <button className='border border-gray-500 rounded-md px-2 py-1' onClick={handleScrollToSecondCat}>Maru</button>
                <button className='border border-gray-500 rounded-md px-2 py-1' onClick={handleScrollToThirdCat}>Jellylorum</button>
            </nav>
            <div className='w-[600px] overflow-x-scroll border'>
                <ul className='flex gap-8 '>
                    <li className='list-none flex-shrink-0'>
                        <img
                            className='h-[200px]'
                            src='https://placekitten.com/g/200/200'
                            alt='Tom'
                            ref={firstCatRef}
                        />
                    </li>
                    <li className='list-none flex-shrink-0'>
                        <img
                            className='h-[200px] w-[300px]'
                            src='https://placekitten.com/g/300/200'
                            alt='Maru'
                            ref={secondCatRef}
                        />
                    </li>
                    <li className='list-none flex-shrink-0'>
                        <img
                            className='h-[200px] w-[250px]'
                            src='https://placekitten.com/g/250/200'
                            alt='Jellylorum'
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}
