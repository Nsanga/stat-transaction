import React from 'react';
import { Image, Button, Center, NativeBaseProvider, Stack, VStack, HStack, Heading, Text, Pressable, View, Input, Icon, Link, Divider } from "native-base";
import Dipita from "../../assets/dipita.jpg";
import Emmanuel from "../../assets/emmanuel.jpg";
import Stat from "../../assets/stat.jpg";


const Contacter = () => {
    return<Stack>
        <VStack m={5} mt={12} mb={2}>
            <Text color='#1a87dd' bold>Stat Transaction est un systeme permettant à un point Mobile Money d'effectuer
                des dépots et retrait d'argent plus rapidement etoute fois en ressortant le pouvoir
                d'achat des differents clients. </Text>
        </VStack>
        <Divider mt={8}/>
        <VStack>
            
            <Text mt={6} alignSelf='center' color='#1a87dd' bold>NOTRE EQUIPE</Text>
            <HStack m={5} alignSelf='center' space={12}>
            <Image size={130} borderRadius={100} source={Dipita} alt="Alternate Text" />
            <Image size={130} borderRadius={100} source={Emmanuel} alt="Alternate Text" />
            </HStack>
            <HStack space={20} alignSelf='center'>
                <Text bold ml={8} color='#1a87dd'>DIPITA Daniel</Text>
                <Text bold mr={5} color='#1a87dd'>NSANGA Emmanuel</Text>
            </HStack>
            <HStack space={24} alignSelf='center'>
                <Text ml={0} color='#1a87dd'>Génie Logiciel</Text>
                <Text mr={5} color='#1a87dd'>Génie Logiciel</Text>
            </HStack>
        </VStack>
        <Divider mt={8}/>
        <VStack>
            <Text alignSelf='center' mt={6} color='#1a87dd' bold>NOUS CONTACTER</Text>
        </VStack>
    </Stack>
}
export default Contacter;