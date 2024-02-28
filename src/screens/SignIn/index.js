import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {strings} from '../../utils/strings';

const Signin = props => {
  const navigateToReset = () => {
    props.navigation.navigate('Reset');
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.Text1}>{strings.signIn.text1}</Text>
      <Text style={styles.Text2}>{strings.signIn.text2}</Text>
      <Text style={styles.Text3}>{strings.signIn.text3}</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'#818181'}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.botton} onPress={navigateToReset}>
        <Text style={styles.bottonText}>{strings.signIn.bottonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Signin;
