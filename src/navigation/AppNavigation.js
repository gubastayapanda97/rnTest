/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from './HeaderLeft';
import DrawerComponent from './DrawerComponent';

const Stack = createStackNavigator();

const AppNavigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				options={({ route, ...props }) => ({
					headerLeft: ({ }) => <HeaderLeft />,
					title: route.name,
				})}
				component={DrawerComponent}
				name="Home"
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppNavigation;
