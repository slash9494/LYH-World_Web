import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";
import GridGround from "./GridGround";
import ReactTypingEffect from "react-typing-effect";
import TechStack from "./TechStack";
import Projects from "./Projects";
import shoppingWeb from "../images/shopping-web.gif";
import Flash from "react-reveal/Flash";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";
import EjectIcon from "@material-ui/icons/Eject";

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
`;

const Ground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;

const ContentsBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;
const Wall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const StyledText = styled.div`
  font-family: "Audiowide", cursive;
  color: rgb(0, 237, 223);
  font-size: 5vw;
  transform: translate3d(0, 0, 300px);
  text-align: center;
`;

const FixedText = styled(StyledText)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
`;

const GoHomeText = styled(FixedText)`
  align-items: flex-start;
  color: rgb(233, 77, 115);
  font-size: 1vw;
  margin-top: 20px;
  cursor: pointer;
  z-index: 20;
  width: 7vw;
  height: 10vh;
  top: 0;
`;

const PageIndicator = styled.div`
  width: 20vw;
  height: 100vh;
  border-top: 3px solid yellow;
  border-bottom: 3px solid yellow;
  position: fixed;
`;

function Home() {
  const [moveZPosition, setMoveZPosition] = useState(-500);
  const [scorllvalue, setScrollValue] = useState(0);
  const [XRotateValue, setXRotateValue] = useState(0);
  const [YRotateValue, setYRotateValue] = useState(0);
  const [openScreen, setOpenScreen] = useState(false);
  const [showLine, setShowLine] = useState(false);
  function resizeHandler() {
    setScrollValue(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  }
  function scrollHandler() {
    const currentScrollValue = (window.pageYOffset / scorllvalue) * 1000 - 500;
    const delayedExec = function (after, fn) {
      let timer;
      return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, after);
      };
    };
    const scrollStopper = delayedExec(500, function () {
      setShowLine(false);
    });
    scrollStopper();
    setShowLine(true);
    setMoveZPosition(currentScrollValue);
  }
  function mousemoveHandler(e) {
    setXRotateValue((e.clientX / window.innerWidth) * 2 - 1);
    setYRotateValue(1 - (e.clientY / window.innerHeight) * 2);
  }
  function toggleOpenScreen(value) {
    setOpenScreen(value);
  }
  function toggleCloseScreen(value) {
    setOpenScreen(value);
  }
  function toggleGoHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveZPosition]);
  return (
    <>
      <AppContainer>
        <Canvas camera={{ position: [0, 0, 15] }}>
          <GridGround />
        </Canvas>
        <Ground
          style={{
            transform: `rotateY(${XRotateValue * 10}deg) rotateX(${
              YRotateValue * 10
            }deg)`,
          }}
        >
          <ContentsBox style={{ transform: `translateZ(${moveZPosition}vw)` }}>
            {showLine ? (
              <>
                {" "}
                <LeftWall>
                  {" "}
                  <div>
                    <LinearProgress style={{ backgroundColor: " #4666FF" }} />
                  </div>
                  <div style={{ marginTop: "20vw" }}>
                    <LinearProgress style={{ backgroundColor: " #4666FF" }} />
                  </div>
                </LeftWall>
                <RightWall>
                  {" "}
                  <LinearProgress style={{ backgroundColor: "#4666FF" }} />
                  <div style={{ marginTop: "20vw" }}>
                    <LinearProgress style={{ backgroundColor: " #4666FF" }} />
                  </div>
                </RightWall>
              </>
            ) : null}

            <Wall style={{ transform: `translateZ(${450}vw)` }}>
              <ContextsContainer>
                <FixedText
                  style={{
                    color: "rgb(233, 77, 115)",
                    alignItems: "flex-start",
                  }}
                >
                  <Fade top delay="1000" duration="500">
                    Welcome
                  </Fade>
                </FixedText>
                <StyledText>
                  <Fade duration="2000">LEE YUN HYEON </Fade>
                </StyledText>
              </ContextsContainer>
            </Wall>
            <Wall style={{ transform: `translateZ(${100}vw)` }}>
              <ContextsContainer>
                {window.pageYOffset >= 400 ? <PageIndicator /> : null}
                {window.pageYOffset >= 1100 ? (
                  <StyledText>
                    <ReactTypingEffect
                      text={[
                        "FrontEnd Developer 이윤현입니다. 저의 사이트를 방문해주셔서 감사합니다.",
                        "색다르고 신선한 웹개발을 추구하며, 이와 더불어 단단하고 안전성있는 웹을 구축하기 위해 노력하고 있습니다.",
                        "발전하는 기술 트렌드는 저의 원동력이 되어 항상 새로운 환경에 도전합니다.",
                      ]}
                      speed={100}
                      eraseSpeed={50}
                      eraseDelay={200}
                      typingDelay={100}
                    />
                  </StyledText>
                ) : null}
              </ContextsContainer>
            </Wall>
            <Wall
              style={{
                transform: `translateZ(${-175}vw)`,
              }}
            >
              <ContextsContainer>
                {window.pageYOffset >= 1880 && window.pageYOffset < 2500 ? (
                  <PageIndicator style={{ height: "40vh" }} />
                ) : null}
                {window.pageYOffset >= 2200 ? (
                  <>
                    <TechStack />
                    <FixedText>
                      <Zoom>Tech Stacks</Zoom>
                    </FixedText>
                  </>
                ) : null}
              </ContextsContainer>
            </Wall>
            {window.pageYOffset >= 1400 && openScreen === true ? (
              <>
                <Flash>
                  <LeftWall>
                    <StyledText
                      style={{
                        marginLeft: "995vw",
                      }}
                    >
                      <img src={shoppingWeb} alt="shopping-web" />
                    </StyledText>
                  </LeftWall>
                  <RightWall />
                </Flash>
              </>
            ) : null}
            <Wall style={{ transform: `translateZ(${-500}vw)` }}>
              {window.pageYOffset >= 3400 ? (
                <ContextsContainer>
                  <Projects
                    openScreen={toggleOpenScreen}
                    closeScreen={toggleCloseScreen}
                  />
                  <GoHomeText onClick={toggleGoHome}>
                    <Fade top delay="2000">
                      <div>
                        <EjectIcon style={{ fontSize: "2vw" }} />
                        <div>GoHome</div>
                      </div>
                    </Fade>
                  </GoHomeText>
                  <FixedText>
                    <Zoom duration="1200">Projects</Zoom>{" "}
                  </FixedText>
                </ContextsContainer>
              ) : null}
            </Wall>
          </ContentsBox>
        </Ground>
      </AppContainer>
    </>
  );
}

export default Home;
