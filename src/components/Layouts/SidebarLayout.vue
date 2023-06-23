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
    top: 62px;
    width: 250px;
    height: 100%;
    background: #fff;
    padding: 20px;
    transition: 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    transform: translateX(-250px);

    &_isopen {
        transform: translateX(0px);
    }

    &__link {
        display: block;
        border-radius: 12px;
        border: 2px solid #fff;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;

        &:hover {
            color: var(--primary);
        }
    }
}
</style>