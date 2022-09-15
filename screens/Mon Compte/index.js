import react from "react";
import { VStack,Stack, HStack, Box,Heading,Icon, Text, Divider, Pressable } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Share, onShare } from "react-native";



const MonCompte = (props) => {

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Partager via:'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return <Stack w="100%">
      <VStack backgroundColor="#1a87dd" height="150">
        <Box safeAreaTop />
        <Heading size="xl" mt="5" margin={'5'} color="#fff">
         Mon Compte
         
        </Heading>
        <VStack>
        <HStack ml={'5'} mt={2}>
        <Icon as={<Ionicons name={"person"}/>} size={30} color="#ffff"></Icon>
        <Text fontSize={'lg'} bold> ID Kiosque</Text>
        </HStack>
        </VStack>
        

        </VStack>
        <VStack space={5} mt={5}>
            <Text color="#9e9e9e"> Parametres</Text>
            <HStack ml={5}>
            <Icon as={<Ionicons name={"lock-closed"}/>} size={25} color="#000"></Icon>
            
            <Text fontSize='md' ml={2}> Changer le code secret</Text>
            <Icon as={<Ionicons name={"chevron-forward"}/>} size={25} color="#000" ml={'110'}></Icon>

            </HStack>
            <HStack ml={5}>
            <Icon as={<Ionicons name={"finger-print"}/>} size={25} color="#000"></Icon>
            <Text fontSize={'md'} ml={2}> Touch ID</Text>
            <Icon as={<Ionicons name={"chevron-forward"}/>} size={25} color="#000" ml={'210'}></Icon>
            </HStack>
            
        </VStack>
        <Divider bgColor="#9e9e9e"  mt={'5'}/>
        <VStack space={'5'} mt={5}>
            <Text color="#9e9e9e" > Aide et contact</Text>
            <HStack ml={4}>
            <Icon as={<Ionicons name={"share-social"}/>} size={25} color="#000"></Icon>
            
            <Pressable onPress={onShare} >
            <Text fontSize='md' ml={2}> Partager l'application</Text></Pressable>
            <Icon as={<Ionicons name={"chevron-forward"}/>} size={25} color="#000" ml={'125'}></Icon>

            </HStack>
            <HStack ml={4}>
            <Icon as={<Ionicons name={"call"}/>} size={25} color="#000"></Icon>
            
            <Pressable onPress={() => props.navigation.navigate("contacter")}>
            <Text fontSize='md' ml={2}>Nous contacter</Text></Pressable>
            <Icon as={<Ionicons name={"chevron-forward"}/>} size={25} color="#000" ml={'170'}></Icon>
            
            </HStack>
            <HStack ml={4}>
            <Icon as={<Ionicons name={"log-out"}/>} size={25} color="#000"></Icon>
            <Pressable onPress={() => props.navigation.navigate("login")}>
            <Text fontSize='md' ml={2}> Déconnexion</Text></Pressable>
        
            </HStack>
            <Text></Text>
           
            
        </VStack>
       

</Stack>
};
export default MonCompte;