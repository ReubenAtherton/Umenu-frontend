import { View, Text, Modal, Alert, Pressable, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import { useLocalSearchParams } from 'expo-router';

const MealInfoPage = () => {

  const { id } = useLocalSearchParams();
  const data = useLocalSearchParams();
    return (
      <View style={{flex: 1, backgroundColor: 'red', alignContent: 'center'}}>
        <Text style={{fontSize: 100}}>{id}</Text>
      </View>
    )
  }


//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Modal
//         animationType='slide'
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Image style={{
//               marginVertical: 8,
//               backgroundColor: 'rgba(0, 0, 0, 0.05)',
//               borderRadius: 10,
//               overflow: "hidden",
//               width: 240,
//               height: 190,
//             }} source={require('@/assets/images/image-29.png')} />
//             <View style={{ flex: 1, marginVertical: 0, alignSelf: 'flex-start', width: '100%'}}>
//               <TextView
//                 name="Pad Thai"
//                 description="Thai noodle stir fry with a sweet-savoury-sour sauce scattered with crushed peanuts." 
//                 allergens="Peanuts, soy"
//                 />
//             </View>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Exit</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


// const TextView = ({ name, description, allergens}: any) => {
//   return (
//     <View>
//       <Text style={styles.fieldTitle}>
//         Name
//       </Text>
//       <Text style={styles.fieldText}>
//         {name}
//       </Text>

//       <Text style={styles.fieldTitle}>
//         Description
//       </Text>
//       <Text style={styles.fieldText}>
//         {description}
//       </Text>
//       <Text style={styles.fieldTitle}>
//         Allergen Information
//       </Text>
//       <Text style={styles.fieldText}>
//         {allergens}
//       </Text>
//       <Text style={styles.fieldTitle}>
//         Reviews
//       </Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  modalView: {
    width: '80%',
    height: '80%',
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
    elevation: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  fieldTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '600',
  },
  fieldText: {

  }
});



export default MealInfoPage