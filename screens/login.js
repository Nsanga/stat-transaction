import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, Dimensions } from 'react-native';
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Text } from "native-base";
import { Image, VStack, Heading, Link, HStack, FormControl, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import loginImage from "../assets/login.png"

const Login = () => {
  const [show, setShow] = React.useState(false);
  return <Stack m={'8'}>

    <VStack >
      <Heading size="2xl" fontWeight="600" alignSelf="center" mt="12" >
        LOGIN
      </Heading>
    </VStack>
    <VStack alignSelf="center" mt="5">
      <Image source={loginImage} alt="Alternate Text" width="250" height="200" resizeMode='stretch' />
    </VStack>

    <VStack space={4} mt="5"> 
      <FormControl isRequired>
        <FormControl.Label>ID_KIOSQUE</FormControl.Label>
        <Input placeholder='Entrer votre code' />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
        </Pressable>} placeholder="Entrer votre mot de passe" />

        <Link _text={{
          fontSize: "xs",
          fontWeight: "500",
          color: "indigo.500"
        }} alignSelf="center" mt="1" >
          Mot de passe oublié?
        </Link>

      </FormControl>
      <Button mt="2" backgroundColor='#1a87dd' mb="5">
        Connexion

      </Button>
    </VStack>

  </Stack>;
  
};

export default Login;
 