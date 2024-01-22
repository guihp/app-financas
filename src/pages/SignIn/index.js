import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText, 
    Link, 
    LinkText } from './styles';

import { useNavigation } from '@react-navigation/native';    
import { AuthContext } from '../../context/auth';

export default function SignIn() {

    
    const navigation = useNavigation()
    const { signIn, loadingAuth } = useContext(AuthContext)
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    function handleLogin () {
        signIn(email, password)
    }

    return(
        <Background>

            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <Logo 
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>

                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={ (texto) => setEmail(texto) }
                    />
                </AreaInput>

                <AreaInput>

                    <Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={ (texto) => setPassword(texto) }
                        secureTextEntry={true}
                    />
                </AreaInput>



                <SubmitButton activeOpacity={0.9} onPress={handleLogin}>
                        {
                            loadingAuth ? (
                                <ActivityIndicator size={20} color="#fff"/>
                            ) : (
                                <SubmitText>Acessar</SubmitText>
                            )
                        }
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SingUp') }>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>

        </Background>
    )

}