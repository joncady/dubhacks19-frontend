/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProfileCard = (props) => {
  const {
    buttonLabel,
    className,
    name,
    content
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
         {content}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>PLACE</Button>{' '}
          <Button color="secondary" onClick={toggle}>HOLDER</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProfileCard;