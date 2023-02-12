<template>
    <div class="chat-window">
        <div v-if="error">
            {{ error }}
        </div>

        <div v-if="formattedDocuments" class="messages" ref="msgs">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
              <span class="created-at">{{doc.createdAt}}</span>  
              <span class="name">{{doc.user}}</span>
              <span class="message">{{doc.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>

import getCollection from '@/composables/getCollection'
import {formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'

export default {
    setup() {
        
        const msgs = ref(null)

        const {error, documents} = getCollection('messages')
        
        const formattedDocuments = computed(()=> {
            if (documents.value){
                return documents.value.map( doc=>{
                        let time = formatDistanceToNow(doc.createdAt.toDate())
                        return {
                            ...doc,
                            createdAt: time
                        }
                    }
                )
            }
        })

        //scroll
        onUpdated(()=>{
            msgs.value.scrollTop = msgs.value.scrollHeight
        })

        return {error, documents, formattedDocuments, msgs}
    }
}
</script>

<style>
 .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>