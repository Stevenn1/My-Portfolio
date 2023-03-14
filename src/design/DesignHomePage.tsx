import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Partie style de la page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 1000px;
  align-items: stretch;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.loaded {
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #191919;
  flex-grow: 2;
  padding: 0;

  @media screen and (max-width: 999px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FirstIntro = styled.div`
  display: inline-block;
  max-width: 800px;
  position: absolute;
  left: 20%;

  @media screen and (max-width: 999px) {
    left: 10%;
  }
`;

export const Part1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
  width: 60px;
  height: 60px;
`;

export const Image = styled.img`
  width: 50%;
  min-height: 100vh;

  @media screen and (max-width: 999px) {
    width: 100%;
    margin-top: 100px;
  }
`;

export const Title = styled.h1`
  color: #99e1d9;
  font-size: 35px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 679px) {
    margin-top: 150px;
    display: flex;
    width: 300px;
    font-size: 30px;
  }
`;

export const Title2 = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #ffffff;
  margin-bottom: 0;
`;

export const Presentation = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #ffffff;

  @media screen and (max-width: 1000px) {
    display: flex;
    width: 550px;
  }

  @media screen and (min-width: 680px) and (max-width: 1024px) {
    display: flex;
    width: 550px;
  }

  @media screen and (max-width: 679px) {
    display: flex;
    width: 400px;
    padding-right: 100px;
  }
  @media screen and (max-width: 550px) {
    display: flex;
    width: 300px;
    padding-right: 100px;
    text-align: center;
  }
`;

export const Arrow = styled.div`
  fill: #99e1d9;
  margin: 50px 0 15px 100px;
  width: 60px;
  height: 60px;
`;

export const Joint = styled.div`
  margin-left: 150px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #99e1d9;
    text-decoration: underline;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #99e1d9;
  }
`;
