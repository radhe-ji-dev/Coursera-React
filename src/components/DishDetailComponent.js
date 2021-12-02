import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  List,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    const commentsList = comments.map((cmnt) => {
      return (
        <li key={"comment-" + cmnt.id}>
          <p>{cmnt.comment}</p>
          <p>{`-- ${cmnt.author}, ${cmnt.date}`}</p>
        </li>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        {/* Reactstrap list component is not availble in library now */}
        <ul className="list-unstyled">{commentsList}</ul>
      </div>
    );
  }

  render() {
    if (this.props.dish == null) {
      return <div></div>;
    }

    return (
      <div className="row">
        <div className="col-12 col-md-5 col-sm-12 col-xs-12 m-1">
          {this.renderDish(this.props.dish)}
        </div>

        <div className="col-12 col-md-5 col-sm-12 col-xs-12 m-1">
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
