<template>
    <div v-for="option in options" :key="option.id">
        <custom-checkbox :id="option.id"
                         :value="option.name"
                         :label="option.name"
                         :name="name"
                         :checked="value.includes(option.id)"
                         group
                         @updateCheckboxGroup="updateGroupHandler"
        />
    </div>
</template>

<script setup>
import CustomCheckbox from "@/shared/ui/CustomUI/CustomCheckbox.vue"

const emit = defineEmits(['update:value'])

const updateGroupHandler = (params) => {
    const updateValue = [...props.value]

    if (params.checked) {
        updateValue.push(params.optionId)
    } else {
        updateValue.splice(updateValue.indexOf(params.optionId), 1)
    }
    emit('update:value', updateValue)
}

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Array,
        required: true
    },
    options: {
        type: Array,
        required: true,
        validator: (value) => {
            const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
            const hasNameKey = value.every((option) => Object.keys(option).includes('name'))
            return hasIdKey && hasNameKey
        }
    },
})
</script>

<style lang="scss" scoped>

</style>