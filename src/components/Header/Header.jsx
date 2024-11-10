
import ArrowDown from "./icon/ArrowDown";
import Like from "./icon/Like";

import { useState } from 'react';

const Header = () => {
    const [openSelect, setOpenSelect] = useState(false);

    const toggleSelect = () => {
        setOpenSelect(prevState => !prevState);
    };

    return (
        <div className="mx-auto max-w-[1140px]  justify-between h-[106px] pt-[39px] mx-5 hidden md:flex">
            <p className="text-light-col font-normal logo text-[19px]">CastPress.</p>

            <div>
                <div className="flex gap-[39px] text-3 font-semibold text-light-col tracking-[1.92px]">
                    <div className="flex items-center gap-2" onClick={toggleSelect}>
                        <p className="uppercase ">Episodes</p>
                        <ArrowDown />
                        {openSelect && <div className="flex flex-col border border-br-gray absolute p-4 min-w-[179px] top-16 ">
                            <p>Classic Style</p>
                            <p>Card Style</p>
                            <p>Flat Style</p>

                        </div>}
                    </div>

                    <p className="uppercase">Blog</p>
                    <p className="uppercase" >Contact</p>

                    <div className="flex gap-1.5 items-center">
                        <Like />
                        <p className="text-purple uppercase ">Donate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
