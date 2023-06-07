import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bg-photo.png")}
        style={styles.image}
      >
        <View style={styles.formWrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>Увійти</Text>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                textAlign={"left"}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Логін"
              />

              <TextInput
                style={styles.input}
                textAlign={"left"}
                placeholderTextColor={"#BDBDBD"}
                keyboardType="email-address"
                placeholder="Адреса електронної пошти"
              />

              <TextInput
                style={styles.input}
                textAlign={"left"}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Пароль"
              />

              <TouchableOpacity style={styles.passwShow} activeOpacity={0.5}>
                <Text style={styles.passwShowText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.aside}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 78,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
    marginBottom: 33,
  },
  form: { gap: 16, marginBottom: 43 },
  input: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    height: 50,
    paddingLeft: 16,
  },

  button: {
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
    fontSize: 16,
  },
  aside: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    color: "#1B4371",
  },
  passwShow: {
    top: -50,
    left: 271,
  },
  containerKeyB: {
    justifyContent: "flex-end",
  },
});
