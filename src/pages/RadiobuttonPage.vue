<template>
    <div class="heading_2">RadioButton</div>
    <div>{{selectedRadiobutton}}</div>
    <div v-for="player in radiobuttonList" :key="player.id">
        <custom-radiobutton :id="player.id"
                            :name="'radiobutton-players'"
                            :value="player.name"
                            :label="player.name"
                            v-model:checked="selectedRadiobutton"
        />
    </div>
</template>

<script setup>
import CustomRadiobutton from "@/shared/ui/CustomUI/CustomRadiobutton.vue"
import {ref} from 'vue'

const selectedRadiobutton = ref({})

const radiobuttonList = ref([
    {id: 'r1', name: 'Djokovic'},
    {id: 'r2', name: 'Federrer'},
    {id: 'r3', name: 'Nadal'},
    {id: 'r4', name: 'Rublev'},
    {id: 'r5', name: 'Medvedev'},
])
</script>

<style lang="scss" scoped>

</style>