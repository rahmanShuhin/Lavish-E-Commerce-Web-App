import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

const Auth = ({ handleClose }) => {
    const [login, setLogin] = useState(false);

    window.onclick = function (event) {
        const modal_1 = document.getElementById("auth__Modal");
        const modal_2 = document.getElementById("myModal");
        if (event.target == modal_1 || event.target == modal_2) {
            modal_1.style.display = "none";
            modal_2.style.display = "none";
        }
    };
    return (
        <div className="auth">
            <div id="auth__Modal" className="auth__modal">
                <div className="auth__modal__content">
                    <span class="auth__close" onClick={handleClose}>
                        &times;
                    </span>
                    <div className="auth__modal__content__top">
                        <button
                            className={!login && "active"}
                            onClick={() => setLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={login && "active"}
                            onClick={() => setLogin(false)}
                        >
                            Register
                        </button>
                    </div>
                    {login ? <Login></Login> : <Registration></Registration>}
                </div>
            </div>
        </div>
    );
};

export default Auth;
