import  React from 'react';
import { Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from '../Accueil';
import Historique from '../Historique';
import MonCompte from '../Mon Compte';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({route}) =>({
            tabBarIcon: ({focused, color, size}) =>{
                let IconName;

                if (route.name =="accueil"){
                    iconName="home"
                } else if (route.name =="historique" ){
                    iconName="swap-vertical-outline"
                } else if (route.name =="MonCompte" ){
                  iconName="person"}
                return <Ionicons name={iconName} size={25} color={focused ? '#fff' :'#000'} />
            },
            tabBarStyle:{
              position: 'absolute',
              bottom: 5,
              right:20,
              left:20,
              elevatoin:0,
              backgroundColor: '#1a87dd',
              borderRadius:15,
              height:70,
            }
        
    })}>
      <Tab.Screen fontcolor='#fff' name="accueil" component={Accueil} />
      <Tab.Screen name="historique" component={Historique} />
      <Tab.Screen name="MonCompte" component={MonCompte} />
    </Tab.Navigator>
  );
}

export default MyTabs;
 