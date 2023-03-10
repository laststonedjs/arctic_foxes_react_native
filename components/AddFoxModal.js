import { View, TextInput, Modal, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// constants
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

// dimensions
const WIDTH_MODAL = Dimensions.get('window').width;
const HEIGHT_MODAL = 600;

export const AddModal = (props) => {

  const closeModal = (bool) => {
    props.swapModalVisible(bool);
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
              paddingHorizontal: SIZES.font
            }}>
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
          </View>
          <View style={{
            width: "100%",
            flexDirection: "row"
          }}>
            <TouchableOpacity
              style={{
                flex: 1,
                paddingVertical: SIZES.font,
                marginVertical: SIZES.font,
                alignItems: "center",
                backgroundColor: COLORS.chocolateKisses,
                borderRadius: SIZES.large,
                padding: SIZES.small,
              }}
              onPress={() => { }}
            >
              <Text
                style={{
                  color: COLORS.cultural,
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
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
