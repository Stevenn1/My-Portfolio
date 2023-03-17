import React, { ReactElement, useState, useEffect } from "react";
import {
  Container,
  Logo,
  Image,
  Title,
  Title2,
  StyledNavLink,
} from "../design/DesignHomePage";
import { Part1, Content } from "../design/DesignMyProjectPage";
import ConfidentialLink from "../components/ConfidentialLink";
import styled from "styled-components";

export const handleClick = () => {
  window.scrollTo(0, 0);
};

export const StyledTitle = styled(Title)`
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 678px) {
    display: flex;
    justify-content: center !important;
    margin: auto !important;
    text-align: center !important;
  }
`;

export const StyledTitle2 = styled(Title2)`
  margin-bottom: 50px;
  text-align: center;
`;

const CardTitle2 = styled(Title2)`
  text-align: center;
`;

export const ContentCards = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;

  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  width: 325px;
  min-height: 350px;
  background: linear-gradient(180deg, #000000 0%, #333333 120%);
  box-shadow: 0px 4px 6px rgba(253, 251, 251, 0.2);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(231, 229, 229, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }

  @media screen and (max-width: 709px) {
    margin-bottom: 100px;
  }
`;

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  width: 325px;
  min-height: 350px;
  background: linear-gradient(180deg, #000000 0%, #333333 120%);
  box-shadow: 0px 4px 6px rgba(253, 251, 251, 0.2);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(231, 229, 229, 0.35) 0px 5px 15px;
    transform: scale(1.05);
  }
`;

export const CardHeader = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 325px;
  height: 250px;
  max-height: 50%;
  background-color: blue;
  object-fit: cover;
`;

export const CardFieldset = styled.fieldset`
  display: flex;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 12px 0;
  margin-top: 20px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: #1c7293;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Description = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #ffffff;
  padding: 0 25px 0 25px;
  margin-bottom: 0;
  text-align: center;
`;

export const ContainerOutro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 50px auto;
  width: 550px;

  @media screen and (max-width: 599px) {
    width: 100vw;
    justify-content: space-between;
    margin: auto;
  }
`;

export const MyTitleProject = styled.h3`
  margin: 80px 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2.3rem;
  font-weight: 300;
  color: #99e1d9;

  @media screen and (max-width: 500px) {
    width: 300px;
    justify-content: space-between;
    margin: 50px auto 0 auto;
  }
`;

export const MyTextProject = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #ffffff;

  @media screen and (max-width: 570px) {
    width: 300px;
    margin: 10px auto 0 auto;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 500px;
  height: 50px;
  padding-top: 20px;

  @media screen and (max-width: 570px) {
    margin: auto;
    width: 300px;
  }
`;

export const ContainerArrowLeft = styled.div`
  display: flex;
  cursor: pointer;
  color: #000;
  &:hover {
    color: #99e1d9 !important;
    transform: translateX(-5px);
    transition: transform 0.2s ease-in-out;
  }
`;

export const ContainerArrowRight = styled(ContainerArrowLeft)`
  &:hover {
    transform: translateX(5px);
    transition: transform 0.2s ease-in-out;
  }
`;

export const ArrowLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50px;
  stroke: #ffffff;

  &:hover {
    stroke: #99e1d9;
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  justify-content: flex-end;
`;

export const TextArrow = styled(MyTextProject)`
  margin-top: 10px;
  padding: 5px;
  color: #ffffff;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #99e1d9 !important;
  }

  @media screen and (max-width: 570px) {
    width: 60px;
  }
`;

const ImageProjectPage = styled(Image)`
  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

export default function MyProject(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container className={loaded ? "loaded" : ""}>
      <Logo>
        <img src="/sm.png" alt="" width="60" />
      </Logo>
      <Content>
        <Part1>
          <StyledTitle className="card-title">Mes Projets</StyledTitle>
          <StyledTitle2>Lorem ipsum dolor sit amet consectetur.</StyledTitle2>

          <ContentCards>
            <Card>
              <CardHeader src="/dev1.jpg" alt="" />
              <CardTitle2>Project 1</CardTitle2>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam enim sunt facere fuga tempore voluptatem dolores ipsum.
                Libero molestias esse, repudiandae voluptatibus aspernatur et
                dolorem cumque quaerat. Rem, inventore maiores! lorem
              </Description>
              <CardFieldset>
                <CardButton type="button">GitHub</CardButton>
              </CardFieldset>
            </Card>

            <Card2>
              <CardHeader src="dev3.jpg" alt="" />
              <CardTitle2>Project 2</CardTitle2>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam enim sunt facere fuga tempore voluptatem dolores ipsum.
                Libero molestias esse, repudiandae voluptatibus aspernatur et
                dolorem cumque quaerat. Rem, inventore maiores! lorem
              </Description>
              <CardFieldset>
                <CardButton type="button">GitHub</CardButton>
              </CardFieldset>
            </Card2>
          </ContentCards>

          <ContainerOutro>
            <MyTitleProject>Lorem ipsum dolor sit amet.</MyTitleProject>

            <MyTextProject>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium exercitationem tempore veniam quisquam sequi ea
                dignissimos voluptatem ducimus harum repellendus explicabo,
                maiores ullam sit nulla ab cumque omnis. In, repudiandae. <br />
                Temporibus qui alias facere repudiandae quos perspiciatis nam
                eveniet neque assumenda nulla a vitae illo fuga aliquam delectus
                aliquid distinctio dolor, aut inventore obcaecati soluta
                doloremque ex. Delectus, in. Iusto.
              </p>
              <ContainerNav>
                <StyledNavLink to="/">
                  <ContainerArrowLeft>
                    <ArrowLeft>
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <title />
                        <g id="arrow-left">
                          <line
                            className="cls-1"
                            x1="3"
                            x2="29"
                            y1="16"
                            y2="16"
                          />
                          <line
                            className="cls-1"
                            x1="3"
                            x2="7"
                            y1="16"
                            y2="11"
                          />
                          <line
                            className="cls-1"
                            x1="3"
                            x2="7"
                            y1="16"
                            y2="21"
                          />
                        </g>
                      </svg>
                    </ArrowLeft>
                    <TextArrow>Retour</TextArrow>
                  </ContainerArrowLeft>
                </StyledNavLink>
                <StyledNavLink onClick={handleClick} to="/contact">
                  <ContainerArrowRight>
                    <TextArrow>Contact</TextArrow>
                    <ArrowRight>
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <g id="arrow-right">
                          <line
                            className="cls-1"
                            x1="29.08"
                            x2="3.08"
                            y1="16"
                            y2="16"
                          />
                          <line
                            className="cls-1"
                            x1="29.08"
                            x2="25.08"
                            y1="16"
                            y2="21"
                          />
                          <line
                            className="cls-1"
                            x1="29.08"
                            x2="25.08"
                            y1="16"
                            y2="11"
                          />
                        </g>
                      </svg>
                    </ArrowRight>
                  </ContainerArrowRight>
                </StyledNavLink>
              </ContainerNav>
            </MyTextProject>
          </ContainerOutro>
        </Part1>
        <ImageProjectPage src="/urban.jpg" alt="" />
      </Content>
      <ConfidentialLink />
    </Container>
  );
}
