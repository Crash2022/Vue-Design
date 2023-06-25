<template>
    <div class="heading_2">TabsPage</div>
    <div>
        <custom-tab :names="tabsArray"
                    :selectedTab="selectedTab"
                    @changeTab="changeTabHandler"
        >
            <div v-if="selectedTab === 'React'">React</div>
            <div v-if="selectedTab === 'Vue'">Vue</div>
            <div v-if="selectedTab === 'About'">Custom UI-Kit</div>
        </custom-tab>
    </div>
</template>

<script setup>
import CustomTab from "@/shared/ui/CustomUI/CustomTab.vue"
import {ref} from 'vue'

const selectedTab = ref('Vue')

const tabsArray = [
    {name: 'React', label: 'Про React'},
    {name: 'Vue', label: 'Про Vue'},
    {name: 'About', label: 'О проекте'},
]

const changeTabHandler = (tabName) => {
    selectedTab.value = tabName
}
</script>

<style lang="scss" scoped>

</style>