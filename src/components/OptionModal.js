import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
      // !undefined equals true
      // !!undefined equals false
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearModal}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
   >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearModal}>Okay</button>
   </Modal>
);

export default OptionModal;