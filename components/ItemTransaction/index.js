import React from 'react';
import {HStack, Stack, Text, VStack, Image} from "native-base";
import { Avatar } from 'native-base';



const Index = ({titre,description,date,heure, operator}) => {
  return(
    <Stack >
      <VStack ml={'3'} mt={'5'}>
        <Text textAlign='left'>{date}</Text>
      </VStack>
      <VStack  margin='3' mt={'5' }>
        <HStack >
          <Avatar resizeMode='stretch' key={operator} source={{
            url: operator == "mtn" ? "https://play-lh.googleusercontent.com/LTwt4DZRCzi45iNjN_HsX7TTxJPz9Y1dFgN05jj0J89yDpoeO2I2_bbEz8cl84NK34g=s180-rw" :
             "https://play-lh.googleusercontent.com/pr_xGOSaZAeyCuj751Zp356_uq3UPXcgiBLYxi5k_iaCfgk-5BSopuRyUvF_ufG58kuU"
          }} >
            AJ
          </Avatar>
          <VStack w="75%">
            <Text ml={'2'} fontSize="15" fontWeight="600">{titre}</Text>
            <Text ml={'2'} numberOfLines={1}>{description}</Text>
          </VStack>
          <HStack>
            <Text textAlign='right' fontSize="15" fontWeight="600">{heure}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Stack>
  );
};
export default Index;