<template>
    <v-tabs fixed-tabs color="white" >
        <v-tabs-slider color="green"></v-tabs-slider>
        <v-tab>
            <v-icon color="green">home</v-icon>
        </v-tab>
        <v-tab>
            <h4>Élevage</h4>
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab class="d-inline-block" ripple>
            <h4> Mon compte </h4>
        </v-tab>
        <v-tab class="d-inline-block" ripple>
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