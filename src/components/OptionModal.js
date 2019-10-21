import React from 'react';
import ReactDOM from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Modal showing the selected option"
            ariaHideApp={false}
            onRequestClose={props.handleCloseModal}
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleCloseModal}>Close</button>
        </Modal>
);

export default OptionModal;