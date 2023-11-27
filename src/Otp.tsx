import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useRoute} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Otp: React.FC = ({}) => {
  const route = useRoute();

  const {phoneNumber} = route.params;
  console.log(phoneNumber);
  const [code, setCode] = useState('');

  const handleVerifyOTP = () => {
    if (code.trim() === '') {
      Alert.alert('Error', 'Please enter the OTP.');
    } else {
      Alert.alert('opt verified');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
              color: '#000000',
              letterSpacing: 0.25,
            }}>
            OTP Verify
          </Text>
        </View>
        <Image
          source={require('./Assets/invest.png')}
          style={{
            height: 232,
            width: 232,
            marginTop: Dimensions.get('window').height / 12,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />

        <View>
          <Text style={{color: 'grey', alignSelf: 'center', fontSize: 20}}>
            OTP sent to
          </Text>
          <Text
            style={{
              color: '#000',
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {phoneNumber}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginLeft: 20,
            marginBottom: 15,
          }}>
          <OTPInputView
            style={{width: '90%', height: 100, alignSelf: 'center'}}
            pinCount={4}
            onCodeChanged={c => setCode(c)}
            autoFocusOnLoad
            keyboardType="numeric"
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleVerifyOTP()
          }}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#E44433',
            width: '90%',
            borderRadius: 24,
            height: 50,
            marginTop: 0,
          }}>
          <Text style={{alignSelf: 'center', color: '#FFF'}}>Verify OTP</Text>
        </TouchableOpacity>

        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '65%',
            }}>
            by Verifying OTP, your number will be verified
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    justifyContent: 'center',
  },
  underlineStyleBase: {
    width: 68,
    height: 48,
    borderWidth: 1,
    // borderBottomWidth: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    color: '#0D0202',
    fontWeight: '700',
    fontSize: 16,
  },
  underlineStyleHighLighted: {
    borderColor: '#000',
    zIndex: 999,
    borderWidth: 1,
  },
  containermobile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 24,
    width: '90%',
    alignSelf: 'center',
  },
});
