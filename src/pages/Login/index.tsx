import React, { useState, useEffect } from 'react';

import { Typography } from 'antd';
import GenericInput from '../../components/Input' 


import {
Login,
Body,
SunChemicalLogoBlack,
ViceriForm,
InputFormItem,
InputFormItem1,
Actions,
ButtonsButton,
ButtonsButton1,
} from './styles';

const LoginPage = () => {






const handleButtonsButton = () => {
console.log(handleButtonsButton )
};



return (
        <Login    >
  <Body    >
    <SunChemicalLogoBlack    >
    </SunChemicalLogoBlack>
    <ViceriForm  layout='vertical'  >
      <InputFormItem
      label={<Typography.Text ellipsis>Usuário</Typography.Text>}
      name='inputformitem'
      >
        <GenericInput
        placeholder='Input placeholder'
        />
      </InputFormItem>
      <InputFormItem1
      label={<Typography.Text ellipsis>Senha</Typography.Text>}
      name='inputformitem1'
      >
        <GenericInput
        placeholder='Input placeholder'
        />
      </InputFormItem1>
      <Actions    >
        <ButtonsButton
          type='link'
          Design2Code.SharedComponents.Models.Main.OnClickEvent>
            Esqueci minha senha
        </ButtonsButton>
        <ButtonsButton1
          type='primary'
          Design2Code.SharedComponents.Models.Main.OnClickEvent>
            Login
        </ButtonsButton1>
      </Actions>
    </ViceriForm>
  </Body>
</Login>

    )

}

export default LoginPage
