import React from 'react';
import {HStack, Stack, Text, VStack} from "native-base";


const Index = ({titre,description,avatar,heure}) => {
  return(
   <Stack>
    <VStack alignSelf={'center'}>
      <HStack>
   <Text>{titre}</Text>
   <Text>{description}</Text>
   </HStack>
   </VStack>
   </Stack>
  );
};
export default Index;