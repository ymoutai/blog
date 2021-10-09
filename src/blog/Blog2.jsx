import React from 'react';
import { Link } from 'react-router-dom';  
const Blog2 = () => {
  return (
    <div>
      <h1>ブログのお知らせ</h1>
      <p>Reactの勉強がてら、SPAのページを作りました。</p>
      <p>次はSSRの勉強を行っていきたいと思います。</p>
      <p>現在ブログ記事作成機能がありません。</p>
      <p>これはテスト用ページです。</p>
      <Link to="/">戻る</Link>
    </div>
  );
}

export default Blog2;