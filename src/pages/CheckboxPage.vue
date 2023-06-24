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
</template>

<script setup>
import CustomCheckbox from "@/shared/ui/CustomUI/CustomCheckbox.vue"
import {ref} from 'vue'

const checkboxActive = ref(false)
const checkboxDisabled = ref(true)

</script>

<style lang="scss" scoped>
.checkbox_sample {
    > div {
        margin-bottom: 10px;
    }
}
</style>