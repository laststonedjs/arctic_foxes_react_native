import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
// components
import { ActionButton } from './Button';
// constants
import { COLORS } from '../constants';

const AddFox = (props) => {
  const [text, setText] = useState("");

  const changeHandler = val => {
    setText(val);
  }

  const addFoxHandler = () => {
    props.onAddFox(text);
    setText("");
  }

  return (
    <View style={{
      display: "flex",
      width: "90%",
      padding: 10,
      marginVertical: 20,
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center"
    }}>
      <TextInput
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          paddingVertical: 10,
          padding: 5,
          marginRight: 5,
          borderRadius: 6
        }}
        placeholder="Add a New Arctic Fox"
        onChangeText={changeHandler}
        value={text}
      />
      <ActionButton title="Add" handlePress={addFoxHandler} />
    </View>
  )
}

export default AddFox