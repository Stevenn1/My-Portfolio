import React, { ReactElement, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConfidentialLink from "../components/ConfidentialLink";
import { LinkContactIcon } from "../components/ContactIcon";
import {
  Container,
  Content,
  FirstIntro,
  Part1,
  Logo,
  Image,
  Title,
  Title2,
  Presentation,
  Arrow,
  Joint,
  Headband,
  StyledNavLink,
} from "../design/DesignHomePage";

export default function Home(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  const [titleContent, setTitleContent] = useState(
    "Développeur web & web mobile"
  );

  const handleClick = () => {
    setTitleContent("Nouveau titre de la page");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container className={loaded ? "loaded" : ""}>
      <Logo>
        <img src="/MS.png" alt="" width="60" />
      </Logo>
      <Headband src="/ban4.jpg" alt=""></Headband>
      <Content>
        <Part1>
          <FirstIntro>
            <Title>{titleContent}</Title>
            <Presentation>
              <p>
                Bienvenue sur mon portfolio ! <br />
                <br /> Je suis un développeur passionné, spécialisé dans la
                création de sites web et d'applications en ligne. Ce portfolio
                est une vitrine de mes compétences et de mes réalisations.{" "}
                <br /> En cliquant sur "découvrez-moi", vous trouverez une
                sélection de mes travaux les plus récents. J'ai travaillé sur
                une variété de projets, allant de sites web d'entreprise à des
                applications web complexes. <br />
                <br /> Chacun de ces projets a été créé avec soin, en utilisant
                les dernières technologies et les meilleures pratiques de
                développement. Si vous souhaitez en savoir plus sur mes
                compétences ou si vous avez un projet en tête, n'hésitez pas à
                me contacter. <br /> Je suis toujours ravi de discuter de
                nouveaux projets et de trouver des solutions pour répondre aux
                besoins de mes clients. <br />
                <br /> Merci d'avoir pris le temps de visiter mon portfolio.
                J'espère que vous apprécierez mon travail autant que j'ai
                apprécié le créer.
              </p>
            </Presentation>
            <Title2>Steven Michel.</Title2>
            <Arrow className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 442.137"
              >
                <path d="M498.536 442.137c-31.387-25.229-67.042-47.435-83.064-62.714-5.282-5.036-11.007-12.153-1.664-8.574 25.872 9.909 54.004 27.667 75.003 49.744-2.547-18.498 2.366-41.616 9.997-60.504.939-2.328 3.886-11.918 7.547-15.089 1.358-1.177 2.819-1.472 4.307-.18.849.739 1.28 1.995 1.333 3.707.152 4.983-3.387 19.558-6.693 33.835-4.904 21.183-7.422 37.783-6.766 59.775z" />
                <path d="M243.828 236.348c4.322-22.157 5.797-44.278 4.95-66.742 45.792 16.983 86.744 47.759 120.988 82.094 41.377 41.487 75.893 91.781 100.677 142.434 7.709 15.756 12.142 22.106 22.781 36.215-19.821-95.783-137.213-251.196-246.698-274.194C232.218 29.162 103.055-53.717 0 40.704c95.353-64.986 210.522-25.748 234.658 113.48-11.685-1.414-23.233-1.219-34.515.824-26.693 4.83-52.462 12.782-72.736 38.719-28.125 35.979-26.324 94.975 19.286 115.587 54.862 24.792 87.927-25.739 97.135-72.966zm-7.016-67.487c.889 23.575-1.128 48.171-6.111 71.196-8.03 37.107-29.726 69.192-65.407 62.82-22.084-3.943-35.695-18.675-40.56-38.116-17.522-70.029 62.617-107.875 112.078-95.9z" />
              </svg>
            </Arrow>
            <Joint>
              <StyledNavLink onClick={handleClick} to="/My-Project">
                Découvrez-moi...
              </StyledNavLink>
            </Joint>
          </FirstIntro>
        </Part1>
        <Image src="/dev2.jpg" alt="" />
      </Content>
      <ConfidentialLink />
      <LinkContactIcon to="/contact">
        <svg
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM108.159,344.493 L191.319,265.831 L108.159,197.002 L108.159,344.493 ZM403.839,147.838 L108.159,147.838 L108.159,177.337 L255.999,305.162 L403.839,177.337 L403.839,147.838 ZM403.839,197.002 L320.679,265.831 L403.839,344.493 L403.839,197.002 ZM311.439,275.663 L255.999,324.827 L200.559,275.663 L108.159,364.158 L403.839,364.158 L311.439,275.663 Z" />
        </svg>
      </LinkContactIcon>
    </Container>
  );
}
