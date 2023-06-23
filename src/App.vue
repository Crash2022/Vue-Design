<template>
    <div class="sidebar-toggle"
         @click="toggleMenu"
    >
        &#5125;
    </div>
    <navbar-layout/>
    <sidebar-layout :isOpenSidebar="isOpenMenu"/>
    <div class="container">
        <div :class="['content', {content_full: !isOpenMenu}]">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import NavbarLayout from "@/components/Layouts/NavbarLayout.vue"
import SidebarLayout from "@/components/Layouts/SidebarLayout.vue"

const isOpenMenu = ref(false)
const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
}

// экспорт без setup
// export default {
//     components: {
//         NavbarLayout,
//         SidebarLayout,
//     }
// }
</script>

<style lang="scss">
@import "shared/styles/global";

.sidebar-toggle {
    position: fixed;
    left: 0;
    top: 50px;
    z-index: 1;
    width: 15px;
    //height: 100%;
    height: calc(100vh - var(--navbar-height));
    background: var(--primary);
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>