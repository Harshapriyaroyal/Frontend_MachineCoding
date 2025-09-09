import { useState } from "react"
import usePasswordGenerator from "../hooks/usePasswordGenerator"
const Password = () => {
    const [checkBoxData, setCheckBoxData] = useState([
        { title: "Include UpperCase Letters", checkboxValue: false },
        { title: "Include LowerCase Letters", checkboxValue: false },
        { title: "Include Numbers", checkboxValue: false },
        { title: "Include Special Characters", checkboxValue: false }
    ])
    const [length, setLength] = useState(3)

    const handleCheckBoxData = async (index) => {
        checkBoxData[index].checkboxValue = !checkBoxData[index].checkboxValue
        setCheckBoxData([...checkBoxData])
    }

    const { password,
        errorMessage,
        generatePassword } = usePasswordGenerator()

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(password)
    }
    return (
        <>
            <div className="root">
                {password?.length>0 && <div className="password">{password}
                    <button onClick={handleCopyPassword}>Copy</button>
                </div>}
                <div className="password">Character Length : <span>{length}</span>  </div>
                <div className="range"><input type="range" min={3} value={length} onChange={(e) => setLength(e.target.value)} /></div>

                <div className="checkboxes">
                    {checkBoxData?.map((item, index) => {
                        return (
                            <div key={index} className="checkbox-item">
                                <input type="checkbox" onChange={() => handleCheckBoxData(index)} />
                                <label>{item?.title}</label>
                            </div>
                        )
                    })}

                </div>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="generate_btn">
                    <button onClick={() => generatePassword(checkBoxData, length)}>Generate Password</button>
                </div>

            </div>
        </>
    )
}

export default Password