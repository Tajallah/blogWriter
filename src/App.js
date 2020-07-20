import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import { Container, Row, Col, Button } from 'reactstrap';
const Post = require('./Data Layer/models/Post')
const util = require('util')
const db = require('./Data Layer/databaseInteractions')

class MyStatefulEditor extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  static propTypes = {
    //onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    /*if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }*/
  };

  buttonClick = (value) => {
    //console.log(this.state.value.toString('html'));
    app.post('/newArticle', (req, res) =>{
      console.log("starting post")
      console.log(req)
      console.log("req :: ", req.body)
      const post = new Post({
        title: this.state.title,
        category:this.state.category,
        description:this.state.description,
        body:this.state.value.toString('html'),
        hidden:req.body.hidden
      })
      console.log("saving")
      post.save()
      .then(data => {
        res.json(data)
        console.log("saved")
      })
      .catch(err => {
        res.json({message: err})
      })
    }



  render () {
    return (
      <Container>
      <Row>
      <Col xs="2"></Col>
      <Col xs="auto"><RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      /></Col>
      <Col xs="2"></Col>
      </Row>
      <Row><Col xs="10"></Col><Col xs="2"><Button onClick={this.buttonClick} color="primary">primary</Button>{' '}</Col></Row>
      </Container>
    );
  }
}

export default MyStatefulEditor;
