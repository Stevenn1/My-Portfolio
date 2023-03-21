import React, { ReactElement, useState, useEffect } from "react";
import { LinkContactIcon2 } from "../components/ContactIcon";
import { Container, Logo, StyledNavLink } from "../design/DesignHomePage";
import {
  Part1,
  Content,
  StyledTitle,
  StyledTitle2,
  CardTitle2,
  ContentCards,
  Card,
  Card2,
  CardHeader,
  CardFieldset,
  CardButton,
  NavLinkCustom,
  Description,
  ContainerOutro,
  MyTitleProject,
  MyTextProject,
  ContainerNav,
  ContainerArrowLeft,
  ContainerArrowRight,
  ArrowLeft,
  ArrowRight,
  TextArrow,
  ImageProjectPage,
  StyledIcon,
} from "../design/DesignMyProjectPage";
import ConfidentialLink from "../components/ConfidentialLink";

import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";

export const handleClick = () => {
  window.scrollTo(0, 0);
};

export default function MyProject(): ReactElement {
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
      <Content>
        <Part1>
          <StyledTitle className="card-title">Mes Projets</StyledTitle>
          <StyledTitle2>Découvrez mes projets et créations</StyledTitle2>

          <ContentCards>
            <Card>
              <CardHeader src="/SiteAbdouAvocat.png" alt="Image d'un site web de cabinet d'avocat" />
              <CardTitle2>Cabinet d'avocat</CardTitle2>
              <Description>
                Création d'un site web pour un avocat comprenant un blog pour
                partager des articles juridiques, un système de connexion
                sécurisé pour les utilisateurs, une page pour la prise de
                rendez-vous et une page contact pour que les visiteurs puissent
                facilement entrer en contact avec l'avocat.
              </Description>
              <CardFieldset>
                <NavLinkCustom to="https://github.com/Stevenn1/Site-Portfolio-Cabinet-Avocat">
                  <CardButton type="button">GitHub</CardButton>
                </NavLinkCustom>
              </CardFieldset>
            </Card>

            <Card2>
              <CardHeader
                src="dev3.jpg"
                alt="Mise en scène d'un projet de développement web, avec un ordinateur, une tablette, un clavier et un téléphone sur une table."
              />
              <CardTitle2>Projet en Développement</CardTitle2>
              <Description>
                En cours de Création... <br /> Disponible Bientôt
              </Description>
              <CardFieldset>
                <CardButton type="button">GitHub</CardButton>
              </CardFieldset>
            </Card2>
          </ContentCards>

          <ContainerOutro>
            <MyTitleProject>Donnez vie à votre projet</MyTitleProject>

            <MyTextProject>
              <p>
                Mes projets de création de sites web reflètent ma passion pour
                l'innovation et l'adaptation aux dernières technologies et
                tendances.
              </p>
              <p>
                Je m'assure de comprendre les besoins des clients pour leur
                fournir un service sur mesure, tout en garantissant la qualité
                et la performance de chaque projet. Je suis fier de mes
                réalisations passées et je suis toujours prêt à travailler avec
                de nouveaux clients pour les aider à réaliser leur vision en
                ligne.
              </p>
              <p>
                Si vous êtes intéressé par mes compétences et ma passion pour la
                création de sites web, n'hésitez pas à jeter un coup d'œil à mes
                projets et à me contacter pour discuter de vos besoins. Je
                serais ravi de discuter de la façon dont je peux contribuer à
                vos projets.
              </p>

              <ContainerNav>
                <StyledNavLink to="/">
                  <ContainerArrowLeft>
                    <ArrowLeft>
                      <StyledIcon path={mdiArrowLeft} size={1} />
                    </ArrowLeft>
                    <TextArrow>Retour</TextArrow>
                  </ContainerArrowLeft>
                </StyledNavLink>
                <StyledNavLink onClick={handleClick} to="/contact">
                  <ContainerArrowRight>
                    <TextArrow>Contact</TextArrow>
                    <ArrowRight>
                      <StyledIcon path={mdiArrowRight} size={1} />
                    </ArrowRight>
                  </ContainerArrowRight>
                </StyledNavLink>
              </ContainerNav>
            </MyTextProject>
          </ContainerOutro>
        </Part1>
        <ImageProjectPage
          src="/imagePart2.jpg"
          alt="Un ordinateur, un feuille blanche et un stylo posés sur une table."
        />
      </Content>
      <ConfidentialLink />
      <LinkContactIcon2 to="/contact">
        <svg
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM108.159,344.493 L191.319,265.831 L108.159,197.002 L108.159,344.493 ZM403.839,147.838 L108.159,147.838 L108.159,177.337 L255.999,305.162 L403.839,177.337 L403.839,147.838 ZM403.839,197.002 L320.679,265.831 L403.839,344.493 L403.839,197.002 ZM311.439,275.663 L255.999,324.827 L200.559,275.663 L108.159,364.158 L403.839,364.158 L311.439,275.663 Z" />
        </svg>
      </LinkContactIcon2>
    </Container>
  );
}
