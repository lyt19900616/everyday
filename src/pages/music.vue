<template>
    <div>
        <aplayer autoplay
        :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Aplayer from 'vue-aplayer'

export default defineComponent({
    components: {
        Aplayer
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>