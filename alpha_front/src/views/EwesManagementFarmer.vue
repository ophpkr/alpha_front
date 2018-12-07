<template>
    <v-flex>
    <ToolbarFarmer></ToolbarFarmer>
    <v-flex md10 mt-5 offset-md1>
        <EweTableDetailFarmer></EweTableDetailFarmer>
    </v-flex>
    </v-flex>
</template>

<script>
import EweTableDetailFarmer from '@/components/EweTableDetailFarmer';
import ToolbarFarmer from '@/components/ToolbarFarmer';

export default {
    name: 'EwesManagementFarmer',
    components: { ToolbarFarmer, EweTableDetailFarmer },
};
</script>

<style scoped>

</style>
