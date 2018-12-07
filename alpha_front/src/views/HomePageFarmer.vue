<template>
    <v-flex>
        <ToolbarFarmer></ToolbarFarmer>
    <v-flex>
        <v-flex mt-3 offset-md1>
        <v-layout>
            <h1>Bienvenue monsieur Martin</h1>
        </v-layout>
        </v-flex>
        <v-layout class="mt-4">
            <v-flex>
                <h2 class="orange--text text--darken-4 text-sm-center">
                    Le dernier relevé a été effectué aujourd'hui à 8h50
                </h2>
            </v-flex>
        </v-layout>
        <v-flex mt-5>
            <v-layout>
                <v-flex md6 ml-4>
                    <EweTableFarmer></EweTableFarmer>
                </v-flex>
                <v-flex md6 ml-5 mr-4>
                    <EweTableFarmer></EweTableFarmer>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-flex>
    </v-flex>
</template>

<script>
import EweTableFarmer from '../components/EweTableFarmer';

export default {
    name: 'HomePageFarmer',
    components: { EweTableFarmer },
};
</script>

<style scoped>

</style>

