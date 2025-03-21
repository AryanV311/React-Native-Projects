import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface Props {
  placeholder: string;
  value?:string;
  onPress?: () => void;
  onChangeText?:(text:string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText,}: Props) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={icons.search}
        style={styles.icon}
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: '#fff',
  },
});

export default SearchBar;
