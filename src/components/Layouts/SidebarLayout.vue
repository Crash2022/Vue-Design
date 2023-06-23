<template>
    <div class="sidebar">
        <router-link class="sidebar__link"
                     v-for="link in links"
                     :key="link.name"
                     :to="link.href"
        >
          {{link.name}}
        </router-link>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const links = ref([
    {name: 'Главная', href: '/'},
    {name: 'Типография', href: '/typography'},
])

// экспорт без setup
// export default {
//     name: 'sidebar-layout',
//     components: {
//
//     }
// }
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    left: 0;
    top: 50px;
    width: 250px;
    height: 100%;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    transition: 0.2s;
    //transform: translateX(-250px);
    transform: translateX(0px);

    //&_isopen {
    //    transform: translateX(0px);
    //}
    //
    &__link {
        display: block;
        border-radius: 12px;
        padding: 10px;
        border: 1px solid #d5d8ff;
        //transition: 0.1s;
        font-weight: bold;
        margin-bottom: 16px;

        &:hover {
            //border-color: var(--primary);
            border: 2px solid var(--primary);
            padding: 9px;
        }
    }
}
</style>