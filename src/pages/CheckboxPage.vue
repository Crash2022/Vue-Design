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
    <div class="checkbox_group">
        <custom-checkbox-group :options="checkboxList" :name="'ATP_Players'"/>
    </div>
</template>

<script setup>
import CustomCheckbox from "@/shared/ui/CustomUI/CustomCheckbox.vue"
import CustomCheckboxGroup from "@/shared/ui/CustomUI/CustomCheckboxGroup.vue"
import {ref} from 'vue'

// export type CheckboxListType = {
//     id: string
//     name: string
// }

const checkboxActive = ref(false)
const checkboxDisabled = ref(true)

const checkboxList = ref([
    {id: '1', name: 'Djokovic'},
    {id: '2', name: 'Federrer'},
    {id: '3', name: 'Nadal'},
    {id: '4', name: 'Rublev'},
    {id: '5', name: 'Medvedev'},
])

const selectedCheckbox = ref([])

</script>

<style lang="scss" scoped>
.checkbox_sample {
    > div {
        margin-bottom: 10px;
    }
}

.checkbox_group {
    //> div {
    //    margin-bottom: 10px;
    //}
}
</style>