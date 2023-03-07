import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
// components
import { FoxCard, HomeHeader, FocusedStatusBar } from '../components';
// constants
import { COLORS, foxData } from '../constants';

const Home = () => {
  const [FOXData, setFOXData] = useState(foxData);

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
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={FOXData}
            renderItem={({ item }) => <FoxCard data={item} />}
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
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;