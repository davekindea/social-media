import React, { useState } from 'react';
import Img1 from "../img/download.png";
import "./new.css"

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sexPreferences, setSexPreferences] = useState([]);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSexPreferenceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSexPreferences([...sexPreferences, value]);
    } else {
      setSexPreferences(sexPreferences.filter((pref) => pref !== value));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Date of Birth:', birthdate);
    console.log('Sex Preferences:', sexPreferences);
    console.log('Password:', password);
    console.log('Re-entered Password:', repassword);
  };

  return (
    <div className="log-container">
      <div className="log-header">
        <img src={Img1} alt="logo" className="logo" />
        <h1>Habesh</h1>
      </div>
      <div>
        <div>
          <h1>Create New Account</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="password-container">
              <input
                type={isVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-button">
                {isVisible ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Re-enter Password:</label>
            <div className="password-container">
              <input
                type={isVisible ? 'text' : 'password'}
                placeholder="Re-enter your password"
                value={repassword}
                onChange={handleRepasswordChange}
                required
              />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-button">
                {isVisible ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Sex</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Male"
                  onChange={handleSexPreferenceChange}
                  checked={sexPreferences.includes("Male")}
                />
                Male
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Female"
                  onChange={handleSexPreferenceChange}
                  checked={sexPreferences.includes("Female")}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              value={birthdate}
              onChange={handleDateOfBirthChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>
      </div>
      {/* <footer>if ypou have an account<a> log in</a></footer> */}
    </div>
  );
};

export default AddUser;
