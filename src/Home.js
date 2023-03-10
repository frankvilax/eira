import "./styles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  return (
    <>
      <div class="gridContainer">
        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/ENTRADA-640w.jpg"
              alt="Second slide"
            />
            <div className="descriptions">/ CLINICA MA /</div>
            <div className="subDescriptions">ALGÉS, 2022</div>
          </div>
        </div>

        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/COZINHA-640w.png"
              alt="Second slide"
            />
            <div className="descriptions">/ CASA M /</div>
            <div className="subDescriptions">MOURA, 2022</div>
          </div>
        </div>

        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/08-1280w.png"
              alt="Second slide"
            />
            <div className="descriptions">/ CASA HOTEL COLINA /</div>
            <div className="subDescriptions">ALMOSTER, SANTARÉM, 2022</div>
            <div className="subDescriptions">
              [PARCERIA A.CAL / JOAOMOREIRARQUITETOS]
            </div>
          </div>
        </div>

        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/SALA-2cab734c-1280w.png"
              alt="Second slide"
            />
            <div className="descriptions">/ HERDADE MARCO /</div>
            <div className="subDescriptions">TAVIRA, 2022</div>
            <div className="subDescriptions">
              [PARCERIA A.CAL / JOAOMOREIRARQUITETOS/
            </div>
            <div className="subDescriptions">/ JOÃO JANEIRO PEREIRA]</div>
          </div>
        </div>
      </div>

      <div class="gridDivision"> </div>

      <div class="gridContainer">
        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/SALA-640w.png"
              alt="Second slide"
            />
            <div className="descriptions">/ CASA 34 /</div>
            <div className="subDescriptions">LOURES, 2022</div>
          </div>
        </div>
        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/PP_006-1920w.png"
              alt="Second slide"
            />
            <div className="descriptions">/ CASA 34 /</div>
            <div className="subDescriptions">
              PEDRÓGÃO DO ALENTEJO, 2021/2022
            </div>
            <div className="subDescriptions">
              [PARCERIA JOÃO JANEIRO PEREIRA]
            </div>
          </div>
        </div>
        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/BN_IMAGEM01-1920w.jpg"
              alt="Second slide"
            />
            <div className="descriptions">/ CASA BN /</div>
            <div className="subDescriptions">LOURES, 2021</div>
          </div>
        </div>
        <div class="gridItem">
          <div>
            <img
              className="gridItemImage"
              src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/MINGORRA_QUARTO-1280w.jpeg"
              alt="Second slide"
            />
            <div className="descriptions">/ AGROTURISMO HERDADE MINGORRA /</div>
            <div className="subDescriptions">
              HERDADE DA MINGORRA, ALBERNOA, BEJA . 2020
            </div>
            <div className="subDescriptions">
              [PARCERIA A.CAL / JOAOMOREIRARQUITETOS]
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
