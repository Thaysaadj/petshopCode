import {
  ContainerFelino,
  CardItem,
  ContainerItem,
  GhostFooter,
} from "./styled";
import './styles.css';
import Modal from "../components/Modal"

export const Felino = (props) => {


  return (
      <>
    <ContainerFelino>
      <h1>Tudo para seu Miau</h1>
      <ContainerItem>
        <CardItem onClick={() => setOpen(true)}>
          <img src="https://static.petz.com.br/fotos/1467401093959.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://farmaciaindiana.vteximg.com.br/arquivos/ids/200818/7897807200633_0.jpg?v=636725751144700000" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/1500x1500/kit-mordedor-pet-10-brinquedos-de-vinil-para-caes-e-cachorro-jau-home-pet/jaupesca/kitpet10/436ebcd5bb682b81e781c0bb2191954c.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={Modal}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <GhostFooter />
      </ContainerItem>
    </ContainerFelino>
    
    </>
  );
};
