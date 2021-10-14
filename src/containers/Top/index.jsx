import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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

// const BlogContent1 = () => {
//   return (
//     <BlogStyle>
//       <Link to="/blog/1">
//         <div>
//           <img src={LogoReact} alt="" />
//         </div>
//         <p><span>Reactの勉強はじめました。</span></p>
//       </Link>
//     </BlogStyle>
//   )
// }

const Blog = () => {
  let blogs = [];
  axios.get('http://localhost:3000/data.json').then(response => {
    blogs = response.data;
  });
  return (
    <div>
      
    </div>
  );
}

export default Blog;