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

    <div class="heading_2">Disabled RadioButton</div>
    <custom-radiobutton :name="'radiobutton-disabled'"
                        :id="'player-disabled'"
                        :value="radiobuttonDisabled.name"
                        :label="radiobuttonDisabled.name"
                        v-model:checkedValue="selectedRadiobuttonDisabled"
                        :disabled="true"
    />
</template>

<script setup>
import CustomRadiobutton from "@/shared/ui/CustomUI/CustomRadiobutton.vue"
import {ref} from 'vue'

const selectedRadiobutton = ref('')
const selectedRadiobuttonDisabled = ref('')

const radiobuttonList = ref([
    {id: 'r1', name: 'Djokovic'},
    {id: 'r2', name: 'Federrer'},
    {id: 'r3', name: 'Nadal'},
    {id: 'r4', name: 'Rublev'},
    {id: 'r5', name: 'Medvedev'},
])

const radiobuttonDisabled = ref({id: 'rd1', name: 'Djokovic'})
</script>

<style lang="scss" scoped>
.selected_radio {
    margin-bottom: 10px;
}
</style>