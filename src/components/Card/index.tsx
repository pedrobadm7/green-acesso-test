import { ICharacter } from '@/types/characters';


import * as S from './styles';

function Card({character}: {character: ICharacter}) {
  return (
    <S.CardContainer>
      <S.CharacterImage src={character.image}
        alt="Picture of the author"
        width={90}
        height={90}
      />
      <S.CharacterInfo>
        <h1>#{character.id}</h1>
        <p>{character.name}</p>
        <S.StatusAndSpecies>
          <span>{character.species}</span>
          <span>{character.status}</span>
        </S.StatusAndSpecies>
      </S.CharacterInfo>

    </S.CardContainer>
  );
}

export default Card;
