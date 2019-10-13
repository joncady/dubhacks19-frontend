import React from 'react';
import { Button } from 'reactstrap';
import Post from '../../components/Post/Post';
import { SquareLoader } from 'react-spinners';

const Social = (props) => {
    const posts = props.posts;
    return (
        <div style={{ marginBottom: '2em' }}>
            <div style={{ textAlign: 'center', marginTop: '2em' }}>
                <Button color={"success"}><img src="img/writing.png" width="17" style={{ marginRight: '5px' }} alt="writing"></img>Write a post!</Button>
            </div>
            <div style={{ marginTop: '1em', padding: '1em' }}>
                {posts ? posts.map(post => (<Post key={post.time._seconds} {...post}></Post>)) :
                    <div style={{ textAlign: "center", marginTop: '1em' }}>
                        <SquareLoader color={"#58C077"} />
                    </div>
                }
            </div>
        </div>
    )
};

export default Social;
