import { useState } from "react"
import OtpInput from "react-otp-input-rc-17"
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";

const InputOTP = (props) => {
    const [otp, setOtp] = useState("");
    const handleChange = (otp) => {
        setOtp(otp)
        props.setUserOTPParent(otp)
    };

    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }

    return (
        <div className="input-otp-container">
            <div className="title">Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />
            <div className="timer">
                {/* <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                /> */}
                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                />
            </div>
            <div className="action">
                <button className="clear">Clear</button>
                <button className="confirm"
                    disabled={props.isDisableBtn}
                    onClick={() => handleConfirmOTP()}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}
export default InputOTP