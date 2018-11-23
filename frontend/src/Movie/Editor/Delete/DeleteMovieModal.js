import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'Components/Modal/Modal';
import DeleteMovieModalContentConnector from './DeleteMovieModalContentConnector';

function DeleteMovieModal(props) {
  const {
    isOpen,
    onModalClose,
    ...otherProps
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onModalClose={onModalClose}
    >
      <DeleteMovieModalContentConnector
        {...otherProps}
        onModalClose={onModalClose}
      />
    </Modal>
  );
}

DeleteMovieModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default DeleteMovieModal;
