import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/38795826?v=4';
const urlToMyGithub = 'https://github.com/wellingtonmade';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    console.log('Link aprovado');
    console.log('Abrindo link...');
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />

      <View style={style.content}>
        <Image
          accessibilityLabel="Caricatura de Wellington"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Wellington Salvador"
          style={[style.defaultText, style.name]}>
          Wellington Salvador
        </Text>
        <Text
          accessibilityLabel="Nickname: wellington made"
          style={[style.defaultText, style.nickname]}>
          wellingtonmade
        </Text>
        <Text
          accessibilityLabel="Descrição: Internet Systems student"
          style={[style.defaultText, style.description]}>
          Internet Systems student
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //Column
    backgroundColor: colorGithub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },

  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
