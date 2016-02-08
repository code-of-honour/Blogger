import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <div className="text-xs-center">
          <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
        </div>
        List of Posts
      </div>

    )
  }
}

export default connect(null, { fetchPosts })(PostIndex)
