import React from 'react';
import { TouchableOpacity } from 'react-native';
import {HStack, Stack, Text, VStack, Pressable} from "native-base";
import { Avatar } from 'native-base';
import { useState } from 'react';
import ItemModal from "../ItemModal";



const Index = ({idTransaction,titre,description,date,heure, operator}) => {
  const [showModal, setShowModal]=useState(false);
  return(
    <Stack >
      <VStack ml={'3'} mt={'5'}>
        <Text textAlign='left'>{date}</Text>
      </VStack>
      <TouchableOpacity onPress={() => setShowModal(true)} hitSlop={{top:-10, bottom:0}}>
      <VStack  margin='3' mt={'5' }>
        <HStack >
          <Avatar resizeMode='stretch' key={idTransaction} source={{
            uri: operator == "MTN MoMo" ? "https://play-lh.googleusercontent.com/LTwt4DZRCzi45iNjN_HsX7TTxJPz9Y1dFgN05jj0J89yDpoeO2I2_bbEz8cl84NK34g=s180-rw" :
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
      </TouchableOpacity>
      <ItemModal titre={titre} description={description} showModal={showModal} setShowModal={setShowModal}/>
    </Stack>
    
  );
};
export default Index;