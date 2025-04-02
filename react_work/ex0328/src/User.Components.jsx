import React from 'react';

function UserComponents({id,name,email}) {
    return (
        <>
            <div key={id}>
                <h1>id = {id}</h1>
                <h1>name = {name}</h1>
                <h1>email = {email}</h1>
            </div>
        </>
    );
}

export default UserComponents;