import { useState } from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity, Text, Modal } from 'react-native';
// components
import { FoxCard, HomeHeader, FocusedStatusBar, AddModal } from '../components';
// constants
import { FONTS, COLORS, SIZES, foxData } from '../constants';

const Home = () => {
  const [FOXData, setFOXData] = useState(foxData);
  const [foxes, setFoxes] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const swapModalVisible = (bool) => {
    setIsAddModalVisible(bool);
  };

  const handleOnSubmit = (newFoxName, newFoxAge, newFoxDomain) => {
    const fox = {
      id: Date.now(),
      newFoxName,
      newFoxAge,
      newFoxDomain
    };
    console.log(fox);
  };

  const handleSearch = (value) => {
    if (!value.length) return setFOXData(foxData);

    const filteredData = FOXData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setFOXData(filteredData);
    } else {
      setFOXData(FOXData);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.chocolateKisses} />
      {/* ADD FOX MODAL */}
      <View style={{
        maxWidth: "100%",
        alignItems: "center",
        backgroundColor: COLORS.chocolateKisses,
      }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.cultural,
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.medium,
            marginRight: SIZES.medium,
            marginTop: SIZES.small,
            marginBottom: SIZES.small,
            borderRadius: SIZES.small,
          }}
          onPress={() => swapModalVisible(true)}
        >
          <Text style={{
            marginHorizontal: SIZES.font,
            marginVertical: SIZES.small,
            color: COLORS.chocolateKisses,
            fontFamily: FONTS.bold,
            fontSize: SIZES.regular
          }}>
            Add a New Fox{"   "}💼
          </Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isAddModalVisible}
          onRequestClose={() => swapModalVisible(false)}
        >
          <AddModal
            swapModalVisible={swapModalVisible}
            onSubmit={handleOnSubmit}
          />
        </Modal>
      </View>
      {/* END OF ADD MODAL */}

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={FOXData}
            renderItem={({ item, index }) => <FoxCard data={item} index={index} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.chocolateKisses }} />
          <View style={{ flex: 1, backgroundColor: COLORS.cultural }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;