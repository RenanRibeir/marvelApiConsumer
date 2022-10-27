import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCharacterDetailViewModel} from './view.model';

export const CharacterDetail = () => {
  const {character, handlePress} = useCharacterDetailViewModel();

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={handlePress}>
        {character ? (
          <>
            <Text>{'ID: ' + character.id}</Text>

            <Text>{'Name: ' + character.name}</Text>

            {character.description ? (
              <Text>Description: {character.description}</Text>
            ) : (
              <Text>Description: ---</Text>
            )}
          </>
        ) : (
          <Text>Requisição</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
