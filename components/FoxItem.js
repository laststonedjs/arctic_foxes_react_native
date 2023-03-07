import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ActionButton } from './Button';
import { COLORS } from '../constants';

const FoxItem = (props) => {
  const [text, setText] = useState(props.title);
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    props.editHandler(props.foxKey, text);
    setIsEditing(false);
  };

  return (
    <View style={{
      display: "flex",
      width: "90%",
      padding: 5,
      paddingHorizontal: 10,
      marginTop: 0,
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center"
    }}>
      <View style={{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 6,
        margin: 0
      }}>
        {isEditing ? (
          <TextInput
            value={text}
            onChangeText={setText}
            style={{
              width: "70%",
              paddingVertical: 10,
              padding: 5,
              marginRight: 5,
              borderRadius: 6,
            }}
          />) : (
          <Text style={{
            width: "70%",
            paddingVertical: 10,
            padding: 5,
            marginRight: 5,
            borderRadius: 6,
          }}>{props.title}</Text>
        )}
        <View style={{
          width: "30%",
          marginLeft: 5,
          flexDirection: "row"
        }}>
          <ActionButton
            title="Delete"
            handlePress={() => props.pressHandler(foxKey)}
          />
          {isEditing ? (
            <ActionButton title="Save" handlePress={handleEdit} />
          ) : (
            <ActionButton title="Edit" handlePress={() => setIsEditing(true)} />
          )}
        </View>
      </View>
    </View>
  );
}

export default FoxItem;