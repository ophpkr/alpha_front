<template>
    <v-app>
        <ToolbarFarmer></ToolbarFarmer>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ToolbarFarmer from './components/ToolbarFarmer'
import EweTableFarmer from './components/EweTableFarmer'

export default {
    name: 'App',
    components: {
        HelloWorld,
        ToolbarFarmer,
    },
    data () {
        return {
            //
        }
    }
}
</script>
