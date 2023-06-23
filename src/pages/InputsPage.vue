<template>
    <div class="inputs_page">
        <div class="heading_2 page_header">Inputs Page</div>
        <form @submit.prevent="submitForm">
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
            <custom-input :name="'password'"
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
            <custom-input :name="'secret_word'"
                          :label="'Секретное слово'"
                          :placeholder="'Секретное слово'"
                          v-model:value="vField.fieldSecretWord.$model"
                          :error="vField.fieldSecretWord.$errors"
            />
            <div class="send">
                <CustomButton type="submit" :label="'Отправить'"/>
            </div>
        </form>
    </div>
</template>

<script setup>
import CustomInput from '@/shared/ui/CustomUI/CustomInput.vue'
import CustomButton from "@/shared/ui/CustomUI/CustomButton.vue"
import {computed, ref} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, required, minLength, email, numeric, sameAs} from '@vuelidate/validators'

const fieldName = ref('')
const fieldEmail = ref('')
const fieldPassword = ref('')
const fieldPasswordConfirm = ref('')
const fieldSecretWord = ref('')

// кастомная валидация
const mustBeSecret = (value) => value.includes('frontend')

// правила для полей
const rules = computed(() => ({
    fieldName: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Минимальная длина 3 символа', minLength(3)),
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
    fieldSecretWord: {
        secretWord: helpers.withMessage('Строка должна содержать секретное слово', mustBeSecret)
    },
}))

// применение валидации к полям
const vField = useVuelidate(rules, {fieldName, fieldEmail, fieldPassword, fieldPasswordConfirm, fieldSecretWord})

const submitForm = () => {
    vField.value.$touch()
    if (vField.value.$error) return
    alert('Данные отправлены')
}
</script>

<style lang="scss" scoped>
.inputs_page {
    .page_header {
        margin-bottom: 40px;
    }

    form {
        .send {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>