import { StyleSheet, TextInput, Text, View, Image, SafeAreaView, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Form = ({ navigation }) => {

  const [check, setCheck] = React.useState(false);
  const [Email, setEmail] = React.useState("");
  const [ChEmail, setChEmail] = React.useState(true);
  const [errEmail, seterrEmail] = React.useState("")

  const [Password, setPassword] = React.useState("");
  const [ChEPassword, setChPassword] = React.useState(true);
  const [errPassword, seterrPassword] = React.useState("")

  const ValidateEmail = () => {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = Email.trim();
    if (email == "" || email == undefined || email == null) {
      seterrEmail("Please Enter the Email");
      setChEmail(false);
      return false;
    }
    else if (!emailRegex.test(email)) {
      seterrEmail("Please Enter valid Email Address")
      setChEmail(false);
      return false;
    } else {
      seterrEmail("");
      setChEmail(true);
      return true;
    }
  }

  const ValidatePassword = () => {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var password = Password.trim();
    if (password == "" || password == undefined || password == null) {
      seterrPassword("Please Enter the Password");
      setChPassword(false);
      return false;
    }
    else if (!passwordRegex.test(password)) {
      seterrPassword("Password should be strong")
      setChPassword(false);
      return false;
    } else {
      seterrPassword("");
      setChPassword(true);
      return true;
    }
  }

  const [hidePass, setHidePass] = React.useState(false);

  return (

    <SafeAreaView>
      <StatusBar translucent backgroundColor={'#e5e5e5'} />
      <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
      <View styles={{ backgroundColor: '#fff' }}>
        <View>
          <Text style={{
            textAlign: 'center', fontFamily: 'OpenSans-Bold'
            , fontSize: 40, marginVertical: 40, color: '#4eb6aa', letterSpacing: 3
          }}>𝓗𝓮𝓵𝓵𝓸</Text>
        </View>
        <View>

          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', marginLeft: 20, letterSpacing: 1, color: 'grey', }}>Sign In</Text>

          <TextInput type='Email' placeholder='Email' style={styles.myEmail} onChangeText={setEmail} onEndEditing={ValidateEmail} placeholderTextColor="grey" />
          <View>
            {
              ChEmail == true ? null : <Text style={{ color: 'red', fontFamily: 'OpenSans-Bold', marginLeft: 25, marginVertical: 10, }}>{errEmail}</Text>
            }
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#e5e5e5', width: '90%', borderRadius: 10, marginHorizontal: 20, marginHorizontal: 20, marginTop: 20, }}>
            <TextInput placeholder='Password' style={styles.mypassword}  onChangeText={setPassword}  onEndEditing={ValidatePassword} placeholderTextColor="grey" 
           secureTextEntry={hidePass ? true : false}
           >
                
            </TextInput>
            <FontAwesome5 
             name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)} color={'grey'} size={18} style={{ backgroundColor: '#e5e5e5', height: 40, textAlignVertical: 'center' }} />
          </View>

          <View>
            {
              ChEPassword == true ? null : <Text style={{ color: 'red', fontFamily: 'OpenSans-Bold', marginLeft: 25, marginVertical: 10, }}>{errPassword}</Text>
            }
          </View>
          <View style={styles.btn} >
            <Text onPress={() => {
              if (ValidateEmail() && ValidatePassword()) {
                navigation.replace('Screen2')
              }
            }} style={{ fontFamily: 'OpenSans-Bold', color: '#fff', letterSpacing: .6, textAlign: 'center', width: '100%' }}>Login Here</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#4eb6aa', marginTop: 20, letterSpacing: .5, textAlign: 'center', fontFamily: 'OpenSans-Bold' }}>Forgot password <FontAwesome5 name='question-circle' size={15} /></Text>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            paddingHorizontal: 60, marginTop: 40,
          }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <Image source={require('./images/gogle.png')} style={{ height: 25, width: 25, }} />
              <Text style={{ marginLeft: 20, color: '#db4d41', fontFamily: 'OpenSans-Bold' }}>Google + </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <Image source={require('./images/facebook.png')} style={{ height: 30, width: 30, }} />
              <Text style={{ marginLeft: 20, color: '#3a589b', fontFamily: 'OpenSans-Bold' }}>Facebook</Text>
            </View>
          </View>

          <View>
            <Text style={{ color: 'grey', textAlign: 'center', marginTop: 40, fontFamily: 'OpenSans-Bold' }}>Don't Have an account : <Text style={{ color: '#4eb6aa', fontSize: 16 }} onPress={()=> navigation.navigate('SignUp')}>Sign Up</Text> </Text>
          </View>
        </View>
        <View style={{ height: 170, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', height: 100, width: 100, backgroundColor: '#c4e7e3', borderTopRightRadius: 500, }}></Text>
          <Text style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', height: 150, width: 150, backgroundColor: '#c4e7e3', borderTopLeftRadius: 500, }}></Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form

const styles = StyleSheet.create({

  mypassword: {
    /* marginHorizontal: 20,
    marginTop: 20, */
    /* backgroundColor: '#e5e5e5', */
    padding: 12,
    borderRadius: 10,
    color: '#000',
    letterSpacing: 1,
    fontFamily: 'OpenSans-Medium',
    color: 'grey',
    width: '90%'
  },

  myEmail: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 10,
    color: '#000',
    backgroundColor: '#e5e5e5',
    letterSpacing: 1,
    fontFamily: 'OpenSans-Medium',
    color: 'grey',

  },

  btn: {
    margin: 20,
    marginTop: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontFamily: 'OpenSans-Bold',
    backgroundColor: '#4eb6aa',
    height: 50,
    borderRadius: 15,
  }
})