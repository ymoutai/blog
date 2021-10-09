import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

// img
import LogoReact from '../../assets/react.jpg'
import LogoNotification from '../../assets/text_oshirase.png'

const BlogStyle = styled.div `
  margin: 30px auto;
  border: solid 1px black;
  border-radius: 5px;
  width: 40%;
  img {
    width: 100%;
  }

  p {
    font-size: 2em;
    font-weight: bold
  }

  a {
    text-decoration: none;
  }
`;

const BlogContent1 = () => {
  return (
    <BlogStyle>
      <Link to="/blog/1">
        <div>
          <img src={LogoReact} alt="" />
        </div>
        <p><span>Reactの勉強はじめました。</span></p>
      </Link>
    </BlogStyle>
  )
}

const BlogContent2 = () => {
  return (
    <BlogStyle>
      <Link to="/blog/2">
        <div>
          <img src={LogoNotification} alt="" />
        </div>
        <p><sapn>ブログのお知らせ</sapn></p>
      </Link>
    </BlogStyle>
  );
}

const Blog = () => {
  return (
    <div>
      <BlogContent1 />
      <BlogContent2 />
    </div>
  );
}

export default Blog;