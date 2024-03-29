import { View, TextInput, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Toast from 'react-native-simple-toast';
// constants
import { COLORS, FONTS, SHADOWS, SIZES, assets, foxData } from '../constants';
import { AddButton } from './Button';

// dimensions
const WIDTH_MODAL = Dimensions.get('window').width;
const HEIGHT_MODAL = 650;

export const AddModal = ({ swapModalVisible }) => {
  const [foxes, setFoxes] = useState(foxData);
  const [newFoxName, setNewFoxName] = useState('');
  const [newFoxAge, setNewFoxAge] = useState('');
  const [newFoxDomain, setNewFoxDomain] = useState('');
  const [newFoxFood, setNewFoxFood] = useState('');

  const handleOnChangeText = (text, value) => {
    if (value === 'newFoxName') setNewFoxName(text);
    if (value === 'newFoxAge') setNewFoxAge(text);
    if (value === 'newFoxDomain') setNewFoxDomain(text);
    if (value === 'newFoxFood') setNewFoxFood(text);
  };

  const handleSubmit = () => {

    if (newFoxName.length == 0 || newFoxAge.length == 0
      || newFoxDomain.length == 0 || newFoxFood.length == 0) {
      Toast.showWithGravity("Please fill in all input fields!", Toast.LONG, Toast.TOP);
      return;
    }

    const newFox = {
      image: assets.fox1,
      name: newFoxName,
      age: newFoxAge,
      domain: newFoxDomain,
      food: newFoxFood
    }
    foxData.push(newFox);

    setNewFoxName('');
    setNewFoxAge('');
    setNewFoxDomain('');
    setNewFoxFood('');

    Toast.showWithGravity("Congrat's, successfully edited your favorite Arctic Fox!", Toast.LONG, Toast.TOP);
  }

  const closeModal = (bool) => {
    swapModalVisible(bool);
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TouchableOpacity disabled={true}>
        <View style={{
          height: HEIGHT_MODAL - 20,
          width: WIDTH_MODAL - 30,
          paddingHorizontal: SIZES.font,
          backgroundColor: COLORS.lightGray,
          borderRadius: SIZES.font,
          ...SHADOWS.dark
        }}>
          <View style={{
            flex: 1,
          }}
          >
            <View style={{
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.font
            }}
            >
              <Text style={{
                marginTop: SIZES.large,
                marginHorizontal: SIZES.base,
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium + 1,
                color: COLORS.chocolateKisses
              }}>
                Show us what kind of foxes you own and where they come from ?{"\n"}{"\n"}
                <Text style={{ fontSize: SIZES.large + 10 }}>
                  {"             "}👀{"  "}👀
                </Text>
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.semiBold,
                marginBottom: SIZES.large * 2,
                color: COLORS.chocolateKisses,
                textAlign: "center",
                letterSpacing: SIZES.base / 5
              }}
            >
              Add a Fox with new information!
            </Text>
            <View
              style={{
                marginTop: SIZES.large * 2,
              }}
            >
              <TextInput
                style={{
                  height: 30,
                  borderBottomColor: COLORS.gray,
                  marginHorizontal: SIZES.large,
                  marginVertical: SIZES.medium,
                  borderBottomWidth: 1
                }}
                onChangeText={(text) => handleOnChangeText(text, 'newFoxName')}
                placeholder="Enter the NAME of your new Fox"
                value={newFoxName}
              />
              <TextInput
                style={{
                  height: 30,
                  borderBottomColor: COLORS.gray,
                  marginHorizontal: SIZES.large,
                  marginBottom: SIZES.font + 2,
                  borderBottomWidth: 1
                }}
                onChangeText={(text) => handleOnChangeText(text, 'newFoxAge')}
                placeholder="Enter how OLD your Fox is"
                value={newFoxAge}
              />
              <TextInput
                style={{
                  height: 30,
                  borderBottomColor: COLORS.gray,
                  marginHorizontal: SIZES.large,
                  marginBottom: SIZES.font + 1,
                  borderBottomWidth: 1
                }}
                onChangeText={(text) => handleOnChangeText(text, 'newFoxDomain')}
                placeholder="Enter where your fox COMES FROM"
                value={newFoxDomain}
              />
              <TextInput
                style={{
                  height: 30,
                  borderBottomColor: COLORS.gray,
                  marginHorizontal: SIZES.large,
                  borderBottomWidth: 1
                }}
                onChangeText={(text) => handleOnChangeText(text, 'newFoxFood')}
                placeholder="Enter what it FEEDS on"
                value={newFoxFood}
              />
            </View>
          </View>
          <View style={{
            width: "100%",
            flexDirection: "row"
          }}>
            <AddButton
              handlePress={handleSubmit}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                paddingVertical: SIZES.font,
                alignItems: "center",
                marginVertical: SIZES.font,
                marginHorizontal: SIZES.base,
                backgroundColor: COLORS.chocolateKisses,
                borderRadius: SIZES.large,
                padding: SIZES.small,
              }}
              onPress={() => closeModal(false, 'Close')}
            >
              <Text
                style={{
                  color: COLORS.cultural,
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
