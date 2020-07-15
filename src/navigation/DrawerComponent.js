import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="todos"
        onPress={() => props.navigation.navigate('ModalList')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen component={HomeScreen} name="Home" />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
