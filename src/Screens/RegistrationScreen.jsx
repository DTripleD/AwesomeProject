import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const RegistrationScreen = ({ setIsRegister }) => {
  const wasRegistered = () => {
    setIsRegister(true);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerKeyB}
    >
      <View style={styles.container}>
        <View style={styles.pfotoContainer}>
          <TouchableOpacity style={styles.addbutton} activeOpacity={0.5}>
            <ImageBackground
              source={require("../images/add.png")}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>

        <TextInput
          style={styles.inputLogin}
          placeholder="Логін"
          inputMode="text"
        />
        <TextInput
          style={styles.inputMailPassw}
          placeholder="Адреса електронної пошти"
          inputMode="email"
        />
        <TextInput
          style={styles.inputMailPassw}
          placeholder="Пароль"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.passwShow} activeOpacity={0.5}>
          <Text style={styles.passwShowText}>Показати</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} activeOpacity={0.5}>
          <Text style={styles.registerButtonText}>Зареєстуватися</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          activeOpacity={0.5}
          onPress={wasRegistered}
        >
          <Text style={styles.loginLinkText}>
            Вже є акаунт?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Увійти</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyB: {
    justifyContent: "flex-end",
  },
  pfotoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addbutton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  inputMailPassw: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  passwShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
