import {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Images} from '../../utils/images';
import {styles} from './style';
import {strings} from '../../utils/strings';

const Reset = () => {
  const [isSecure, setSecure] = useState(true);
  const onEyeClick = () => {
    setSecure(!isSecure);
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.text1}>{strings.reset.text1}</Text>
      <Text style={styles.text2}>{strings.reset.text2}</Text>
      <View style={styles.bottonTextInput}>
        <TextInput
          secureTextEntry={isSecure}
          placeholder={strings.reset.textInput1}
          placeholderTextColor={'#818181'}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={onEyeClick} style={styles.eyeButton}>
          <Image
            style={styles.eyeImage}
            source={isSecure ? Images.Login.view : Images.Login.hide}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottonTextInput}>
        <TextInput
          secureTextEntry={isSecure}
          placeholder={strings.reset.textInput2}
          placeholderTextColor={'#818181'}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={onEyeClick} style={styles.eyeButton}>
          <Image
            style={styles.eyeImage}
            source={isSecure ? Images.Login.view : Images.Login.hide}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text3} />
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>{strings.reset.text4}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Reset;
