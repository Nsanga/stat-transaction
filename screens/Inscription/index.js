import React from 'react';
import { Input, Icon, Stack, Pressable, Box, NativeBaseProvider, Text, ScrollView, KeyboardAvoidingView } from "native-base";
import { Image, VStack, Heading, Link, HStack, FormControl, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import inscriptionImage from "../../assets/inscription.png";
import { Dimensions } from 'react-native';

const Inscription = (props) => {
  const {width} = Dimensions.get("window");
  const [show, setShow] = React.useState(false);
  return <Stack m={'8'}>
    <ScrollView showsVerticalScrollIndicator = {false}>
    <KeyboardAvoidingView behavior="position" >
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
            <Input size={'lg'} placeholder='Entrer votre nom' />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ fontSize: "md" }}>Prenom</FormControl.Label>
            <Input size={'lg'} placeholder='Entrer votre prenom' />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ fontSize: "md" }}>Téléphone</FormControl.Label>
            <Input size={'lg'} type="number" keyboardType="numeric" placeholder='Entrer votre téléphone' />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ fontSize: "md" }}>Mot de passe</FormControl.Label>
            <Input size={'lg'} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Entrer votre mot de passe" />
            <FormControl.Label _text={{ fontSize: "md" }}>Confirmez votre mot de passe</FormControl.Label>
            <Input size={'lg'} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Entrer votre mot de passe" />

          </FormControl>
          <Button mt="2" backgroundColor='#1a87dd' mb="5" _text={{ fontSize: "md" }} onPress={() => props.navigation.navigate("login")}>
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
