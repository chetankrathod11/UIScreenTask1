import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Dashboard</Text>
      <Image source={require('./images/clientIcon.png')} style={styles.image} />
      <Image
        source={require('./images/settings-icon.png')}
        style={[styles.image, {marginLeft: 10}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '10%',
    backgroundColor: '#2b3618',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 130,
  },
  image: {
    width: 35,
    height: 35,
    marginLeft: 60,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
