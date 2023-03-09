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
import { COLORS, SIZES, FONTS, assets, foxData } from '../constants';
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
    Toast.showWithGravity("Congrat's, successfully edited your favorite Arctic Fox!", Toast.LONG, Toast.TOP);
    setIsModalVisible(false); // close the modal
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transluent={true}
      />

      {/* START OF ADD MODAL */}
      <AddFoxModal
        isVisible={isModalVisible}
        onCli
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
        <View style={{
          flex: 1,
          backgroundColor: COLORS.cultural
        }}>
          <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.large,
            color: COLORS.chocolateKisses,
            marginVertical: SIZES.font * 2,
            paddingHorizontal: SIZES.medium
          }}>
            Oi 🦊{" "}Fox{" "}🦊Lover,{"\n"}
            Welcome to the Arctic phlegmatic nest
          </Text>

          <Text style={{
            fontFamily: FONTS.light,
            fontSize: SIZES.medium,
            padding: SIZES.font,
          }}>
            You want to change something? {"\n"}
            What will happen if we make his/her older?
          </Text>

          {/* NAME */}
          <View style={{
            width: "60%",
            marginLeft: SIZES.small
          }}>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              padding: SIZES.base,
              marginTop: SIZES.font,
              color: COLORS.chocolateKisses
            }}
            >
              Edit Name:
            </Text>
            <View style={{
              paddingHorizontal: SIZES.base - 2
            }}>
              <TextInput
                style={{
                  height: 45,
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
            </View>
          </View>

          {/* YEARS */}
          <View style={{
            width: "60%",
            marginLeft: SIZES.small
          }}>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              padding: SIZES.base,
              marginTop: SIZES.font,
              color: COLORS.chocolateKisses
            }}
            >
              Edit Years:
            </Text>
            <View style={{
              paddingHorizontal: SIZES.base - 2
            }}>
              <TextInput
                style={{
                  height: 45,
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
          <View style={{
            width: "60%",
            marginLeft: SIZES.small
          }}>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              padding: SIZES.base,
              marginTop: SIZES.font,
              color: COLORS.chocolateKisses
            }}
            >
              Edit Domain:
            </Text>
            <View style={{
              paddingHorizontal: SIZES.base - 2
            }}>
              <TextInput
                style={{
                  height: 45,
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
            marginVertical: SIZES.large * 2,
            marginHorizontal: SIZES.small * 1.5,
            width: "50%"
          }}>
            <TouchableOpacity
              style={{
                borderColor: COLORS.purpleLight,
                borderWidth: 1,
                paddingVertical: SIZES.small,
                paddingHorizontal: SIZES.small,
                alignItems: "center",
                borderRadius: SIZES.small,
                backgroundColor: COLORS.lightKisses,
              }}
              onPress={() => pickImage()}
            >
              <Text style={{
                padding: SIZES.font,
                fontFamily: FONTS.light,
                fontSize: SIZES.medium,
                alignItems: "center",
                color: COLORS.chocolateKisses,
              }}
              >
                Pick Image{"   "}🖼️
              </Text>
            </TouchableOpacity>
          </View>
          <ImageViewer
            selectedImage={selectedImage}
          />
          {selectedImage &&
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 200, height: 200 }}
            />
          }

          {/* SAVE BUTTON */}
          <View style={{
            marginVertical: SIZES.large * 5,
            marginLeft: SIZES.extraLarge * 2,
            padding: SIZES.medium,
          }}>
            <ActionButton
              minWidth={120}
              maxWidth={260}
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