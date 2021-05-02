import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color:#e0b0ff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
`;


export const Container = styled.form`
  flex-direction:column;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const TextTitle = styled.label`
    font-size:28px;
    margin-left: 15%;
    font-weight: bold;
`;

export const HeaderPage = styled.div`
flex:1;
background-color: #ad75ad;
box-shadow: 2px 2px 1px #7a617a;
padding:35px;
padding-left:20%;
border-radius: 4px;
margin-bottom: 30px;
`;

export const ViewComponents = styled.div`
  flex-direction:row;
  background-color: #ad75ad;
  box-shadow: 2px 2px 1px #7a617a;
  padding:10px;
  width:40%;
  height:10%;
  margin-top:10px;
  padding-left:20%;
  margin-left: 20%;
  border-radius: 4px;
`;

export const NameLabel = styled.label`
  margin:10px;
  font-weight:bold;
  text-align: center;
`; 

export const InputValue = styled.input`
  width:40%;
  height:100%;
  border-radius:5px;
  border-width:2px;
  background-color:#eadbea;
  font-weight:bold;
  text-align: center;
`;

export const SelectItems = styled.select`
  width:25%;
  height:80%;
  border-radius:5px;
  border-width:2px;
  background-color:#eadbea;
  font-weight:bold;
  text-align: center;

`;

export const ButtonConfirm2 = styled.button`
  width:30%;
  margin-left:8%;
  background-color:#fff5e7;
  border-radius:8px;
  color:black;
  height:45px;
  font-weight:bold;
  box-shadow: 2px 2px 1px #b49d7d;
`;  

export const ButtonConfirm = styled.button`
  width:50%;
  margin-left: 25%;
  border-radius:8px;
  height:45px;
  font-weight:bold;
  background-color: #ad75ad;
  box-shadow: 2px 2px 1px #7a617a;
  margin-top: 5%;
  color: black;
  text-align:center;
  font-size: 16px;
`;  