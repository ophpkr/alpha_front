<template>
    <v-tabs fixed-tabs color="green darken-4">
        <v-tabs-slider color="orange darken-2"></v-tabs-slider>
        <v-tab>
            <a href="/"><v-icon color="white">home</v-icon></a>
        </v-tab>
        <v-tab class="white--text d-inline-block" ripple>
            <a href="/farmer"><h4 class="titleTabBar">Élevage</h4></a>
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab class="white--text d-inline-block" ripple>
            <a href="/farmer/account"><h4 class="titleTabBar"> Mon compte </h4></a>
        </v-tab>
        <v-tab class="white--text d-inline-block TabBarAlt" ripple>
           <a href="/"><h4 class="titleTabBarAlt">Déconnexion </h4></a>
        </v-tab>
    </v-tabs>
</template>

<script>
    export default {
        name: "ToolbarFarmer"
    }
</script>

<style scoped>
.titleTabBar{
    color:#dae4db;
}
.titleTabBarAlt{
    color:#FFF;
}
.TabBarAlt{
    background-color:#19381f;
}
a {
    text-decoration: none;
}
</style>