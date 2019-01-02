import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  select {
    width: 240px;
    height: 45px;
    padding: 0 20px;
    font-size: 18px;
    color: #444;
  }

  input {
    width: 240px;
    height: 45px;
    padding: 0 20px;
    font-size: 18px;
    color: #444;
  }

  button {
    width: 140px;
    height: 45px;
    padding: 0 20px;
    margin-left: 10px;
    background: #4bb0ee;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #3e91c3;
    }
  }
`;
