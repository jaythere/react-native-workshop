import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {Button, Link} from '../components';
import {COLORS, FONT} from '../utils';
const appBackground = require('./../assets/app-background.png');

const SCREEN_WIDTH = Dimensions.get('window').width;

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.appTitleWrapper}>
        <Text style={styles.appTitleText}>
          <Text style={styles.appTitleTextGreen}>Program </Text>
          <Text>Name</Text>
        </Text>
      </View>
      <View style={styles.appImgWrapper}>
        {appBackground && (
          <Image
            style={styles.appImgBackground}
            resizeMode="center"
            source={{
              uri: 'https://github.com/jaythere/react-native-workshop/blob/master/src/assets/app-background.png',
            }}
          />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          label="Join Our School"
          onPressHandler={() => {
            navigation.navigate('Register');
          }}
        />
        <View style={styles.existingUserWrapper}>
          <Text style={styles.existingUserTitle}>Existing User ?</Text>
          <Link label="Login" onPressHandler={() => {}}></Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  appTitleWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appImgWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  appImgBackground: {
    maxHeight: SCREEN_WIDTH / 2,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  appTitleText: {
    fontSize: FONT.xLarge,
    color: COLORS.fontPrimary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  appTitleTextGreen: {
    color: COLORS.fontBase,
  },
  existingUserWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  existingUserTitle: {
    fontSize: FONT.medium,
  },
});

export default WelcomeScreen;
