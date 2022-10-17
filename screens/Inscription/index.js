import  React, { useState, useEffect, useRef } from 'react';
import { Input, Icon, Stack, Pressable, Box, NativeBaseProvider, Toast, ScrollView, KeyboardAvoidingView, useToast } from "native-base";
import { Image, VStack, Heading, Link, Text, FormControl, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import inscriptionImage from "../../assets/inscription.png";
import { Dimensions } from 'react-native';
import * as SQLite from "expo-sqlite";
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';


const Inscription = () => {
  const { width } = Dimensions.get("window");
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const toast = useToast();
  const [load, setLoad] = React.useState(false);
  const navigation = useNavigation();
  const [valid, setValid] = React.useState(false);
  const phoneRef = React.useRef();


  const db = SQLite.openDatabase("db.db");



  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists utilisateur (id integer primary key not null, nom text, prenom text, telephone text, password text, confirm text);"
      );
    });
  }, []);

  const add = () => {
    setLoad(true);
    // is text empty?
    if (name == "" || lastname == "" || phone == "" || password == "" || password != confirm || !valid) {
      toast.show({
        title: "Veuillez remplir les champs correctement",
        placement: "top",
        backgroundColor: "#1a87dd"
      })
      setLoad(false);

      return (false);

    }
    db.transaction(
      (tx) => {
        tx.executeSql("insert into utilisateur (nom, prenom, telephone, password) values (?, ?, ?, ?)", [name, lastname, phone, password]);
        tx.executeSql("select * from utilisateur", [], (_, { rows }) => {

          toast.show({
            title: "Inscription réussite",
            placement: "top",
            backgroundColor: "#1a87dd"
          })
          setLoad(false);
          navigation.navigate("login")
        }

        );
      },
      null
    );
  };


  return <Stack m={'8'}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding" >
        <VStack>
          <Box alignItem='center' justifyContent='center'>
            <VStack>
              <Heading size="2xl" fontWeight="600" alignSelf="center">
                Inscription
              </Heading>
            </VStack>
            <VStack alignSelf="center" textAlign={'center'} mt={'-3'}>
              <Image source={inscriptionImage} alt="Alternate Text" width="250" height="200" resizeMode='stretch' />
            </VStack>

            <VStack space={1} mt={'-5'}>

              <FormControl isRequired>
                <FormControl.Label _text={{ fontSize: "md" }}>Nom</FormControl.Label>

                <Input size={'lg'}
                  placeholder='Entrer votre nom'
                  onChangeText={(val) => setName(val)} value={name} />


              </FormControl>
              <FormControl isRequired>
                <FormControl.Label _text={{ fontSize: "md" }}>Prenom</FormControl.Label>

                <Input size={'lg'}
                  placeholder='Entrer votre prenom'
                  onChangeText={(val) => setLastname(val)} value={lastname} />

              </FormControl>
              <FormControl isRequired>
                <FormControl.Label _text={{ fontSize: "md" }}>Téléphone</FormControl.Label>
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
              <FormControl isRequired>
                <FormControl.Label _text={{ fontSize: "md" }}>Mot de passe</FormControl.Label>

                <Input size={'lg'}
                  type={show ? "number" : "password"}
                  keyboardType='numeric'
                  maxLength={4}
                  InputRightElement={<Pressable onPress={() => setShow(!show)}>

                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                  </Pressable>}
                  placeholder="Entrer votre mot de passe"
                  onChangeText={(val) => setPassword(val)} value={password} />
                <FormControl.Label _text={{ fontSize: "md" }}>Confirmez votre mot de passe</FormControl.Label>

                <Input size={'lg'}
                  type={show ? "number" : "password"}
                  keyboardType='numeric'
                  maxLength={4}
                  isInvalid={confirm && confirm != password}
                  InputRightElement={<Pressable
                    onPress={() => setShow(!show)}>

                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                  </Pressable>}
                  placeholder="Entrer votre mot de passe"
                  onChangeText={(val) => setConfirm(val)} value={confirm} />
                  <Text color="red.700">{confirm && confirm != password && "Les mots de passe ne correspondent pas"}</Text>

              </FormControl>
              <Button mt="2" backgroundColor='#1a87dd' mb="5" _text={{ fontSize: "md" }} onPress={() => add()} isLoading={load} isLoadingText="S'inscrire">
                S'inscrire

              </Button>

            </VStack>
          </Box>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>

  </Stack >;

};

export default Inscription;
