import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';

export default class Contact extends React.Component {

  onPressSend = () => {
    console.log('onPressSend');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.information}>
          <Text style={styles.boldText}>Company name: <Text style={styles.normalText}>Rent A Car</Text></Text>
          <Text style={styles.boldText}>Headquarters: <Text style={styles.normalText}>Las Vegas</Text></Text>
          <Text style={styles.boldText}>E-Mail: <Text style={styles.normalText}>rent@car.com</Text></Text>
          <Text style={styles.boldText}>Phone: <Text style={styles.normalText}>0287-555-2165</Text></Text>
        </View>

        <View style={styles.contactUs}> 
          <TextInput
            style={styles.textInput}
            placeholder="Your e-mail"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Message"
            multiline={true}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={this.onPressSend} style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.map}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
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

  information: {
    marginTop: 40,
    flex: 0.2,
    flexDirection: 'column',
    alignItems: 'center',
  },

  boldText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16
  },

  normalText: {
    color: '#ffffff',
    fontSize: 16
  },

  textInput: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#3f3f3f',
    color: '#ffffff',
    textAlign: 'center',
    height: 40,
    width: 250,
  },

  contactUs: {
    flex: 0.4,
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 16,
  },

  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    borderRadius: 10,
    width: 250, 
  },

  map: {
    flex: 0.4
  },
});