import OurStory from "@Components/pages/home/OurStory";
import HomeOne from "@Components/pages/home/HomeOne";
import HomeTwo from "@Components/pages/home/HomeTwo";
import HomeTwoData from "@Components/pages/home/HomeTwoData";

import ourStory from "@Root/content/ourstory.json";
import question from "@Root/content/hometwodata.json";

export interface IOurStory {
  title: string;
  description: Array<string>;
}

export interface IHomeTwo {
  quote: string;
  questions: Array<{ question: string; answer: string }>;
}

const Home = () => {
  return (
    <div>
      <HomeOne />
      <div className="min-h-screen flex items-center">
        <OurStory data={ourStory} />
      </div>
      <HomeTwo />
      <div className="min-h-screen py-8">
        <HomeTwoData data={question} />
      </div>
    </div>
  );
};

export default Home;
