<script setup lang="ts">
    import { useMainStore } from '@/stores';
    import { filtersData } from '@/types/contacts';
    import { computed } from '@vue/reactivity';
    import AppInput from '@/components/UI/AppInput.vue';
    const store = useMainStore();
    const search = computed({
        get: () => store.$state.search,
        set: val => store.setSearch(val)
    });
    const searchFilter = computed({
        get: () => store.$state.searchFilter,
        set: val => store.setSearchFilter(val)
    });
</script>

<template>
    <div class="search">
        <div class="container">
            <div class="search__content">
                <select class="search__select" v-model="searchFilter">
                    <option :value="one.type" 
                        v-for="one in filtersData" 
                        :key="one.type">
                        {{one.name}}
                    </option>
                </select>
                <AppInput 
                    placeholder="Поиск в контактах" 
                    class="search__input"
                    :show-label="false"
                    v-model="search"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.search{
    margin-bottom: 30px;
    &__content{
        display: flex;
    }
    &__input{
        display: block;
        flex-grow: 1;
        width: 100%;
        
    }
    &__select{
        padding: 10px 15px;
        font-size: 17px;
        border-radius: 25px;
        background: var(--blueColor);
        color: var(--whiteColor);
        margin-right: 25px;
    }
}
</style>