const API_URL = 'https://e-waste-management-4jcc.onrender.com/api';

const api = {
  async get(endpoint, requireAuth = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (requireAuth) {
      const token = localStorage.getItem('token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, { headers });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'API Error');
    return data;
  },

  async post(endpoint, body, requireAuth = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (requireAuth) {
      const token = localStorage.getItem('token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'API Error');
    return data;
  },

  async put(endpoint, body, requireAuth = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (requireAuth) {
      const token = localStorage.getItem('token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'API Error');
    return data;
  },

  async delete(endpoint, requireAuth = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (requireAuth) {
      const token = localStorage.getItem('token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'API Error');
    return data;
  }
};
