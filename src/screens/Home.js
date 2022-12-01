import * as React from "react";
import {View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Product from "../components/Product";

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = React.useState([]);
  const [revealed, setRevealed] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => <Button title="Add" onPress={() => navigation.navigate("Add")} />
    })
  }, [])

  React.useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <ScrollView>
        {products.map((product) => (
        <Product key={product.id} {...product} />
        ))}
        </ScrollView>   
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#F5F3F9'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
      }
  });
