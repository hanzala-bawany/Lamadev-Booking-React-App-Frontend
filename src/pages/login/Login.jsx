import NavBar from '../../components/navbar/NavBar'
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authContext } from '../../context/authContextApi';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';




const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { dispatch, loading, error } = useContext(authContext)

  const navigate = useNavigate()

  const loginBtnHandler = async (e) => {

    e.preventDefault()
    dispatch({ type: "login_start" })

    loading && toast.info('Please wait...');

    try {
      const res = await axios.post("http://localhost:8000/auth/login", { email, password })
      console.log(res,  "login user res in login.jsx");
      dispatch({ type: "login_success", payLoad: res?.data?.data?.loginUser?._doc })
      navigate("/")
      toast.success('Login Successful!');
    }
    catch (err) {
      dispatch({ type: "login_failure", payLoad: err?.message })
      toast.error(err?.message);
      console.log(err);
    }
  }




  return (
    <div className={styles.loginPage}>

      <NavBar type="login" />

      <div className={styles.container}>
        <h2 className={styles.heading}>Welcome Back</h2>

        <form className={styles.form}>
          {/* Username */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon className={styles.icon} icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot and Join */}
          <div className={styles.linksRow}>
            <Link to="/" className={styles.forgotPass}>Forgot Password?</Link>
            <span href="#" className={styles.link}>Don't have an account? <Link className={styles.joinNowBtnInForm} to="/signUp">Join now</Link></span>
          </div>

          {/* Login Button */}
          <button onClick={loginBtnHandler} disabled={loading} className={styles.loginBtn}>Login</button>

          {/* Google Signin */}
          <button className={styles.googleBtn}>Sign in with Google</button>
          {
            error && <span style={{ color: "red" }}>error here</span>
          }

        </form>
      </div>
    </div>
  );
};

export default Login;
