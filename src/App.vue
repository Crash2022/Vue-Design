<template>
    <navbar/>
    <div class="app">
<!--        <div class="container">-->
            <router-view></router-view>
<!--        </div>-->
    </div>
</template>

<script lang="ts">
import Navbar from '@/shared/ui/CustomUI/NavBar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
@import "shared/styles/global";
</style>