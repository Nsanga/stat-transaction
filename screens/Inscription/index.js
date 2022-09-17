import React from 'react';
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Text } from "native-base";
import { Image, VStack, Heading, Link, HStack, FormControl, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import inscriptionImage from "../../assets/inscription.png";

const Inscription = (props) => {
  const [show, setShow] = React.useState(false);
  return <Stack  >

    <VStack  >
      <Heading size="2xl" fontWeight="600" alignSelf="center" mt={5}>
        Inscription
      </Heading>
    </VStack>
    <VStack space={1} alignSelf="center" textAlign={'center'}>
      <Image source={inscriptionImage} alt="Alternate Text" width="250" height="200" resizeMode='stretch' />
    </VStack>

    <VStack space={1} m={'8'} p={'5'} mt={-5} > 
      <FormControl isRequired>
        <FormControl.Label>Nom</FormControl.Label>
        <Input placeholder='Entrer votre nom' />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Prenom</FormControl.Label>
        <Input placeholder='Entrer votre prenom' />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Téléphone</FormControl.Label>
        <Input placeholder='Entrer votre téléphone' />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
        </Pressable>} placeholder="Entrer votre mot de passe" />
        <FormControl.Label>Confirmez votre mot de passe</FormControl.Label>
        <Input type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
        </Pressable>} placeholder="Entrer votre mot de passe" />

      </FormControl>
      <Button mt="2" backgroundColor='#1a87dd' mb="5" onPress={() => props.navigation.navigate("login")}>
        S'inscrire

      </Button>
    </VStack>

  </Stack>;
  
};

export default Inscription;
 