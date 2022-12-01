import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import EmojiPicker from "rn-emoji-keyboard";
import { database } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Add() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    emoji: "😃",
    name: "",
    price: 0,
    isSold: false,
    createdAt: new Date(),
  });

  const onSend = async() => {
    await addDoc(collection(database, 'products'), newItem)
    navigation.goBack();
  }

  const handlePick = (emojiObject) => {
    setNewItem({
      ...newItem,
      emoji: emojiObject.emoji,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell a New Product</Text>
      <Text style={styles.emoji} onPress={() => setIsOpen(true)}>
        {newItem.emoji}
      </Text>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <Stack spacing={2} style={{ margin: 16 }}>
      <TextInput
        placeholder="Product Name"
        leading={props => <Icon name='account' {...props} />}
        style={{width: 300}}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
      />
      <TextInput
        placeholder="$ Price"
        leading={props => <Icon name='ticket' {...props} />}
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
        keyboardType='number-pad'
      />
      </Stack>
      <Stack style={{ margin: 16 }}>
        <Button    
          title='Publish'
          trailing={props => <Icon name="send" {...props} />}
          onPress={onSend}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  emoji: {
    fontSize: 100,
  },
  productContainer: {
    padding: 16,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
  }
});
