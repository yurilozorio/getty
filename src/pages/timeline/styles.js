import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #4bb0ee;
  }
`;

export const Form = styled.form`
  width: 100%;
  background: #e9f1f6;
  padding: 20px;
  border-radius: 5px;
  margin: 30px 0;

  textarea {
    border: 3px solid #d8e5ed;
    border-radius: 5px;
    font-size: 14px;
    padding: 15px;
    width: 100%;
    resize: none;
  }
`;

export const TweetList = styled.ul`
  width: 100%;
  list-style: none;
  color: #1c2022;
`;
