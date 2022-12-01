import React, { useEffect, useState } from 'react';
import { ScrollView, Button, Text, View } from 'react-native';
import firebase from '../database/firebase';
import firestore from '@react-native-firebase/firestore'; 

const UserList = (props) => {

  /* const [user, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection('users').onSnapshot(querySnapshot => {
      const users = [];

      querySnapshot.docs.forEach((doc) => {
        const {name, email, phone} = doc.data();
          users.push({
            id: doc.id,
            name,
            email,
            phone
          })
      })
      setUsers(users);
    })
  }, []) */

  return (
    <ScrollView>
      {/* <Button title='Create User' onPress={() => props.navigation.navigate('CreateUserScreen')}/> */}

      <Text>Hola</Text>
    </ScrollView>
  )
}

export default UserList;