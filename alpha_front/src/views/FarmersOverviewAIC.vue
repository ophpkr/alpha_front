<template>
    <v-flex>
        <ToolbarAIC></ToolbarAIC>
    <v-flex md10 mt-5 offset-md1>
        <FarmerTableAIC></FarmerTableAIC>
    </v-flex>
    </v-flex>
</template>

<script>
import FarmerTableAIC from '@/components/FarmerTableAIC';
import ToolbarAIC from '@/components/ToolbarAIC';

export default {
    name: 'FarmersOverviewAIC',
    components: { FarmerTableAIC, ToolbarAIC },
};
</script>

<style scoped>

</style>
