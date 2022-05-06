import {
  ContainerCanino,
  ContainerItem,
  CardItem,
  GhostFooter,
} from "./styled";
import React, { useState } from "react";
import { Modal } from "../components/modal/Modal";


export const Canino = () => {
  const [open, setOpen] = useState(false);
  const [dataSelected, setDataSelected] = useState(null)

  const data = [
    {
      title: "Ração Seca Balance",
      text: " Frango e Vegetais para Gatos Adultos 10,1kkg",
      subtitle: "Benefícios",
      price: 138,
      linkUrl: "https://static.petz.com.br/fotos/1614090145261.jpg",
      gatinho:"https://static.petz.com.br/fotos/1614090145261.jpg",
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
      linkUrl: "https://static.petz.com.br/fotos/1627571639069.jpg",
      gatinho:"https://static.petz.com.br/fotos/1627571639069.jpg",
      list:["Intestino saudável", " Pelagem mais macia e brilhante", "Desenvolvida por veterinários a partir de ingredientes selecionados"]
    },
    {
      title: "Golden",
      text: "Premium - Adultos Castrados, Salmão 10,1kkg",
      subtitle: "Benefícios",
      price: 180,
      linkUrl: "https://static.petz.com.br/fotos/1619705888895.jpg",
      gatinho:"https://static.petz.com.br/fotos/1619705888895.jpg",
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
      linkUrl: "https://static.petz.com.br/fotos/1632748120656.jpg",
      gatinho:"https://static.petz.com.br/fotos/1632748120656.jpg",
      list:["Para gatos;", "100% natural",
      "Crocante e saboroso;",
      "Livre de conservantes e aditivos químicos"]
    },
    {
      title: "Gran Plus",
      text: "Adulto - Frango & Carne 10,1kg ",
      subtitle: "Benefícios",
      price: 100,
      linkUrl: "https://static.petz.com.br/fotos/1593439116952.jpg",
      gatinho: "https://static.petz.com.br/fotos/1593439116952.jpg",
      list:["Não possui corantes e aromatizantes artificiais;", "Proporciona equilibradamente ômega 3 e 6,", "Possui vitaminas e nutrientes para o seu pet."]
    },
    {
      title: "Golden",
      text: "Premium - Adultos Castrados, Salmão 10,1kkg",
      subtitle: "Benefícios",
      price: 180,
      linkUrl: "https://static.petz.com.br/fotos/1593439116952.jpg",
      gatinho:"https://static.petz.com.br/fotos/1593439116952.jpg",
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
      linkUrl: "https://static.petz.com.br/fotos/1619705888895.jpg",
      gatinho: "https://static.petz.com.br/fotos/1619705888895.jpg",
      list:["Não possui corantes e aromatizantes artificiais;", "Proporciona equilibradamente ômega 3 e 6,", "Possui vitaminas e nutrientes para o seu pet."]
    },
    {
      title: "Nutrilus",
      text: "Pro - Adultos Carne 10,1kkg",
      subtitle: "Benefícios",
      price: 200,
      linkUrl: "https://static.petz.com.br/fotos/1632748120656.jpg",
      gatinho:"https://static.petz.com.br/fotos/1632748120656.jpg",
      list:["Intestino saudável", " Pelagem mais macia e brilhante", "Desenvolvida por veterinários a partir de ingredientes selecionados"]
    },
    
    {
      title:"Petisco WOW ",
      text: "Pet Food Gourmet Frango Crocante para Gatos 50g",
      subtitle: "Benefícios",
      price: 35,
      linkUrl: "https://static.petz.com.br/fotos/1627571639069.jpg",
      gatinho:"https://static.petz.com.br/fotos/1627571639069.jpg",
      list:["Para gatos;", "100% natural",
      "Crocante e saboroso;",
      "Livre de conservantes e aditivos químicos"]
    },
    {
      title: "Ração Seca Balance",
      text: " Frango e Vegetais para Gatos Adultos 10,1kkg",
      subtitle: "Benefícios",
      price: 138,
      linkUrl: "https://static.petz.com.br/fotos/1614090145261.jpg",
      gatinho:"https://static.petz.com.br/fotos/1614090145261.jpg",
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
      <ContainerCanino>
        <h1>Itens para Cães</h1>
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
      </ContainerCanino>
    </>
  );
};
