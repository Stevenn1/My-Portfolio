import React, { ReactElement } from "react";
import styled from "styled-components";

const RedText = styled.p`
  color: red;
`;

type HelloProps = {
  name: string;
  age?: number;
};

export default function Hello(props: HelloProps): ReactElement {
  if (!props.age) {
    return <RedText> Bonjour {props.name} je ne connais pas votre age</RedText>;
  }
  return (
    <RedText>
      Hello {props.name} vous avez {props.age}
    </RedText>
  );
}
