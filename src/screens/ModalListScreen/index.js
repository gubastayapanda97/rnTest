import React, {useState, useEffect} from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import ToDoItem from '../../components/ToDoItem';
import Loading from '../../components/Loading';

import styles from './style';

const ModalListScreen = ({navigation}) => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data));
  }, []);

  const deteleToDoItem = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>
          Go back
        </Text>
      </TouchableOpacity>
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
        ) : (
          <Loading />
        )}
      </View>
    </View>
  );
};

export default ModalListScreen;
