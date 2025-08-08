<script setup lang="ts">
import { onMounted, IOptions } from 'vue'
import { loadSlim } from '@tsparticles/slim'
import { tsParticles } from '@tsparticles/engine'

const particlesConfig = {
    background: { color: { value: "transparent" } },
    interactivity: {
        detectsOn: "window",
        events: {
            onHover: {
                enable: true,
                parallax: {
                    enable: true,
                    force: 10,
                    smooth: 20
                }
            },
        }
    },
    fullScreen: { enable: true, zIndex: -1 },
    fpsLimit: 60,
    particles: {
        number: { value: 200, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 0.4, max: 0.6 } },
        move: {
            direction: "top",
            enable: true,
            outModes: { default: "out" },
            speed: { min: 0.5, max: 1.5 },
            straight: true
        }
    },
    detectRetina: true
} as IOptions
</script>

<template>
    <ClientOnly>
        <vue-particles
            id="StarParticles"
            class="w-full h-full"
            :options="particlesConfig"
        />
    </ClientOnly>
</template>
