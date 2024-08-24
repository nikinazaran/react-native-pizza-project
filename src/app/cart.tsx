import { StatusBar } from "expo-status-bar";
import { View, Text, Platform } from "react-native";
import { useCart } from "../providers/CartProvider";
import { FlatList } from "react-native";
import CardListItem from "../components/CardListItem";

const CartScreen = () => {
    const {items} = useCart();


    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => <CardListItem cartItem={item}/>}
                contentContainerStyle={{padding: 10, gap: 10}}
            />
            
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

export default CartScreen;