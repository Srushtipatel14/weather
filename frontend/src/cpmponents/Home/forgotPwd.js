import "../../css/login.css";
const ForgotPwd = () => {
    return (
        <>
            <div className="formContainer">
                <div className="formPart">
                    <div className="formPart1">
                        <div
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "rgb(25 122 212)",
                                textAlign: "center",
                            }}
                        >
                            Forgot Password
                        </div>
                        <div className="formCon">
                            <form>
                                <div className="fieds">
                                    <div className="field">
                                        <input type="email" placeholder="Enter your name" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "10px",
                            }}
                        >
                            <button className="loginbtn" style={{ padding: "10px 20px" }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPwd;
