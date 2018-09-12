import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomePage extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      sliderImages: []
    };
  }

  componentDidMount = () => {
    fetch('http://192.168.1.4:3000/api/homepage-slider-images', {method: 'GET'})
      .then(response => response.json())
      .then(responseJson => this.setState({sliderImages: responseJson}))
      .catch(error => console.error(error));
  }

  onPressListCars = () => {
    this.props.navigation.navigate('CarList');
  }

  onPressContact = () => {
    this.props.navigation.navigate('Contact');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.slideshow}>
          <ImageSlider 
            images={this.state.sliderImages}
          />
        </View>

        <View style={styles.buttons}>
          <Text style={styles.welcomeText}>Welcome to Rent a Car</Text>
          <Text style={styles.welcomeText2}>Start your journey here with our </Text>
          <Text style={styles.welcomeText2}>brand new super cars</Text>

          <TouchableOpacity onPress={this.onPressListCars} style={styles.button}>
            <Text style={styles.buttonText}>List cars</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPressContact} style={styles.button}>
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333',
  },

  slideshow: {
    flex: 0.5,
  },

  buttons: {
    flex: 0.5,
    marginTop: 15,
    alignItems: 'center'
  },

  welcomeText: {
    marginTop: 20,
    fontSize: 26,
    color: '#ffffff'
  },

  welcomeText2: {
    fontSize: 16,
    color: '#ffffff',
  },

  buttonText: {
    fontSize: 16,
  },

  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    borderRadius: 10,
    width: 250, 
  },
});
