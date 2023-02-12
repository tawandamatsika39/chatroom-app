import {ref, watchEffect}  from 'vue'
import { firestore_db } from '@/firebase/config'

const getCollection = (collection) => {

    const documents = ref(null)
    const error = ref(null)

    let collectionRef = firestore_db.collection(collection).orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap)=>{
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && 
            results.push({
                id: doc.id,
                ...doc.data()
            })
        });
        documents.value = results
        error.value = null
    }, (err)=> {
        console.log(err.message)
        documents.value = null
        error.value = 'Failed to fetch data'
    })

    watchEffect((onInvalidate)=>{
        onInvalidate(()=> unsub())
    })

    return { documents, error}
}

export default getCollection