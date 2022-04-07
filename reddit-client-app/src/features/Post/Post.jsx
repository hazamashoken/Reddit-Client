import React, { useState } from 'react';
import './Post.css';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
  TiArrowDown,
} from 'react-icons/ti';
import Card from '../../components/Card/Card';
import Avatar from '../Avatar/Avatar';
import { useEffect } from 'react';
import shortenNumber from '../../utils/shortenNumber';
import moment from 'moment';
import {SkeletonTheme as Skeleton} from 'react-loading-skeleton';
import Comment from '../Comment/Comment';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const {post,onToggleComments} = props;

    /**
     * @param {number} newValue The new vote value
     */

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpVote = () => {
        if(voteValue===1) {
            return <TiArrowUpThick className='icon-action' />;
        }
        return <TiArrowUpOutline className='icon-action' />;
    };
    
    const renderDownVote = () => {
        if(voteValue ===-1) {
            return <TiArrowDownThick className='icon-action' />;
        }
        return <TiArrowDownOutline className='icon-action' />;
    };

    const getVoteType = () => {
        if(voteValue ===1) {
            return 'up-vote';
        }
        if(voteValue ===-1) {
            return 'down-vote';
        }
        return '';
    };

    const renderComments = () => {
        if(post.errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }

        if(post.loadingComments) {
            return(
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )
        }

        if(post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <article  key={post.id}>
            <Card>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                        <button
                            type='button'
                            className={`icon-action-button upvote ${voteValue ===1 && 'active'}`}
                            aria-label='Up vote'
                        >
                            {renderUpVote()}
                        </button>
                        <p className = {`post-votes-value`}>
                            {shortenNumber(post.ups, 1)}
                        </p>
                        <button
                            type='button'
                            className={`icon-action-button down-vote ${voteValue ===-1 && 'active'}`}
                            aria-label='Down vote'
                        >
                            {renderDownVote()}
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
                                <span className='author-username'>{post.author}</span>
                            </span>
                            <span>{moment.unix(post.created_utc.fromNow())}</span>
                            <span className='post-comments-container'>
                                <button
                                    type='button'
                                    className={`icon-action-button ${'showing-comments'}`}
                                    aria-label='Show comments'
                                >
                                    <TiMessage className='icon-action' />
                                </button>
                                {shortenNumber(post.num_comments, 1)}
                            </span>
                        </div> 

                        {renderComments()}               
                    </div>
                </div>
            </Card>
        </article>
    )
};

export default Post;