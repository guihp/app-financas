import React, {useContext} from "react";
import { Container, Message, Name, LogoutButton, LogoutText, NewLink, NewText} from "./styles";

import Header from "../../components/Header";

import {AuthContext} from '../../context/auth'

import { useNavigation } from "@react-navigation/native";

export default function Profile({  }){

    const { signOut, user } = useContext(AuthContext);

    const navigation = useNavigation();

   return ( 
        <Container>
            <Header title='Meu Perfil' />
            <Message>
                Bem vindo de volta
            </Message>
            <Name numberOfLines={1}>
                {user.name}
            </Name>

            <NewLink>
                <NewText onPress={ () => navigation.navigate('Registrar') }>
                    Fazer registro
                </NewText>
            </NewLink>

            <LogoutButton onPress={ () => signOut() } >
                <LogoutText>Sair</LogoutText>
            </LogoutButton>

        </Container>
   )
}