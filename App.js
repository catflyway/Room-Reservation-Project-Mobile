import * as React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//import screen
import HomeScreen from './screen/HomeScreen';
import SettingsScreen from './screen/SettingScreen';
import SearchScreen from './screen/SearchScreen';
import CreateScreen from './screen/CreateScreen';
import HistoryScreen from './screen/HistoryScreen';

const homeName = 'Home';
const SettingName = 'Settings';
const SearchName = 'Rooms';
const createName = 'Create';
const historyName = 'History';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            margin: 0,
            padding: 0,
          },
          activeTintColor: '#1C3575',
          inactiveTintColor: '#CDD2F6',
          activeBackgroundColor: '#CDD2F6',
          inactiveBackgroundColor: '#1C3575',
          
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === homeName) {
              iconName = 'home';
            } else if (route.name === SearchName) {
              iconName = 'my-library-books';
            } else if (route.name === createName) {
              iconName = focused ? 'person' : 'person';
            } else if (route.name === historyName) {
              iconName = focused ? 'person' : 'person';
            } else if (route.name === SettingName) {
              iconName = focused ? 'person' : 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Group
          screenOptions={{
            headerStyle: {backgroundColor: '#3F478D'},
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
            },
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Rooms" component={SearchScreen} />
          <Tab.Screen name="Create" component={CreateScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
