import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './login.css'
function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div >
            <div className="password-input ">

                <input className='sliced1 pass'

                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    placeholder='Password'
                    onChange={handlePasswordChange}
                />
                <button className='sliced2' type="button" onClick={handleTogglePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;
