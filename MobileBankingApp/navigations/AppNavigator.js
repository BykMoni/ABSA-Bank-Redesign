import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import OverviewScreen from '../screens/OverviewScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for Accounts
function AccountsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountsMain" component={AccountsScreen} />
      <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#C20B2F',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            paddingTop: 10,
            paddingBottom: 30,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Accounts"
          component={AccountsStack}  // Stack with Expenses navigation
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-multiple" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Transact"
          component={""} // Fill later with TransactionsScreen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="swap-horizontal" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={""}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
