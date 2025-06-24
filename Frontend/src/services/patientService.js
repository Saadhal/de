const API_URL = 'http://localhost:8080/api/patients';

export async function getAllPatients() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function getPatientById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}

export async function createPatient(patient) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    });
    return res.json();
}

export async function updatePatient(id, patient) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    });
    return res.json();
}

export async function deletePatient(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    return res.json();
}