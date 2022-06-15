import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {Input, Button, Loader} from '../components';
import {COLORS, FONT} from '../utils';
import register from './../assets/register.png';
const SCREEN_WIDTH = Dimensions.get('window').width;

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [occupation, setOccupation] = useState('');
  const [showLoader, setLoadingState] = useState(false);

  const registerUser = () => {
    // will be calling api, for now using settimeout
    if (!userName || !fullName || !email || !birthday || !occupation) {
      alert('Please fill the form');
      return;
    }
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
      alert('Registration Success');
      navigation.navigate('Welcome');
    }, 2000);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Tell us Little about yourself...</Text>
          <View style={styles.registerContainer}>
            <Input
              label="User Name*"
              value={userName}
              onChangeTextHandler={setUserName}
            />
            <Input
              label="Full Name*"
              value={fullName}
              onChangeTextHandler={setFullName}
            />
            <Input
              label="Email Address*"
              value={email}
              onChangeTextHandler={setEmail}
            />
            <Input
              label="Birthday"
              value={birthday}
              onChangeTextHandler={setBirthday}
            />
            <Input
              label="Occupation"
              value={occupation}
              onChangeTextHandler={setOccupation}
            />
            <View style={styles.registerImgWrapper}>
              <Image style={styles.registerImgBackground} source={register} />
            </View>
            <View style={styles.btnWrapper}>
              <Button
                label="Continue"
                backgroundColor={COLORS.buttonSecodary}
                onPressHandler={registerUser}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Loader show={showLoader} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: FONT.medium,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: COLORS.fontPrimary,
  },
  registerContainer: {},
  registerImgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  registerImgBackground: {
    resizeMode: 'contain',
    width: SCREEN_WIDTH / 2,
    height: 200,
  },
  btnWrapper: {
    alignItems: 'center',
  },
});

export default RegisterScreen;
