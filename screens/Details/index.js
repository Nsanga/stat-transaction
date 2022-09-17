import React from 'react';
import { Box, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Pressable, View, Input, Icon, Link } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from "../Navigation"

const Details = () => {
    return <Stack w="100%">
        <VStack >
            <Box safeAreaTop />
            <Heading size="xl" alignSelf="center" mt="8" >
                Details des transactions
            </Heading>

            <VStack mt={8}  >
                <HStack>
                    <Text flex={1} size={'lg'} bold>Tel</Text>
                    <Text flex={1} size={'lg'} bold>Nom</Text>
                    <Text flex={1} size={'lg'} ml={8} bold>Retrait</Text>
                    <Text flex={1} size={'lg'} ml={8} bold>depot</Text>
                    <Text flex={1} size={'lg'} ml={8} bold>Estimation</Text>

                </HStack>
                
            </VStack>

        </VStack>

    </Stack >
    
};
export default Details;