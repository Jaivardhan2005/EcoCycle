const auth = {
  login: async (email, password, type) => {
    const data = await api.post('/auth/login', { email, password, type }, false);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  },

  registerUser: async (name, email, password) => {
    const data = await api.post('/auth/register-user', { name, email, password }, false);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  },

  registerAgency: async (name, email, password) => {
    const data = await api.post('/auth/register-agency', { name, email, password }, false);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/pages/auth/login.html';
  },

  getUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  checkAuth: (requiredRole = null) => {
    const user = auth.getUser();
    if (!user) {
      window.location.href = '/pages/auth/login.html';
      return null;
    }
    if (requiredRole && user.role !== requiredRole) {
      window.location.href = '/index.html'; // Redirect to home if unauthorized
    }
    return user;
  }
};
