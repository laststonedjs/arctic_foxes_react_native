import { View, Text } from 'react-native';
import { useState } from 'react';
// components
import { FoxTitle } from './SubInfo';
// constants
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <FoxTitle
          title={data.name}
          titleSize={26}
          subTitle={data.domain}
          subTitleSize={18}
        />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.regular,
          color: COLORS.chocolateKisses
        }}>
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!readMore && '...'}
            <Text style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary
            }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc;