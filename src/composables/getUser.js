import { firebase_auth } from '@/firebase/config'
import {ref} from 'vue'

const user = ref(firebase_auth.currentUser)

firebase_auth.onAuthStateChanged(_user => {
    user.value = _user
})

const getUser = () => {
    return {user}
}

export default getUser