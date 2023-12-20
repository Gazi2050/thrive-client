import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Featured from "./Featured";
import AboutUs from "./AboutUs";
import Newsletter from "./Newsletter";
import Team from "./Team";
import Review from "./Review";
import ForumBlog from "./ForumBlog";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Thrive | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <Team></Team>
            <Review></Review>
            <ForumBlog></ForumBlog>
            <Newsletter></Newsletter>
        </div >
    );
};

export default Home;