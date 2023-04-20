import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  handleSubmit = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../images/MountainBg.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            style={styles.regPanel}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.formTitle}>Увійти</Text>

            <View style={styles.form}>
              <TextInput
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
              />

              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Пароль"
                  value={password}
                  onChangeText={(password) => setPassword(password)}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.showPasswordButton}
                >
                  <Text style={styles.showPasswordButtonText}>
                    {showPassword ? "Сховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.singIn}>
                  Немає аккаута? Зареєструватись
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  regPanel: {
    flex: 0.5,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 16,
    // flex: 1,
    gap: 16,
  },
  input: {
    // height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
  },
  buttonContainer: {
    backgroundColor: "#FF6C00",
    marginTop: 43,
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    textAlign: "center",
    padding: 16,
  },
  singIn: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
  passwordContainer: {
    position: "relative",
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showPasswordButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});

export default LoginScreen;
