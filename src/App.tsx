import { useState } from "react";

const API_URL = "https://cgi-auth-backend-production.up.railway.app";

function App() {
    const [serviceId, setServiceId] = useState("cgitest001");
    const [accessToken, setAccessToken] = useState("01010101-0101-0101-0101-010101010101");
    const [message, setMessage] = useState("");

    async function login() {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ serviceId, accessToken }),
            });

            const data = await response.json();
            setMessage(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error:", error);
            setMessage("Login failed.");
        }
    }

    return (
        <div>
            <h1>CGI Auth Login</h1>
            <input
                type="text"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                placeholder="Service ID"
            />
            <input
                type="text"
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                placeholder="Access Token"
            />
            <button onClick={login}>Login</button>
            <pre>{message}</pre>
        </div>
    );
}

export default App;
