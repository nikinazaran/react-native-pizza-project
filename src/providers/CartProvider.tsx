import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (id: string, quantity: -1 | 1) => void;
};

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
});

const CartProvider = ({children}: PropsWithChildren) => {

    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
        const existingItem = items.find((item) => item.product_id === product.id && item.size === size);
        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return;
        }

        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };
        setItems([newCartItem, ...items]); 
    };

    const updateQuantity = (id: string, quantity: -1 | 1) => {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + quantity};
                }
                return item;
            }).filter((item) => item.quantity > 0)
        );
    }

    return (
        <CartContext.Provider value={{items, addItem, updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);