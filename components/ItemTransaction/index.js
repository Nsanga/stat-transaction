import React from 'react';
import {Text} from "native-base";


const Index = ({titre,description}) => {
  return(
   <>
   <Text>{titre}</Text>
   <Text>{description}</Text>
   </>
  );
};
export default Index;