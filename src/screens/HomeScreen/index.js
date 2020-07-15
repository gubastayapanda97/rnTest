import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './style';

const HomeScreen = ({route}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
