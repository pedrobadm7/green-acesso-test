import { ModalProps } from '@/types/modal';
import * as S from './styles';

function Modal({ isShown, hide, modalContent }: ModalProps) {

  return isShown ?  (
    <>
      <S.Backdrop />
      <S.Wrapper>
        <S.StyledModal>
          <S.Header>
            <S.HeaderText />
            <S.CloseButton onClick={hide}>
              x
            </S.CloseButton>
          </S.Header>
          <S.Content>{modalContent}</S.Content>
        </S.StyledModal>
      </S.Wrapper>
    </>
  ) : null;

}

export default Modal;
