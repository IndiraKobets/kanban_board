import React, {useState} from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';

function AddColumnModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newTitle, setNewTitle] = useState('');

    const [newPriority, setNewPriority] = useState(1);

    const [newStatus, setNewStatus] = useState('TO DO');

    const addButtonHandler = () => {
        setIsModalOpen(false);
        props.addNewTask(newTitle, newPriority, newStatus);
        setNewPriority('');
    };

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new task</ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>

                    <Row>
                        <Col>
                            <Label>priority</Label>
                            <Input type="select" value={newPriority} onChange={e => setNewPriority(e.target.value)}>
                                <option value={0}>Low</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </Input>
                        </Col>

                        <Col>
                            <Label>status</Label>
                            <Input type="select" value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                <option value={'TO DO'}>To do</option>
                                <option value={'IN PROGRESS'}>In progress</option>
                                <option value={'REVIEW'}>Review</option>
                                <option value={'DONE'}>Done</option>
                            </Input>
                        </Col>

                    </Row>
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
