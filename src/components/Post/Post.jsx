import React from 'react';


const Posts = (props) => {
    const { name, comments, likes, time, body, picture, profilePic } = props;
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: "20%" }}>
                    <img src={profilePic} alt="profilePic" style={{ width: '100%', borderRadius: '50%' }}></img>
                </div>
                <div style={{ flex: "80%", padding: '1em', paddingTop: '0' }}>
                    <div>{name}</div>
                    <div style={{ fontSize: '14px' }}>{(new Date(time._seconds * 1000)).toLocaleDateString()}</div>
                    <div>{body}</div>
                    {picture && <div style={{ width: '70%', padding: '10px' }}><img style={{ width: '100%', borderRadius: '4px' }} alt="pic" src={picture}></img></div>}
                    <div style={{ display: 'flex' }}>
                        <div><div style={{ width: '15px', display: 'inline-block', marginRight: '10px' }}><img src="img/heart.png" style={{ width: '100%' }}></img></div>
                            {likes}</div>
                        
                        <div style={{ marginLeft: '15px' }}><div style={{ width: '15px', display: 'inline-block', marginRight: '10px' }}><img src="img/comment.png" style={{ width: '100%' }}></img></div>{comments}</div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    );
};

export default Posts;