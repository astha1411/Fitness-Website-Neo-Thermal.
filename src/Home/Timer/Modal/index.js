import React, { useState, useMemo } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import "../styles.css";

function AnimatedModal() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button id="button" onClick={() => setIsVisible(true)}>
        INSTRUCTIONS
      </button>

      <Modal
        animationType={"fade"}
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}
      >
        <View style={styles.container}>
          <Text style={styles.modalHead}>How to Do a Push-Up</Text>
          <Text style={styles.modalText}>
            1. Get down on all fours, placing your hands slightly wider than
            your shoulders.{" "}
          </Text>
          <Text style={styles.modalText}>
            2. Straighten your arms and legs.{" "}
          </Text>
          <Text style={styles.modalText}>
            3. Lower your body until your chest nearly touches the floor.{" "}
          </Text>
          <Text style={styles.modalText}>
            4. Pause, then push yourself back up.{" "}
          </Text>
          <Text style={styles.modalText}>5. Repeat. </Text>

          <Button onPress={() => setIsVisible(false)} title={"Close"} />
        </View>
      </Modal>
    </>
  );
}

export default AnimatedModal;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  containeralt: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#eee",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    height: 300,
    margin: "auto",
    padding: 30,
    width: 300,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    color: "black",
  },
  modalHead: {
    fontSize: 20,
    color: "black",
    marginBottom: 30,
  },
});
