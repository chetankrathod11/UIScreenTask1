import React from 'react';
import {
  StyleSheet,
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Body from './components/Body';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Body />

      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: scale(350),
    height: verticalScale(100),
  },
});
