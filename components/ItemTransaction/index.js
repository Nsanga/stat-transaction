import React from 'react';
import {HStack, Stack, Text, VStack, Image} from "native-base";
import { Avatar } from 'native-base';
import {Omdepot} from "../../assets/depot.png";


const Index = ({titre,description,date,heure, operator}) => {
  return(
    <Stack >
      <VStack ml={'3'} mb={'0'}>
        <Text textAlign='left'>{date}</Text>
      </VStack>
      <VStack alignSelf={'left'} margin='3' mt={'5' }>
        <HStack >
          <Avatar bg="#6D6363" resizeMode='stretch' source={{
            url: operator == "mtn" ? "https://play-lh.googleusercontent.com/LTwt4DZRCzi45iNjN_HsX7TTxJPz9Y1dFgN05jj0J89yDpoeO2I2_bbEz8cl84NK34g=s180-rw" :
             "https://play-lh.googleusercontent.com/pr_xGOSaZAeyCuj751Zp356_uq3UPXcgiBLYxi5k_iaCfgk-5BSopuRyUvF_ufG58kuU"
          }} >
            AJ
            <Avatar.Badge bg="#1a87dd" />
          </Avatar>
          <VStack w="75%">
            <Text ml={'1'}>{titre}</Text>
            <Text ml={'1'} numberOfLines="1">{description}</Text>
          </VStack>
          <HStack>
            <Text textAlign='right'>{heure}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Stack>
  );
};
export default Index;