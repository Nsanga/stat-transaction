import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Box, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Pressable, Divider } from "native-base";
import ItemTransaction from "../../components/ItemTransaction"

const Historique = () => {
  const [step, setStep] = React.useState(0)
  return <Stack w="100%">
    <VStack >
      <Box safeAreaTop />
      <Heading size="xl" alignSelf="center" mt="2" margin={'7'}>
        Historique
      </Heading>
      <VStack>
        <VStack backgroundColor="#f6f6f6" borderRadius={'15'} width="347" height="60" alignSelf={'center'} >
          <HStack alignSelf='center'>
            <Button mt="1.5" onPress={() => setStep(0)} backgroundColor={step == 0 ? '#1a87dd' : '#f6f6f6'} width="165" height="49" fontColor="black" _text={{ color: step == 0 ? '#fff' : '#000' }} borderRadius={'10'}>
              Dépots
            </Button>
            <Button mt="1.5" mb={'2'} onPress={() => setStep(1)} backgroundColor={step == 1 ? '#F47A08' : '#f6f6f6'} width="165" height="49" borderRadius={'10'} _text={{ color: step == 1 ? '#fff' : '#000' }}>
              Retraits
            </Button>
          </HStack>
        </VStack>
        {step == 0 ? <ItemTransaction titre={'Orange money'} operator="orange" description={"Depot effectue par 690045933 ETS ALL"} date={"09 septembre"} heure={"13:00"} /> : <ItemTransaction titre={'mtn MoMo'} operator="mtn" description={"Depot effectue par 651670774 ETS BILL"} date={"05 septembre"} heure={"15:00"} />}
      </VStack>

      <Divider width="80%" alignSelf={'center'} />
    </VStack>


  </Stack>
};

export default Historique;