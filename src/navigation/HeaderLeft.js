/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Menu from '../../assets/images/menu.png';

import styles from './style';

const HeaderLeft = () => {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.dispatch(DrawerActions.toggleDrawer());
				}}>
				<Image source={Menu} style={styles.drawerIcon} />
			</TouchableOpacity>
		</View>
	);
};

export default HeaderLeft;
