import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Bring in the asynchornous fetchPosts action
import { fetchPosts } from '../actions/postsActions';
import Post from '../components/Post';

// Redux state is now in the props of the component
function PostsPage({ dispatch, loading, posts, hasErrors }) {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function renderPosts() {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

    return posts.map((post) => (
      <Post key={post.id} post={post} />
    ));
  }

  return (
    <section>
      <header>
        <h1 className="text-5xl mb-4">Posts</h1>
        <Link to="/" className="">Dashboard</Link>
      </header>
      {renderPosts()}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
  }
}

export default connect(mapStateToProps)(PostsPage);
