<template>
    <v-tabs icons-and-text fixed-tabs slot="extension" light color="white" >
        <v-tabs-slider color="green"></v-tabs-slider>
        <v-tab to="/" >
            <h4>Élevage</h4>
        </v-tab>
        <v-tab to="/">
            <h4></h4>
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab to="/" class="d-inline-block" ripple>
            <h4> Mon compte </h4>
        </v-tab>
        <v-tab to="/" class="d-inline-block" ripple>
            <h4> Déconnexion </h4>
        </v-tab>
    </v-tabs>
</template>

<script>
    export default {
        name: "ToolbarFarmer"
    }
</script>

<style scoped>

</style>