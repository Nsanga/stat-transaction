import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from '../Accueil';
import Statistique from '../Statistique';
import Compte from '../Compte';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name == "accueil") {
                        iconName = "home"
                    } else if (route.name == "statistique") {
                        iconName = "stats-chart-outline"
                    } else if (route.name == "compte") {
                        iconName = "person"
                    }
                    return <Ionicons name={iconName} size={25} color={focused ? '#fff' : '#000'} />
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 5,
                    right: 20,
                    left: 20,
                    elevation: 0,
                    backgroundColor: '#1a87dd',
                    borderRadius: 15,
                    height: 70,
                }

            })}>
            <Tab.Screen options={() => {
                return {
                    headerShown: false,
                }
            }} name="accueil" component={Accueil} />
            <Tab.Screen options={() => {
                return {
                    headerShown: false,
                }
            }} name="statistique" component={Statistique} />
            <Tab.Screen options={() => {
                return {
                    headerShown: false,
                }
            }} name="compte" component={Compte} />
        </Tab.Navigator>
    );
}
export default MyTabs;