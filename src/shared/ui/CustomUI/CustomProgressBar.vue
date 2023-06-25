<template>
    <div class="progress_container" :style="[{'max-width': maxWidth}]">
        <span class="progress_percent" :style="[{'color': `var(--${color})`}]">
            {{percent}}%
        </span>
        <div class="progress" :style="[{'background': `var(--${color}-hover)`}]">
            <div class="progress_bar" :style="[{'width': `${percent}%`}, {'background': `var(--${color})`}]"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    maxWidth: {
        type: String,
        default: '300px'
    },
    percent: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: 'primary'
    }
})
</script>

<style lang="scss" scoped>
.progress {
    height: 10px;
    border-radius: 4px;

    &_container {
        margin-bottom: 20px;
        overflow: hidden;
    }
    &_bar {
        background: #000;
        height: 100%;
        border-radius: 4px;
        transition: 0.5s;
    }
    &_percent {
        display: block;
        text-align: center;
        font-weight: bold;
        font-size: 17px;
        margin-bottom: 10px;
    }
}
</style>