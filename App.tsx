import React from 'react';
import {CharacterDetail} from './src/CharacterDetail/view';

const App = () => {
  return <CharacterDetail />;
};

export default App;

// Sem arquitetura mvvm

// import {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Character} from './src/models/Character';
// import api from './src/services/api';

// export default App = () => {
//   const [character, setCharacter] = useState<Character | undefined>(undefined);
//   const [counter, setCounter] = useState<number>(0);

//   const handleGet = async () => {
//     setCounter(prevState => (prevState < 20 ? prevState + 1 : 0));

//     try {
//       const response = await api({url: '/characters'});
//       console.log(
//         JSON.stringify(response.data.data.results[counter], undefined, 2),
//       );
//       setCharacter(response.data.data.results[counter]);
//     } catch (error) {
//       console.log(JSON.stringify(error));
//     }
//   };

//   return (
//     <View style={styles.Container}>
//       <TouchableOpacity onPress={() => handleGet()}>
//         {character ? (
//           <>
//             <Text>{'ID: ' + character.id}</Text>

//             <Text>{'Name: ' + character.name}</Text>

//             {character.description ? (
//               <Text>Description: {character.description}</Text>
//             ) : (
//               <Text>Description: ---</Text>
//             )}
//           </>
//         ) : (
//           <Text>Requisição</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
// });
