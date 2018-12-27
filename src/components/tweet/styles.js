import styled from "styled-components";

export const Container = styled.li`
  padding: 20px 20px 0;
  margin: 20px 0 0;
  border-top: 1px solid #eee;

  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border: 0;
  }

  p {
    margin: 15px 0;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  button {
    border: 0;
    margin-right: 30px;
    background: transparent;

    display: flex;
    align-items: center;
    color: #697882;
    cursor: pointer;
  }

  button img {
    margin-right: 5px;
    width: 15px;
  }

  button:hover {
    opacity: 0.7;
  }
`;
