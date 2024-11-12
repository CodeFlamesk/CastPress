import PaginationFunction from "@components/Pagination/PaginationFunction";
import PlayerRecomendedCard from "@components/Player/PlayerRecommendedCard";

const data = [
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '23 - How to rapidly test any experience!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '22 - Everything you need to know about mind mapping creation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '21 - Makemeup Podcast Theme; launch it now !  ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '23 - How to rapidly test any experience!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '22 - Everything you need to know about mind mapping creation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '21 - Makemeup Podcast Theme; launch it now !  ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '23 - How to rapidly test any experience!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '22 - Everything you need to know about mind mapping creation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '21 - Makemeup Podcast Theme; launch it now !  ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '23 - How to rapidly test any experience!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '22 - Everything you need to know about mind mapping creation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '21 - Makemeup Podcast Theme; launch it now !',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '23 - How to rapidly test any experience!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '22 - Everything you need to know about mind mapping creation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '21 - Makemeup Podcast Theme; launch it now !  ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: true,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '23 - How to rapidly test any experience!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '22 - Everything you need to know about mind mapping creation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
    {
        isNew: false,
        type: 'Business',
        dataPost: 'Jan 18, 2021',
        title: '21 - Makemeup Podcast Theme; launch it now !  ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
    },
]
const RecommendedCard = () => {

    return (
        <div className="flex flex-col pt-16 md:pt-24">
            <PaginationFunction
                itemsPerPage={3}
                data={data}
                title='Courses'
                showValue1='3'
                showValue2='6'
                showValue3='9'
                stylesRender="flex flex-col gap-12 md:gap-[70px] "
                renderItem={(item, index) => (

                    <RecommendedCardItem
                        key={item.title + index}
                        {...item}
                    />


                )}
            />
        </div>

    )
}
const RecommendedCardItem = ({ isNew, type, dataPost, title, text }) => {

    return (
        <div className="flex flex-col">
            <div className="flex  gap-2 heading5-regular text-gray-light items-center" >
                {isNew && (
                    <div className="bg-gray leading-normal text-purple py-[6px] px-2 rounded-[3px] text-[10px] font-semibold tracking-[1.15px] uppercase">
                        new
                    </div>
                )}

                <p>{type}</p>
                <span className="heading5-regular ">|</span>
                <p>{dataPost}</p>
            </div>
            <p className="heading2 text-light-col pt-[14px] ">
                {title}
            </p>
            <p className="heading4-regular text-gray-light pt-[10px] md:pt-3 ">{text}</p>

            <PlayerRecomendedCard />

        </div>

    );
};
export default RecommendedCard;