import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Box, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Accueil = () => {
  return <Stack w="100%">
    <VStack backgroundColor="#1a87dd" borderBottomLeftRadius={'50'} borderBottomRightRadius={'50'} height="254">
      <Box safeAreaTop />
      <Heading size="lg" alignSelf="left" mt="12" margin={'7'} color="#fff">
        Call Box 266360
      </Heading>
      <Heading size="2xl" alignSelf="left" mt="0" margin={'7'} color="#fff">
        Solde
      </Heading>
      <Heading size="2xl" alignSelf="left" mt="1" margin={'7'} color="#fff">
        0.0.0 000 XAF
      </Heading>
    
    </VStack>

      <VStack>
      <HStack space={3} justifyContent="center">
          <Button mt="2" backgroundColor='#1a87dd' width="165" height="49">
            Dépots
          </Button>
          <Button mt="2" backgroundColor='#F47A08' width="165" height="49">
            Retraits
          </Button>
      </HStack>
      </VStack>
      <VStack>
        <HStack space={3} justifyContent="center">
          <Button mt="2" backgroundColor='#726E9D' width="165" height="49">
            Recharge
          </Button>
          <Button mt="2" backgroundColor='#3E7467' width="165" height="49">
            Historique
          </Button>
        </HStack>
      </VStack>
      <VStack>
        <Text space={3} margin={'3'}>Dernières transactions</Text>
      </VStack>
    </Stack>;
};

    export default Accueil;