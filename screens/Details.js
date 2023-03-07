import React, { useState } from 'react';
import {
  Text, View, SafeAreaView,
  Image, StatusBar, FlatList,
  TouchableOpacity, Modal, TextInput,
} from 'react-native';
// components
import {
  FoxItem, CircleButton,
  SubInfo, FocusedStatusBar,
  DetailsDesc, DetailsFox, AddFox
} from '../components';
// constants
import { COLORS, SIZES, FONTS, assets, foxData } from '../constants';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.leftArrow}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 5}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const [foxes, setFoxes] = useState(foxData);
  const [inputText, setInputText] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRender, setIsRender] = useState(false);
  const [editItem, setEditItem] = useState();

  const onPressItem = (item) => {
    setIsModalVisible(true);
    setInputText(item.name);
    setEditItem(item.id);
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray,
          alignItems: "flex-start"
        }}
      >
        <DetailsFox foxes={item} />
        <Text style={{
          marginVertical: SIZES.base,
          fontSize: SIZES.font,
          marginLeft: 10,
          color: COLORS.gray

        }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }


  const handleEditItem = (editItem) => {
    const newData = foxes.map(item => {
      if (item.id == editItem) {
        item.name = inputText;
        return item;
      }
      return item;
    })
    setFoxes(newData);
    setIsRender(!isRender);
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem); // save user input to dummy data
    setIsModalVisible(false); // close the modal
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transluent={true}
      />

      {/* <View style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: 1
      }}>
        <EditButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View> */}

      {/* <AddFox onAddFox={addFoxHandler} /> */}

      <FlatList
        data={foxData} // *** (data.breeder) ***
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        extraData={isRender}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo years={data.age} food={data.food} />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              <Text style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary
              }}>
                Click & Select to edit ⛏️
              </Text>

            </View>
          </>
        )}
      />

      <Modal
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            padding: SIZES.base
          }}>Edit Fox Name: </Text>
          <TextInput
            style={{
              width: "90%",
              height: 40,
              borderColor: COLORS.gray,
              borderWidth: 1,
              fontSize: SIZES.font
            }}
            onChangeText={(name) => setInputText(name)}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={200}
          />
          <TouchableOpacity
            onPress={() => onPressSaveEdit()}
            style={{
              height: 50,
              backgroundColor: COLORS.gray,
              paddingHorizontal: 40,
              borderRadius: 2,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10
            }}
          >
            <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.white, }}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Details;