import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

//export const ViewForm = styled.ScrollView`
export const ViewForm = styled.View`
    /* flex-direction: column; */
    height: 70%;
    background-color:transparent;
    margin: 0;
    padding: 0;
    flex:1;
`;

export const ViewQuestions = styled.View`
    height: 6.8%;
    margin-top:10px;
    margin-left:5%;
    margin-right:5%;
    background-color:#dcceff;
    justify-content: center;
    border-radius:8px;
    elevation:4;
    flex-direction: row;
    align-items:center;
`;

export const Header = styled.View`
    background-color:#6a5acd;
    height:7%;
    justify-content: center;
    elevation:10;
`;

export const TextHeader = styled.Text`
    font-size:24px;
    font-weight:bold;
    text-align:center;
    margin-top:5%;
    color:white;
`;

export const TextQuestion = styled.Text`
    font-size:16px;
    margin-left: 1%;
    width:60%;
    text-align:center;
`;

export const ResponseQuestion = styled.TextInput`
    font-size:14px;
    padding:0px;
    margin-left: 1%;
    width:35%;
    border-width:0.1px;
    border-radius:2px;
    height:80%;
    text-align:center;
    z-index:1;
`;


export const ViewButton = styled.View`
    height: 7%;
    background-color:transparent;
    align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
    background-color:#6a5acd;
    align-items:center;
    justify-content: center;
    margin:2%;
    margin-bottom:3%;
    width:85%;
    height:70%;
    border-radius:5px;
    elevation:4;
`;

export const TextButton = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:white;
    text-align:center;

`;


export const ViewModal = styled.View`
    background-color:'rgba(0,0,0,0.8)';
    flex:1;
    justify-content: flex-end;
`;

export const ViewInfoModal = styled.View`
    justify-content: flex-end;
    align-items: center;
    height:50%;
    background-color:#dcceff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    margin-right: 2%;
    margin-left:2%;
`;

export const TextTitlePopup = styled.Text`
    font-size: 26px;
    font-weight:bold;
    text-align:center;
    margin-bottom:2%;
`;

export const TextValue = styled.Text`
    font-size: 24px;
    font-weight:bold;
    text-align:center;
    color:red;
    margin-bottom:2%;
`;

export const TextDescribePopup = styled.Text`
    font-size: 16px;
    text-align:center;
`;

export const ButtonPopup = styled.TouchableOpacity`
    background-color:#6a5acd;
    align-items:center;
    justify-content: center;
    margin:2%;
    width:85%;
    height:10%;
    border-radius:5px;
    elevation:4;
`;

export const TextErrorModal = styled.Text`
    font-size: 18px;
    text-align:center;
    margin: 3%;
    margin-bottom:40%;
`;

export const LoadingRequisition = styled.View`
    flex: 1;
    background-color:'rgba(0,0,0,0.8)';
    justify-content: center;
    width:100%;
    height:100%;
    align-items: center;
`;

export const ViewLoadingAnimation = styled.View`
    width:50%;
    height:20%;
    background-color:transparent;
`;