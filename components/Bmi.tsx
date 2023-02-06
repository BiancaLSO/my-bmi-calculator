import { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [text, setText] = useState("");

  const calculateBMI = () => {
    const noHeight = Number(height);
    const noWeight = Number(weight);
    const noBmi = noWeight / ((noHeight / 100) * (noHeight / 100));
    setBmi(noBmi.toFixed(1).toString());

    if (noBmi < 18.5) {
      setText("You are underweight");
    } else if (noBmi >= 18.5 && noBmi < 25) {
      setText("You are normal");
    } else if (noBmi >= 25 && noBmi < 30) {
      setText("You are overweight");
    } else if (noBmi >= 30) {
      setText("You are obese");
    }

    Keyboard.dismiss();
  };

  const refresh = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setText("");
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="Height"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Weight"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}> Calculate </Text>
      </TouchableOpacity>

      {bmi ? <Text style={styles.output}>Your BMI is: {bmi}</Text> : null}
      {text ? <Text style={styles.text}>{text}</Text> : null}

      <TouchableOpacity style={styles.refresh} onPress={refresh}>
        <Text style={styles.buttonText}> Refresh </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#ff6666",
    padding: 10,
    margin: 15,
    height: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    margin: 15,
  },
  refresh: {
    margin: 10,
  },
});

export default Bmi;
