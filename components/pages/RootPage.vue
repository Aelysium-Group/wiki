<template>
    <div class="fixed inset-0 w-screen h-screen bg-black" />
    <div class="fixed inset-0 w-full h-full z-10 pointer-events-none">
        <StarParticles />
    </div>
    <span class="fixed bottom-4 left-0 w-screen text-center opacity-20 text-white text-xs font-normal z-10">
        © {{currentYear}} Aelysium Group LLC. All Rights Reserved
    </span>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
    <div class="relative w-screen h-full min-h-screen flex justify-center items-center">
        <div class="absolute inset-0 w-full h-full flex justify-center items-center bg-gradient1 overflow-hidden">
            <div class="hidden lg:block relative w-3/4 h-1/2" style="filter: blur(64px);">
                <ClientOnly>
                    <Wiggle
                        class="absolute top-1/4 right-0 rounded-full w-1/3 aspect-square blob-red opacity-30"
                        :min-opacity="0.1"
                        :max-opacity="0.4"
                    />
                    <Wiggle
                        class="absolute top-1/12 left-0 rounded-full h-3/4 aspect-square blob-yellow opacity-40"
                        :area="30"
                        :max-opacity="0.4"
                    />
                    <Wiggle
                        class="absolute top-0 left-1/2 rounded-full w-1/4 aspect-square blob-blue opacity-30"
                        :area="20"
                    />
                </ClientOnly>
            </div>
        </div>
        <div class="absolute inset-0 w-full h-full gutters pointer-events-none">
            <div class="gutter w-[40px] lg:w-[70px]" style="grid-area: g1;" />
            <div class="gutter w-[40px] lg:w-[70px]" style="grid-area: g2;" />

            <div class="gutter h-[40px] lg:h-[70px]" style="grid-area: g3;" />
            <div class="gutter h-[40px] lg:h-[70px]" style="grid-area: g4;" />
            <div class="gutter h-[40px] lg:h-[70px]" style="grid-area: g5;" />

            <div class="gutter w-[40px] lg:w-[70px]" style="grid-area: g6;" />
            <div class="gutter w-[40px] lg:w-[70px]" style="grid-area: g7;" />

            <div class="gutter h-[40px] lg:h-[70px]" style="grid-area: g8;" />
            <div class="gutter h-[40px] lg:h-[70px]" style="grid-area: g9;" />
            <div class="gutter h-[40px] lg:h-[70px]" style="grid-area: g10;" />

            <div class="gutter w-[40px] lg:w-[70px]" style="grid-area: g11;" />
            <div class="gutter w-[40px] lg:w-[70px]" style="grid-area: g12;" />

            <AelysiumLogo class="w-[20px] lg:w-[35px] aspect-square opacity-20" style="grid-area: i1;" />
            <AelysiumLogo class="w-[20px] lg:w-[35px] aspect-square opacity-20" style="grid-area: i2;" />
            <AelysiumLogo class="w-[20px] lg:w-[35px] aspect-square opacity-20" style="grid-area: i3;" />
            <AelysiumLogo class="w-[20px] lg:w-[35px] aspect-square opacity-20" style="grid-area: i4;" />

            <div class="relative w-full h-full flex justify-center items-center px-8" style="grid-area: hero;">
                <div class="absolute inset-0 flex justify-center items-center blur-2xl">
                    <AelysiumWordmark class="pointer-events-none select-none w-[75vw]"  />
                </div>
                <AelysiumWordmark class="pointer-events-none select-none w-full"  />
            </div>
            <div class="h-full w-full max-w-[1000px] flex flex-col justify-start items-center" style="grid-area: subhero;">
                <span class="silkscreen-regular text-2xl md:text-5xl mt-8 mb-4 w-full text-center" >
                    Build to impress
                </span>
                <span class="silkscreen-bold mb-8 w-full text-center">
                    Choose a wiki
                </span>
                <div class="line h-line" style="background: white; opacity: 0.2;" />
                <div class="gutter" style="height: 40px;" />
                <div class="line h-line" style="background: white; opacity: 0.2;" />
                <div class="flex flex-col w-full lg:flex-row justify-center items-center lg:h-[56px] z-10 overflow-hidden">
                    <div class="line v-line bg-none bg-white/50" />
                    <div class="hidden lg:block gutter h-[20px] lg:h-full lg:w-[20px]" />
                    <div class="line v-line bg-none bg-white/50" />
                    <a
                        href="/rusty-connector"
                        class="relative w-full lg:w-auto anchors py-4 px-8 backdrop-blur-2xl hover:backdrop-saturate-0 duration-[2s] bg-transparent hover:bg-teal-500/5 text-nowrap pointer-events-auto"
                    >
                        RustyConnector
                    </a>
                    <div class="line v-line bg-none bg-white/50" />
                    <div class="gutter h-[20px] lg:h-full lg:w-[20px]" />
                    <div class="line v-line bg-none bg-white/50" />
                    <a
                        href="/declarative-yaml"
                        class="relative w-full lg:w-auto anchors py-4 px-8 backdrop-blur-2xl hover:backdrop-saturate-0 duration-[2s] bg-transparent hover:bg-red-500/8 pointer-events-auto"
                    >
                        Declarative YAML
                    </a>
                    <div class="line v-line bg-none bg-white/50" />
                    <div class="gutter h-[20px] lg:h-full lg:w-[20px]" />
                    <div class="line v-line bg-none bg-white/50" />
                    <a
                        href="/ara"
                        class="relative w-full lg:w-auto py-4 px-8 anchors backdrop-blur-2xl hover:backdrop-saturate-0 duration-[2s] bg-transparent hover:bg-yellow-500/8 pointer-events-auto"
                    >
                        Absolute Redundancy Architecture
                    </a>
                    <div class="line v-line bg-none bg-white/50" />
                    <div class="hidden lg:block gutter h-[20px] lg:h-full lg:w-[20px]" />
                    <div class="line v-line bg-none bg-white/50" />
                </div>
                <div class="line h-line" style="background: white; opacity: 0.2;" />
                <div class="gutter" style="height: 40px;" />
                <div class="line h-line" style="background: white; opacity: 0.2;" />
            </div>
        </div>
        <div class="absolute inset-0 w-full h-full v-lines pointer-events-none">
            <div class="w-[40px] lg:w-[70px]" style="grid-area: g1;" />
            <div class="w-[40px] lg:w-[70px]" style="grid-area: g2;" />

            <div class="line" style="grid-area: l1;" />
            <div class="line" style="grid-area: l2;" />
            <div class="line" style="grid-area: l3;" />
            <div class="line" style="grid-area: l4;" />
        </div>
        <div class="absolute inset-0 w-full h-full h-lines pointer-events-none">
            <div class="h-[40px] lg:h-[70px]" style="grid-area: g1;" />
            <div class="h-[40px] lg:h-[70px]" style="grid-area: g2;" />

            <div class="line" style="grid-area: l1;" />
            <div class="line" style="grid-area: l2;" />
            <div class="line" style="grid-area: l3;" />
            <div class="line" style="grid-area: l4;" />
        </div>
    </div>
