import React from 'react';
import './Post.css';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from 'react-icons/ti';
import Card from '../../components/Card/Card';
import Avatar from '../Avatar/Avatar';

const Post = () => {
    const voteValue =1;

    return (
        <article  key=''>
            <Card>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                        <button
                            type='button'
                            className={`icon-action-button upvote ${voteValue ===1 && 'active'}`}
                            aria-label='Up vote'
                        >
                            renderUpVote()
                        </button>
                        <p className = {`post-votes-value`}>
                            shortenNumber(post.ups, 1)
                        </p>
                        <button
                            type='button'
                            className={`icon-action-button down-vote ${voteValue ===-1 && 'active'}`}
                            aria-label='Down vote'
                        >
                            renderDownVote()
                        </button> 
                    </div>
                    <div className='post-container'>
                        <h3 className='post-title'></h3>
                    
                        <div className='post-image-container'>
                            <img src='' alt='' className='post-image'/>
                        </div>
                        <div className='post-details'>
                            <span className='author-details'>
                                <Avatar name=''/>
                                <span className='author-username'>post.author</span>
                            </span>
                            <span>moment.unix(post.created_utc.fromNow()</span>
                            <span className='post-comments-container'>
                                <button
                                    type='button'
                                    className={`icon-action-button ${'showing-comments'}`}
                                    aria-label='Show comments'
                                >
                                    <TiMessage className='icon-action' />
                                </button>
                                shortenNumber(post.num_comments, 1)
                            </span>
                        </div> 

                        renderComments()               
                    </div>
                </div>
            </Card>
        </article>
    )
};

export default Post;