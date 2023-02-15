<script setup lang="tsx">
const props = defineProps<{
    vNode: JSX.Element
}>();

const render = () => props.vNode;
</script>

<template>
    <render />
</template>