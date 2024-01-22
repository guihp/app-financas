import React, { useState } from "react";

import { RegisterContainer, RegisterTypeButton, RegisterLabel} from "./styles";
import Feather from 'react-native-vector-icons/Feather'

export default function RegisterTypes({ type, sendTypeChangend }) {

    const [typeChecked, setTypeChecked] = useState(type);

    function changerType(name){
        if(name === 'receita') {
            setTypeChecked('receita');
            sendTypeChangend('receita');
        } else {
            setTypeChecked('despesa');
            sendTypeChangend('despesa');
        }
    }

    return(
        <RegisterContainer> 
            <RegisterTypeButton 
            checked={ typeChecked === 'receita' ? true : false} 
            onPress={ () => changerType('receita')} 
            >
                <Feather name='arrow-up' size={25} color='#121212' />
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton 
            checked={ typeChecked === 'despesa' ? true : false}
            onPress={ () => changerType('despesa')}
            >
                <Feather name='arrow-down' size={25} color='#121212' />
                <RegisterLabel>
                    Despesa
                </RegisterLabel>
            </RegisterTypeButton>
        </RegisterContainer>
    )
}








