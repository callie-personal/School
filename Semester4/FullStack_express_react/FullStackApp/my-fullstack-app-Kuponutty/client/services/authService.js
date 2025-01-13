import axios from 'axios';

class authService {
    constructor() {
        this.apiBaseUrl = `${import.meta.env.VITE_API_URL}/users`;
    }

    async signIn(loginData) {
        try {
            // Send a POST request to the server
            const response = await axios.post(`${this.apiBaseUrl}/login`, loginData, {
                withCredentials: true,
            });
            // If the response status is 200, store the token in sessionStorage
            if (response.status === 200) {
                const { token } = response.data;
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('authToken', token);
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error('Sign-in Error:', err.response?.data || err.message);
            return false;
        }
    }

    async signOut(callback) {
        try {
            const response = await axios.post(`${this.apiBaseUrl}/logout`, {}, {
                withCredentials: true,
            });
            // If the response status is 204, remove the token from sessionStorage
            if (response.status === 204) {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('authToken');
                callback(true);
            } else {
                callback(false);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async register(formData) {
        try {
            const response = await axios.post(`${this.apiBaseUrl}/register`, formData);
            // If the response status is 201, store the token in sessionStorage
            if (response.status === 200) {
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('authToken', response.data.token);
                return true;
            }
            return false;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    isSignedIn() {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    }
}

export default new authService();