import { useState } from "react"

const GenarateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");
    const handleClickButton = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTP(otp);
        props.setOrgOTPParent(otp);
    }

    return (
        <div className="generate-otp-container">
            <button onClick={()=>handleClickButton()}>Generate OTP</button>
            <div className="title">Your OTP is: {orgOTP}</div>
        </div>
    )
}
export default GenarateOTP