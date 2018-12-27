import React from "react";

import Like from "../../assets/like.svg";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";

import { Container, Buttons } from "./styles";

const Tweet = () => (
  <Container>
    <strong>Teste</strong>
    <p>teste</p>
    <Buttons>
      <button type="button" /*onClick={this.handleLike}*/>
        <img src={Like} alt="Like" />
        10
      </button>
      <button type="button" /*onClick={this.handleLike}*/>
        <img src={Edit} alt="Like" />
        Editar
      </button>
      <button type="button" /*onClick={this.handleLike}*/>
        <img src={Delete} alt="Like" />
        Excluir
      </button>
    </Buttons>
  </Container>
);

export default Tweet;
