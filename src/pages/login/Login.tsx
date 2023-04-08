import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setUserType, UserType } from "../../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch()

  const handleModeSelection = (mode: UserType) => {
    dispatch(setUserType(mode))
  }

  return (
    <div className="login">
      <div className="selectMode">
        <div className="selectMode__item" onClick={() => handleModeSelection('teacher')}>
          <FontAwesomeIcon icon="chalkboard-teacher" size="6x" color="black" />
          <div className="selectMode__text">ÖĞRETMEN</div>
        </div>
        <div className="selectMode__item" onClick={() => dispatch(setUserType('student'))}>
          <FontAwesomeIcon icon="chalkboard-teacher" size="6x" color="black" />
          <div className="selectMode__text">ÖĞRENCİ</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
