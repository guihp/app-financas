import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import { AuthContext } from '../../context/auth'

import Header from "../../components/Header";
import CalendarModal from "../../components/CalendarModal";

import { 
    Background,
    ListBalance,
    Area,
    Title,
    List
 } from './styles'

import api from "../../services/api";
import { format } from 'date-fns'

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricoList";


import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Home() {


    const isFocused = useIsFocused();

    const [lisBalance, setListBalance] = useState('');
    const [dateMovements, setDateMovements] = useState(new Date());
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let isActive = true;

        async function getMovements(){

            

            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000
            let dateFormated = format(onlyDate, 'dd/MM/yyyy');

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            if(isActive){
                setMovements(receives.data)
                setListBalance(balance.data)
            }

        }

        getMovements();

        return () => isActive = false;
            
        

    },[isFocused, dateMovements])

    async function handleDeleteRegister(id){
        try {
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovements(new Date())
        } catch (error) {
            console.error(error)
        }
    }

    function filterDateMovements(dateSelectd) {
        setDateMovements(dateSelectd)
    }

    return(
        <Background >
            <Header 
                title="Minhas movimentações"
            />

            <ListBalance 
                data={lisBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.tag}
                renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
            />

        <Area>
            <TouchableOpacity onPress={ () => setModalVisible(true)}>
                <Icon name="event" color="#121212" size={30} />
            </TouchableOpacity>
            <Title>
                Ultimas movimentações
            </Title>
        </Area>

        <List 
            data={movements}
            keyExtractor={item => item.id}
            renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDeleteRegister}/>}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
        />

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <CalendarModal setVisible={ () => setModalVisible(false)} handleFilter={filterDateMovements} />
        </Modal>

        </Background>
    )

}