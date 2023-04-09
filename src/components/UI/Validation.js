
import { useEffect, useState } from "react"

const useInput = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [emailisValid, setEmailValid] = useState()
    const [passwordValid, setPasswordValid] = useState()
    const [formValid, setFormValid] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    const emailChangeHandler = (e) => {
        setEmailValue(e.target.value)
        setFormValid(e.target.value.includes('@gmail.com' && passwordValue.trim().length > 8))
    }
    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value)
        setFormValid(
            e.target.value.trim().length > 8 && emailValue.includes('@gmail.com')
        )
    }
    const validEmailHandler = () => {
        setEmailValid(emailValue.includes('@gmail.com'))
    }
    const validPasswordHandler = () => {
        setPasswordValid(passwordValue.trim().length > 8)
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
useEffect(() => {
if(emailisValid || passwordValid ) {
    setInputValid(false)
}
else {
    setInputValid(true)
}
}, [emailisValid, passwordValid, formValid])

    return {
        emailValue,
        emailisValid,
        passwordValue,
        passwordValid,
        formValid,
        inputValid,
        emailChangeHandler,
        passwordChangeHandler,
        validEmailHandler,
        validPasswordHandler,
        submitHandler
    }

}

export default useInput