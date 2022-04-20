import React, { useState, useEffect } from 'react';

import {CloseOutlined} from '@ant-design/icons' 
import {CheckOutlined} from '@ant-design/icons' 


import {
RevisaodeOPContent,
PageHeader,
Header,
RevisaodeOrdensdeProducao,
Buttons,
Body1,
Checkbox1Row1Column01,
CheckboxInactiveDefault,
ContentRow1Column61,
TagStatus,
Default,
Content1Row1Column71,
CancelButton,
ConfirmButton,
Checkbox2Row2Column01,
CheckboxInactiveDefault1,
Content2Row2Column61,
TagStatus1,
Error,
Content3Row2Column71,
CancelButton1,
ConfirmButton1,
ColumnTableGroup,
TableGroup,
Text1,
} from './styles';

const RevisaodeOPContentPage = () => {




const dataSourceTableGroup = [
{
key: '0',
checkbox0: 
[
  <Checkbox1Row1Column01    >
    <CheckboxInactiveDefault    >
    </CheckboxInactiveDefault>
  </Checkbox1Row1Column01>
,
],
title1: 
'1014612193',
title12: 
'179719 - João da Silva',
title23: 
'91330712 242259A:PRETO 2',
title34: 
'Tinta',
title45: 
'Make & Pack',
status6: 
[
  <ContentRow1Column61    >
    <TagStatus    >
      <Default >
        Aguardando Revisão
      </Default>
    </TagStatus>
  </ContentRow1Column61>
,
],
title57: 
[
  <Content1Row1Column71    >
    <CancelButton
      danger
      type='primary'
      icon={<CloseOutlined/>}
      Design2Code.SharedComponents.Models.Main.OnClickEvent>
    </CancelButton>
    <ConfirmButton
      type='default'
      icon={<CheckOutlined/>}
      Design2Code.SharedComponents.Models.Main.OnClickEvent>
    </ConfirmButton>
  </Content1Row1Column71>
,
],
},
{
key: '1',
checkbox0: 
[
  <Checkbox2Row2Column01    >
    <CheckboxInactiveDefault1    >
    </CheckboxInactiveDefault1>
  </Checkbox2Row2Column01>
,
],
title1: 
'1014612194',
title12: 
'773720 - Mario Barbosa ',
title23: 
'91330712 242259A:PRETO 2',
title34: 
'Verniz',
title45: 
'Make & Pack',
status6: 
[
  <Content2Row2Column61    >
    <TagStatus1    >
      <Error >
        Cancelada
      </Error>
    </TagStatus1>
  </Content2Row2Column61>
,
],
title57: 
[
  <Content3Row2Column71    >
    <CancelButton1
      danger
      type='primary'
      icon={<CloseOutlined/>}
      Design2Code.SharedComponents.Models.Main.OnClickEvent>
    </CancelButton1>
    <ConfirmButton1
      type='default'
      icon={<CheckOutlined/>}
      Design2Code.SharedComponents.Models.Main.OnClickEvent>
    </ConfirmButton1>
  </Content3Row2Column71>
,
],
},
]





return (
        <RevisaodeOPContent    >
  <PageHeader    >
    <Header    >
      <RevisaodeOrdensdeProducao >
        Revisão de Ordens de Produção
      </RevisaodeOrdensdeProducao>
      <Buttons    >
      </Buttons>
    </Header>
  </PageHeader>
  <Body1    >
    <TableGroup dataSource={dataSourceTableGroup}> 
<ColumnTableGroup title='' dataIndex='checkbox0' key='checkbox0' align='center' /> 
<ColumnTableGroup title='OP' dataIndex='title1' key='title1' align='left'filters={[{text: '1014612193', value: '1014612193'},{text: '1014612194', value: '1014612194'},]}onFilter={(value, record: any) => record.title1.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Cliente' dataIndex='title12' key='title12' align='left'filters={[{text: '179719 - João da Silva', value: '179719 - João da Silva'},{text: '773720 - Mario Barbosa ', value: '773720 - Mario Barbosa '},]}onFilter={(value, record: any) => record.title12.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Produto' dataIndex='title23' key='title23' align='left'filters={[{text: '91330712 242259A:PRETO 2', value: '91330712 242259A:PRETO 2'},]}onFilter={(value, record: any) => record.title23.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Categoria' dataIndex='title34' key='title34' align='left'filters={[{text: 'Tinta', value: 'Tinta'},{text: 'Verniz', value: 'Verniz'},]}onFilter={(value, record: any) => record.title34.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Tipo' dataIndex='title45' key='title45' align='left'filters={[{text: 'Make & Pack', value: 'Make & Pack'},]}onFilter={(value, record: any) => record.title45.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Status' dataIndex='status6' key='status6' align='left' /> 
<ColumnTableGroup title='Ação' dataIndex='title57' key='title57' align='left' /> 
    </TableGroup>
    <Text1 >
    </Text1>
  </Body1>
</RevisaodeOPContent>

    )

}

export default RevisaodeOPContentPage
