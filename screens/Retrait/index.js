import React,{useState} from "react";
import { FormControl ,VStack, Stack, Heading, Input, Center, Button,useToast } from "native-base";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import * as SQLite from "expo-sqlite";


const Retrait = () =>{

  const [tel, setTel] = useState("");
  const [amount, setAmount] = useState("");
  const [user, setUser] = useState("");
  const navigation = useNavigation();
  const [load, setLoad] = React.useState(false);
  const toast = useToast();

  const db = SQLite.openDatabase("db.db");

  useEffect (()=>{
    getUser();
     },[])
   
     const getUser = async () => {
       try {
         const value = await AsyncStorage.getItem('@user');
         setUser(JSON.parse(value).id);
       } catch(e) {
         // error reading value
       }
     }

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists operation (idTransaction integer primary key not null, operateur text, telephone text,type text, montant text, idGerant int);"
      );
    });
  }, []);

  const receive = () =>{
    setLoad(true);
    // is text empty?
    if (tel == "" || amount == "") {
      toast.show({
        title: "Veuillez remplir tout les champs",
        placement: "top",
        backgroundColor: "#bb0b0b"
      })
      setLoad(false);
      return (false);


    }
    db.transaction(
      (tx) => {
    
      try {
         tx.executeSql("insert into operation (telephone, montant,type,idGerant ) values (?, ?,?, ?)", [tel, amount,"retrait", user]);
          
         tx.executeSql("select * from operation", [], (_, { rows }) => {
        console.log(rows._array);
        navigation.navigate("navigation");
        })
        }
        catch(e) {
console.log(e)
        }
      }
    )
  }
    return(<Stack m="8">
        <VStack alignSelf='center'>
            <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
          color: "warmGray.50"}} textAlign='center' margin={'7'}>
                Retrait
            </Heading>
        </VStack>
        <VStack mt='10'alignSelf={'center'}>
        <FormControl>
            <FormControl.Label textAlign={'left'}>Téléphone</FormControl.Label>
            <Input type="number" keyboardType="numeric" w='64' h="10" borderColor='#1a87dd' rounded="md" color={'#1a87dd'} size='xl'/>
          </FormControl>
        </VStack>        
        <VStack mt='5' alignSelf={'center'}>
        <FormControl>
            <FormControl.Label textAlign={'left'}>Montant</FormControl.Label>
            <Input type="number" keyboardType="numeric" w='64' h="10" borderColor='#F8BB18' rounded="md" color={'#F8BB18'} size='xl' />
          </FormControl>
        </VStack>        
        <VStack alignSelf={'center'} mt={'8'}>
            <Button w='64' bgColor='#1a87dd' onPress={() => receive()} isLoading={load} isLoadingText="Valider"> Valider</Button>
        </VStack>
                

     </Stack>
    );
};
export default Retrait ;