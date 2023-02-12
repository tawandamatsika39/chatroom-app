
import { firebase_auth } from '@/firebase/config'
import {ref} from 'vue'

const error = ref(null)

const signup = async (email, password, username) => {

    error.value = null

    try {
        const response = await firebase_auth.createUserWithEmailAndPassword(email, password)
        if (!response) {
            throw new Error('Could not complete sigup')
        }
    
        await response.user.updateProfile({displayName: username})
        error.value = null
        return response
    }
    catch (err) {
        console.log(err.message)
        error.value = err.message
    }

}

const useSignup = () => {

    return {error, signup}

}

export default useSignup