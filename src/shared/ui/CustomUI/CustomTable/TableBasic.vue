<template>
    <div class="table_wrapper">
        <div class="table">
            <div class="table_head"
                 :style="{'grid-template-columns': columnTemplates}"
            >
                <div class="table_head__name"
                     v-for="(element, i) in header"
                     :key="i"
                     @click="headerClickHandler(element)"
                >
                    {{element}}
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['updateSort'])

const props = defineProps({
    header: {
        type: Array,
        required: false
    },
    columnTemplates: {
        type: String,
        required: false
    }
})

const headerClickHandler = (headerName) => {
    emit('updateSort', headerName.toLowerCase())
}
</script>

<style lang="scss" scoped>
.table {
    background-color: #fff;
    width: 100%;
    margin-bottom: 40px;
    margin-top: 15px;

    &_wrapper {
        display: flex;
        justify-content: center;
    }

    &_head {
        padding: 5px 16px;
        display: grid;
        column-gap: 10px;
        align-items: center;
        border-bottom: 2px solid #EEEFF4;
        background: #fff;

        &__name {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #999;
            cursor: pointer;
        }
        @media screen and (max-width: 767px) {
            display: none;
        }
    }
}
</style>