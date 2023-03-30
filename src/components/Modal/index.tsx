import { ModalProps } from '@/types/modal';
import * as S from './styles';
import {IoMdCloseCircle} from 'react-icons/io';

function Modal({ isShown, hide, modalContent }: ModalProps) {

  return isShown ?  (
    <>
      <S.Backdrop />
      <S.Wrapper>
        <S.StyledModal>
          <S.Header>
            <S.HeaderText />
            <S.CloseButton onClick={hide}>
              <IoMdCloseCircle style={{width: 25, height: 80, color: '#6674F4'}}/>
            </S.CloseButton>
          </S.Header>
          <S.Content>{modalContent}</S.Content>
        </S.StyledModal>
      </S.Wrapper>
    </>
  ) : null;

}

export default Modal;
