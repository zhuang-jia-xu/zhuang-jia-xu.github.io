import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { ParticleText, BouncingChevron } from "components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { faker } from "@faker-js/faker";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chuang Jia Xu</title>
      </Head>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={2} factor={3}>
          {/* background */}
          <div className="h-full w-full bg-black ">
            <div className="h-screen relative">
              <ParticleText text={"Max\nChuang"} />
              <div className="flex w-full justify-center absolute top-3/4">
                <BouncingChevron />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1} sticky={{ start: 0.8, end: 3 }}>
          {/* <Image
            alt="test"
            src={faker.image.abstract()}
            loader={({ src }) => src}
            layout="fill"
            priority
          /> */}
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
