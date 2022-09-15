import React from 'react';
import { Box, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Pressable, Divider, Input, Icon, Link } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Statistique = (props) => {
    const [step, setStep] = React.useState(0)
    return <Stack w="100%">
        <VStack >
            <Box safeAreaTop />
            <Heading size="xl" alignSelf="center" mt="2" margin={'7'}>
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
                        <Text fontSize={18} bold> Details des transactions</Text>
                    </Pressable>
                    <Icon as={<Ionicons name={"chevron-forward"} />} size={25} color="#000"  mt={1} ml={8}></Icon>

                </HStack>
            </VStack>

        </VStack>

    </Stack >
};
export default Statistique;