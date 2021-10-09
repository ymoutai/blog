import React from 'react';
import { Link } from 'react-router-dom';

const Blog1 = () => {
  return (
    <div>
      <h1>Reactの勉強はじめました。</h1>
      <p>Reactの勉強がてら、まず自分のブログページを作成してみました。</p>
      <p>これはテスト用ページです。</p>
      <Link to="/">戻る</Link>
    </div>
  );
}

export default Blog1;