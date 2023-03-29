import InputSearch from '@/components/InputSearch';

import * as S from './styles';

function CharacterListScreen() {
  return (
    <S.Container>
      <InputSearch />

      <S.Header

      >
        <strong>10 characters</strong>
      </S.Header>
    </S.Container>
  );
}

export default CharacterListScreen;
