import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
//const Post = require('../Data Layer/models/Post')
const util = require('util')
//const db = require('../Data Layer/databaseInteractions')


class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subject: "",
      description: "",
      body: "",
      value: RichTextEditor.createEmptyValue(),
      hidden: false
    }
    //this.buttonClick = this.buttonClick.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  static propTypes = {
    //onChange: PropTypes.func
  };

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  buttonClick = (value) => {
    //console.log(this.state.value.toString('html'));
    /*app.post('/newArticle', (req, res) =>{
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
    })*/
  }

  toggleHide () {
    this.setState({hidden: !this.state.hidden})
  }

  render () {
    //console.log(this.state.hidden)
    let btn_class = this.state.hidden ? "warning" : "secondary"
    let btn_label = this.state.hidden ? "Hidden" : "Visible"

    return (
    <div>
    <Form>
      <FormGroup>
        <Input id="TitleField" type="text" placeholder="Title" />
      </FormGroup>
      <FormGroup>
        <Input id="CategoryField" type="text" placeholder="Category" />
      </FormGroup>
      <FormGroup>
        <Input id="DescriptionField" type="text" placeholder="Description" />
      </FormGroup>
      <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
      />
      <Row>
        <Col>
        <Button color={btn_class} type="submit" size="sm" onClick={this.toggleHide} block>
          {btn_label}
        </Button>
        </Col>
        <Col>
        <Button color="success" type="submit" size="sm" block>
          Save
        </Button>
        </Col>
        <Col>
        <Button color="primary" type="submit" size="sm" block>
          Post
        </Button>
        </Col>
      </Row>
    </Form>
    </div>
    );
  }
}

export default Writer;
