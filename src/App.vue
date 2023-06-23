<template>
    <navbar-layout/>
    <sidebar-layout/>
    <div class="container">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavbarLayout from "@/components/Layouts/NavbarLayout.vue"
import SidebarLayout from "@/components/Layouts/SidebarLayout.vue"

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
</style>