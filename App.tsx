import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bmi from "./components/Bmi";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Bmi />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
