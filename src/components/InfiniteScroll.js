import React from 'react';

const InfiniteScroll = () => {
  return (
    <main>
      <div className="post">
        <img src="image1.jpg" alt="Post" />
        <div>
          <h2>Post Title</h2>
          <p>Post description...</p>
          <a href="#"></a>
        </div>
      </div>
      {/* Adicione mais posts aqui */}
    </main>
  );
};

export default InfiniteScroll;
