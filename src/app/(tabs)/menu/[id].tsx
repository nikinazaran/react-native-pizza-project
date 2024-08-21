import { Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams(); // hook to get the id from the URL
    return (
        <View>
            <Stack.Screen options={{title: 'Details ' + id}}/>
            <Text>{id}</Text>
        </View>
    );

};

export default ProductDetailsScreen;
