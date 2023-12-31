import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const LoginRegister = () => {
    return (
        <div>
            <Authenticator>
                {({ signOut, user }) => (
                    <div>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </div>
                )}
            </Authenticator>
        </div>
    );
};

export default LoginRegister;
