import React, { useEffect, useState } from "react";
import {
  ContainerHeader,
  ContainerFooter,
  Footer,
  ContainerIcon,
} from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = ({ page }) => {
  const location = useLocation();
  const [renderButton, setRenderButton] = useState(true);

  const navigation = useNavigate();

  const mostraSeta = () => {
    console.log(location);

    if (location.pathname !== "/") {
      setRenderButton(true);
    } else {
      setRenderButton(false);
    }
  };

  useEffect(() => {
    mostraSeta();
  }, [location.pathname]);

  return (
    <div>
      <ContainerHeader>
        <div>
          {renderButton === true ? (
            <button
              onClick={() => {
                navigation("/");
              }}
              id="buttonHeader"
            >
              <ion-icon name="home-sharp"></ion-icon>
            </button>
          ) : (
            ""
          )}
        </div>
        <ContainerIcon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
            <div>
                <h1>Contato - (21) 99999-8888</h1>
            </div>
        </ContainerIcon>
      </ContainerHeader>
      <ContainerFooter>
        <Footer>
            <ion-icon name="logo-react"></ion-icon>
            <ion-icon name="logo-javascript"></ion-icon>
            <ion-icon name="logo-css3"></ion-icon>
        </Footer>
      </ContainerFooter>
    </div>
  );
};
