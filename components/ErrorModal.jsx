// import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ErrorModal = ({ isVisible, onClose, message }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{message}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onClose}
        >
          <Text style={styles.textStyle}>Закрыть</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ErrorModal;