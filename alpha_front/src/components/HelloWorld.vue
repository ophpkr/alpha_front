<template>
    <div class="welcomePage">
        <v-container>
            <v-layout
                    text-xs-center
                    wrap
            >
                <v-flex xs12>
                    <v-icon color="white" size="400">wb_cloudy</v-icon>
                </v-flex>

                <v-flex mb-4>
                    <h1 class="display-2 font-weight-bold mb-3">
                        Alpha App
                    </h1>
                    <br>
                    <h2>  Application web de la solution <i>Alpha</i>
                    <br><b>INRA / SupAgro</b></h2>

                    <br>

                    <v-layout justify-center>
                        <p>Solution d'accompagnement à  l'insémination artificielle des brebis </p>
                        <a href="http://sheepnet.network/">
                            <p class="websiteText"> ( Site internet )</p>
                        </a>
                    </v-layout>
                    
                </v-flex>

                <v-flex
                        mb-5
                        xs12
                >
                    <a href="/farmer"><v-btn class="success">Connexion</v-btn></a>
                <v-layout justify-center>
                </v-layout>
                </v-flex>
            </v-layout>
            <v-layout>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
</script>

<style>
.welcomePage{
    background-color: rgb(12, 66, 2);
    color: white;
}
a{
    text-decoration: none;
    
}
.websiteText{
    margin-left: 7px;
    color: rgb(213, 255, 215);
    text-decoration: underline;
    text-decoration-color: white;
}
</style>
