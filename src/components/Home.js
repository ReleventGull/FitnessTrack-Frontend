import React from 'react';

const Home = ({token, user}) => {
    return (
        <div>
            <h1>{token? `Welcome ${user.username}!` : 'You need to login!'}</h1>
        </div>
    )
}

export default Home;