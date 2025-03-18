import { useState } from 'react';

function App() {
    const [serviceId, setServiceId] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://your-backend-url.up.railway.app/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ serviceId, accessToken })
            });
            
            const data = await response.json();
            setMessage(data.message || 'Login successful!');
        } catch (error) {
            setMessage('Login failed!');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>CGI Auth Login</h1>
            <input
                type="text"
                placeholder="Service ID"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Access Token"
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
