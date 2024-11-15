import Container from "@components/Container";
import EpisodeBlock from "./EpisodeBlock";
import RecommendedCard from "./RecommendedCard";
import TeamCard from "./TeamCard";
import LatestPost from "./LatestPost";




const Home = () => {
    return (
        <>
            <Container style='justify-center flex-col items-center' >
                <EpisodeBlock />
                <RecommendedCard styles='pt-16 md:pt-24' />
                <TeamCard />
                <LatestPost />
            </Container>




        </>
    )
}

export default Home;
