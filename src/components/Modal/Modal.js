import { Overlay, ModalWrapper, ModalImg } from './Modal.styled';


export default function Modal(props) {

  const { onClick, image, name } = props;
  return (
    <Overlay onClick={onClick}>
      <ModalWrapper>
        <ModalImg src={image} alt={name} />
      </ModalWrapper>
    </Overlay>
  );
}
