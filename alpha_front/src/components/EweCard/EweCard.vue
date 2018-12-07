<template>
    <div class="eweCard">
        <v-card>
            <v-card-title class="eweCardTitle">
                <h1 class="brown--text text--darken-3">Brebis #31005</h1>
            </v-card-title>
        </v-card>
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg8 class="overviewEweCard">
                <h1 class="eweCard brown--text text--darken-3">Informations</h1>
                <v-layout align-start class="overviewEweCardTitle">
                    <v-flex xs4>
                        <b>Elevage</b>
                    </v-flex>
                    <v-flex xs4 offset-xs2>
                        <p>Alpha Farm</p>
                    </v-flex>
                </v-layout>
                <v-layout align-start class="overviewEweCardTitle">
                    <v-flex xs4>
                        <b>Adresse</b>
                    </v-flex>
                    <v-flex xs4 offset-xs2>
                        <p>16 Route de Millau</p>
                        <p>12150 Buzeins</p>
                    </v-flex>
                </v-layout>
                <hr />
                <v-layout align-start class="overviewEweCardTitle">
                    <v-flex xs4>
                        <b>Dernier oeustrus enregistré</b>
                    </v-flex>
                    <v-flex xs4 offset-xs2>
                        <p>Début : 16/05/2018 11h30</p>
                        <p>Durée : 27h</p>
                    </v-flex>
                </v-layout>
                <v-layout align-start class="overviewEweCardTitle">
                    <v-flex xs4>
                        <b>Dernière insémination artificielle</b>
                    </v-flex>
                    <v-flex xs4 offset-xs2>
                        <p>17/05/2018</p>
                        <p>Résultat : Succès</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 sm12 md12 lg3 class="stateEweCard">
                <h1 class="eweCard brown--text text--darken-3">Etat actuel</h1>
                <br />
                <h3>En traite</h3>
                <h5>Depuis le 22/06/2018</h5>
                <p>132 jours : fin le 10/07/2018</p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./EweCard.js"></script>
<style scoped>
.eweCardTitle{
    padding:40px;
}
.overviewEweCard{
    margin: 50px;
    background-color: #eee;
}
.overviewEweCardTitle {
    margin: 25px;
    font-size:1.4rem;
}
b{
    font-size:1.7rem;
}
.stateEweCard{
    padding-top: 50px;
    font-size:1.7rem;
}
h3{
    color:blue;
}
.eweCard {
    text-align:center;
}
</style>
