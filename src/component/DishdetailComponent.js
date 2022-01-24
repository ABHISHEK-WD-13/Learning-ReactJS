import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';
function RenderDish({ dish, isLoading, errMess }) {
    return (
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>

            </CardBody>
        </Card>
    );
}
function RenderComments({ comments, dishId }) {
    if (comments.length !== 0) {
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
                <CommentForm dishId={dishId} />
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
    console.log("Props in dishdetails");
    console.log(props);

    if (props.isLoading)
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    else if (props.errMess)
        return (
            <div className='cotainer'>
                <h3>{props.errMess}</h3>
            </div>
        );
    else if (props.dish != null)
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} isLoading={props.isLoading} errMess={props.errMess} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} dishId={props.dishId} />
                        <br />

                    </div>

                </div>

            </div>
        );
}

export default DishDetail