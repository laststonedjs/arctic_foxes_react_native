import React, { useState } from 'react';
// expo image-picker
import * as ImagePicker from 'expo-image-picker';
import {
  Text, View, SafeAreaView,
  Image, StatusBar, FlatList,
  TouchableOpacity, Modal, TextInput, Button,
} from 'react-native';
// components
import {
  ImageViewer, CircleButton,
  SubInfo, FocusedStatusBar,
  DetailsDesc, DetailsFox, AddFox
} from '../components';
// constants
import { COLORS, SIZES, FONTS, assets, foxData } from '../constants';
import Toast from 'react-native-simple-toast';


// DetailsHeader component
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
  const [inputAge, setInputAge] = useState();
  const [inputDomain, setInputDomain] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRender, setIsRender] = useState(false);
  const [editItem, setEditItem] = useState();
  const [selectedImage, setSelectedImage] = useState(null);


  // pick the image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
      mediaType: 'image',
      storageOptions: {
        skipBackup: true
      }
    });

    console.log(result);
    if (!result.cancelled) {
      setSelectedImage(result.assets.uri);
    } else {
      alert('You did not select any image.');
    }
  };


  const onPressItem = (item) => {
    setIsModalVisible(true);
    setInputText(item.name);
    setInputAge(item.age);
    setInputDomain(item.domain);
    setEditItem(item.id);
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderBottomColor: COLORS.lightGray,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <DetailsFox foxes={item} />
        <Text style={{ display: "none" }}>
          {item.name}
        </Text>
        <Text style={{ display: "none" }}>
          {item.age}
        </Text>
        <Text style={{ display: "none" }}>
          {item.domain}
        </Text>
      </TouchableOpacity>
    )
  }


  const handleEditItem = (editItem) => {
    const newData = foxes.map(item => {
      if (item.id == editItem) {
        item.name = inputText;
        item.age = inputAge;
        item.domain = inputDomain;
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
      <FlatList
        data={foxData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: SIZES.large * 3 }}
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
                color: COLORS.primary,
                marginTop: SIZES.font
              }}>
                Click on the Fox as desired and Edit  ⛏️
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
          justifyContent: "center",
          backgroundColor: COLORS.lightGray
        }}>

          {/* EDIT NAME */}
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            padding: SIZES.base,
            marginTop: SIZES.font,
            marginRight: SIZES.extraLarge * 10.8
          }}
          >
            Edit Fox Name:
          </Text>
          <TextInput
            style={{
              width: "90%",
              height: 45,
              borderColor: COLORS.white,
              borderWidth: 1,
              borderRadius: 2,
              fontSize: SIZES.font,
              fontFamily: FONTS.light,
              color: COLORS.white,
              paddingHorizontal: SIZES.base
            }}
            onChangeText={(name) => setInputText(name)}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={200}
          />

          {/* EDIT AGE */}
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            padding: SIZES.base,
            marginTop: SIZES.font,
            marginRight: SIZES.extraLarge * 11
          }}
          >
            Edit Fox Years:
          </Text>
          <TextInput
            style={{
              width: "90%",
              height: 45,
              borderColor: COLORS.white,
              borderWidth: 1,
              borderRadius: 2,
              fontSize: SIZES.font,
              fontFamily: FONTS.light,
              color: COLORS.white,
              paddingHorizontal: SIZES.base
            }}
            onChangeText={(age) => setInputAge(age)}
            defaultValue={inputAge}
            editable={true}
            multiline={false}
            maxLength={200}
          />

          {/* EDIT DOMAIN */}
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            padding: SIZES.base,
            marginTop: SIZES.font,
            marginRight: SIZES.extraLarge * 10
          }}
          >
            Edit Fox Kingdom:
          </Text>
          <TextInput
            style={{
              width: "90%",
              height: 45,
              borderColor: COLORS.white,
              borderWidth: 1,
              fontSize: SIZES.font,
              borderRadius: 2,
              fontFamily: FONTS.light,
              color: COLORS.white,
              paddingHorizontal: SIZES.base
            }}
            onChangeText={(domain) => setInputDomain(domain)}
            defaultValue={inputDomain}
            editable={true}
            multiline={false}
            maxLength={200}
          />
          <TouchableOpacity onPress={() => pickImage()}>
            <Text>Choose Image</Text>
          </TouchableOpacity>
          <ImageViewer
            selectedImage={selectedImage}
          />
          {selectedImage &&
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 200, height: 200 }}
            />
          }
          <TouchableOpacity
            onPress={() => {
              onPressSaveEdit();
              Toast.showWithGravity("Congrat's, successfully edited your favorite Arctic Fox!", Toast.LONG, Toast.TOP)
            }}
            style={{
              height: 50,
              backgroundColor: COLORS.gray,
              paddingHorizontal: 40,
              borderRadius: 2,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15
            }}
          >
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.large,
              color: COLORS.white,
              marginHorizontal: SIZES.font,
            }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Details;