import React from "react";
import styled from "styled-components";
import { StyledText } from "./Home";
import Fade from "react-reveal/Fade";

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
`;

const Star = styled.div`
  color: #e64980;
  font-size: 2vw;
  text-shadow: 0px 0px 15px #ff6b6b;
`;

const Text = styled.div`
  width: 100%;
  padding: 7px 0;
`;

const Span = styled.div`
  display: flex;
  align-items: center;
`;

function TechStack() {
  return (
    <>
      <Fade delay="1000">
        <TextContainer>
          <StyledText
            style={{ textAlign: "start", fontSize: "2vw", color: "white" }}
          >
            <Text
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              [Front]
            </Text>
            <Text>
              <Span>
                <span class="material-icons">
                  <Star>star</Star>
                </span>
                <span>Javascript & Typescript</span>
              </Span>
            </Text>
            <Text>
              <Span>
                <span class="material-icons">
                  <Star>star</Star>
                </span>
                <span>React</span>
              </Span>
            </Text>
            <Text>
              <Span>
                <span class="material-icons">
                  <Star>star</Star>
                </span>
                <span>Redux</span>
              </Span>
            </Text>
            <Text>
              <span>NEXT.js</span>
            </Text>
            <Text>
              <span>Styled-Components</span>
            </Text>
            <Text>
              <span>Material-Ui</span>
            </Text>
            <Text>
              <span>Atomic-design</span>
            </Text>
            <Text>
              <span>Apollo</span>
            </Text>
          </StyledText>
        </TextContainer>
      </Fade>
      <Fade delay="2000">
        <TextContainer>
          <StyledText
            style={{ textAlign: "end", fontSize: "2vw", color: "white" }}
          >
            <Text
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              [BackEnd & ETC]
            </Text>
            <Text>
              <span>Node.js</span>
            </Text>
            <Text>
              <span>Express.js</span>
            </Text>
            <Text>
              <span>GraphQL</span>
            </Text>
            <Text>
              <span>MongoDB</span>
            </Text>
          </StyledText>
        </TextContainer>
      </Fade>
    </>
  );
}

export default TechStack;
