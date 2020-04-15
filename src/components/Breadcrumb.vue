<template>
    <div>
        <b-breadcrumb  :items="breadcrumb"/>
    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        name: 'Breadcrumb',
        computed: {
            ...mapState(["breadcrumb"])
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>

</style>