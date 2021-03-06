import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostIndex from './components/postIndex'
import AddPost from './components/addPost'
import ShowPost from './components/showPost'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={AddPost} />
    <Route path="posts/:id" component={ShowPost} />
  </Route>
)
