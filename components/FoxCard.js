import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// components
import { DetailButton } from './Button';
import { SubInfo, FoxTitle } from './SubInfo';
// constant
import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const FoxCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.medium,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: '100%', height: 200 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "70%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />
        <SubInfo years={data.age} food={data.food} />
      </View>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <View style={{
          marginTop: -SIZES.base,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <FoxTitle
            title={data.name}
            titleSize={SIZES.large}
            subTitle={data.domain}
            subTitleSize={SIZES.font}
          />
          <DetailButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  )
}

export default FoxCard