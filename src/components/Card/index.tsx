import { useModal } from '@/hooks/useModal';
import { ICharacter } from '@/types/characters';
import Modal from '../Modal';


import * as S from './styles';

function Card({character}: {character: ICharacter}) {
  const { isShown, toggle } = useModal();

  const content = (
    <>
      <S.ModalContainer>
        <S.CharacterImage src={character.image}
          alt="Picture of the author"
          width={90}
          height={90}
        />

        <S.CharacterModalInfos>
          <h1>#{character.id}</h1>
          <p>{character.name}</p>
        </S.CharacterModalInfos>
      </S.ModalContainer>
      <S.CharactersModalStats>
        <span><b>Gender:</b> {character.gender}</span>
        <span>Location: {character.location.name}</span>
        <span>Origin: {character.origin.name}</span>
        <span>Status: {character.status}</span>
        <span>Species: {character.species}</span>
        {character.type ? <span>Type: {character.type}</span> : ''}
      </S.CharactersModalStats>
    </>
  );

  return (
    <>
      <S.CardContainer onClick={toggle} style={{ cursor: 'pointer' }}>
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
      <Modal isShown={isShown} hide={toggle} modalContent={content} />
    </>
  );
}

export default Card;
