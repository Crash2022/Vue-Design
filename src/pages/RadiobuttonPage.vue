<template>
    <div class="heading_2">RadioButton</div>
    <div class="selected_radio">Текущее значение: {{selectedRadiobutton}}</div>
    <div v-for="player in radiobuttonList" :key="player.id">
        <custom-radiobutton :name="'radiobutton-players'"
                            :id="player.id"
                            :value="player.name"
                            :label="player.name"
                            v-model:checkedValue="selectedRadiobutton"
        />
    </div>
</template>

<script setup>
import CustomRadiobutton from "@/shared/ui/CustomUI/CustomRadiobutton.vue"
import {ref} from 'vue'

const selectedRadiobutton = ref('')

const radiobuttonList = ref([
    {id: 'r1', name: 'Djokovic'},
    {id: 'r2', name: 'Federrer'},
    {id: 'r3', name: 'Nadal'},
    {id: 'r4', name: 'Rublev'},
    {id: 'r5', name: 'Medvedev'},
])
</script>

<style lang="scss" scoped>
.selected_radio {
    margin-bottom: 10px;
}
</style>