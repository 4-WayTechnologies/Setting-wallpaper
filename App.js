import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WallPaperManager from 'react-native-set-wallpaper';
export default function App() {
  const handle = () => {
    WallPaperManager.setWallpaper(
      {
        uri: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg',
      },
      res => {
        console.log(res);
      },
    );
  };
  return (
    <View>
      <Text>Wallpaper</Text>
      <Button title="Set Wallpaper" onPress={handle} />
    </View>
  );
}

const styles = StyleSheet.create({});
