import React from "react";

import Like from "../../assets/like.svg";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";

import { Container, Buttons } from "./styles";

const Tweet = props => {
  const { tweet } = props;
  return (
    <Container>
      <p>{tweet.content}</p>
      <Buttons>
        <button type="button">
          <img src={Like} alt="Like" />
          {tweet.likes}
        </button>
        <button type="button">
          <img src={Edit} alt="Like" />
          Editar
        </button>
        <button type="button">
          <img src={Delete} alt="Like" />
          Excluir
        </button>
      </Buttons>
    </Container>
  );
};

export default Tweet;
