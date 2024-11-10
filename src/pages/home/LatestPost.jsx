
import ArrowRightIcon from '@components/icon/ArrowRightIcon';
import ClockPostImg from '@pages/home/img/postClockImg.webp'
import HeadphonesPostImg from '@pages/home/img/postHeadphonesImg.webp'
import { Dice1 } from 'lucide-react';
import { Link } from 'react-router-dom';
const dataPost = [
    {
        img: ClockPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
    },
    {
        img: HeadphonesPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',

    }

]
const LatestPost = () => {
    return (
        <div className="flex flex-col pt-16 w-full">
            <p className="heading1 text-light-col">Latest Posts</p>
            <div className="flex flex-col pt-[25px] gap-10 md:gap-6 ">
                {
                    dataPost.map((item) => {
                        return (
                            <LatestPostItem key={item.key} {...item} />
                        )
                    })
                }
            </div>
            <div className='flex gap-2 rounded transition-all duration-300 ease-in-out  px-4 py-2 items-center bg-gray text-purple heading5-regular justify-center cursor-pointer max-w-max mt-10 hover:bg-purple hover:text-white '>
                <p>View Blog</p>
                <ArrowRightIcon />
            </div>
        </div>
    );
};

const LatestPostItem = ({ img, tytle, date }) => {
    return (

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-4">
            <div className='w-[180px] h-[180px] overflow-hidden rounded'>
                <img src={img} alt="post-img" className='object-cover hover:scale-110 transition-all  duration-300 ease-in-out w-full h-full' />
            </div>
            <div>
                <p className='heading2 text-light-col '>{tytle}</p>
                <p className='pt-4 heading5-regular text-gray-light'>{date}</p>
                <p className='  mt-10 heading5-semibold text-purple hover:text-hov-purple cursor-pointer max-w-max'>
                    <p>Read More</p>
                </p>
            </div>
        </div>


    );
};
export default LatestPost;