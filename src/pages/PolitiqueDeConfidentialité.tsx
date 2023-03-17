import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Logo, Title2 } from "../design/DesignHomePage";
import { StyledNavLink } from "../design/DesignHomePage";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 130px 200px 0 200px;
  padding-bottom: 100px;
  background-color: #191919;
  height: 100%;
  overflow: auto;

  @media screen and (max-width: 839px) {
    padding: 130px 80px 0 80px;
  }

  @media screen and (max-width: 505px) {
    padding: 130px 30px 0 30px;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 839px) {
    padding: 130px 80px 0 80px;
    text-align: center;
    padding: 0;
  }
`;

const Title2Styled = styled(Title2)`
  font-size: 30px;
  text-align: start;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #ffffff;
`;

const ContentIntro = styled.div`
  display: flex;
  justify-content: center;
`;

const TextIntro = styled.p`
  color: #ffffff;
  text-align: center;
  max-width: 730px;
`;

const StyledLink = styled(StyledNavLink)`
  width: 50px;
`;

const LogoHome = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 0 auto;
  fill: #ffffff;
  width: 50px;

  &:hover {
    fill: #99e1d9;
    transform: scale(1.2);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
`;

export default function PolitiqueConfidential(): ReactElement {
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
        <Title>Politique de confidentialité</Title>
        <ContentIntro>
          <TextIntro>
            "Je suis très attaché à la protection de votre vie privée lorsque
            vous visitez mon site web et utilisez mes services. Je suis
            conscient de l'importance de la confidentialité <br />
            des données personnelles et je prends toutes les mesures nécessaires
            pour garantir que les informations que vous me fournissez sont
            sécurisées."
          </TextIntro>
        </ContentIntro>
        <Title2Styled>Types d'informations collectées</Title2Styled>
        <Text>
          Je collecte des informations personnelles telles que votre nom,
          prénom, adresse e-mail et message lorsque vous utilisez mon formulaire
          de contact. Ces informations sont utilisées pour répondre à vos
          demandes et pour améliorer mon service client.
        </Text>
        <Title2Styled>Utilisation des informations collectées</Title2Styled>
        <Text>
          Je n'utilise les informations collectées que pour répondre à vos
          demandes spécifiques. Je ne partage pas ces informations avec des
          tiers sans votre consentement explicite. Les informations que vous me
          fournissez ne seront jamais vendues, louées ou échangées.
        </Text>
        <Title2Styled>Cookies et technologies de suivi</Title2Styled>
        <Text>
          Mon site web utilise des cookies et d'autres technologies de suivi
          pour améliorer votre expérience de navigation et collecter des
          informations sur votre utilisation du site. Ces informations ne sont
          pas associées à vos données personnelles et sont utilisées pour
          améliorer mon service.
        </Text>
        <Title2Styled>Sécurité des informations collectées</Title2Styled>
        <Text>
          Je prends la sécurité des informations collectées très au sérieux et
          ai mis en place des mesures de sécurité appropriées pour protéger vos
          données personnelles contre toute utilisation abusive ou accès non
          autorisé.
        </Text>
        <Title2Styled>
          Modification de la politique de confidentialité
        </Title2Styled>
        <Text>
          Je me réserve le droit de modifier ma politique de confidentialité à
          tout moment. Tout changement sera publié sur mon site web avec une
          date d'entrée en vigueur. Il est de votre responsabilité de consulter
          régulièrement cette page pour prendre connaissance de toute mise à
          jour de la politique de confidentialité.
        </Text>
        <Title2Styled>Contact</Title2Styled>
        <Text>
          Si vous avez des questions ou des préoccupations concernant ma
          politique de confidentialité, n'hésitez pas à me contacter via le
          formulaire de contact disponible sur mon site web.
        </Text>
        <LogoHome>
          <StyledLink to="/">
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
          </StyledLink>
        </LogoHome>
      </Content>
    </Container>
  );
}
