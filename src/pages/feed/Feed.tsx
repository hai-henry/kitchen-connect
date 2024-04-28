import React from 'react';
import './feed.css';

import {
    anhnguyen,
    commentIcon,
    likeIcon,
    repostIcon,
    bookmarkIcon,
    gordonRamsey,
} from '../../assets';

// TODO: Change photos to not use Gordan Ramsey as example
const Feed = () => {
    return (
        <div className="feed">
            {/* Sample post */}
            <div className="post">
                {/* User info */}
                <div className="user-info">
                    <img
                        className="user-photo"
                        src={gordonRamsey} // Replace with actual user photo URL or use a placeholder
                        alt="User"
                    />
                    <span className="username">gordonramsey</span>
                </div>
                {/* Post content */}
                <div className="post-content">
                    <img
                        className="post-photo"
                        src={anhnguyen} // Replace with actual post photo URL or use a placeholder
                        alt="Photo by Anh Nguyen on Unsplash"
                    />
                    <div className="post-actions">
                        {/* Like button */}
                        <button className="post-actions-button like-button">
                            <img src={likeIcon} alt="Like" />
                        </button>
                        {/* Comment button */}
                        <button className="post-actions-button comment-button">
                            <img src={commentIcon} alt="Comment" />
                        </button>
                        {/* Repost button */}
                        <button className="post-actions-button repost-button">
                            <img src={repostIcon} alt="Repost" />
                        </button>
                        <button className="post-actions-button save-button">
                            <img src={bookmarkIcon} alt="Save" />
                        </button>
                    </div>
                    <div className="caption-container">
                        {/* Post caption */}
                        <p className="caption">
                            <span className="caption-username">
                                gordonramsey
                            </span>{' '}
                            Oh boy! Look at this beautiful dish! This is my
                            first post on KitchenConnect, this app is going to
                            be great! #foodie #idiotsandwich
                        </p>
                    </div>
                </div>
            </div>
            {/* Add more posts here */}
        </div>
    );
};

export default Feed;