import {
  ContainerFelino,
  CardItem,
  ContainerItem,
  GhostFooter,
} from "./styled";
import React, { useState } from "react";
import { Modal } from "../components/modal/Modal";

export const Felino = () => {
  const [open, setOpen] = useState(false);
  const [dataSelected, setDataSelected] = useState(null)

  const data = [
    {
      title: "Ração Seca Balance",
      text: " Frango e Vegetais para Gatos Adultos 10,1kkg",
      subtitle: "Benefícios",
      price: 138,
      linkUrl: "https://www.petlove.com.br/images/products/233516/product/Ra%C3%A7%C3%A3o_Seca_Balance_Frango_e_Vegetais_para_Gatos_Adultos_2616946.jpg?1627748748",
      gatinho:"https://www.petlove.com.br/images/products/233516/product/Ra%C3%A7%C3%A3o_Seca_Balance_Frango_e_Vegetais_para_Gatos_Adultos_2616946.jpg?1627748748",
      list:[" Zero corante e aromatizantes artificiais, com um mix balanceado de frango e vegetais;",
      "Ômega 3 e 6 que ajuda a manter os pelos e pele mais saudável e macios;",
      "Trato urinário com controle de minerais, que ajuda a manter o bem-estar do seu pet;",
      "Proteína de alta qualidade, que auxiliam em músculos fortes e saudáveis;",
      "Possuí algas marinhas que ajudam na redução de inflamações, além das fibras que controlam as bolas de pelo;",
      "Alimento completo e 100% balanceado para gatos adultos;",
      "Embalagem com sistema de zip abre e fecha, que preserva a qualidade do alimento."]
    },
    {
      title: "Nutrilus",
      text: "Pro - Adultos Carne 10,1kkg",
      subtitle: "Benefícios",
      price: 200,
      linkUrl: "https://www.petlove.com.br/images/products/250518/large/2661128_FRENTE.jpg?1635791683",
      gatinho:"https://www.petlove.com.br/images/products/250518/large/2661128_FRENTE.jpg?1635791683",
      list:["Intestino saudável", " Pelagem mais macia e brilhante", "Desenvolvida por veterinários a partir de ingredientes selecionados"]
    },
    {
      title: "Golden",
      text: "Premium - Adultos Castrados, Salmão 10,1kkg",
      subtitle: "Benefícios",
      price: 180,
      linkUrl: "https://www.petlove.com.br/images/products/228608/product/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrado_31022435.jpg?1627729535",
      gatinho:"https://www.petlove.com.br/images/products/228608/product/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrado_31022435.jpg?1627729535",
      list:["Sabor inigualável: máxima satisfação para o paladar;",
      "Trato urinário saudável: minerais balanceados e controle do pH urinário;",
      "Intestino saudável: combinação de ingredientes de alta digestibilidade e prebióticos;",
      "Redução do odor das fezes: seleção de ingredientes especiais que auxiliam na redução do odor das fezes."]
    },
    
    {
      title: "Petisco WOW ",
      text: "Pet Food Gourmet Frango Crocante para Gatos 50g",
      subtitle: "Benefícios",
      price: 35,
      linkUrl: "https://www.petlove.com.br/images/products/237853/product/Petisco_WOW_Pet_Food_Gourmet_Frango_Crocante_para_Gatos_2657066.jpg?1627769388",
      gatinho:"https://www.petlove.com.br/images/products/237853/product/Petisco_WOW_Pet_Food_Gourmet_Frango_Crocante_para_Gatos_2657066.jpg?1627769388",
      list:["Para gatos;", "100% natural",
      "Crocante e saboroso;",
      "Livre de conservantes e aditivos químicos"]
    },
    {
      title: "Gran Plus",
      text: "Adulto - Frango & Carne 10,1kg ",
      subtitle: "Benefícios",
      price: 100,
      linkUrl: "https://cobasi.vteximg.com.br/arquivos/ids/869996/racao-gran-plus-choice-gatos-adultos-frango-e-carne-10kg-frontal.jpg?v=637717389862230000",
      gatinho: "https://cobasi.vteximg.com.br/arquivos/ids/869996/racao-gran-plus-choice-gatos-adultos-frango-e-carne-10kg-frontal.jpg?v=637717389862230000",
      list:["Não possui corantes e aromatizantes artificiais;", "Proporciona equilibradamente ômega 3 e 6,", "Possui vitaminas e nutrientes para o seu pet."]
    },
    {
      title: "Golden",
      text: "Premium - Adultos Castrados, Salmão 10,1kkg",
      subtitle: "Benefícios",
      price: 180,
      linkUrl: "https://www.petlove.com.br/images/products/228608/product/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrado_31022435.jpg?1627729535",
      gatinho:"https://www.petlove.com.br/images/products/228608/product/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrado_31022435.jpg?1627729535",
      list:["Sabor inigualável: máxima satisfação para o paladar;",
      "Trato urinário saudável: minerais balanceados e controle do pH urinário;",
      "Intestino saudável: combinação de ingredientes de alta digestibilidade e prebióticos;",
      "Redução do odor das fezes: seleção de ingredientes especiais que auxiliam na redução do odor das fezes."]
    },
    {
      title: "Gran Plus",
      text: "Adulto - Frango & Carne 10,1kg ",
      subtitle: "Benefícios",
      price: 100,
      linkUrl: "https://cobasi.vteximg.com.br/arquivos/ids/869996/racao-gran-plus-choice-gatos-adultos-frango-e-carne-10kg-frontal.jpg?v=637717389862230000",
      gatinho: "https://cobasi.vteximg.com.br/arquivos/ids/869996/racao-gran-plus-choice-gatos-adultos-frango-e-carne-10kg-frontal.jpg?v=637717389862230000",
      list:["Não possui corantes e aromatizantes artificiais;", "Proporciona equilibradamente ômega 3 e 6,", "Possui vitaminas e nutrientes para o seu pet."]
    },
    {
      title: "Nutrilus",
      text: "Pro - Adultos Carne 10,1kkg",
      subtitle: "Benefícios",
      price: 200,
      linkUrl: "https://www.petlove.com.br/images/products/250518/large/2661128_FRENTE.jpg?1635791683",
      gatinho:"https://www.petlove.com.br/images/products/250518/large/2661128_FRENTE.jpg?1635791683",
      list:["Intestino saudável", " Pelagem mais macia e brilhante", "Desenvolvida por veterinários a partir de ingredientes selecionados"]
    },
    
    {
      title:"Petisco WOW ",
      text: "Pet Food Gourmet Frango Crocante para Gatos 50g",
      subtitle: "Benefícios",
      price: 35,
      linkUrl: "https://www.petlove.com.br/images/products/237853/product/Petisco_WOW_Pet_Food_Gourmet_Frango_Crocante_para_Gatos_2657066.jpg?1627769388",
      gatinho:"https://www.petlove.com.br/images/products/237853/product/Petisco_WOW_Pet_Food_Gourmet_Frango_Crocante_para_Gatos_2657066.jpg?1627769388",
      list:["Para gatos;", "100% natural",
      "Crocante e saboroso;",
      "Livre de conservantes e aditivos químicos"]
    },
    {
      title: "Ração Seca Balance",
      text: " Frango e Vegetais para Gatos Adultos 10,1kkg",
      subtitle: "Benefícios",
      price: 138,
      linkUrl: "https://www.petlove.com.br/images/products/233516/product/Ra%C3%A7%C3%A3o_Seca_Balance_Frango_e_Vegetais_para_Gatos_Adultos_2616946.jpg?1627748748",
      gatinho:"https://www.petlove.com.br/images/products/233516/product/Ra%C3%A7%C3%A3o_Seca_Balance_Frango_e_Vegetais_para_Gatos_Adultos_2616946.jpg?1627748748",
      list:[" Zero corante e aromatizantes artificiais, com um mix balanceado de frango e vegetais;",
      "Ômega 3 e 6 que ajuda a manter os pelos e pele mais saudável e macios;",
      "Trato urinário com controle de minerais, que ajuda a manter o bem-estar do seu pet;",
      "Proteína de alta qualidade, que auxiliam em músculos fortes e saudáveis;",
      "Possuí algas marinhas que ajudam na redução de inflamações, além das fibras que controlam as bolas de pelo;",
      "Alimento completo e 100% balanceado para gatos adultos;",
      "Embalagem com sistema de zip abre e fecha, que preserva a qualidade do alimento."]
    },
  ];

  const handleClickOpen = (item) => {
    setDataSelected(item)
    setOpen(true);
  };

  const handleClose = (item) => {
    setDataSelected(item)
    setOpen(false);
  };

  return (
    <>
      <ContainerFelino>
        <h1>Tudo para seu Felino</h1>
        <ContainerItem>
          {data.map((item) => (
            <>
              <CardItem onClick={() => handleClickOpen(item)}>
                <img src={item.gatinho}/>
              </CardItem>
            </>
          ))}
          <Modal open={open} handleClose={handleClose} title={dataSelected?.title} subtitle={dataSelected?.subtitle} price={dataSelected?.price} text={dataSelected?.text} linkUrl={dataSelected?.linkUrl} list={dataSelected?.list}/>
          <GhostFooter />
        </ContainerItem>
      </ContainerFelino>
    </>
  );
};
