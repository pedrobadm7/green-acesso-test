import {ReactNode} from 'react';
import * as S from './styles';



function Card({children}: {children: ReactNode}) {
  return (
    <S.CardContainer>
      {children}
    </S.CardContainer>
  );
}

export default Card;
