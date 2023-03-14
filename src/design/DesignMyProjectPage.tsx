import styled from "styled-components";

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
