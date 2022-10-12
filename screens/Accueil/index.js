import React, { useState } from "react";
import { Box, Button, Icon, NativeBaseProvider, ScrollView, Stack, VStack, HStack, Heading, Text, Divider, Input, show, Pressable, useToast } from "native-base";
import {RefreshControl} from 'react-native';
import ItemTransaction from "../../components/ItemTransaction"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import moment from "moment/moment";
import "moment/locale/fr";
moment.locale("fr");
import * as SQLite from "expo-sqlite";


const Accueil = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [load, setLoad] = React.useState(false);
  const toast = useToast();
  const [tel, setTel] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  const db = SQLite.openDatabase("db.db");


  useEffect(() => {
    getUser();
    getTransactions();
    console.log('casz',user)
    setRefreshing(false)
  }, [refreshing])


  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@user');
      const value2 = await JSON.parse(value);
      await setUser(value2);

    } catch (e) {
      // error reading value
    }
  }


  const getTransactions = () => {
    
    // is text empty?
    db.transaction(
      (tx) => {
        try {
          tx.executeSql("select * from operation where idGerant=? order by idTransaction desc limit 2", [user.id], (_, { rows }) => {
            setResult(rows._array);
            console.log(rows._array)
            
          })
        }
        catch (e) {
          console.log(e)
        }
      }
    )
  };


  return <Stack w="100%">
    <VStack backgroundColor="#1a87dd" borderBottomLeftRadius={'50'} borderBottomRightRadius={'50'} height="270">
      <Box safeAreaTop alignItem={'center'} justifyContent='center' />
      <Heading size="xl" mt="5" margin={'5'} color="#fff" alignSelf={'center'}>
        {user?.nom}
      </Heading>
      <Heading size="md" mt="2" margin={'7'} color="#fff" alignSelf={'center'}>
        {moment().format('LL')}
      </Heading>
      <Heading size="md" mt="0" margin={'2'} color="#fff" alignSelf={'center'}>
        Retraits: 50000 XAF
      </Heading>
      <Heading size="md" mt="0" margin={'2'} color="#fff" alignSelf={'center'}>
        Depots: 50000 XAF
      </Heading>
      <VStack>
      </VStack>


    </VStack>

    <VStack mt={5}>
      <HStack space={1} justifyContent="center">
        <Button backgroundColor='#1a87dd' _text={{ fontSize: "lg" }} width="165" height="49" onPress={() => navigation.navigate("depot")} isLoading={load} isLoadingText="depot">
          Dépots
        </Button>
        <Button backgroundColor='#F47A08' _text={{ fontSize: "lg" }} width="165" height="49" onPress={() => navigation.navigate("retrait")}>
          Retraits
        </Button>
      </HStack>
    </VStack>
    <VStack>
      <HStack space={1} justifyContent="center" mt="3">
        <Button backgroundColor='#726E9D' _text={{ fontSize: "lg" }} width="165" height="49" onPress={() => navigation.navigate("recharge")}>
          Solde
        </Button>
        <Button backgroundColor='#3E7467' _text={{ fontSize: "lg" }} width="165" height="49" onPress={() => navigation.navigate("historique")}>
          Historique
        </Button>
      </HStack>
    </VStack>
    <VStack margin={'4'} mt={5} mb={3}>
      <HStack>
        <HStack>
          <Text fontSize="16" fontWeight="600" textAlign={"left"}>Dernières transactions</Text>
        </HStack>
        <HStack mt={'-2.5'}>
          <Button _text={{ color: "#1a87dd", fontWeight: "600", fontSize: "16", textAlign: "right" }} variant={'link'} ml='24' onPress={() => navigation.navigate("historique")}>Voir plus</Button>
        </HStack>
      </HStack>
    </VStack>

    <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
      {result.map((item, i) => {
        return <VStack mt={'-12'}>
          <ItemTransaction key={i} titre={item.operateur}
            operator={item.operateur}
            description={"Depot effectue par "+user?.telephone+ " to " +item.telephone+ ". Informations detaillees: Montant de transaction : 2000 FCFA, ID transaction : CI220822.1921.C04642, Frais : 0 FCFA, Commission : 0 FCFA, Montant Net du Credit : 2000 FCFA, Nouveau Solde : 20022.43 FCFA."}
            heure={moment(item.heuretransaction).format("LT")}
            idTransaction={item.idTransaction}/>

        </VStack>
      })}
    </ScrollView>

  </Stack>;
};

export default Accueil;