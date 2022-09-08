import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Historique from '../screens/Historique';
import Accueil from '../screens/Accueil';
import Depot from '../screens/Depot';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

function Index() {
  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions} initialRouteName={'historique'}>
        <Stack.Screen name={'login'} component={Login} />
        <Stack.Screen name={'historique'} component={Historique} />
        <Stack.Screen name={'accueil'} component={Accueil} />
        <Stack.Screen name={'depot'} component={Depot} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}



export default Index