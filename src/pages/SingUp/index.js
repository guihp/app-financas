import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText, 
    } from '../SignIn/styles';
   
import { AuthContext } from '../../context/auth';


export default function SignIn() {

    const { singUp, loadingAuth } = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleSignUp(){
        if (nome === '' || email === '' || password === '') {
            return;
        }
        singUp(nome, email, password)
    }


    return(
        <Background>
            
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>

                    <Input
                        placeholder="Seu nome"
                        value={nome}
                        onChangeText={ (texto) => setNome(texto) }
                    />
                </AreaInput>

                <AreaInput>

                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={ (texto) => setEmail(texto) }
                    />
                </AreaInput>

                <AreaInput>

                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={ (texto) => setPassword(texto) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.9} onPress={handleSignUp}>
                    {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#fff" />
                    ) : (
                        <SubmitText>Cadastrar</SubmitText>
                    )                  
                    }
                    
                </SubmitButton>


            </Container>


        </Background>
    )

}