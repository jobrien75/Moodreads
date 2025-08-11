import React from 'react';
import Contact from './Contact';
import './pages.css';

// Sample data for blog posts
const blogPosts = [
  {
    title: "Blog Post 1",
    date: "November 24, 2024",
    author: "Jane Doe",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nam sodales habitant urna non libero class. Ultrices sapien nisl eros penatibus mollis sem? Dui pharetra per inceptos a eu ullamcorper class phasellus mi. Urna maximus rhoncus potenti euismod nam commodo aliquam, magnis commodo. Habitasse vitae phasellus aenean sem efficitur lobortis.
    
    Netus proin blandit facilisis pretium suscipit. Ridiculus bibendum pulvinar maecenas auctor consequat rutrum tristique praesent. Condimentum augue dignissim netus convallis inceptos sapien. Facilisi consectetur euismod interdum nostra dis vivamus curae. Euismod placerat potenti dictumst fringilla ligula sodales nunc. Ex proin tempor ipsum elit cras lectus potenti rutrum habitant. Sodales auctor tempus erat ultrices posuere blandit sagittis tortor.`,
  },
  {
    title: "Blog Post 2",
    date: "November 23, 2024",
    author: "John Smith",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum scelerisque sapien magna lectus aliquet montes. Consequat eu et in ac facilisi in. Habitant nec gravida pretium; platea lorem lacinia iaculis ex. Facilisi lectus finibus vulputate cursus iaculis magna consequat mollis. Et finibus nam mattis scelerisque ultrices. Orci lobortis aptent congue parturient consequat non taciti. Venenatis potenti urna a sodales amet cubilia ultricies luctus. Dis mauris nisl donec curabitur taciti mi aptent.
    
    Integer felis et pulvinar, primis egestas blandit potenti. Urna a curae torquent dolor lacus. Non lorem mi blandit vivamus dapibus dolor. Feugiat quisque pharetra felis tellus mi condimentum eu turpis. Pretium ac pulvinar lobortis porta risus tincidunt purus. Sollicitudin ad eros vestibulum adipiscing urna velit dolor. Finibus vehicula scelerisque leo cubilia aliquam. Pulvinar cursus nec id ullamcorper inceptos nec parturient. Placerat iaculis sagittis gravida integer justo nunc felis aliquam. Nisi risus gravida ante congue commodo enim ac semper felis.`,
  },

  {
    title: "Blog Post 3",
    date: "November 25, 2024",
    author: "Joanne Smith",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum scelerisque sapien magna lectus aliquet montes. Consequat eu et in ac facilisi in. Habitant nec gravida pretium; platea lorem lacinia iaculis ex. Facilisi lectus finibus vulputate cursus iaculis magna consequat mollis. Et finibus nam mattis scelerisque ultrices. Orci lobortis aptent congue parturient consequat non taciti. Venenatis potenti urna a sodales amet cubilia ultricies luctus. Dis mauris nisl donec curabitur taciti mi aptent.
    
    Integer felis et pulvinar, primis egestas blandit potenti. Urna a curae torquent dolor lacus. Non lorem mi blandit vivamus dapibus dolor. Feugiat quisque pharetra felis tellus mi condimentum eu turpis. Pretium ac pulvinar lobortis porta risus tincidunt purus. Sollicitudin ad eros vestibulum adipiscing urna velit dolor. Finibus vehicula scelerisque leo cubilia aliquam. Pulvinar cursus nec id ullamcorper inceptos nec parturient. Placerat iaculis sagittis gravida integer justo nunc felis aliquam. Nisi risus gravida ante congue commodo enim ac semper felis.`,
  },
];

const recentBlogs = [
  "Understanding Minimalism",
  "Productivity Tips for Remote Workers",
  "Top 5 Books for 2024",
  "Exploring Digital Detox",
];

const Blog = () => {
  return (
    <div className='blog-container'>
      <h3>Blog Page</h3>
      <div className='blog-page'>
        {/* Blog Posts */}
        {blogPosts.map((post, index) => (
          <div className="blog-divider" key={index}>
            <h4 className="blog-title">{post.title}</h4>
            <div className="blog-info">
              <p className="date">{post.date}</p>
              <p className="author">{post.author}</p>
            </div>
            <div className="blog-post">
              <p>{post.content}</p>
            </div>
          </div>
        ))}

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search blogs..." />
        </div>

        {/* Recent Blogs Box */}
        <div className="recent-blogs-box">
          <h4>Recent Blogs</h4>
          <ul>
            {recentBlogs.map((blog, index) => (
              <li key={index}>{blog}</li>
            ))}
          </ul>
        </div>
      </div>

      <div><Contact /></div>
    </div>
  );
};

export default Blog;
