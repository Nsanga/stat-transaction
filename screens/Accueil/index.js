import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Box, Button, Icon, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Divider, Input, show, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ItemTransaction from "../../components/ItemTransaction"


const Accueil = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  return <Stack w="100%">
    <VStack backgroundColor="#1a87dd" borderBottomLeftRadius={'50'} borderBottomRightRadius={'50'} height="230">
      <Box safeAreaTop />
      <Heading size="md" mt="12" margin={'7'} color="#fff">
        Call Box 266360
      </Heading>
      <Heading size="md" alignSelf="left" mt="12" margin={'7'} color="#fff">
       14 septembre 2022
      </Heading>
      <Heading size="md" alignSelf="left" mt="12" margin={'7'} color="#fff">
        Retraits:    XAF
      </Heading>
      <Heading size="md" alignSelf="left" mt="12" margin={'7'} color="#fff">
        Depots:      XAF
      </Heading>
      <VStack>

        </VStack>
        
    
    </VStack>

      <VStack>
      <HStack space={3} justifyContent="center">
          <Button mt="2" backgroundColor='#1a87dd' width="165" height="49" onPress={() => navigation.navigate("depot")}>
            Dépots
          </Button>
          <Button mt="2" backgroundColor='#F47A08' width="165" height="49" onPress={() => navigation.navigate("retrait")}>
            Retraits
          </Button>
      </HStack>
      </VStack>
      <VStack>
        <HStack space={3} justifyContent="center">
          <Button mt="2" backgroundColor='#726E9D' width="165" height="49" onPress={() =>navigation.navigate("recharge")}>
            Recharge
          </Button>
          <Button mt="2" backgroundColor='#3E7467' width="165" height="49" onPress={() =>navigation.navigate("historique")}>
            Historique
          </Button>
        </HStack>
      </VStack>
      <VStack margin={'4'}>
        <HStack>
        <Text fontSize="16" fontWeight="600" textAlign={"left"}>Dernières transactions</Text>
        <Pressable onPress={() => navigation.navigate("historique")}>
        <Text color='#1a87dd' fontWeight="600" fontSize="16" textAlign="right" ml='24'>Voir plus</Text>
        </Pressable>
        </HStack>
      </VStack>
      
      <VStack mt={'-12'}>

      <ItemTransaction titre={'Orange money'} operator="orange" description={"Depot effectue par 690045933 ETS ALL"} heure={"13:00"} />
      
      </VStack>
    </Stack>;
};

    export default Accueil;