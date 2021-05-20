import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={require('./images/home-icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./images/message_Dashboard.png')}
          style={[styles.image, {width: 50}]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./images/search-icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./images/power-icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 550,
    backgroundColor: '#2b3618',
    height: '22%',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
});
