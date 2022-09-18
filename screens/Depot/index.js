import React from "react";
import { FormControl ,VStack, Stack, Heading, Input, Center, Button, } from "native-base";


const Depot = (props) =>{
    return(<Stack m="8">
        <VStack alignSelf='center'>
            <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
          color: "warmGray.50"}} margin={'7'}>
                DEPOT
            </Heading>
        </VStack>
        <VStack mt='10'alignSelf={'center'}>
        <FormControl>
            <FormControl.Label>Téléphone</FormControl.Label>
            <Input type="number" keyboardType="numeric" w='64' h="10" borderColor='#1a87dd' rounded="md"  color={'#1a87dd'} size='xl'/>
          </FormControl>
        </VStack>        
        <VStack mt='5' alignSelf={'center'}>
        <FormControl>
            <FormControl.Label>Montant</FormControl.Label>
            <Input type="number" keyboardType="numeric" w='64' h="10" borderColor='#F8BB18' rounded="md" color={'#F8BB18'} size='xl' />
          </FormControl>
        </VStack>        
        <VStack alignSelf={'center'} mt={'8'}>
            <Button w='64' bgColor='#1a87dd' onPress = {() => props.navigation.navigate("detailsdepot")}> Valider</Button>
        </VStack>
                

     </Stack>
    );
};
export default Depot ;