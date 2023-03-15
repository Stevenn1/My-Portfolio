import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import { handleClick } from "./MyProject";
import {
  Container,
  Logo,
  Content,
  Image,
  Part1,
  StyledNavLink,
} from "../design/DesignHomePage";
import {
  ContainerNav,
  ContainerArrowLeft,
  ArrowLeft,
  TextArrow,
} from "../pages/MyProject";

export const StyledPart1 = styled(Part1)`
  margin-top: 180px;
  padding-bottom: 150px;
  height: 100vh;

  @media screen and (max-width: 1205px) {
    display: flex;
  }
`;

const CenteredContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1205px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerlogoHome = styled.div`
  display: flex;
  margin-right: 225px;
  fill: #ffffff;
  transition: transform 0.2s ease-out;

  &:hover {
    fill: #99e1d9;
    transform: scale(1.2);
  }

  @media screen and (max-width: 1205px) {
    margin: 0 0 0 40px;
  }
`;

const ContainerNavContact = styled(ContainerNav)`
  @media screen and (max-width: 1205px) {
    width: 340px;
    display: flex;
    justify-content: flex-start;
  }

  @media screen and (max-width: 430px) {
    width: 200px;
    display: flex;
    justify-content: space-between !important;
    margin-left: 0px;
  }
`;

export default function Contact(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container className={loaded ? "loaded" : ""}>
      <Logo>
        <img src="/sm.png" alt="" width="60" />
      </Logo>

      <CenteredContent>
        <StyledPart1>
          <h1>Lorem, ipsum dolor.</h1>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <div className="contactPage">
            <h3>Me contacter</h3>
            <div>
              <Form />
            </div>
          </div>
          <ContainerNavContact>
            <StyledNavLink onClick={handleClick} to="/My-Project">
              <ContainerArrowLeft>
                <ArrowLeft>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs>
                    <title />
                    <g id="arrow-left">
                      <line className="cls-1" x1="3" x2="29" y1="16" y2="16" />
                      <line className="cls-1" x1="3" x2="7" y1="16" y2="11" />
                      <line className="cls-1" x1="3" x2="7" y1="16" y2="21" />
                    </g>
                  </svg>
                </ArrowLeft>
                <TextArrow>Retour</TextArrow>
              </ContainerArrowLeft>
            </StyledNavLink>
            <StyledNavLink to="/">
              <ContainerlogoHome>
                <svg
                  enableBackground="new 0 0 48 48"
                  height="40px"
                  version="1.1"
                  viewBox="0 0 48 48"
                  width="40px"
                >
                  <g id="Expanded">
                    <g>
                      <g>
                        <path d="M42,48H28V35h-8v13H6V27c0-0.552,0.447-1,1-1s1,0.448,1,1v19h10V33h12v13h10V28c0-0.552,0.447-1,1-1s1,0.448,1,1V48z" />
                      </g>
                      <g>
                        <path d="M47,27c-0.249,0-0.497-0.092-0.691-0.277L24,5.384L1.691,26.723c-0.399,0.381-1.032,0.368-1.414-0.031     c-0.382-0.399-0.367-1.032,0.031-1.414L24,2.616l23.691,22.661c0.398,0.382,0.413,1.015,0.031,1.414     C47.526,26.896,47.264,27,47,27z" />
                      </g>
                      <g>
                        <path d="M39,15c-0.553,0-1-0.448-1-1V8h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h8v8C40,14.552,39.553,15,39,15z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </ContainerlogoHome>
            </StyledNavLink>
          </ContainerNavContact>
        </StyledPart1>
        <Image src="/1.jpg" alt="" />
      </CenteredContent>
    </Container>
  );
}
