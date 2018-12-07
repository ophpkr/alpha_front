<template>
    <v-flex>
        <ToolbarAIC></ToolbarAIC>
    <v-flex md10 mt-5 offset-md1>
        <EweTableAIC></EweTableAIC>
    </v-flex>
    </v-flex>
</template>

<script>
import EweTableAIC from '@/components/EweTableAIC';
import ToolbarAIC from '@/components/ToolbarAIC';

export default {
    name: 'EwesOverviewAIC',
    components: { ToolbarAIC, EweTableAIC },
};
</script>

<style scoped>

</style>
