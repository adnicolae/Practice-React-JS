import React from 'react';
import ReactDOM from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Modal showing the selected option"
            ariaHideApp={false}
            onRequestClose={props.handleCloseModal}
            closeTimeoutMS={200}
            className='modal'
        >
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='button' onClick={props.handleCloseModal}>Close</button>
        </Modal>
);

export default OptionModal;