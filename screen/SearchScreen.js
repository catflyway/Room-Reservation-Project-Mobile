import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import {InputItem, SearchBar} from '@ant-design/react-native';

const SearchScreen = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);

  useEffect(() => {
    getListPhotos();
    return () => {};
  }, []);

  getListPhotos = () => {
    const apiURL =
    'https://roomreserve1.herokuapp.com/rooms/room';
    //  'https://fakestoreapi.com/products';
    //  'https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setdata(resJson);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
      .finally(() => setisLoading(false));
  };

  onClickItem = (item, index) => {
    const newArrData = data.map((e, index) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: true,
        };
      }
      return {
        ...e,
        selected: false,
      };
    });
    setdata(newArrData);
  };

  renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => onClickItem(item, index)}
          style={[
            styles.item,
            {
              marginTop: 12,
              height: 100,
              backgroundColor: 'white',
            },
          ]}>
          <Image
            style={styles.image}
            source={{uri: item.image}}
            rezieMode="contain"
          />
          <Text style={styles.txtbox}>{item.Name}</Text>
          <Text >{item.Building}</Text>
          <Text >{item.RoomType}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      
      <SafeAreaView style={styles.container}>
      <InputItem style={styles.schbox}></InputItem>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    </>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapButton: {
    alignItems: 'center',
    maginHorizontal: 50,
    padding: 20,
    backgroundColor: 'orange',
  },
  txtFontSize: {
    fontSize: 20,
  },
  item: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection:'row',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius:10,
  },
  txtbox:{
    width:'50%',
    marginLeft:10,
    marginBottom:3,
  },
  schbox:{
    marginTop:10,
    borderWidth: 1,
    borderRadius: 5,
  }
});
