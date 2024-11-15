import Container from "@components/Container";
import EpisodeBlock from "./home/EpisodeBlock";

import ArrowRightTranscript from "@components/icon/ArrowRightTranscript";
import LinkFacGitTwit from "@components/LinkFacGitTwit";
import LatestPost from "./home/LatestPost";
import FormComments from "@components/Function/FormComments";
import Comments from "@components/Function/Comments";


const EpisodeSinglePage = () => {
    return(


<Container  style='flex-col items-center'> 
<EpisodeBlock />
<p className=" heading4-regular text-icon-gray pt-16 md:pt-24 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum. 
</p>
<p className="text-light-col heading2 pt-10">Makemeup Podcast Theme </p>
<p className="heading4-regular pt-6 text-icon-gray ">
  <p>Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.</p>  
Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.
</p>
<div className="mt-12 border  border-br-gray w-full p-6">
    <div className="flex   gap-[10px] items-center">
    <p className="heading2 text-light-col">Listening time: 86 minutes  |  View transcript</p>
<ArrowRightTranscript/>
    </div>
</div>
<div className="flex gap-6 heading4-regular gap-y-3 pt-12 text-icon-gray flex-wrap w-full">
<p>#Apple</p>
<p>#Keynote</p>
<p>#Product</p>

</div>
<div className="flex w-full items-center gap-6 py-10 border-y border-br-gray mt-6">
    <p>Share:</p>
    <LinkFacGitTwit/>
</div>
<LatestPost styles='hidden '/>
<div className="border-y border-br-gray py-12 mt-12 w-full ">
<p className="heading4-regular text-light-col">Leave a Reply</p>
<p className="heading5-regular text-gray-light">Required fields are marked*</p>
<FormComments/>
</div>
<Comments/>
</Container>

    );
};
export default EpisodeSinglePage;