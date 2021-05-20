import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';

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
          style={[styles.image, {width: 40}]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          borderWidth: 3,
          borderColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -45,
          backgroundColor: '#2b3618',
        }}>
        <Image source={require('./images/add-icon.png')} style={styles.image} />
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
    backgroundColor: '#2b3618',
    height: '8%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
});
