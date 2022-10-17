import { StatusBar } from 'expo-status-bar';
import React, {useRef,useEffect} from 'react';
import { Input, Icon, Stack, Pressable, Box, ScrollView, KeyboardAvoidingView, useToast } from "native-base";
import { Image, VStack, Heading, Link, Text, FormControl, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import loginImage from "../../assets/login.png";
import * as SQLite from "expo-sqlite";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from 'react-native-phone-number-input';


const Login = (props) => {
  const [show, setShow] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const toast = useToast();
  const navigation = useNavigation();
  const [valid, setValid] = React.useState(false);
  const phoneRef = React.useRef();


  useEffect(() => {
    AsyncStorage.removeItem("@user")
  }, [])



  const db = SQLite.openDatabase("db.db");

  const verification = () => {
    setLoad(true);
    // is text empty?
    if (phone == "" || password == "" || !valid) {
      toast.show({
        title: "Veuillez remplir tout les champs",
        placement: "top",
        backgroundColor: "#1a87dd"
      })
      setLoad(false);
      return (false);

    }
     db.transaction(
       async (tx)  => {
        await tx.executeSql("select * from utilisateur where telephone=? and password=?", [phone, password], async (_, { rows })   => {
          setLoad(false);
          if (rows._array.length > 0) {
            try {
               AsyncStorage.setItem('@user', JSON.stringify(rows._array[0]));
              navigation.navigate("navigation");
            } catch (e) {
              // saving error
              console.log(e)
            }
          }
          else{
            toast.show({
              title: "Mot de passe ou numero de téléphone incorrect",
              placement: "top",
              backgroundColor: "#bb0b0b"
            })
          }

        },
          null
        );
      })

  };


  return <Stack m={'8'}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="position" >
        <VStack >
          <Heading size="2xl" fontWeight="600" alignSelf="center" mt="5" >
            Connexion
          </Heading>
        </VStack>
        <VStack alignSelf="center" mt="5">
          <Image source={loginImage} alt="Alternate Text" width="250" height="200" resizeMode='stretch' />
        </VStack>

        <VStack space={4} mt="5">
          <Box alignItem='center' justifyContent='center'>
            <FormControl isRequired>
              <FormControl.Label _text={{ fontSize: "md" }}>Telephone</FormControl.Label>
              <PhoneInput
                  ref={phoneRef}
                  defaultCode="CM"
                  layout="first"
                  placeholder='Telephone'
                  onChangeText={(val) => setPhone(val)} value={phone} 
                  onChangeFormattedText={(val) => {setPhone(val);
                  const checkValid = phoneRef.current?.isValidNumber(val)
                  setValid(checkValid ? checkValid : false)}}/>
                  <Text color="red.700">{phone && !valid && "Numero de telephone incorrect"}</Text>

            </FormControl>
            <FormControl mt={5} isRequired>
              <FormControl.Label _text={{ fontSize: "md" }}>MOT DE PASSE</FormControl.Label>
              <Input size={'lg'}
                type={show ? "number" : "password"}
                keyboardType='numeric'
                InputRightElement={<Pressable onPress={() => setShow(!show)} >
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} mr="2" color="muted.400" />
                </Pressable>}
                placeholder="Entrer votre mot de passe"
                onChangeText={(val) => setPassword(val)} value={password} />

              <Link _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500"
              }} alignSelf="flex-end" mt="1">
                Mot de passe oublié?
              </Link>


            </FormControl>
            <Button mt="2" backgroundColor='#1a87dd' mb="5" fontSize={'xl'} _text={{ fontSize: "md" }} onPress={() => verification()} isLoading={load} isLoadingText="Connexion">
            Connexion

            </Button>

            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="center" onPress={() => props.navigation.navigate("inscription")}>
              Vous n'avez pas de compte?
            </Link>
          </Box>

        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>


  </Stack>;

};

export default Login;
