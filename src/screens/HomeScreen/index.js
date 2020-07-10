import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
import ToDoItem from '../../components/ToDoItem';
import Loading from '../../components/Loading';

import styles from './style';

const HomeScreen = ({route}) => {
  const [isToDo, setIsToDo] = useState(false);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    if (route.params?.todos ?? false !== isToDo) {
      setIsToDo(route.params?.todos ?? false);
    }
    if (route.params?.todos ?? false) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => setTodos(response.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const deteleToDoItem = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <>
      <Modal
        isVisible={isToDo}
        style={styles.container}
        onBackdropPress={() => {
          setIsToDo(false);
          setTodos(null);
        }}>
        <View style={styles.modalContainer}>
          {todos ? (
            <FlatList
              data={todos}
              renderItem={({item, index, separators}) => (
                <ToDoItem
                  key={index}
                  item={item}
                  separators={separators}
                  deteleToDoItem={deteleToDoItem}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : <Loading />}
        </View>
      </Modal>
      <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
