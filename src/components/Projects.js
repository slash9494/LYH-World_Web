import React from "react";
import styled from "styled-components";
import { StyledText } from "./Home";
import Fade from "react-reveal/Fade";

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;
`;
const Text = styled.div`
  width: 100%;
  padding: 7px 0;
  font-size: 1vw;
`;

const Button = styled.span`
  background: #38d9a9;
  border: transparent;
  margin-right: 10px;
  border-radius: 5px;
  color: #343a40;
  padding: 3px;
  font-size: 0.7vw;
  cursor: pointer;
`;

const Border = styled.div`
  width: 100%;
  height: 5px;
  background: rgb(0, 237, 223);
  margin: 20px 0;
`;

const Pending = styled.div`
  font-size: 1vw;
  color: #e64980;
  text-shadow: 0px 0px 15px #ff6b6b;
`;

const Span = styled.div`
  display: flex;
  align-items: center;
`;

function Projects(props) {
  const openButton = () => {
    props.openScreen(true);
  };
  const closeButton = () => {
    props.closeScreen(false);
  };
  return (
    <>
      <TextContainer>
        <Fade delay="1000">
          <StyledText
            style={{ textAlign: "start", fontSize: "2vw", color: "white" }}
          >
            <Text style={{ fontSize: "1.5vw", padding: "4px 0" }}>
              개인 e-comerce 사이트 - 프론트 및 백엔드
            </Text>
            <Text>
              material-ui 및 styled-components를 이용한 반응형 ui 구축
              <br />
              redux,redux-saga를 이용한 전역 상태관리
              <br />
              nextJS를 통한 SSR & CSR 웹 구축
              <br />
              nodeJS,expressJS기반 서버 구축
              <br />
              mongoDB,cloudinary를 이용한 클라우드 데이터베이스 구축
              <br />
              <span>
                <Button onClick={openButton}>show screen</Button>
                <Button onClick={closeButton}>close</Button>
              </span>
            </Text>
            <Border />
            <Text style={{ fontSize: "1.5vw", padding: "4px 0" }}>
              개발자,디자이너 연합 동아리 - [디프만]
            </Text>
            <Text>
              <Span>
                <span class="material-icons">
                  <Pending>pending</Pending>
                </span>
                프로젝트 진행중...
              </Span>
            </Text>
          </StyledText>
        </Fade>
      </TextContainer>
      <TextContainer>
        <Fade delay="1500">
          <StyledText
            style={{ textAlign: "end", fontSize: "2vw", color: "white" }}
          >
            <Text style={{ fontSize: "1.5vw", padding: "4px 0" }}>
              [프롭웨이브]
              <br />
              부동산 웹플랫폼 "집톡" 프론트 개발
            </Text>
            <Text>
              <Span>
                <span class="material-icons">
                  <Pending>pending</Pending>
                </span>
                프로젝트 진행중...
              </Span>
            </Text>
            <Border />
          </StyledText>
        </Fade>
      </TextContainer>
    </>
  );
}

export default Projects;
