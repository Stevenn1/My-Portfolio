import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Partie style de la page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
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
`;

export const FirstIntro = styled.div`
  position: absolute;
  left: 20%;
  width: 800px;
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

export const MenuIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  fill: white;
  stroke: white;
`;

export const Image = styled.img`
  width: 50%;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #99e1d9;
  font-size: 35px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 0;
  margin-bottom: 0;
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