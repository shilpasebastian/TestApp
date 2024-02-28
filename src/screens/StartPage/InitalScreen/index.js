import {useState} from 'react';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './style';
import {Images} from '../../../utils/images';
import {strings} from '../../../utils/strings';

const InitalSreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.mainView2}>
        <Swiper
          style={styles.swiper}
          onIndexChanged={handleIndexChanged}
          loop={false}>
          <View style={styles.firstView}>
            <Image
              source={Images.initialPage.firstImage}
              style={styles.firstImage}
            />
            <Text style={styles.firstText1}>
              {strings.initialPage.firstText1}
            </Text>
            <Text style={styles.firstText2}>
              {strings.initialPage.firstText2}
            </Text>
          </View>
          {/* Second View------------------- */}

          <View style={styles.secondView}>
            <Image
              source={Images.initialPage.secondImage}
              style={styles.secondImage}
            />
            <Text style={styles.secondText1}>
              {strings.initialPage.secondText1}
            </Text>
            <Text style={styles.secondText2}>
              {strings.initialPage.secondText2}
            </Text>
          </View>
          {/* third Page */}

          <View style={styles.thirdView}>
            <Image
              source={Images.initialPage.thirdImage}
              style={styles.thirdImage}
            />
            <Text style={styles.thirdText1}>
              {strings.initialPage.thirdText1}
            </Text>
            <Text style={styles.thirdText2}>
              {strings.initialPage.thirdText2}
            </Text>
          </View>
          {/* fourth view */}
          <View style={styles.fourthView}>
            <Image
              source={Images.initialPage.fourthImage}
              style={styles.fourthImage}
            />
            <Text style={styles.fourthText1}>
              {strings.initialPage.fourthText1}
            </Text>
            <Text style={styles.fourthText2}>
              {strings.initialPage.fourthText2}
            </Text>
            <Text style={styles.fourthText3}>
              {strings.initialPage.fourthText3}
            </Text>
          </View>
        </Swiper>
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.buttonText}>{strings.initialPage.startButton}</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>{strings.initialPage.login}</Text>
    </View>
  );
};
export default InitalSreen;
