import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Box, Button,Text, Stack, VStack, HStack, Heading, Pressable, ScrollView, Input, Icon } from "native-base";
import {RefreshControl} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import emptyImage from "../../assets/empty_illustration.png";
import ItemTransaction from "../../components/ItemTransaction";
import moment from "moment/moment";
import * as SQLite from "expo-sqlite";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Historique = ({route}) => {
  const [result, setResult] = useState([]);
  const [dataresult, setDataResult] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const { user } = route.params;
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  const db = SQLite.openDatabase("db.db");

  useEffect(() => {
    getUser();
    getTransactions();
    typeTransaction("depot");
    setRefreshing(false)
    console.log(user);
  }, [refreshing])

  const typeTransaction = async (type) => {
    if(type == "depot")
    {
      setStep(0);
    const  depot = dataresult.filter(x => x.type.includes("depot"))
     await setResult(depot);
    }
    else
    {
      setStep(1)
      const  retrait = dataresult.filter(x => x.type.includes("retrait"))
      await setResult(retrait);

    }

  }

  const getTransactions = () => {
    
    // is text empty?
    db.transaction(
     async (tx) => {
        try {
        tx.executeSql("select * from operation where idGerant=? order by idTransaction desc limit 2;", [user?.id], async (_, { rows }) => {
          await setDataResult(rows._array);
          console.log(rows._array)
          
        })
        }
        catch (e) {
          console.log(e)
        }
      }
    )
  };


  const [step, setStep] = React.useState(0)
  return <Stack w="100%">
    <VStack >
      <Box safeAreaTop />
      <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} alignSelf="center" margin={'7'}>
        Historique
      </Heading>

      <VStack mt={2}>
        <HStack alignSelf={'center'} ml={2}>
          <Input placeholder="Rechercher une transaction" width="320" height={10} borderRadius="40" fontSize="14"
            InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
          <Icon m="3" size="md" color="#1a87dd" as={<MaterialIcons name="filter-list" />} />
        </HStack>
      </VStack>
      <VStack mt={3}>
        <VStack backgroundColor="#f6f6f6" borderRadius={'15'} width="347" height="60" alignSelf={'center'} >
          <HStack alignSelf='center'>
            <Button mt="1.5" onPress={() => typeTransaction("depot")} backgroundColor={step == 0 ? '#1a87dd' : '#f6f6f6'} width="165" height="49" fontColor="black" _text={{ color: step == 0 ? '#fff' : '#000' }} borderRadius={'10'} fontSize={"lg"}>
              Dépots
            </Button>
            <Button mt="1.5" mb={'2'} onPress={() => typeTransaction("retrait")} backgroundColor={step == 1 ? '#F47A08' : '#f6f6f6'} width="165" height="49" borderRadius={'10'} _text={{ color: step == 1 ? '#fff' : '#000' }} fontSize={"lg"}>
              Retraits
            </Button>
          </HStack>
        </VStack>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            {result?.length ?
           <>
            {result.map((item, i) => {
            return <VStack>
              <ItemTransaction key={i} titre={item.operateur}
                operator={item.operateur}
                type={item.type}
                description={user?.telephone + " vers " + item.telephone + ". Informations detaillees: Montant de transaction : 2000 FCFA, ID transaction : CI220822.1921.C04642, Frais : 0 FCFA, Commission : 0 FCFA, Montant Net du Credit : 2000 FCFA, Nouveau Solde : 20022.43 FCFA."}
                date={item.datetransaction} heure={"13:00"} />
            </VStack>
          })}
          </> : 
           <VStack alignItems="center" justifyContent={'center'} mt={24}>
           <Image source={emptyImage} alt="Alternate Text" width="166" height="133" resizeMode='stretch' />
         </VStack>}

        </ScrollView>


      </VStack>
      <StatusBar style="auto" />

    </VStack>
  </Stack >
};

export default Historique;