import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export default function Body() {
  return (
    <View style={styles.container}>
      <View style={{padding: 10, borderRightWidth: 1, borderBottomWidth: 1}}>
        <View
          style={[
            styles.imageView,
            styles.circleView,
            {borderColor: '#2b3618'},
          ]}>
          <Image
            source={require('./images/message_Dashboard.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={{padding: 10, borderLeftWidth: 1, borderBottomWidth: 1}}>
        <View
          style={[
            styles.imageView,
            styles.circleView,
            {borderColor: '#2b3618'},
          ]}>
          <Image
            source={require('./images/Clients_Dashboard.png')}
            style={[styles.image, {height: 50}]}
          />
        </View>
      </View>
      <View style={{padding: 10, borderRightWidth: 1, borderTopWidth: 1}}>
        <View
          style={[
            styles.imageView,
            styles.circleView,
            {borderColor: '#197419'},
          ]}>
          <Image
            source={require('./images/Task_Dashboard.png')}
            style={[styles.image, {height: 75}]}
          />
        </View>
      </View>
      <View style={{padding: 10, borderLeftWidth: 1, borderTopWidth: 1}}>
        <View
          style={[
            styles.imageView,
            styles.circleView,
            {borderColor: '#197419'},
          ]}>
          <Image
            source={require('./images/notification_Dashboard.png')}
            style={[styles.image, {height: 100}]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'coral',
    paddingTop: 100,
    paddingLeft: 40,
  },
  imageView: {
    marginTop: 5,
    width: 120,
    height: 120,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  image: {
    width: 70,
    height: 50,
  },
  circleView: {
    borderRightWidth: 8,
    borderBottomWidth: 20,
    borderLeftWidth: 8,
  },
});
