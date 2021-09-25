import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";

import OurStory from "@Components/pages/home/OurStory";
import HomeOne from "@Components/pages/home/HomeOne";
import HomeTwo from "@Components/pages/home/HomeTwo";
import HomeTwoData from "@Components/pages/home/HomeTwoData";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <HomeOne />
      <div className="min-h-screen flex items-center">
        <OurStory data={data} />
      </div>
      <HomeTwo />
      <div className="min-h-screen flex items-center">
        <HomeTwoData />
      </div>
    </div>
  );
};

export interface IData {
  title: string;
  description: Array<string>;
}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await (
    await axios.get("http://localhost:3000/content/ourstory.json")
  ).data;
  return { props: { data } };
};

export default Home;
