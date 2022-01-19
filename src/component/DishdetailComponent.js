import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import CommentForm from './CommentFormComponent';

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}
function RenderComments({ comments }) {
    if (comments.length !== 0) {
        console.log("in comments");
        const comm = comments.map((C) => {
            return (
                <li key={C.id}>
                    <p>{C.comment}</p>
                    <p>--{C.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(C.date)))}</p>
                </li>
            );
        });
        return (
            <Card>
                <h4>Comments</h4>
                <ul className='list-unstyled'>{comm}</ul>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
function DishDetail(props) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                    <br />
                    <CommentForm />
                </div>

            </div>

        </div>
    );
}

export default DishDetail