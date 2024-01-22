import React from "react";
import { Container, TipoText, IconView, Tipo, ValorText } from "./styles";
import { TouchableWithoutFeedback, Alert } from "react-native";

import Feather from 'react-native-vector-icons/Feather'


export default function HistoricoList({ data, deleteItem }) {

    function handleDelete(){
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar este registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={handleDelete}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Feather
                        name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                        size={20} 
                        color='#FFF'
                        />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>
                    R$ {data.value}
                </ValorText>

            </Container> 
        </TouchableWithoutFeedback>
    )
}