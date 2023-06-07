import { StatusBar } from "expo-status-bar";
import RegistrationScreen from "./src/Screens/RegistrationScreen";

import { View } from "react-native";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  return (
    // <RegistrationScreen></RegistrationScreen>
    <LoginScreen></LoginScreen>
    // <StatusBar style="auto" />
  );
}
