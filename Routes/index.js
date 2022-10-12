import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Historique from '../screens/Historique';
import Navigation from '../screens/Navigation';
import Depot from '../screens/Depot';
import Retrait from '../screens/Retrait';
import Inscription from '../screens/Inscription';
import Details from '../screens/Details';
import Contacter from '../screens/Contacter';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

function Index() {
  return (
      <NavigationContainer>
      <Stack.Navigator

        screenOptions={screenOptions} initialRouteName={'login'}>
        <Stack.Screen name={'login'} component={Login} />
        <Stack.Screen name={'navigation'} component={Navigation} />
        <Stack.Screen name={'inscription'} component={Inscription} />
        <Stack.Screen name={'historique'} component={Historique} />
        <Stack.Screen name={'depot'} component={Depot} />
        <Stack.Screen name={'retrait'} component={Retrait} /> 
        <Stack.Screen name={'details'} component={Details} />
        <Stack.Screen name={'contacter'} component={Contacter} /> 
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Index