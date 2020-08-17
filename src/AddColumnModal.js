import React, {useState} from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';

function AddColumnModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newTitle, setNewTitle] = useState('');


    const addButtonHandler = () => {
        setIsModalOpen(false);
        props.addNewColumn(newTitle);
    };

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new column</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new column</ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Submit</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddColumnModal;
