import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

function CommentForm() {
    var [Commentstate, setCommentCommentstate] = useState({ isCommentModalOpen: false });
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    function toggleCommentModal() {
        var currModal = Commentstate.isCommentModalOpen;
        console.log(Commentstate);
        console.log(currModal);
        setCommentCommentstate({ ...Commentstate, isCommentModalOpen: !currModal });
        console.log(Commentstate);
    }
    function handleCommentSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
    }
    return (
        <div>
            <Modal isOpen={Commentstate.isCommentModalOpen} toggle={toggleCommentModal} centered>
                <ModalHeader toggle={toggleCommentModal} >Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleCommentSubmit(values)}>
                        <Label htmlFor='rate'>Rating</Label>
                        <Row className='form-group'>
                            <Col>
                                <Control.select model=".rate" name="rate"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor='username'>Your Name</Label>
                            <Col >
                                <Control.text model=".username" id="username" name="username" placeholder="Your Name" className="form-control" validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                                <Errors
                                    className="text-danger"
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='comment'>Comment</Label>
                            <Col>
                                <Control.textarea model=".comment" id="addcomment" name="addcomment" className="form-control" cols={20} rows={9}/>
                            </Col>

                        </Row>
                        <br />
                        <Row className="form-group">
                            <Col >
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            <Button outline onClick={toggleCommentModal}><i className="fa fa-pencil" aria-hidden="true"></i> Add Comment</Button>
        </div>
    );
}

export default CommentForm;