</template>

<script setup>
import AelysiumWordmark from '../AelysiumWordmark.vue'
import AelysiumLogo from '../AelysiumLogo.vue'
import StarParticles from '../StarParticles.vue'
import Wiggle from '../Wiggle.vue'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
@layer components {
    .silkscreen-regular {
        font-family: "Silkscreen", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    .silkscreen-bold {
        font-family: "Silkscreen", sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    .anchors:hover::before {
        inset: 2px;
        opacity: 0.1;
    }
    .anchors::before {
        --dot-color: #ffffff;
        --dot-size: 4px;
        content: "";
        position: absolute;
        pointer-events: none;
        background-image: radial-gradient(var(--dot-color) 50%,transparent 50%),radial-gradient(var(--dot-color) 50%,transparent 50%),radial-gradient(var(--dot-color) 50%,transparent 50%),radial-gradient(var(--dot-color) 50%,transparent 50%);
        background-size: var(--dot-size) var(--dot-size),var(--dot-size) var(--dot-size),var(--dot-size) var(--dot-size),var(--dot-size) var(--dot-size);
        background-position: 0 0,100% 0,0 100%,100% 100%;
        background-repeat: no-repeat;

        inset: 12px;
        opacity: 0.8;
        transition-duration: 0.2s;
    }

    .line {
        display: none;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: 0px 0px;
        opacity: 0.5;
    }
    @media (min-width: 1024px) {
        .v-lines > .line, .v-line {
            display: block;
            opacity: 0.5;
            width: 1px;
            background-image: linear-gradient(0deg, #FFFFFF00 1%, #FFFFFFFF 50%, #FFFFFF00 100%);
        }
        .h-lines > .line, .h-line {
            display: block;
            height: 1px;
            background-image: linear-gradient(90deg, #FFFFFF00 1%, #FFFFFFFF 50%, #FFFFFF00 100%);
        }
    }
    .v-lines {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr 1px auto 1px minmax(auto, 1000px) 1px auto 1px 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: ". l1 g1 l2 . l3 g2 l4 .";
    }
    .h-lines {
        display: grid;
        justify-items: center;
        align-items: start;
        grid-template-rows: 1fr 1px auto 1px 10vw 1px auto 1px 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: ".""l1""g1""l2"".""l3""g2""l4""hero-sub-grid";
    }
    .gutter {
        width: 100%;
        height: 100%;
        border: 1px solid white;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: repeating-linear-gradient(45deg,white 0,white 1px,transparent 2px, transparent 10px);
        opacity: 0.05;
    }
    .gutters {
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-rows: 1fr 1px auto 1px 10vw 1px auto 1px 1fr;
        grid-template-columns: 1fr 1px auto 1px minmax(auto, 1000px) 1px auto 1px 1fr;
        grid-template-areas:
            ". . g1 . . . g2 . ."
            ". . . . . . . . ."
            "g3 . i1 . g4 . i2 . g5"
            ". . . . . . . . ."
            ". . g6 . hero . g7 . ."
            ". . . . . . . . ."
            "g8 . i3 . g9 . i4 . g10"
            ". . . . . . . . ."
            ". . g11 subhero subhero subhero g12 . ."
            ;
    }


    .hero-grid {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr 1px minmax(auto, 70px) 1px minmax(auto, 1000px) 1px minmax(auto, 70px) 1px 1fr;
        grid-template-areas: ". . . . hero . . . .";
    }
    .hero-sub-grid {
        width: 75vw;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-rows: 70px;
        grid-template-columns: 1fr;
        grid-area: hero-sub-grid;
    }
    .grid-border {
        position: relative;
    }
    .grid-border::before {
        content: "";
        display: block;
        position: absolute;
        left: -50vw;
        height: 1px;
        width: 200vw;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: linear-gradient(90deg, #FFFFFF00 0%, #FFFFFFFF 50%, #FFFFFF00 100%);
    }
    .blob-blue {
        background: #00F7FF;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: radial-gradient(50% 50% at 50% 50%, #00F7FF 2%, #00C5FF 100%);
    }
    .blob-yellow {
        background: #FF2300;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: radial-gradient(50% 50% at 50% 50%, #FFD200 0%, #FF9000FF 100%);
    }
    .blob-red {
        background: #FFD200;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: radial-gradient(50% 50% at 50% 50%, #FF2300 0%, #460900FF 100%);
    }
    .blob-orange {
        background: #FFB000;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: radial-gradient(75% 75% at 50% 50%, #FFB000 0%, #9B5D32FF 100%);
    }
    .bg-center {
        background-size: 100% 100%;
        background-position: 0px 0px;
    }
    .bg-gradient1 {
        background-size: 100% 100%;
        background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
        background-image:
            radial-gradient(30% 30% at 47% 35%, #00F7FF4D 0%, #00C5FF21 40%, #FFB00000 85%),
            radial-gradient(40% 40% at 67% 44%, #FF230057 0%, #FF52002E 34%, #FFB00000 79%),
            radial-gradient(40% 40% at 31% 54%, #FFD20040 0%, #FFC20021 34%, #FFB00000 79%),
            radial-gradient(50% 50% at 50% 50%, #FFB00047 0%, #FFCB0000 70%)
            ;
    }
}
</style>
