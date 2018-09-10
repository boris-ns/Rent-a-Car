import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

export default class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      carsData: []
    };
  }

  componentDidMount = () => {
    fetch('http://192.168.1.4:3000/api/cars', {method: 'GET'})
      .then(response => response.json())
      .then(responseJson => this.setState({carsData: responseJson}))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.carsData}
          renderItem={({item}) =>
            <View style={styles.listElementContainer}>
              <View syle={styles.listItemImage}>
                <Image style={styles.itemImage} source={{uri: item.pictures[0]}} />
              </View>
              
              <View style={styles.listItemInfo}>
                <Text style={styles.textCarName}>{item.name}</Text>
                <Text style={styles.textInfo}>{item.engine}</Text>
                <Text style={styles.textInfo}>{item.fuel}</Text>
                <Text style={styles.textInfo}>{item.location}</Text>
                <Text style={styles.textInfo}>{item.transmission}</Text>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },

  listElementContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    backgroundColor: '#3f3f3f'
  },

  listItemImage: {
    flex: 0.5
  },

  itemImage: {
    width: 170,
    height: 150
  },

  listItemInfo: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textCarName: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 20
  },

  textInfo: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 20
  }
});