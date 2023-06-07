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

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bg-photo.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formWrapper}>
            <View style={styles.imgBox}>
              <View>
                <Image
                  style={styles.avatar}
                  source={require("../images/avatar.png")}
                />
                <TouchableOpacity style={styles.iconBtnDel}>
                  <Image
                    style={styles.iconDel}
                    source={require("../images/add.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

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
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.aside}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 78,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
  },
  imgBox: {
    position: "absolute",
    left: "35%",
    top: "-15%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
  iconBtn: {
    position: "absolute",
    left: "90%",
    top: "65%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconBtnDel: { position: "absolute", left: "85%", top: "65%" },
  iconDel: {
    width: 35,
    height: 35,
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
});
