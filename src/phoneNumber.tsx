import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import {Alert} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useRef, useState} from 'react';

const phoneNumber: React.FC<{navigation: NavigationProp<any>}> = ({
  navigation,
}) => {
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>('IN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const countryPicker = useRef<CountryPicker>();

  const handleCountrySelect = (country: Country) => {
    setCountryCode(country.cca2);
    setShowCountryPicker(false);
  };

  const handlePhoneNum = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Error', 'Please enter the Phone number.');
    } else {
      navigation.navigate('Otp', {phoneNumber});
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
            Log in
          </Text>
        </View>
        <Image
          source={require('./Assets/invest.png')}
          style={{
            height: 232,
            width: 232,
            marginTop: Dimensions.get('window').height / 10,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View style={styles.containermobile}>
          <View style={styles.countryCodeContainer}>
            <TextInput
              style={styles.countryCodeInput}
              value={countryCode ? `+${countryCode}` : ''}
              editable={false}
              placeholderTextColor="#B2A39E"
              onTouchEnd={() => setShowCountryPicker(true)}
            />
          </View>
          <View style={styles.countryPickerContainer}>
            <CountryPicker
              withFilter
              withFlag
              withAlphaFilter
              withCallingCode
              onSelect={handleCountrySelect}
              countryCode={countryCode}
              visible={showCountryPicker}
              onClose={() => setShowCountryPicker(false)}
              translation="eng"
              ref={countryPicker}
            />
          </View>
          <View style={styles.phoneNumberContainer}>
            <TextInput
              placeholderTextColor="#B2A39E"
              style={styles.phoneNumberInput}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            handlePhoneNum();
          }}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#E44433',
            width: '90%',
            borderRadius: 24,
            height: 50,
            marginTop: 20,
          }}>
          <Text style={{alignSelf: 'center', color: '#FFF'}}>Get OTP</Text>
        </TouchableOpacity>

        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '65%',
            }}>
            by signing up, you agree with our terms and conditions.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default phoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    justifyContent: 'center',
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
  countryCodeContainer: {
    marginRight: 5,
  },
  countryCodeInput: {
    padding: 10,
    borderRadius: 5,
    color: '#706C6D',
  },
  countryPickerContainer: {
    marginRight: 5,
  },
  phoneNumberContainer: {
    flex: 1,
  },
  phoneNumberInput: {
    padding: 0,
    fontSize: 15,
    color: '#000000',
  },
});
