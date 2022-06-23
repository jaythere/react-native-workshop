import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {COLORS, FONT} from '../utils';

const Input = ({label, onChangeTextHandler, value, placeholder}) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={onChangeTextHandler}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.borderPrimary,
    paddingHorizontal: 10,
    fontSize: FONT.medium,
  },
  label: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
    color: COLORS.fontPrimary,
    fontSize: FONT.small,
  },
});

Input.propTypes = {
  label: PropTypes.string,
  onChangeTextHandler: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  onChangeTextHandler: () => {},
  value: '',
  placeholder: '',
};

export default Input;
