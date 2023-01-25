import React from 'react';
import './WebBlog.module.css';

const WebBlog = ({ webBlog }) => {
    const text = webBlog.details.slice(0, 130);
    // const [_id, tag, pictureSquare, pictureRectangle, title, details, bloggerName, blogDate] = webBlog;
    return (
        <div className="card">
            <div className="infos bg-blue-700 text-nutral">
                <p className="text">{text}</p>
                <span className="date">{webBlog.blogDate}</span>
            </div>
            <img src={webBlog.pictureSquare} alt="web-blog" />
        </div>
    );
};

export default WebBlog;