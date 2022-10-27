import {useState} from 'react';
import {Character} from '../models/Character';
import {handleGet} from '../repositories/character.repository';

export const useCharacterDetailViewModel = () => {
  const [character, setCharacter] = useState(undefined);
  const [counter, setCounter] = useState<number>(0);

  const handlePress = async () => {
    setCounter(prevState => (prevState < 20 ? prevState + 1 : 0));
    const response = await handleGet();

    if (response !== undefined) {
      setCharacter(response[counter]);
    }
  };

  return {
    character,
    handlePress,
  };
};
