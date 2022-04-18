//types
import type { FC } from "react";

import { useEffect, useRef } from "react";
// three
import * as THREE from "three";
import {
  FontLoader,
  Font as ThreeFont,
} from "three/examples/jsm/loaders/FontLoader";
import Environment from "./particleEngine";

import clsx from "clsx";

export const ParticleText: FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const manager = new THREE.LoadingManager();

    let fontFamily: ThreeFont | null = null;
    new FontLoader(manager).load(
      "/assets/fonts/PoiretOne_Regular.json",
      (responseFont) => {
        fontFamily = responseFont;
      }
    );

    const particle = new THREE.TextureLoader(manager).load(
      "/assets/images/particle.png"
    );

    manager.onLoad = () => {
      fontFamily &&
        new Environment(
          fontFamily,
          particle,
          text,
          containerRef.current as HTMLElement
        );
    };
  });

  return <div className={clsx("w-full", "h-full")} ref={containerRef} />;
};
