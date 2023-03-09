import React, { useState, useLayoutEffect } from 'react';
import Toast from 'react-native-simple-toast';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
// components
import {
  ImageViewer,
  CircleButton,
  ActionButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsFox,
  AddFoxModal
} from '../components';
// constants
import { COLORS, SIZES, FONTS, assets, foxData, SHADOWS } from '../constants';
// expo image-picker
import * as ImagePicker from 'expo-image-picker';


// DetailsHeader
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
      top={StatusBar.currentHeight - 4}
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


  // here we pick the image
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
      setSelectedImage(result.uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const onPressItem = (item) => {
    setIsModalVisible(true);
    setInputText(item.name);
    setInputAge(item.age);
    setInputDomain(item.domain);
    // setSelectedImage(item.image);
    setEditItem(item.id);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <ActionButton
          title="Add Fox"
          onPress={() => setIsModalVisible(true)}
        />
      }
    })
  }, [navigation]);

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
        {/* <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width: 85,
            height: 85
          }}
        /> */}
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
        item.image = selectedImage;
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
    Toast.showWithGravity("Congrat's, successfully edited your favorite Arctic Fox!", Toast.LONG, Toast.TOP);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.chocolateKisses}
        transluent={true}
      />

      {/* START OF ADD MODAL */}
      <AddFoxModal
        isVisible={isModalVisible}
      />
      {/* END OF ADD MODAL */}

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
                color: COLORS.chocolateKisses,
                marginTop: SIZES.small
              }}>
                Click and Edit  ⛏️
              </Text>
            </View>
          </>
        )}
      />

      {/* START OF EDIT MODAL */}
      <Modal
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={{ backgroundColor: COLORS.cultural, flex: 1 }}>
          <View style={{ zIndex: 0, marginBottom: SIZES.medium, ...SHADOWS.dark }}>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.large,
              color: COLORS.white,
              marginVertical: SIZES.large,
              paddingHorizontal: SIZES.large,
            }}>
              Oi Fox Lover,{"\n"}
              Welcome to the Arctic phlegmatic nest
            </Text>

            <Text style={{
              fontFamily: FONTS.light,
              fontSize: SIZES.small + 3,
              padding: SIZES.font + 2,
              color: COLORS.gray
            }}>
              You want to change something? {"\n"}
              What will happen if we make his/her older?
            </Text>
          </View>

          <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
            <View style={{ height: 180, backgroundColor: COLORS.chocolateKisses }} />
            <View style={{ flex: 1, backgroundColor: COLORS.cultural }} />
          </View>

          {/* NAME */}
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            paddingHorizontal: SIZES.medium + 2,
            paddingVertical: SIZES.base - 1,
            marginTop: SIZES.large * 1,
            marginBottom: SIZES.small,
            color: COLORS.chocolateKisses
          }}
          >
            Edit Name:
          </Text>
          <View style={{
            width: "60%",
            marginLeft: SIZES.medium,
            flexDirection: "row"
          }}>
            <TextInput
              style={{
                height: 45,
                width: 250,
                borderColor: COLORS.purpleLight,
                borderWidth: 1,
                borderRadius: SIZES.font,
                fontSize: SIZES.small,
                fontFamily: FONTS.light,
                color: COLORS.primary,
                paddingHorizontal: SIZES.small
              }}
              onChangeText={(name) => setInputText(name)}
              defaultValue={inputText}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <Text style={{
              fontSize: SIZES.large * 1.5,
              paddingHorizontal: SIZES.medium,
              paddingVertical: SIZES.base - 2
            }}>🦊</Text>

          </View>

          {/* YEARS */}
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            paddingHorizontal: SIZES.medium + 2,
            paddingVertical: SIZES.base - 1,
            marginTop: SIZES.large,
            color: COLORS.chocolateKisses
          }}
          >
            Edit Years:
          </Text>
          <View style={{
            width: "60%",
            marginLeft: SIZES.medium,
            flexDirection: "row"
          }}>
            <View style={{
              paddingHorizontal: SIZES.base - 5
            }}>
              <TextInput
                style={{
                  height: 45,
                  width: 250,
                  borderColor: COLORS.purpleLight,
                  borderWidth: 1,
                  borderRadius: SIZES.font,
                  fontSize: SIZES.small,
                  fontFamily: FONTS.light,
                  color: COLORS.primary,
                  paddingHorizontal: SIZES.small
                }}
                onChangeText={(age) => setInputAge(age)}
                defaultValue={inputAge}
                editable={true}
                multiline={false}
                maxLength={200}
              />
            </View>
          </View>

          {/* DOMAIN */}
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            paddingHorizontal: SIZES.medium + 2,
            paddingVertical: SIZES.base - 1,
            marginTop: SIZES.large,
            color: COLORS.chocolateKisses
          }}
          >
            Edit Domain:
          </Text>
          <View style={{
            width: "60%",
            marginLeft: SIZES.medium,
            flexDirection: "row"
          }}>
            <View style={{
              paddingHorizontal: SIZES.base - 6
            }}>
              <TextInput
                style={{
                  height: 45,
                  width: 250,
                  borderColor: COLORS.purpleLight,
                  borderWidth: 1,
                  borderRadius: SIZES.font,
                  fontSize: SIZES.small,
                  fontFamily: FONTS.light,
                  color: COLORS.primary,
                  paddingHorizontal: SIZES.small
                }}
                onChangeText={(domain) => setInputDomain(domain)}
                defaultValue={inputDomain}
                editable={true}
                multiline={false}
                maxLength={200}
              />
            </View>
          </View>

          {/* IMAGE PICKER */}
          <View style={{
            marginBottom: 15,
            marginTop: 15,
            marginHorizontal: SIZES.small * 1.5,
            width: "40%"
          }}>
            <TouchableOpacity
              style={{
                borderColor: COLORS.purpleLight,
                borderWidth: 1,
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.base,
                alignItems: "center",
                borderRadius: SIZES.small,
                backgroundColor: COLORS.lightKisses,
              }}
              onPress={() => pickImage()}
            >
              <Text style={{
                padding: SIZES.base,
                fontFamily: FONTS.light,
                fontSize: SIZES.medium,
                alignItems: "center",
                color: COLORS.chocolateKisses,
              }}
              >
                Pick Image{"  "}🖼️
              </Text>
            </TouchableOpacity>
          </View>

          {/* DISPLAY IMAGE */}
          <View style={{
            width: "45%",
            marginLeft: SIZES.medium,
            paddingVertical: SIZES.base,
            borderWidth: 1,
            borderColor: COLORS.lightKisses
          }}>
            <ImageViewer
              selectedImage={selectedImage}
            />
            {selectedImage &&
              <Image
                source={{ uri: selectedImage }}
                style={{
                  width: 170,
                  height: 105,
                }}
              />
            }
          </View>

          {/* SAVE BUTTON */}
          <View style={{
            padding: SIZES.small,
            marginTop: SIZES.medium
          }}>
            <ActionButton
              minWidth={120}
              maxWidth={230}
              fontSize={SIZES.font}
              handlePress={() => onPressSaveEdit()}
            />
          </View>
        </View>
      </Modal>
      {/* END OF EDIT MODAL */}
    </SafeAreaView>
  )
}

export default Details;