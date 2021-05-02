import React, {useState} from 'react';
import {
    GlobalStyle,
    Container,
    ViewComponents,
    NameLabel,
    InputValue,
    SelectItems,
    ButtonConfirm,
    HeaderPage,
    TextTitle,
} from './styles';

import APIService from './api/APIService';

const InputValues: React.FC = () =>{
    const [city, onChangeCity] = useState('0');
    const [area, onChangeArea] =  useState('');
    const [rooms, onChangeRooms] =  useState('');
    const [bathroom, onChangeBathroom] =  useState('');
    const [park_space, onChangeParkspace] = useState('');
    const [floor, onChangeFloor] = useState('');    
    const [animals, onChangeAnimals] = useState('0');
    const [furniture, onChangeFurniture] = useState('0');
    const [hoa, onChangeHoa] = useState('');
    const [alloc, onChangeAlloc] = useState('');
    const [iptu, onChangeIPTU] = useState('');
    const [fire, onChangeFire] = useState('');

    const ServiceApp = APIService.createApi();
    /*
    ** Campinas é a cidade com valor 3; 
    ** Porto Alegre é a cidade com valor 1;
    ** Belo Horizonte é a cidade com valor 4;
    ** Rio de Janeiro é a cidade com valor 2;
    ** São Paulo é a cidade com valor 0;*/

    const RequisitionService = async(obj:any)=>{
        const resp = await ServiceApp.postRequisition(obj);
        console.log(resp);
    }

    return(
        <>
        <GlobalStyle />
          <Container>
            <HeaderPage>
              <TextTitle>
                  Valor de Alocação de Imóveis
              </TextTitle>
            </HeaderPage>
            <ViewComponents>
                <NameLabel>
                    Escolha uma Cidade: 
                </NameLabel>
                <SelectItems 
                    onChange={e => {
                            onChangeCity(e.target.value);
                        }}
                >
                    <option value='0'>São Paulo</option>
                    <option value='3'>Campinas</option>
                    <option value='2'>Rio de Janeiro</option>
                    <option value='4'>Belo Horizonte</option>
                    <option value='1'>Porto Alegre</option>
                </SelectItems>
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Área do Apartamento:
                </NameLabel>
                <InputValue
                    type="text"
                    placeholder="Insira a área do apartamento"
                    onChange={(e)=>{
                            onChangeArea(e.target.value);
                        }}
                />
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Número de Quartos:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira a quantidade de quartos"
                    onChange={(e)=> {
                            onChangeRooms(e.target.value);
                        }}
                />
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Número de Banheiros:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira a quantidade de banheiros"
                    onChange={(e)=> {
                            onChangeBathroom(e.target.value);
                        }}
                />
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Número de Vagas:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira o número de vagas"
                    onChange={(e)=> {
                            onChangeParkspace(e.target.value);
                        }}
                />
            </ViewComponents>


            <ViewComponents>
                <NameLabel>
                    Andar do Apartamento:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira o andar do apartamento"
                    onChange={(e)=> {
                            onChangeFloor(e.target.value);
                        }}
                />
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Permite animais:
                </NameLabel> 
                <SelectItems
                    onChange={(e) =>{
                        onChangeAnimals(e.target.value);
                    }}
                >
                    <option value='0'>Sim</option>
                    <option value='1'>Não</option>
                </SelectItems>
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Apartamento Mobiliado:
                </NameLabel> 
                <SelectItems
                    onChange={(e) =>{
                            onChangeFurniture(e.target.value);
                        }}
                >
                    <option value='0'>Sim</option>
                    <option value='1'>Não</option>
                </SelectItems>
            </ViewComponents>


            <ViewComponents>
                <NameLabel>
                    Valor do IPTU:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira o valor do IPTU(R$)"
                    onChange={(e)=> {
                            onChangeIPTU(e.target.value);
                        }}
                />
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Seguro de Incêndio:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira o valor do seguro(R$)"
                    onChange={(e)=> {
                            onChangeFire(e.target.value);
                        }}
                />
            </ViewComponents>

            <ViewComponents>
                <NameLabel>
                    Valor do Condomínio:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira o valor do condomínio(R$)"
                    onChange={(e)=> {
                            onChangeHoa(e.target.value);
                        }}
                />
            </ViewComponents>


            <ViewComponents>
                <NameLabel>
                    Valor do Aluguel:
                </NameLabel> 
                <InputValue
                    type="text"
                    placeholder="Insira o valor do aluguel(R$)"
                    onChange={(e)=> {
                            onChangeAlloc(e.target.value);
                        }}
                />
            </ViewComponents>


            {/* <ViewComponents> */}
                <ButtonConfirm
                    onClick={ () => {
                              if(
                                city != '' && area !='' && rooms !='' &&
                                bathroom != '' && park_space !='' && floor !='' &&
                                animals != '' && furniture !='' && hoa !='' &&
                                alloc != '' && iptu !='' && fire !='' 
                              ){
                                RequisitionService(
                                  {
                                    "values":[
                                      parseInt(city), parseInt(area), parseInt(rooms), 
                                      parseInt(bathroom), parseInt(park_space), parseInt(floor), 
                                      parseInt(animals), parseInt(furniture),parseInt(hoa),
                                      parseInt(alloc),parseInt(iptu), parseInt(fire) 
                                    ]
                                  }
                                )
                              }
                          }
                    }
                >
                    Verificar valor do Aluguel
                </ButtonConfirm>
            {/* </ViewComponents> */}
        </Container>
      </>
    );
}

export default InputValues;