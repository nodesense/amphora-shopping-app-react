// api.js

// implement all async/ajax calls

export async function authenticate2(username, password) {
    return fetch('http://localhost:7070/oauth/token', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then (response => {
                console.log('auth Response ', response);
                if (response.status >= 400) {
                    throw new Error("could not login status " + response.status);
                }

                return response.json(); // token, user identity
            })
}



export async function authenticate(username, password) {
    try {
        const response = await fetch('http://localhost:7070/oauth/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        console.log('auth Response ', response);
        if (response.status >= 400) {
            throw new Error("could not login status " + response.status);
        }

        return response.json();
    }
    catch (error) {
        throw error;
    }
}