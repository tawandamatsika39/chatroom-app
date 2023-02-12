import { firebase_auth } from '@/firebase/config'
import {ref} from 'vue'

const error = ref(null)

const login = async (email, password) => {

    error.value = null

    try {
        const response = await firebase_auth.signInWithEmailAndPassword(email, password)
        error.value = null
        return response
    }
    catch (err) {
        console.log(err.value)
        error.value = 'Incorrect login credentials'
    }

}

const useLogin = () => {

    return {error, login}

}

export default useLogin