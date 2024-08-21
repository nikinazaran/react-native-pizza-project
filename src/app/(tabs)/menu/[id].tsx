import { Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@components/ProductListItem';
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import Button from '@components/button';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams(); // hook to get the id from the URL

    const [selectedSize, setSelectedSize] = useState('M');

    const product = products.find((product) => product.id.toString() === id);

    const addToCart = () => {
        console.warn("Add to cart: ", product?.name, selectedSize);
    };

    if (product === undefined) {
        return <Text>Product not found</Text>;
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product.name}}/>
            <Image
                source={{uri: product.image || defaultPizzaImage}}
                style={styles.image}
            />
            <Text style={{fontWeight: 'bold'}}>Select size:</Text>
            <View style={styles.sizes}>
                {sizes.map(size => (
                    <Pressable
                        onPress={() => setSelectedSize(size)}
                        style={[styles.size, {backgroundColor: selectedSize === size ? 'gainsboro' : 'white'}]} 
                        key={size}>
                        <Text style={styles.sizeText}>{size}</Text>
                    </Pressable>
                ))}
            </View>
            <Text>Some ingredients ...</Text>

            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button 
                onPress={addToCart}
                text='Add to cart'/>
        </View>
    );

};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 10,
        flex: 1,

    },
    image:{
        width: '100%',
        aspectRatio: 1,
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 'auto',
    },
    sizes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    size:{
        backgroundColor: "gainsboro",
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText:{
        fontSize: 20,
        fontWeight: '500',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    }
});
