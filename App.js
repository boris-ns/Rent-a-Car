import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default class App extends React.Component {

  onPressListCars = () => {
    console.log('[onPressListCars]');
  }

  onPressContact = () => {
    console.log('[onPressContact]');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.slideshow}>
          <ImageSlider 
            images={[
              'https://bit.ly/2NzFjfm',
              'https://bit.ly/2QhxVDO',
              'https://bit.ly/2Qhzams',
            ]}
          />
        </View>

        <View style={styles.buttons}>
          <Text style={styles.welcomeText}>Welcome to Rent a Car</Text>
          <Text style={styles.welcomeText2}>Start your journey here</Text>
          <Text style={styles.welcomeText2}>With our brand new super cars</Text>

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

  imageBackground: {
    width: '100%',
    height: '100%'
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
    marginTop: 5,
  },

  buttonText: {
    fontSize: 16,
  },

  button: {
    marginTop: 25,
    padding: 10,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    borderRadius: 10,
    width: 250, 
  },
});
