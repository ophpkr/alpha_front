<template>
    <v-tabs fixed-tabs color="green darken-4">
        <v-tabs-slider color="orange darken-2"></v-tabs-slider>
        <v-tab>
            <v-icon color="white">home</v-icon>
        </v-tab>
        <v-tab class="white--text d-inline-block" ripple>
            <h4>Brebis</h4>
        </v-tab>
        <v-tab class="white--text d-inline-block" ripple>
            <h4>Élevages</h4>
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab class="white--text d-inline-block" ripple>
            <h4> Déconnexion </h4>
        </v-tab>
    </v-tabs>
</template>

<script>
    export default {
        name: "ToolbarAIC"
    }
</script>

<style scoped>

</style>