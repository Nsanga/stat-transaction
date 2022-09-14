import { FormControl ,VStack, Stack, Heading, Input, Center, Button, } from "native-base";


const Recharge = () =>{
    return(<Stack m="8">
        <VStack alignSelf='center'>
            <Heading size='lg' fontWeight='600' mt='5' color="coolGray.800" _dark={{
          color: "warmGray.50"}}>
                RECHARGE
            </Heading>
        </VStack>
        <VStack mt='10'alignSelf={'center'}>
        <FormControl>
            <FormControl.Label>De</FormControl.Label>
            <Input type="Text" w='64' h="10" borderColor='#1a87dd' rounded="md" font color={'#1a87dd'} size='xl'/>
          </FormControl>
        </VStack>        
        <VStack mt='5' alignSelf={'center'}>
        <FormControl>
            <FormControl.Label>Vers</FormControl.Label>
            <Input type="Text" w='64' h="10" borderColor='#1a87dd' rounded="md" font color={'#1a87dd'} size='xl' />
          </FormControl>
        </VStack>  
        <VStack mt='5' alignSelf={'center'}>
        <FormControl>
            <FormControl.Label>Montant</FormControl.Label>
            <Input type="number" w='64' h="10" borderColor='#F8BB18' rounded="md" font color={'#F8BB18'} size='xl' />
          </FormControl>
        </VStack>              
        <VStack alignSelf={'center'} mt={'8'}>
            <Button w='64' bgColor='#1a87dd' > Transférer</Button>
        </VStack>
                

     </Stack>
    );
};
export default Recharge ;