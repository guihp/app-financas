import React, {useContext} from "react";

import { Area, Img, Text, Name, AreaItem } from "./styles";

import { DrawerItemList, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {AuthContext} from '../../context/auth'


export default function CustomDrawer(props){

    const { user, signOut } = useContext(AuthContext);

    return(
        <DrawerContentScrollView {...props} >
            <Area>
                <Img source={require('../../assets/Logo.png')} resizeMode="contain"/>
                <Text> Bem-vindo</Text>
                <Name numberOfLines={1}> { user && user.name} </Name>
            </Area>

            <DrawerItemList {...props} />

            <AreaItem>
                <DrawerItem  {...props}
                    label="Sair"
                    onPress={ () => signOut()}
                    style={{ borderWidth: 1, borderColor: '#c62c36', justifyContent: 'center', paddingLeft: 23}}
                    labelStyle={{ color: '#c62c36', textAlign: 'center' }}
                />
            </AreaItem>

        </DrawerContentScrollView>
    )
}