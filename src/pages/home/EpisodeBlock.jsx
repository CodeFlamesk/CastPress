import AppleIcon from "@components/Player/icon/AppleIcon";
import SoundcloudIcon from "@components/Player/icon/SoundcloudIcon";
import SpotifyIcon from "@components/Player/icon/SpotifyIcon";

import AuthorImg from "@pages/home/img/authorImg.jpeg"
import PlayIcon from "@components/Player/icon/PlayerIcon";
import { Link } from "react-router-dom";
import Player from "@components/Player/Player";
const EpisodeBlock = () => {
    return (
        <div className="flex justify-center flex-col items-center adaptive-pt">
            <img src={AuthorImg} alt="author-img" />
            <p className="pt-[39px] text-[26px] font-semibold leading-8 text-center">How to rapidly test any experience!</p>
           <Player/>
            <p className="pt-[46px] font-semibold text-xs tracking-[1.92px] uppercase ">Listen on</p>
            <div className="flex pt-3 gap-[30px] ">
                <div className="w-[30px]  cursor-pointer  text-center hover:scale-[1.18] duration-300 transition-all ease-in-out">
                    <SpotifyIcon />
                </div>
                <div className="w-10  cursor-pointer  text-center hover:scale-[1.18] duration-300 transition-all ease-in-ou">
                    <SoundcloudIcon />
                </div>
                <div className="w-[30px] cursor-pointer text-center hover:scale-[1.18] duration-300 transition-all ease-in-out">
                    <AppleIcon />
                </div>
            </div>
        </div>
    );
};
export default EpisodeBlock; 