import styled from 'styled-components'

import {Layout} from 'antd' 
import LoginImage from './assets/625_109886.png' 
import SunChemicalLogoBlackImage from './assets/625_109898.png' 
import {Form} from 'antd' 
import GenericInput from '../../components/Input'
import {Button} from 'antd' 

export const Login = styled(Layout)`
width: 100%;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;
export const Body = styled.div`
flex-direction: column;
height: 459.011962890625px;
width: 100%;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 32.0px;;
column-gap: 32.0px;;
justify-content: center;
align-items: center;
border-radius: 16px;
  padding: 64.0px 64.0px 64.0px 64.0px;
    padding-top: 64.0px;
    padding-left: 64.0px;
    padding-bottom: 64.0px;
    padding-right: 64.0px;
  background-color: #FFFFFF;
  box-shadow:  0px 9px 17px 0px #DFCFD9 ;
`;
export const SunChemicalLogoBlack = styled.div`
left: 143px;
top: 64px;
position: static;
height: 111.011962890625px;
width: 344px;
box-sizing: border-box;
  background: url(${SunChemicalLogoBlackImage});
  background-repeat: no-repeat;
`;
export const ViceriForm = styled(Form)`
height: 188px;
width: 313px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const InputFormItem = styled(Form.Item)`
      width: 313px;
    left: 0px;
    top: 0px;
    position: static;
`;

export const InputLabelVertical = styled.div`
height: 22px;
width: 313px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: center;
`;
export const InputLabel = styled.h1`
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
        text-align: left;
        width: 48px;
        height: 22px;
        margin: 0px;
      left: 0px;
      top: 0px;
      position: static;
      width: 48px;
      height: 22px;
`;

export const InputFormItem1 = styled(Form.Item)`
    width: 313px;
  left: 0px;
  top: 70px;
  position: static;
`;

export const InputLabelVertical1 = styled.div`
height: 22px;
width: 313px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: center;
`;
export const InputLabel1 = styled.h1`
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #000000;
      text-align: left;
      width: 39px;
      height: 22px;
      margin: 0px;
    left: 0px;
    top: 0px;
    position: static;
    width: 39px;
    height: 22px;
`;

export const Actions = styled.div`
justify-content: space-between;
height: 32px;
width: 313px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
`;
export const ButtonsButton = styled(Button)`
  left: 0px;
  top: 5px;
  position: static;
    width: 133px;
    height: 22px;
    border-radius: 2px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    height: 22px;
    line-height: 22px;
`;

export const ButtonsButton1 = styled(Button)`
left: 246px;
top: 0px;
position: static;
  width: 67px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  height: 32px;
  line-height: 32px;
`;

