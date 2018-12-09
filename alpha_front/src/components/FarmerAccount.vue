<template>
    <div class="farmerAccount">

        <ToolbarFarmer></ToolbarFarmer>
        
        <v-card-title>
            <h1>Votre compte <i>Alpha</i></h1>
        </v-card-title>
        
        <v-layout>
            <v-flex xs12 md8>
                <v-card-text>
                    <v-card class="farmerCard">
                        <v-layout align-start>
                            <v-flex xs12>
                                <h2>Elevage de Buzeins</h2>
                            </v-flex>
                            <v-flex xs4 offset-xs2>
                                <p>16 Route de Millau</p>
                                <p>12150 Buzeins</p>
                            </v-flex>
                        </v-layout>
                        <hr />
                        <br />
                        <v-layout justify-center>
                            <h3><b>128</b> brebis enregistrées</h3>
                        </v-layout>
                        <br />
                        <v-layout justify-center>   
                            <h3><b>82</b> brebis inséminées en 2018</h3> 
                        </v-layout>
                        <br />
                        <v-layout justify-center>   
                            <h3><b>41</b> brebis actuellement inséminées</h3> 
                        </v-layout>
                    </v-card>
                </v-card-text>
            </v-flex>
            <v-flex xs12 md4>
                <v-card-text>
                    <v-card  class="farmerCard">
                        <v-layout justify-center>
                            <h3><b>Centre d'IA : </b> Alpha Center</h3>
                        </v-layout>
                        <br />
                        <hr />
                        <br />
                        <v-layout align-start>
                            <v-flex xs8>
                                <b>Dernier passage</b>
                            </v-flex>
                            <v-flex xs4 offset-xs2>
                                <p>22 avril 2018</p>
                            </v-flex>
                        </v-layout>
                        <v-layout justify-center>
                            <v-btn color="success">Contacter</v-btn>
                        </v-layout>
                    </v-card>
                </v-card-text>
            </v-flex>
        </v-layout>
        
    </div>
</template>

<script>
import ToolbarFarmer from '../components/ToolbarFarmer';

export default {
    name: 'HomePageFarmer',
    components: {
        ToolbarFarmer,
    },
};
</script>

<style scoped>
.farmerCard{
    padding: 20px;
}
</style>
