import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Stack, HStack } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Recherche = () => {
  return <Stack w={'100%'}>
      <VStack>
          
          <Heading fontSize="xl" textAlign={'center'} mt={10}>Recherche</Heading>

      </VStack>

        <Divider mt={5} width="100%" alignSelf={'center'}/>
        <VStack mt='18'  textAlign={'center'}>
            <HStack alignSelf={'center'} ml={2}>
        <Input placeholder="Rechercher une transaction" width="320" height={41} borderRadius="15" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />}/>
            <Icon m="2" size="6" color="#1a87dd" as={<MaterialIcons name="menu" />}/>
          </HStack>
      </VStack>
    </Stack>;
}
export default Recherche;