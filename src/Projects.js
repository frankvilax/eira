import "./styles.css";

import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
export const Projects = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const accordionData = {
    title1: "Sobre",
    content1: `

Apesar do terreno ter um desnível considerável, pretendeu-se fazer uma habitação em que os espaços sociais funcionassem apenas num piso. Por essa razão, foi desenhado um volume de embasamento, que para alem de uma função estrutural de apoio ao Piso 1, aproveita essa escavação que já seria necessária, para utilizar como espaço de Garagem. O volume apresenta-se com uma linguagem mais contemporânea, mas com revestimentos mais naturais para se mesclar com o terreno e a envolvente natural onde se insere.

A fachada principal encontra-se orientada a Norte, para a rua pública existente, com duas entradas em níveis diferentes. Uma, rampeada, para o acesso à garagem, e outra com um patamar ao nível da rua e uma escadaria para acesso à porta principal.

A habitação encontra-se dividida em duas zonas, uma mais social, no volume mais a Oeste. Onde se concentra a Cozinha, a Sala e a Instalação Sanitária Social que serve também de lavandaria, este volume está assente sobre o volume da garagem, aproveitando a cobertura do mesmo para ter um espaço exterior de varanda. No centro, conectada com a entrada está o espaço social exterior em alpendre, com uma zona de churrasco. No volume da fachada principal, temos um quarto que servirá de escritório e está isolado dos restantes para poder funcionar de forma mais independente e com uma ligação ao espaço social e entrada. Num volume um pouco mais elevado dos restantes, para não ficar demasiado enterrado e poder ter a sua privacidade, temos a zona de quartos, com um quarto, uma instalação sanitária completa e um quarto com suíte e closet. Este quarto tem também uma pequena varanda.
`,
    title2: "About",
    content2: `

Despite the terrain having a considerable unevenness, the intention was to make a house in which the social spaces functioned only on one floor. For this reason, a basement volume was designed, which, in addition to a structural support function for the 1st Floor, takes advantage of this excavation, that would already be necessary, to use as a Garage space. The volume presents itself with a more contemporary language, but with natural coatings to blend in with the terrain and the natural surroundings where it is inserted.

The main facade is oriented to the North, towards the existing public street, with two entrances at different levels. One, ramped, for access to the garage, and the other with a landing at street level and a staircase to access the main door.

The house is divided into two areas, one more social, in the volume further to the west. Where the Kitchen, the Living Room and the Social Bathroom are concentrated, the last which also serves as a laundry room. This volume is above the volume of the garage, taking advantage of its coverage to have an outdoor space with a balcony. In the centre, connected with the entrance is the outdoor social space on a porch, with a barbecue area. In the volume of the main façade, we have a room that will serve as an office and is isolated from the others to be able to function more independently and with a connection to the social space and entrance. In a slightly higher volume, so as not to be too buried and to be able to have some privacy, we have the sleeping area, with a bedroom, a complete bathroomn and a bedroom with a suite and closet. This room also has a small balcony.
`,
  };

  const { title1, content1, title2, content2 } = accordionData;
  return (
    <div>
      <h5 className="subject">. projectos / work</h5>
      <hr className="separator" />
      <div style={{ display: "flex" }}>
        <Carousel className="carrousel">
          <Carousel.Item>
            <img
              className="d-block carrousel-item"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/BN_IMAGEM07-1920w.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carrousel-item"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/BN_IMAGEM06-1920w.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carrousel-item"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/BN_IMAGEM08-1920w.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <img
          className="plant"
          src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/000-BN_PISO0-1920w.png"
          alt="Second slide"
        />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h6 className="description-title">/ CASA BN /</h6>
          <div style={{ display: "flex" }}>
            <p className="description-topic">equipa . </p>
            <p className="description-topic-translation"> team </p>
          </div>
          <p className="description"> atelier EIRA</p>
          <div style={{ marginTop: "-0.5rem" }}>
            <div style={{ display: "flex" }}>
              <p className="description-topic">ano . </p>
              <p className="description-topic-translation"> year </p>
            </div>
            <p className="description"> 2021</p>
          </div>

          <div style={{ marginTop: "-0.5rem" }}>
            <div style={{ display: "flex" }}>
              <p className="description-topic">localização . </p>
              <p className="description-topic-translation"> location </p>
            </div>
            <p className="description"> Loures, Portugal</p>
          </div>

          <div style={{ marginTop: "-0.5rem" }}>
            <div style={{ display: "flex" }}>
              <p className="description-topic">programa . </p>
              <p className="description-topic-translation"> program </p>
            </div>
            <p className="description"> moradia unifamiliar</p>
          </div>

          <div style={{ marginTop: "-0.5rem" }}>
            <div style={{ display: "flex" }}>
              <p className="description-topic">cliente . </p>
              <p className="description-topic-translation"> client </p>
            </div>
            <p className="description"> privado</p>
          </div>

          <div style={{ marginTop: "-0.5rem" }}>
            <div style={{ display: "flex" }}>
              <p className="description-topic">estado . </p>
              <p className="description-topic-translation"> status </p>
            </div>
            <p className="description"> projecto </p>
          </div>

          <div style={{ marginTop: "-0.5rem" }}>
            <div style={{ display: "flex" }}>
              <p className="description-topic">área . </p>
              <p className="description-topic-translation"> area </p>
            </div>
            <p className="description"> 235 m²</p>
          </div>
        </div>

        <div style={{ color: "rgb(116, 76, 36)", marginTop: "-1rem" }}>
          <div className="accordion">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setIsActive1(!isActive1)}
              >
                <div
                  style={{
                    color: "rgb(116, 76, 36)",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  {title1}
                </div>
                <div style={{ color: "rgb(116, 76, 36)", fontWeight: "bold" }}>
                  {isActive1 ? "-" : "+"}
                </div>
              </div>
              {isActive1 && (
                <div
                  className="accordion-content"
                  style={{ color: "rgb(116, 76, 36)", fontSize: 10 }}
                >
                  {content1}
                </div>
              )}
            </div>
          </div>
          <div className="accordion" style={{ marginTop: "-2rem" }}>
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setIsActive2(!isActive2)}
              >
                <div
                  style={{
                    color: "rgb(116, 76, 36)",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  {title2}
                </div>
                <div style={{ color: "rgb(116, 76, 36)", fontWeight: "bold" }}>
                  {isActive2 ? "-" : "+"}
                </div>
              </div>
              {isActive2 && (
                <div
                  className="accordion-content"
                  style={{ color: "rgb(116, 76, 36)", fontSize: 10 }}
                >
                  {content2}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
