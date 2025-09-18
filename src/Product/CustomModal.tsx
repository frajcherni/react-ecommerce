import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { RiCloseLine } from 'react-icons/ri';

interface CustomModalProps {
  classes?: {
    modalClass?: string;
    modalHeaderClass?: string;
    modalBodyClass?: string;
    customChildren?: boolean;
    title?: string;
  };
  extraFunction?: () => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<any>>;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ 
  classes = {}, 
  extraFunction, 
  modal, 
  setModal, 
  children 
}) => {
  const toggle = () => {
    if (extraFunction) {
      extraFunction();
    } else {
      setModal(false);
    }
  };

  return (
    <Modal className={classes?.modalClass || ''} isOpen={modal} toggle={toggle} centered>
      {classes?.customChildren ? (
        children
      ) : (
        <>
          <ModalHeader className={classes?.modalHeaderClass || ''} toggle={toggle}>
            {classes?.title}
            <RiCloseLine className='modal-close-btn' />
          </ModalHeader>
          <ModalBody className={classes?.modalBodyClass || ''}>{children}</ModalBody>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;