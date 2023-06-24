<template>
    <div class="heading_2">Checkbox</div>
    <div class="checkbox_sample">
        <custom-checkbox :id="'checkbox-one'"
                         :name="'first_checkbox'"
                         :value="'first_checkbox_value'"
                         v-model:checked="checkboxActive"
        />
        <custom-checkbox :id="'checkbox-two'"
                         :name="'second_checkbox'"
                         :label="'Checkbox disabled'"
                         :value="'second_checkbox_value'"
                         v-model:checked="checkboxDisabled"
                         :disabled="true"
        />
    </div>

    <div class="heading_2">Checkbox Group</div>
    <div style="margin-bottom: 10px">
        {{selectedCheckbox}}
    </div>
    <div>
        <custom-checkbox-group :options="checkboxList"
                               name="players"
                               v-model:value="selectedCheckbox"
        />
    </div>

    <div class="heading_2">Switch</div>
    <div>
        <div>Checked: {{switchProfessional}}</div>
        <checkbox-switch
                label="Работаю"
                id="switch"
                name="switch"
                value="Works"
                type="switch"
                v-model:checked="switchProfessional"
        />
    </div>
</template>

<script setup>
import CustomCheckbox from "@/shared/ui/CustomUI/CustomCheckbox.vue"
import CustomCheckboxGroup from "@/shared/ui/CustomUI/CustomCheckboxGroup.vue"
import CheckboxSwitch from "@/shared/ui/CustomUI/CheckboxSwitch.vue"
import {ref} from 'vue'

// export type CheckboxListType = {
//     id: string
//     name: string
// }

const checkboxActive = ref(false)
const checkboxDisabled = ref(true)

const selectedCheckbox = ref(['1', '2', '3'])

const checkboxList = ref([
    {id: '1', name: 'Djokovic'},
    {id: '2', name: 'Federrer'},
    {id: '3', name: 'Nadal'},
    {id: '4', name: 'Rublev'},
    {id: '5', name: 'Medvedev'},
])

const switchProfessional = ref(false)
</script>

<style lang="scss" scoped>
.checkbox_sample {
    > div {
        margin-bottom: 10px;
    }
}
</style>