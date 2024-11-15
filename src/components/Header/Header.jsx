import { Link } from "react-router-dom";
import ArrowDown from "./icon/ArrowDown";
import BurgerBtn from "./icon/BurderBtn";
import Like from "./icon/Like";
import { useState, useEffect } from 'react';

const Header = () => {
    const [openSelect, setOpenSelect] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const toggleSelect = () => {
        setOpenSelect(prevState => !prevState);
    };

    const toggleOpenMenu = () => {
        setOpenMenu(prevState => !prevState);
    };

    // Заборона прокрутки при відкритті меню
    useEffect(() => {
        if (openMenu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Очищення ефекту при розмонтуванні компонента
        return () => document.body.classList.remove('overflow-hidden');
    }, [openMenu]);

    return (
        <div className="flex flex-col border-b border-br-gray">
            <div className="mx-auto max-w-[1140px] w-full justify-between h-[106px] pt-[39px] px-5 flex z-50">
                <Link to='/' className="text-light-col font-normal logo text-[19px] max-h-max">CastPress.</Link>

                <div className="gap-[39px] text-3 font-semibold text-light-col tracking-[1.92px] items-start hidden sm:flex">
                    <div className="flex items-center gap-2" onClick={toggleSelect}>
                        <p className="uppercase">Episodes</p>
                        <ArrowDown />
                        {openSelect && (
                            <div className="flex flex-col border bg-white border-br-gray absolute p-4 min-w-[179px] top-16">
                                <Link to='/episode/season' >Season 1</Link>
                                <p>Season 2</p>
                                <p>Season 3</p>
                            </div>
                        )}
                    </div>
                    <p className="uppercase">Blog</p>
                    <Link to='/contact' className="uppercase">Contact</Link>
                    <div className="flex gap-1.5 items-center text-purple">
                        <Like />
                        <p className=" uppercase">Donate</p>
                    </div>
                </div>

                <button
                    aria-label="Main Menu"
                    className="w-[32px] transition-all h-[32px] duration-300 z-50 sm:hidden inline-block"
                    onClick={toggleOpenMenu}
                >
                    <BurgerBtn />
                </button>
            </div>

            <div
                className={`fixed inset-0 h-screen w-full flex gap-y-10 items-center z-10 flex-col pt-[100px] bg-white sm:hidden transition-all duration-500 ${openMenu ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-full'}`}
            >
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-2 items-center cursor-pointer" onClick={toggleSelect}>
                        <p className="mob-nav">Episodes</p>
                        <ArrowDown />
                    </div>

                    <div
                        className={`flex flex-col gap-4 transition-all duration-300 ease-in-out ${openSelect ? 'opacity-100 max-h-max translate-y-0 z-10' : 'opacity-0 max-h-0 -translate-y-4'
                            }`}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="episodes-link pt-6">Season 1</p>
                        <p className="episodes-link">Season 2</p>
                        <p className="episodes-link">Season 3</p>
                    </div>
                </div>

                <p className="mob-nav">Blog</p>
                <p className="mob-nav">Contact</p>

                <div className="flex gap-1.5 items-center ">
                    <Like />
                    <p className="mob-nav">Donate</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
