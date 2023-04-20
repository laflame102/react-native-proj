import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const AddButton = () => {
  return (
    <View style={styles.addPost}>
      <AntDesign name="plus" size={24} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  addPost: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});

export default AddButton;
