import React from 'react';
import {View, Text} from 'react-native';
import Swipeout from 'react-native-swipeout';

import styles from './style';

const ToDoItem = ({item, separators, deteleToDoItem}) => {
  const swipeoutBtns = [
    {
      text: 'Удалить',
      type: 'delete',
      onPress: () => deteleToDoItem(item.id),
    },
  ];

  return (
    <View style={styles.container}>
      <Swipeout right={swipeoutBtns} left={swipeoutBtns}>
        <View
          style={{
            ...styles.ToDoItemContainer,
            backgroundColor: item.completed ? '#33ff33' : '#ffffff',
          }}>
          <Text>{item.title}</Text>
        </View>
      </Swipeout>
    </View>
  );
};

export default ToDoItem;
