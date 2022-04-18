import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { ParticleText } from "components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { faker } from "@faker-js/faker";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chuang Jia Xu</title>
      </Head>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.2} factor={3}>
          {/* background */}
          <div
            style={{ backgroundColor: "#000", width: "100%", height: "100%" }}
          >
            <div style={{ height: "100vh" }}>
              <ParticleText text={"Max\nChuang"} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1}>
          <Image
            alt="test"
            src={faker.image.abstract()}
            loader={({ src }) => src}
            layout="fill"
            priority
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
