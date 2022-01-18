<template>
    <div class="home-page">
        <navbar></navbar>
        <hpSamples></hpSamples>
    </div>
</template>

<script>
import navbar from '../components/navbar_cp.vue';
import hpSamples from '../components/hp_samples.vue';
export default {
    components: {
        navbar,
        hpSamples,
    }
}
</script>

<style>

</style>