import styled from "styled-components";
import { Image, Title, Title2 } from "../design/DesignHomePage";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";

export const Part1 = styled.div`
  margin-top: 100px;
  text-align: center;
  width: 60%;

  @media screen and (max-width: 1340px) {
    width: 100%;
  }

  @media screen and (max-width: 717px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: #191919;
  flex-grow: 2;
  padding: 0;

  @media screen and (max-width: 1340px) {
    flex-direction: column;
  }
`;

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

export const CardTitle2 = styled(Title2)`
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
  background-image: url("/SiteAbdouAvocat.png");
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

export const NavLinkCustom = styled(NavLink)`
  width: 100%;
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
    margin-bottom: 80px;
  }
`;

export const MyTitleProject = styled.h3`
  margin: 80px 0 10px 0;
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
  height: 0px;
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (max-width: 570px) {
    margin: auto;
    width: 300px;
  }
`;

export const ContainerArrowLeft = styled.div`
  display: flex;
  width: 130px;
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

export const StyledIcon = styled(Icon)`
  color: #ffffff;
  margin-top: 7px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 0.5rem;
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

export const ImageProjectPage = styled(Image)`
  background-image: url("/urban.jpg");
  @media screen and (max-width: 1340px) {
    display: none;
  }
`;
