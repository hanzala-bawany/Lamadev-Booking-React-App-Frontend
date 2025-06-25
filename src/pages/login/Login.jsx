import NavBar from '../../components/navbar/NavBar'
// import { FaUser, FaLock } from "react-icons/fa";
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <div className={styles.loginPage}>

      <NavBar type="login" />

      <div className={styles.container}>
        <h2 className={styles.heading}>Welcome Back</h2>

        <form className={styles.form}>
          {/* Username */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon  className={styles.icon} icon={faUser} />
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon className={styles.icon} icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>

          {/* Forgot and Join */}
          <div className={styles.linksRow}>
            <Link to="/" className={styles.forgotPass}>Forgot Password?</Link>
            <span href="#" className={styles.link}>Don't have an account? <Link className={styles.joinNowBtnInForm} to="/signUp">Join now</Link></span>
          </div>

          {/* Login Button */}
          <button  className={styles.loginBtn}>Login</button>

          {/* Google Signin */}
          <button className={styles.googleBtn}>Sign in with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
