<template>
    <v-app>
        <ToolbarFarmer></ToolbarFarmer>
        <v-content>
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ToolbarFarmer from './components/ToolbarFarmer'

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
