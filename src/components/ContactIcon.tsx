import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkContactIcon = styled(NavLink)`
  width: 70px;
  fill: #99e1d9;
  position: fixed;
  bottom: 50px;
  right: 50px;

  @media screen and (max-width: 680px) {
    width: 40px;
  }

  &:hover {
    transition: transform 0.5s ease-in-out;
    transform: rotate(360deg);
  }
`;

export const LinkContactIcon2 = styled(NavLink)`
  width: 70px;
  fill: #191919;
  position: fixed;
  bottom: 50px;
  right: 50px;

  @media screen and (max-width: 1340px) {
    fill: #99e1d9;
  }
  @media screen and (max-width: 680px) {
    width: 40px;
    fill: #99e1d9;
  }

  &:hover {
    transition: transform 0.5s ease-in-out;
    transform: rotate(360deg);
  }
`;
