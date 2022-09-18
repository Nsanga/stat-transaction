import React from 'react';
import { Box, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Pressable, View, Input, Icon, Link } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from "../Navigation"

const Details = () => {
    return <Stack w="100%">
        <VStack >
            <Box safeAreaTop />
            <Heading fontSize={27} mt='5' color="coolGray.800" _dark={{
          color: "warmGray.50"}} alignSelf="center" margin={7} >
                Previsions par clients
            </Heading>

            <VStack mt={8}  >
                <HStack>
                    <Text flex={1} fontSize={12} bold>Tel</Text>
                    <Text flex={1} fontSize={14} bold>Nom</Text>
                    <Text flex={1} fontSize={14} ml={8} bold>Retrait</Text>
                    <Text flex={1} fontSize={14} ml={8} bold>depot</Text>
                    <Text flex={1} fontSize={14} ml={8} bold>Estimation</Text>

                </HStack>
                
            </VStack>

        </VStack>

    </Stack >
    
};
export default Details;