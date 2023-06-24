<template>
    <div class="checkbox_container">
        <label class="checkbox_wrapper">
            <span>{{label}}</span>
            <input type="checkbox"
                   :id="id"
                   :name="name"
                   :value="value"
                   :checked="checked"
                   :disabled="disabled"
                   @input="onChangeHandler($event)"
            />
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:checked'])

const onChangeHandler = (e) => {
    emit('update:checked', e.target.checked)
}

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        default: ''
    },
    checked: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: 'Checkbox'
    },
})
</script>

<style lang="scss" scoped>
.checkbox_container {
    margin-bottom: 10px;
}
.checkbox_wrapper {
    position: relative;
    padding-left: 30px;
    padding-top: 2px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.checkbox_wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkbox_wrapper:hover input ~ .checkmark {
    background-color: #ccc;
    transition: all 0.8s ease;
}

.checkbox_wrapper input:checked ~ .checkmark {
    background-color: var(--primary);
    transition: all 0.8s ease;
}

.checkbox_wrapper input:disabled ~ .checkmark {
    background-color: #ccc;
    cursor: default;
}

.checkbox_wrapper input:checked ~ .checkmark:after {
    display: block;
}

.checkbox_wrapper .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 4px;
}

.checkmark:after {
    content: '';
    position: absolute;
    display: none;
}
</style>