<template>
    <ClientOnly>
        <motion.div
            v-bind="$attrs"
            :animate="{ x, y, opacity }"
            :transition="{
                x: { type: 'spring', mass: 50 },
                y: { type: 'spring', mass: 50 },
                opacity: { duration: 0.5, ease: 'easeIn' }
            }"
        />
    </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { motion } from 'motion-v'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
    area?: number
    minFrequency?: number
    maxFrequency?: number
    minOpacity?: number
    maxOpacity?: number
}>(), {
        area: 50,
        minFrequency: 500,
        maxFrequency: 1500,
        minOpacity: 0.3,
        maxOpacity: 0.6
    })

const x = ref(0)
const y = ref(0)
const opacity = ref(1)
let wiggleTimeout: ReturnType<typeof setTimeout> | null = null
let isVisible = document.visibilityState === 'visible'

function wiggleLoop() {
    if (isVisible) {
        x.value = Math.random() * props.area * 2 - props.area
        y.value = Math.random() * props.area * 2 - props.area
        opacity.value = Math.random() * (props.maxOpacity - props.minOpacity) + props.minOpacity
    }

    const nextDelay = Math.random() * (props.maxFrequency - props.minFrequency) + props.minFrequency
    wiggleTimeout = setTimeout(wiggleLoop, nextDelay)
}

function handleVisibilityChange() {
    isVisible = document.visibilityState === 'visible'
}

onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    wiggleLoop()
})

onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    if (wiggleTimeout) clearTimeout(wiggleTimeout)
})
</script>
