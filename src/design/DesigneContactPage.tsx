import styled from "styled-components";
import { Content, Image, Part1 } from "../design/DesignHomePage";
import ConfidentialLink from "../components/ConfidentialLink";
import { ContainerNav } from "../design/DesignMyProjectPage";

export const StyledPart1 = styled(Part1)`
  margin-top: 200px;
  padding-bottom: 200px;
  height: 100vh;

  @media screen and (max-width: 1205px) {
    display: flex;
  }
`;

export const CenteredContent = styled(Content)`
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

export const ContainerNavContact = styled(ContainerNav)`
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

export const ImageContact = styled(Image)`
  height: 100%;

  @media screen and (max-width: 1205px) {
    display: none;
  }
`;

export const ConfidentialLinkCustom = styled(ConfidentialLink)`
  background: linear-gradient(180deg, #ffffff80 0%, #413f3f 100%) !important;
  box-shadow: rgba(172, 177, 176, 0.378) 0px 48px 100px 0px !important;
  position: absolute;
  bottom: 0;
`;
