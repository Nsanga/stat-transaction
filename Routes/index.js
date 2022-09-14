import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Historique from '../screens/Historique';
import Accueil from '../screens/Accueil';
import Depot from '../screens/Depot';
import Retrait from '../screens/Retrait';
import Inscription from '../screens/Inscription';
<<<<<<< HEAD
<<<<<<< HEAD
import Recharge from '../screens/Recharge';
import MyTabs from '../screens/Navigationbar';
=======
import Navigation from '../screens/Navigation';
>>>>>>> 9c8723f345e36e102948814c87f5a18f1fbf2772
=======
import Navigation from '../screens/Navigation';
>>>>>>> 9c8723f345e36e102948814c87f5a18f1fbf2772

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

function Index() {
  return (
      <NavigationContainer>
      <Stack.Navigator
<<<<<<< HEAD
<<<<<<< HEAD
        screenOptions={screenOptions} initialRouteName={'mytabs'}>
=======
        screenOptions={screenOptions} initialRouteName={'navigation'}>
>>>>>>> 9c8723f345e36e102948814c87f5a18f1fbf2772
=======
        screenOptions={screenOptions} initialRouteName={'navigation'}>
>>>>>>> 9c8723f345e36e102948814c87f5a18f1fbf2772
        <Stack.Screen name={'login'} component={Login} />
        <Stack.Screen name={'navigation'} component={Navigation} />
        <Stack.Screen name={'inscription'} component={Inscription} />
        <Stack.Screen name={'historique'} component={Historique} />
        <Stack.Screen name={'accueil'} component={Accueil} />
        <Stack.Screen name={'depot'} component={Depot} />
        <Stack.Screen name={'retrait'} component={Retrait} /> 
        <Stack.Screen name={'recharge'} component={Recharge} />
        <Stack.Screen name={'mytabs'} component={MyTabs} />       
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Index