import * as S from './styles';
import Image from 'next/image';
import mockImg from '../../assets/images/demolay.png';

function Card() {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <Image
          src={mockImg}
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.InfoBox>
          <S.Info>
            <strong> Name: </strong>
           Rick
          </S.Info>
          <S.Info>
            <strong> Status: </strong>
          Alive
          </S.Info>
        </S.InfoBox>
        <S.InfoBox>
          <S.Info>
            <strong>Specie: </strong>
          Human
          </S.Info>
          <S.Info>
            <strong> Type: </strong>
          White
          </S.Info>
        </S.InfoBox>
        <S.InfoBox>
          <S.Info>
            <strong> Origin: </strong>
           USA
          </S.Info>
          <S.Info>
            <strong> Gender: </strong>
          Man
          </S.Info>
        </S.InfoBox>
      </S.InfoContainer>
    </S.CardContainer>
  );
}

export default Card;
