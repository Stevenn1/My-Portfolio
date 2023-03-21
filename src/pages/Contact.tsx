import React, { ReactElement, useState, useEffect } from "react";
import Form from "../components/Form";
import { handleClick } from "./MyProject";
import { Container, Logo, StyledNavLink } from "../design/DesignHomePage";
import {
  ContainerArrowLeft,
  ArrowLeft,
  TextArrow,
} from "../design/DesignMyProjectPage";
import {
  CenteredContent,
  StyledPart1,
  ConfidentialLinkCustom,
  ContainerNavContact,
  ContainerlogoHome,
  ImageContact,
} from "../design/DesigneContactPage";
import { StyledIcon } from "../design/DesignMyProjectPage";
import { mdiArrowLeft } from "@mdi/js";

export default function Contact(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container className={loaded ? "loaded" : ""}>
      <Logo>
        <img
          src="/MS.png"
          alt="Logo rond avec les lettres M et S à l'intérieur"
          width="60"
        />
      </Logo>

      <CenteredContent>
        <StyledPart1>
          <h1>Réalisons vos projets</h1>
          <h2>Ensemble, donnons vie à vos idées.</h2>
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
                  <StyledIcon path={mdiArrowLeft} size={1} />
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
        <ImageContact
          src="/contact.jpg"
          alt="Personne tapant un message sur un téléphone"
        />
      </CenteredContent>
      <ConfidentialLinkCustom />
    </Container>
  );
}
