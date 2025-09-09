import { useState } from "react"

const usePasswordGenerator = () => {

    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const generatePassword = (checkboxData, length) => {

        let charset = ''
        let generatePassword = ''
        let selectedOptions = checkboxData?.filter((item) => item?.checkboxValue)
        if (selectedOptions?.length == 0) {
            setErrorMessage("Select at least one option")
            return
        }

        for (let i = 0; i < selectedOptions.length; i++) {
            switch (selectedOptions[i].title) {
                case 'Include UpperCase Letters':
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break
                case 'Include LowerCase Letters':
                    charset += "abcdefghijklmnopqrstuvwxyz"
                    break
                case 'Include Numbers':
                    charset += "0123456789"
                    break
                case 'Include Special Characters':
                    charset += "!@#$%^&*()_-+={}[]|:;'"
                    break

            }
        }

        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * charset.length)
            generatePassword += charset[random]
        }
        setPassword(generatePassword)
        setErrorMessage("")
    }


    return {
        password,
        errorMessage,
        generatePassword
    }
}
export default usePasswordGenerator