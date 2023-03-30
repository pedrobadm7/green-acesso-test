import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import InputSearch from '@/components/InputSearch';
import Image from 'next/image';
import Head from 'next/head';
import * as S from './styles';
import { api } from '@/services/api';
import { ICharacter } from '@/types/characters';

function CharacterListScreen() {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const response = await api.getCharacters();
    const characters = response.results;
    setCharactersList(characters);

  }

  return (
    <>
      <Head>
        <title>Characters</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container>
        <S.Header>
          <InputSearch />
        </S.Header>

        <S.CardContainer>
          {charactersList.map((character) => (
            <Card key={character.id} character={character}/>
          ))}
        </S.CardContainer>
      </S.Container>
    </>
  );
}

export default CharacterListScreen;
