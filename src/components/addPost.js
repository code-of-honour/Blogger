import React, { Component } from 'react'
import { Button, Label } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link } from 'react-router'

class AddPost extends Component {
  

  render() {

      const { fields: { title, categories, content }, handleSubmit } = this.props

    return (
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create A New Post</h3>
          <div className=
          {`form-group ${title.touched && title.invalid ? 'has-danger' : ''}
          ${title.touched && title.valid ? 'has-success' : ''}`}
          >
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
            <Label bsStyle="danger">
              {title.touched ? title.error : ''}
            </Label>
          </div>

          <div className=
          {`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}
          ${categories.touched && categories.valid ? 'has-success' : ''}`}
          >
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}/>
            <Label bsStyle="danger">
              {categories.touched ? categories.error : ''}
            </Label>
          </div>

          <div className=
          {`form-group ${content.touched && content.invalid ? 'has-danger' : ''}
          ${content.touched && content.valid ? 'has-success' : ''}
          `}>
            <label>Content</label>
            <textarea className="form-control" {...content}/>
            <Label bsStyle="danger">
              {content.touched ? content.error : ''}
            </Label>
          </div>

          <Button type="submit" bsStyle="primary" bsSize="small">Submit</Button>
          <Link to="/"><Button bsStyle="danger" bsSize="small">Cancel</Button></Link>
        </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.title) {
    errors.title = 'Enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Enter a category'
  }

  if (!values.content) {
    errors.content = 'Enter content'
  }

  return errors
}

export default reduxForm({
  form: 'Add Post',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(AddPost)
