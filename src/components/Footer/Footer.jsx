import BigArrowRightIcon from "@components/icon/BigArrowRightIcon";
import FacebookIcon from "@components/icon/FacebookIcon";
import GitHubIcon from "@components/icon/GitHubIcon";
import TwitterIcon from "@components/icon/TwitterIcon";

const Footer = () => {
    return (
        <div className="flex flex-col w-full pt-16 mt-16 border-t border-br-gray">
            <div className="flex justify-between ">
                <div className="flex flex-col text-icon-gray heading5-semibold gap-[9px]">
                    <p className="footer-hover">Episodes</p>
                    <p className="footer-hover">Blog</p>
                    <p className="footer-hover">Contact</p>
                    <p className="footer-hover">Donate</p>
                </div>
                <div className="flex flex-col max-w-[315px] w-full">
                    <p className="text-light-col text-base font-semibold tracking-[2.56px] uppercase">Newsletter</p>
                    <p className="text-icon-gray text-xs font-normal pt-2">Sign up now,  get closer to our action.</p>

                    <form>
                        <label htmlFor="email" className="relative flex items-center max-w-[315px] w-full h-[42px] bg-gray mt-[14px] rounded overflow-hidden">
                            <input id="email" type="email" className="border-gray pl-[14px] pr-[50px] box-border border-[2px] inputs  input-shadow focus:outline-none  rounded  focus:ring-0 bg-gray w-full h-full placeholder:text-xs text-xs  placeholder:font-normal font-normal placeholder:text-icon-gray text-icon-gray " placeholder="Email  adress..." required />
                            <button type="submit" id="email" className="absolute right-[4px] top-[3px] flex justify-center items-center hover:bg-hov-purple transition-colors ease-in-out duration-300 bg-purple max-w-9 max-h-9 w-full h-full text-white rounded">
                                <BigArrowRightIcon />
                            </button>
                        </label>
                    </form>
                </div>
            </div>
            <p className="text-center pt-[90px]  ">PodcastTheme by VitaThemes | Privacy policy </p>
            <div className="flex  pt-6 gap-6 justify-center items-start mb-[30px] md:mb-[46px] ">
                <a href='https://www.upwork.com/freelancers/~01a687c8f95b7913d7' target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-icon-gray hover:text-facebook pt-[1px] hover:scale-125 duration-300">
                    <FacebookIcon />
                </a>
                <a href='https://www.upwork.com/freelancers/~01a687c8f95b7913d7' target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-icon-gray hover:text-black hover:scale-125 duration-300 ">
                    <GitHubIcon width="18" height="18" />
                </a>
                <a href='https://www.upwork.com/freelancers/~01a687c8f95b7913d7' target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-icon-gray hover:text-twitter hover:scale-125 duration-300">
                    <TwitterIcon width="17.65" height="15" />
                </a>
            </div>
        </div>
    );
};
export default Footer;