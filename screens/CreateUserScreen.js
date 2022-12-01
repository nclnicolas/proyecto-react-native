import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView } from 'react-native';
import { db } from '../database/firebase';
import {collection, onSnapshot} from 'firebase/firestore';


const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    }

    /* const saveNewUser = async() => {
        if(state.name === ''){
            alert('Please provide a name')
        }else {
            try {
                const users = await firestor().collection('users').add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
            } catch (error) {
                console.log('ERROR', error);
            }
            try {
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
                props.navigation.navigate('UserList');
            } catch (error) {
                console.log('ERROR', error);
            }
        }
    } */

    useEffect(() => {
        const collectionRef = collection(db, 'users');
    }, []);

  return (
    <ScrollView style={styles.container}>
        <View>
            <TextInput placeholder='Name User' onChange={(value) => handleChangeText('name', value)}/>
        </View>
        <View>
            <TextInput placeholder='Email User' onChange={(value) => handleChangeText('email', value)}/>
        </View>
        <View>
            <TextInput placeholder='Phone User' onChange={(value) => handleChangeText('phone', value)}/>
        </View>
        <View>
            <Button title='Save User' onPress={() => saveNewUser() } />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    }
})

export default CreateUserScreen;