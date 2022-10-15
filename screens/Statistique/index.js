import React from 'react';
import { Box, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Pressable, Icon, Link } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Statistique = (props) => {
    
    return <Stack w="100%">
        <VStack >
            <Box safeAreaTop />
            <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
          color: "warmGray.50"}} alignSelf="center" margin={7}>
                Statistiques
            </Heading>

            <VStack m={5} ml={12} >
                <HStack>
                    <Text flex={1} fontSize={18} mr={4} bold>MTN MoMo</Text>
                    <Text flex={1} fontSize={18} bold>Total</Text>
                    <Text flex={1} fontSize={18} ml={8} bold>Taux</Text>
                </HStack>
                <HStack mt={5}>
                    <Text flex={1} fontSize={16} mr={4}>Depots</Text>
                    <Text flex={1} fontSize={16}>500000</Text>
                    <Text flex={1} fontSize={16} ml={8}>70%</Text>
                </HStack>
                <HStack mt={2}>
                    <Text flex={1} fontSize={16} mr={4}>Retraits</Text>
                    <Text flex={1} fontSize={16}>500000</Text>
                    <Text flex={1} fontSize={16} ml={8}>70%</Text>
                </HStack>
            </VStack>

            <VStack mt={1} m={5} ml={12} >
                <HStack>
                    <Text flex={1} fontSize={18} mr={4} bold>Orange Money</Text>
                    <Text flex={1} fontSize={18} bold>Total</Text>
                    <Text flex={1} fontSize={18} ml={8} bold>Taux</Text>
                </HStack>
                <HStack mt={5}>
                    <Text flex={1} fontSize={16} mr={4}>Depots</Text>
                    <Text flex={1} fontSize={16}>500000</Text>
                    <Text flex={1} fontSize={16} ml={8}>70%</Text>
                </HStack>
                <HStack mt={2}>
                    <Text flex={1} fontSize={16} mr={4}>Retraits</Text>
                    <Text flex={1} fontSize={16}>500000</Text>
                    <Text flex={1} fontSize={16} ml={8}>70%</Text>
                </HStack>
            </VStack>
            <VStack m={5} ml={12}>
                <HStack mt={8} >
                    <Pressable onPress={() => props.navigation.navigate("details")}>
                        <Text fontSize={18} color="#1a87dd" bold> Details des Previsions</Text>
                    </Pressable>
                    <Icon as={<Ionicons name={"chevron-forward"} />} size={25} color="#000"  mt={'0.5'} ml={8}></Icon>

                </HStack>
            </VStack>

        </VStack>

    </Stack >
};
export default Statistique;