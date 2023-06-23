<template>
    <div class="inputs_page">
        <div class="heading_2 page_header">Inputs Page</div>
        <form>
            <custom-input :name="'name'"
                          :label="'Имя'"
                          :placeholder="'Имя'"
                          v-model:value="vField.fieldName.$model"
                          :error="vField.fieldName.$errors"
            />
        </form>
    </div>
</template>

<script setup>
import CustomInput from '@/shared/ui/CustomUI/CustomInput.vue'
import {computed, ref} from 'vue'
import useVuelidate from '@vuelidate/core'
import {minLength} from '@vuelidate/validators'

const fieldName = ref('')

const rules = computed(() => {
    fieldName: {
        minLength: minLength(3)
    }
})

const vField = useVuelidate(rules, {fieldName})

const submitForm = () => {
    // v.value.$touch()
    // if (v.value.$error) return
    // alert('Form submitted')
}
</script>

<style lang="scss" scoped>
.inputs_page {
    //> div {
    //    display: flex;
    //    align-items: flex-end;
    //    gap: 10px;
    //    margin-bottom: 10px;
    //}

    .page_header {
        margin-bottom: 40px;
    }

    form {

    }
}
</style>