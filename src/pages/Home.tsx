import React, { ReactElement, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  StyledNavLink,
} from "../design/DesignHomePage";

export default function Home(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  const [pContent, setPContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt commodi quidem repellendus quis porro cumque iusto alias placeat aperiam officiis, quos quod nemo sequi, corrupti, eaque ut doloremque laboriosam. Ipsam, fugit at. Consequuntur sapiente ea quo recusandae impedit voluptatem? Adipisci corporis facilis nesciunt fugit itaque culpa eius rerum cum, ullam obcaecati pariatur. Autem nulla, velit tempore laudantium reiciendis commodi! Earum dicta voluptatum expedita tempora aliquam magni facilis velit deleniti pariatur obcaecati eaque, necessitatibus, optio quibusdam recusandae nisi minus temporibus saepe voluptates mollitia assumenda quasi fuga, ipsam exercitationem eveniet? Vero."
  );
  const [titleContent, setTitleContent] = useState(
    "Développeur web & web mobile"
  );

  const handleClick = () => {
    setPContent("Nouveau contenu de la balise p");
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
        <img src="/sm.png" alt="" width="60" />
      </Logo>

      <Content>
        <Part1>
          <FirstIntro>
            <Title>{titleContent}</Title>
            <Title2>Steven Michel</Title2>
            <Presentation>
              <p>{pContent}</p>
            </Presentation>
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
    </Container>
  );
}