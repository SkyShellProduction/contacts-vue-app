<script setup lang="ts">
    import { useMainStore } from '@/stores';
    import { useRouter } from 'vue-router';
    import type { ContactsType } from '@/types/contacts';
    import AppButton from '@/components/UI/AppButton.vue';
    const store = useMainStore();
    const router = useRouter();
    function r(min = 0, max = 360){
        return Math.floor(Math.random() * (max +1 - min) + min);
    }
    function editContact(obj: ContactsType){
        store.setFormData(obj);
        router.push('/contact-setting');
    }
</script>
<template>
    <div class="container">
        <TransitionGroup class="home__contacts" v-if="store.getContacts" tag="div" name="home__contacts">
            <div class="home__contact-item" v-for="one in store.getContacts" :key="one.id?.toString()">
                <RouterLink class="home__contact-link" :to="`/one-contact/${one.id}`">
                    <strong>
                        <span class="home__random-bg" 
                            :style="{background: `hsl(${r(0, 360)}, ${r(0, 100)}%, ${r(0,60)}%`}">
                            {{one.name[0]}}
                        </span>
                        <span class="home__contact-name">{{one.name}}</span>
                    </strong>
                </RouterLink>
                <span class="home__contact-control">
                    <button class="home__delete" @click="store.deleteContact(one.id)">
                        <img src="@/assets/images/delete.svg" alt="">
                    </button>
                    <button class="home__edit" @click="editContact(one)">
                        <img src="@/assets/images/edit.svg" alt="">
                    </button>
                </span>
            </div>
        </TransitionGroup>
        <p class="home__no-contacts" v-else>У вас пока нет контактов</p>
    </div>
</template>