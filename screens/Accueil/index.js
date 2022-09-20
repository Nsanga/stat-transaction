import * as React from "react";
import { Box, Button, Icon, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Divider, Input, show, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ItemTransaction from "../../components/ItemTransaction"


const Accueil = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  return <Stack w="100%">
    <VStack backgroundColor="#1a87dd" borderBottomLeftRadius={'50'} borderBottomRightRadius={'50'} height="270">
      <Box safeAreaTop alignItem={'center'} justifyContent='center'/>
      <Heading size="xl" mt="5" margin={'5'} color="#fff" alignSelf={'center'}>
        Call Box 266360
      </Heading>
      <Heading size="md"  mt="2" margin={'7'} color="#fff" alignSelf={'center'}>
       14 septembre 2022
      </Heading>
      <Heading size="md"  mt="0" margin={'2'} color="#fff" alignSelf={'center'}>
        Retraits: 500000 XAF
      </Heading>
      <Heading size="md"  mt="0" margin={'2'} color="#fff" alignSelf={'center'}>
        Depots: 500000 XAF
      </Heading>
      <VStack>

        </VStack>
        
    
    </VStack>

      <VStack mt={5}>
      <HStack space={1} justifyContent="center">
          <Button backgroundColor='#1a87dd' _text={{fontSize:"lg"}} width="165" height="49" onPress={() => navigation.navigate("depot")}>
            Dépots
          </Button>
          <Button backgroundColor='#F47A08' _text={{fontSize:"lg"}} width="165" height="49" onPress={() => navigation.navigate("retrait")}>
            Retraits
          </Button>
      </HStack>
      </VStack>
      <VStack>
        <HStack space={1} justifyContent="center" mt="3">
          <Button backgroundColor='#726E9D' _text={{fontSize:"lg"}} width="165" height="49" onPress={() =>navigation.navigate("recharge")}>
            Solde
          </Button>
          <Button backgroundColor='#3E7467' _text={{fontSize:"lg"}} width="165" height="49" onPress={() =>navigation.navigate("historique")}>
            Historique
          </Button>
        </HStack>
      </VStack>
      <VStack margin={'4'} mt={5} mb={5}>
        <HStack>
        <HStack>
        <Text fontSize="16" fontWeight="600" textAlign={"left"}>Dernières transactions</Text>
        </HStack>
        <HStack mt={'-2.5'}>
        <Button _text={{color:"#1a87dd", fontWeight:"600", fontSize:"16", textAlign:"right"}} variant={'link'} ml='24' onPress={() =>navigation.navigate("historique")}>Voir plus</Button>
        </HStack>
        </HStack>
      </VStack>
      
      <VStack mt={'-12'}>

      <ItemTransaction titre={'Orange money'} 
      operator="orange" 
      description={"Depot effectue par 690045933 ETS ALLIANCE INDEPENDANT35 to 690197100 DIPITA EPALLE. Informations detaillees: Montant de transaction : 2000 FCFA, ID transaction : CI220822.1921.C04642, Frais : 0 FCFA, Commission : 0 FCFA, Montant Net du Credit : 2000 FCFA, Nouveau Solde : 20022.43 FCFA."} heure={"13:00"} />
      
      </VStack>
    </Stack>;
};

    export default Accueil;