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
            <custom-input :name="'email'"
                          :label="'Эл.почта'"
                          :placeholder="'Эл.почта'"
                          v-model:value="vField.fieldEmail.$model"
                          :error="vField.fieldEmail.$errors"
            />
            <custom-input :name="'email'"
                          :label="'Пароль'"
                          :placeholder="'Пароль'"
                          v-model:value="vField.fieldPassword.$model"
                          :error="vField.fieldPassword.$errors"
                          type="password"
            />
            <custom-input :name="'email_confirm'"
                          :label="'Подтвердите пароль'"
                          :placeholder="'Подтвердите пароль'"
                          v-model:value="vField.fieldPasswordConfirm.$model"
                          :error="vField.fieldPasswordConfirm.$errors"
                          type="password"
            />
        </form>
    </div>
</template>

<script setup>
import CustomInput from '@/shared/ui/CustomUI/CustomInput.vue'
import {computed, ref} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, email, numeric, sameAs} from '@vuelidate/validators'

const fieldName = ref('')
const fieldEmail = ref('')
const fieldPassword = ref('')
const fieldPasswordConfirm = ref('')

const rules = computed(() => ({
    fieldName: {
        minLength: helpers.withMessage('Минимальная длина 3 символа', minLength(3))
    },
    fieldEmail: {
        email: helpers.withMessage('Неверный тип e-mail', email)
    },
    fieldPassword: {
        numeric: helpers.withMessage('Возможны только цифры', numeric)
    },
    fieldPasswordConfirm: {
        sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(fieldPassword.value))
    },
}))

const vField = useVuelidate(rules, {fieldName, fieldEmail, fieldPassword, fieldPasswordConfirm})

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