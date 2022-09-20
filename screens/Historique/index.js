import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Box, Button, Stack, VStack, HStack, Heading, Pressable, Divider, Input, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ItemTransaction from "../../components/ItemTransaction";


const Historique = () => {
  const [step, setStep] = React.useState(0)
  return <Stack w="100%">
    <VStack >
      <Box safeAreaTop />
      <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} alignSelf="center" margin={'7'}>
        Historique
      </Heading>

      <VStack mt={2}>
        <HStack alignSelf={'center'} ml={2}>
          <Input placeholder="Rechercher une transaction" width="320" height={10} borderRadius="40" fontSize="14"
            InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
          <Icon m="3" size="md" color="#1a87dd" as={<MaterialIcons name="filter-list" />} />
        </HStack>
      </VStack>
      <VStack mt={3}>
        <VStack backgroundColor="#f6f6f6" borderRadius={'15'} width="347" height="60" alignSelf={'center'} >
          <HStack alignSelf='center'>
            <Button mt="1.5" onPress={() => setStep(0)} backgroundColor={step == 0 ? '#1a87dd' : '#f6f6f6'} width="165" height="49" fontColor="black" _text={{ color: step == 0 ? '#fff' : '#000' }} borderRadius={'10'} fontSize={"lg"}>
              Dépots
            </Button>
            <Button mt="1.5" mb={'2'} onPress={() => setStep(1)} backgroundColor={step == 1 ? '#F47A08' : '#f6f6f6'} width="165" height="49" borderRadius={'10'} _text={{ color: step == 1 ? '#fff' : '#000' }} fontSize={"lg"}>
              Retraits
            </Button>
          </HStack>
        </VStack>


          {
            step == 0 ? <ItemTransaction titre={'Orange money'} 
            operator="orange" 
            description={"Depot effectue par 690045933 ETS ALLIANCE INDEPENDANT35 to 690197100 DIPITA EPALLE. Informations detaillees: Montant de transaction : 2000 FCFA, ID transaction : CI220822.1921.C04642, Frais : 0 FCFA, Commission : 0 FCFA, Montant Net du Credit : 2000 FCFA, Nouveau Solde : 20022.43 FCFA."} 
            date={"09 septembre"} heure={"13:00"} />
              : <ItemTransaction titre={'MTN MoMo'} operator="mtn" description={"Depot effectue par 651670774 ETS BILL to 690197100 DIPITA EPALLE. Informations detaillees: Montant de transaction : 18000 FCFA, ID transaction : CI220822.1301.B45207, Frais : 0 FCFA, Commission : 0 FCFA, Montant Net du Credit : 18000 FCFA, Nouveau Solde : 18022.43 FCFA."} 
              date={"05 septembre"} 
              heure={"15:00"} />
          }
          
         


      </VStack>
      <StatusBar style="auto" />

    </VStack>
  </Stack >
};

export default Historique;