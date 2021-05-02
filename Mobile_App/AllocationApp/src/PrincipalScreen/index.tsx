import React,{useState} from 'react';
import { Modal, Alert} from 'react-native';

import { 
    Container,
    ViewQuestions,
    Header,
    TextHeader,
    TextQuestion,
    ResponseQuestion,
    ViewButton,
    ConfirmButton,
    TextButton,
    ViewForm,
    ViewModal,
    ViewInfoModal,
    TextTitlePopup,
    TextValue,
    TextDescribePopup,
    ButtonPopup,
    TextErrorModal,
    LoadingRequisition,
    ViewLoadingAnimation,
} from './styles';

import { LinearGradient } from 'expo-linear-gradient';

import {Picker} from '@react-native-community/picker';

import APIService from '../Services/API/APIService';

import LottieView from 'lottie-react-native';

import Netinfo from '@react-native-community/netinfo';

const PrincipalScreen: React.FC = () => {

    /* States para armazenamento de informações */
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

    /* UseState que receberá o valor que será cobrado pela imobiliária */
    const [propAllocValue, setPropAllocValue] = useState();

    /* State para controlar a abertura e fechamento do modal. */
    const [modalOpen, setModalOpen] = useState(false);

    /* Variável para a comunicação com a API */
    const ServiceApp = APIService.createApi();

    /* Verifica a conexão com a internet */
    const [isConnect, setIsConnect] = useState(true);

    /* Controle do modal de Conexão */
    const [modalConnect, setModalConnect] = useState(false);

    /* espera a requisição*/
    const [requisitionTime, setRequisitionTime] = useState(false);

    /* função para fazer a requisição do serviço de predição */

    const RequisitionService = async(obj:any)=>{
        const resp = await ServiceApp.postRequisition(obj);
        console.log('Possível valor cobrado pela imobiliária: ',resp.data.prediction);
        setRequisitionTime(false);

        if(resp.status === 200){
            setPropAllocValue(resp.data.prediction);
            setModalOpen(true);
        }
    }

    /* função para verificar se o aparelho está conectado à internet */
    const NetVerify = async()=>{
        Netinfo.fetch().then(state =>{
            // console.log('connection type: ', state.type);
            // console.log('is connected? ', state.isConnected);

            if(!state.isConnected){
                setIsConnect(state.isConnected);
                setModalConnect(true);
            }
        })


    }

  return(
    <Container>
        <Header>
            <TextHeader>
                AllocApp
            </TextHeader>
        </Header>

        <LinearGradient
            colors={['#916cff', '#b290ff', '#ceb5ff']}
            style={{ 
                flex:1,
                height:'100%',
                width:'100%',
            }}
        >   
            <ViewForm>
                {/* <ScrollForm> */}
                    <ViewQuestions>
                        <TextQuestion>
                            Selecione uma Cidade
                        </TextQuestion>
                        <Picker
                            selectedValue={city}
                            style={{
                                width:'45%',
                                height:'80%',
                                borderRadius:2,
                                borderWidth:0.2
                            }}
                            onValueChange={(e:any)=>{
                                onChangeCity(e);
                            }}
                        >
                            <Picker.Item label="São Paulo" value='0'/>
                            <Picker.Item label="Campinas" value='3'/>
                            <Picker.Item label="Rio de Janeiro" value='2'/>
                            <Picker.Item label="Belo Horizonte" value='4'/>
                            <Picker.Item label="Porto Alegre" value='1'/>
                        </Picker>
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            Área do apartamento
                        </TextQuestion>
                        <ResponseQuestion 
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeArea(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>


                    <ViewQuestions>
                        <TextQuestion>
                            Número de Quartos
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeRooms(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>


                    <ViewQuestions>
                        <TextQuestion>
                            Número de Banheiros
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeBathroom(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>


                    <ViewQuestions>
                        <TextQuestion>
                            Número de Vagas
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeParkspace(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>


                    <ViewQuestions>
                        <TextQuestion>
                            Andar
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeFloor(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            Permite Animais
                        </TextQuestion>
                        <Picker
                            selectedValue={animals}
                            mode='dropdown'
                            style={{
                                width:'45%',
                                height:'80%',
                                borderRadius:2,
                                borderWidth:0.2
                            }}
                            onValueChange={(e:any)=>{
                                onChangeAnimals(e);
                            }}
                        >
                            <Picker.Item label="Sim" value='0'/>
                            <Picker.Item label="Não" value='1'/>
                        </Picker>
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            Mobiliado
                        </TextQuestion>
                        <Picker
                            selectedValue={furniture}
                            mode='dropdown'
                            style={{
                                width:'45%',
                                height:'80%',
                                borderRadius:2,
                                borderWidth:0.2,
                                alignItems:'center'
                            }}
                            onValueChange={(e:any)=>{
                                onChangeFurniture(e);
                            }}
                        >
                            <Picker.Item label="Sim" value='0' />
                            <Picker.Item label="Não" value='1'/>
                        </Picker>
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            IPTU
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeIPTU(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            Seguro Incêndio
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeFire(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            Valor do Condomínio
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeHoa(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>

                    <ViewQuestions>
                        <TextQuestion>
                            Valor do Aluguel
                        </TextQuestion>
                        <ResponseQuestion  
                            placeholder={'0'}
                            onChangeText={(e:any)=>{
                                onChangeAlloc(e);
                            }}
                            keyboardType={"numeric"}
                            clearTextOnFocus={true}
                        />
                    </ViewQuestions>

                {/* </ScrollForm> */}
                </ViewForm>
            
            
            <ViewButton>
                <ConfirmButton
                            
                            onPress={() =>{


                                /* Primeiro deve-se verificar se existe conexão com a internet.*/
                                NetVerify();

                                if(isConnect){
                                    // console.log('Pressionou o botão');
                                    if(
                                        city != '' && area !='' && rooms !='' &&
                                        bathroom != '' && park_space !='' && floor !='' &&
                                        animals != '' && furniture !='' && hoa !='' &&
                                        alloc != '' && iptu !='' && fire !='' 
                                    
                                    ){
                                        setRequisitionTime(true);
                                        RequisitionService(
                                            {
                                                "values":[
                                                    parseInt(city), parseInt(area), parseInt(rooms), 
                                                    parseInt(bathroom), parseInt(park_space), parseInt(floor), 
                                                    parseInt(animals), parseInt(furniture),parseInt(hoa),
                                                    parseInt(alloc),parseInt(iptu), parseInt(fire) 
                                                ]
                                            }
                                        );
                                    }
                                    else{
                                        Alert.alert(
                                            'Campos sem Dados',
                                            "Todos os campos necessitam ser preenchidos para a utilização do serviço."
                                        );
                                    }
                                }

                                
                                

                            }}
                        >
                            <TextButton>
                                Enviar
                            </TextButton>
                </ConfirmButton>
            </ViewButton>



        {/* Modal de apresentação do resultado da consulta a API. */}
        {
            propAllocValue &&
                <Modal
                    animationType="slide"
                    visible={modalOpen}
                    onRequestClose={()=>{
                        setModalOpen(false);
                    }}
                    transparent={true}
                > 
                    <ViewModal>
                        <ViewInfoModal>

                            <LottieView
                                source={require('../animations/animation.json')}
                                autoPlay
                                loop={false}
                                style={{
                                    height:'62%', 
                                    alignItems:'center', 
                                    // backgroundColor:'green', 
                                    marginTop:'18%'
                                }}

                            />

                            <TextTitlePopup>
                                Valor Sugerido
                            </TextTitlePopup>

                            <TextValue>
                                R${propAllocValue.toFixed(2).toString().replace('.', ',')}
                            </TextValue>

                            <TextDescribePopup>
                                * O valor de resultado é uma aproximação do que poderá ser cobrado pela imobiliária pelo imóvel descrito.
                            </TextDescribePopup>

                            <ButtonPopup
                                onPress={()=>{
                                    setModalOpen(false);
                                }}
                            >
                                <TextButton>
                                    Fechar
                                </TextButton>
                            </ButtonPopup >
                        </ViewInfoModal>
                    </ViewModal>
                </Modal>
            }
        

            {/* Modal de erro de conexão com a internet. */}
            {
                !isConnect &&
                        <Modal
                            animationType="slide"
                            visible={modalConnect}
                            onRequestClose={()=>{
                                setModalConnect(false);
                            }}
                            transparent={true}
                        >
                            <ViewModal>
                                    <ViewInfoModal>

                                    <TextTitlePopup>
                                        Erro de Conexão
                                    </TextTitlePopup>

                                    <TextErrorModal>

                                        O aparelho deve estar conectado à internet para fazer a utilização do aplicativo.
                                        {'\n'}Por favor, ative o sinal de internet.
                                    </TextErrorModal>
                                    <ButtonPopup
                                        onPress={()=>{
                                            setModalConnect(false);
                                        }}
                                    >
                                        <TextButton>
                                            Fechar
                                        </TextButton>
                                    </ButtonPopup>
                                </ViewInfoModal>
                            </ViewModal>
                        </Modal>
                    
                
            }

            {/*Modal para aguardar a requisição*/}
            {
                requisitionTime &&
                <Modal
                    animationType="slide"
                    visible={requisitionTime}
                    onRequestClose={()=>{
                        setRequisitionTime(false);
                    }}
                    transparent={true}
                >
                    <LoadingRequisition>
                        <ViewLoadingAnimation>

                        <LottieView
                                source={require('../animations/loadingAnimation.json')}
                                autoPlay
                                style={{
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                        />
                        </ViewLoadingAnimation>
                    </LoadingRequisition>
                </Modal>

            }

        </LinearGradient>

    </Container>
  );
}

export default PrincipalScreen;

