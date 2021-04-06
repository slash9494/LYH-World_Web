import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuBox from "./MenuBox";
import { Canvas, useFrame } from "react-three-fiber";

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
  border: 3px solid red;
`;

const Ground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  border: 3px solid blue;
`;

const ContentsBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  border: 3px solid yellow;
  transform: translateZ(-500vw);
`;
const Wall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
`;

const LeftWall = styled(Wall)`
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-500vw);
`;

const RightWall = styled(Wall)`
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-400vw);
`;

const ContextsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #333;
  font-size: 10em;
`;

const MenuContainer = styled.div`
  position: relative;
  width: 20%;
  z-index: 1;
  transform-style: preserve-3d;
`;

function Home() {
  const [moveZPosition, setMoveZPosition] = useState(-500);
  const [scorllvalue, setScrollValue] = useState(0);
  const [XRotateValue, setXRotateValue] = useState(0);
  const [YRotateValue, setYRotateValue] = useState(0);
  const currentScrollValue = (window.pageYOffset / scorllvalue) * 1000 - 500;
  function resizeHandler() {
    setScrollValue(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
    console.log("playResize", scorllvalue);
  }
  function scrollHandler() {
    setMoveZPosition(currentScrollValue);
    console.log(scorllvalue);
  }
  function mousemoveHandler(e) {
    setXRotateValue((e.clientX / window.innerWidth) * 2 - 1);
    setYRotateValue(1 - (e.clientY / window.innerHeight) * 2);
  }
  useEffect(() => {
    window.addEventListener("mousemove", mousemoveHandler);
    return () => window.removeEventListener("mousemove", mousemoveHandler);
  }, []);
  useEffect(() => {
    setScrollValue(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [moveZPosition]);

  return (
    <AppContainer>
      <MenuContainer>
        <Canvas>
          <ambientLight intensity={1} />
          <MenuBox position={[-1.2, 0, 0]} />
        </Canvas>
      </MenuContainer>
      <Ground
        style={{
          transform: `rotateY(${XRotateValue * 10}deg) rotateX(${
            YRotateValue * 10
          }deg)`,
        }}
      >
        <ContentsBox style={{ transform: `translateZ(${moveZPosition}vw)` }}>
          <LeftWall></LeftWall>
          <RightWall />
          <Wall style={{ transform: `translateZ(${450}vw)` }}>
            <ContextsContainer>Hello</ContextsContainer>
          </Wall>
          <Wall style={{ transform: `translateZ(${250}vw)` }}>
            <ContextsContainer>CoCa</ContextsContainer>
          </Wall>
          <Wall style={{ transform: `translateZ(${-100}vw)` }}>
            <ContextsContainer>LetGo</ContextsContainer>
          </Wall>
          <Wall style={{ transform: `translateZ(${-450}vw)` }}>
            <ContextsContainer>ZIZI</ContextsContainer>
          </Wall>
        </ContentsBox>
      </Ground>
    </AppContainer>
  );
}

export default Home;
