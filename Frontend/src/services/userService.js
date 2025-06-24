const API_URL = 'http://localhost:8080/api/users';

export async function getAllUsers() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function createUser(user) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return res.json();
}

export async function getUserById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}

export async function updateUser(id, user) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return res.json();
}

export async function deleteUser(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    return res.json();
}

export async function login(login, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    });
    if (!res.ok) {
        throw new Error('Login ou mot de passe incorrect');
    }
    return res.json();
}