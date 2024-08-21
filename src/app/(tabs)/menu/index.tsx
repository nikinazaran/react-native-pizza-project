import { FlatList } from 'react-native';
import { View } from '@components/Themed';
import Colors from '@constants/Colors';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <FlatList 
      data={products}
      renderItem={({item}) => <ProductListItem product={item}/>}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        padding: 10,
        // backgroundColor: Colors.light.background,
        gap: 10,
      }}
      numColumns={2}
      columnWrapperStyle={{gap: 10}}
    />
  );
}


