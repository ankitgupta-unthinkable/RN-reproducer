/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Button,
  Pressable,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [x,setX] = useState(false);

  const renderLoader = () => {
    return (
      <Modal
        transparent={true}
        animationType="none"
        visible={x}
        onRequestClose={() => {}}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <Image
            source={require("./img.gif")} // Update the path to your GIF
            style={{
              height: 450,
              width: 450,
            }}
            resizeMode="contain"
          />
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{height: 100}}/>
      <Pressable onPress={() => setX(true)} style={{height: 60, width: 100, backgroundColor: 'yellow'}}>Press Me</Pressable>
      <NewAppScreen templateFileName="App.tsx" />
      {renderLoader()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
