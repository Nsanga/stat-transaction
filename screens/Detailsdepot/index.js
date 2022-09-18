import React from "react";
import { FormControl ,VStack, Stack, Heading, Box, HStack, Button, Text} from "native-base";


const DetailsDepot = (props) =>{
    return(<Stack m="8">
        <VStack alignSelf='center'>
            <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
          color: "warmGray.50"}} >
                Details de la transaction
            </Heading>
        </VStack>
          
        <VStack>
        <Box alignItem={'center'} justifyContent={'center'} mt='24'>
        <VStack alignSelf={'left'}>
        <Text fontSize={20}>Nom:</Text>
        </VStack>
        <VStack mt='5' alignSelf={'left'} fontSize={16}>
        <Text fontSize={20}>Téléphone:</Text>
        </VStack>  
        <VStack mt='5' alignSelf={'left'}>
        <Text fontSize={20}>Montant:</Text>
        </VStack>              
        <VStack alignSelf={'center'} mt={'12'}>
            <HStack space={24} w={'100%'}>
            <Button bgColor='#F47A08' onPress={() => props.navigation.navigate("depot")}>Annuler</Button>
            <Button bgColor='#1a87dd' >Confirmer</Button>
            </HStack>
        </VStack>
        </Box>
        </VStack>
                

     </Stack>
    );
};
export default DetailsDepot ;   