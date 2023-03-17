import React, { ReactElement, useState } from "react";
import Home from "./pages/Home";
import MyProject from "./pages/MyProject";
import Contact from "./pages/Contact";
import PolitiqueConfidential from "./pages/PolitiqueDeConfidentialité";
import "./css/contact.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const ContainerFirst = styled.div`
  display: flex;
  height: 100vh;
`;

export default function App(): ReactElement {
  return (
    <ContainerFirst>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/My-Project" element={<MyProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/Politique-de-confidentialité"
          element={<PolitiqueConfidential />}
        />
      </Routes>
    </ContainerFirst>
  );
}
