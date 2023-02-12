<template>
    <div class="container">
        <navbar/>
        <chat-window />
        <new-chat-form/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const {user} = getUser()
    const router = useRouter()

    watch(user, ()=> {
      if (!user.value) {
        router.push({name: 'welcome'})
      }
    })
  } 
}
</script>

<style>

</style>