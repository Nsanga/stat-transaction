import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Box, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text } from "native-base";
import ItemTransaction from "../../components/ItemTransaction"

const Historique = () => {
    return <Stack w="100%">
        <VStack >
            <Box safeAreaTop />
            <Heading size="lg" alignSelf="center" mt="2" margin={'7'}>
                Historique
            </Heading>
            <VStack backgroundColor="#F3F4F5" borderRadius={'15'} width="345" height="57" alignSelf={'center'} justifyContent="center">
            <HStack margin={'2'}>
          <Button mt="2" backgroundColor='#F3F4F5' width="165" height="49" fontColor="black" _text={{color:'#000'}} borderRadius={'10'}>
            Dépots
          </Button>
          <Button mt="2" mb={'2'} backgroundColor='#F47A08' width="165" height="49" borderRadius={'10'}>
            Retraits
          </Button>
      </HStack>
            </VStack>
          
            <ItemTransaction titre={'Orange money'}  operator="mtn" description={"Depot effectue par 690045933 ETS ALL"} date={"09 septembre"} heure={"13:00"}/>
                  </VStack>

       
    </Stack>;
};
export default Historique;