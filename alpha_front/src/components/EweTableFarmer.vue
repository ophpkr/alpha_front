<template>
    <v-card>
        <v-card-title>
            <h1 class="brown--text text--darken-3">{{title}}</h1>
        </v-card-title>
        <v-card-text>
        <v-layout>
            <v-flex md4 offset-md8 mr-3>
        <v-text-field
                v-model="search"
                append-icon="search"
                label="Recherche"
                single-line
                hide-details
                color="brown"
        ></v-text-field>
            </v-flex>
        </v-layout>
        <v-data-table
                :headers="headers"
                :items="ewes"
                :search="search"
                :pagination.sync="pagination"
                class="elevation-1"
                hide-actions
        >
            <template slot="items" slot-scope="props">
                <td><a href="/ewes">{{ props.item.numberWork }}</a></td>
                <td class="text-xs-left">{{ props.item.lastPeriods }}</td>
                <td class="text-xs-left">{{ props.item.status }}</td>
                <td v-if="props.item.status==='en chaleur'" class="text-xs-left"><v-icon color="red">fiber_manual_record</v-icon></td>
                <td v-if="props.item.status==='en gestation'" class="text-xs-left"><v-icon color="green">fiber_manual_record</v-icon></td>
                <td v-if="props.item.status==='inséminable'" class="text-xs-left"><v-icon color="orange">fiber_manual_record</v-icon></td>
                <td v-if="props.item.status==='inséminée'" class="text-xs-left"><v-icon color="light-green lighten-1">fiber_manual_record</v-icon></td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
               Aucun résultat trouvé pour la recherche "{{ search }}".
            </v-alert>
        </v-data-table>
        <div class="text-xs-center pt-2">
            <v-pagination color="green darken-3" v-model="pagination.page" :length="pages"></v-pagination>
        </div></v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "EweTableFarmer",
        data() {
            return {
                title: 'Mes jdghzi',
                search: '',
                pagination: {},
                selected: [],
                headers: [
                    {
                        text: 'Numéro de travail',
                        align: 'left',
                        sortable: true,
                        value: 'numberWork'
                    },
                    {text: 'Dernière période de chaleurs', sortable: false, value: 'lastPeriods'},
                    {text: 'État', sortable: false, value: 'status'},
                    {text: '', sortable: false, value: 'indicator'},
                ],
                ewes: [
                    {
                        value: false,
                        numberWork: '31005',
                        lastPeriods: 'Du 10/11/2018 au 13/11/2018',
                        status: 'en gestation' ,
                    },
                    {
                        value: false,
                        numberWork: '31125',
                        lastPeriods: 'Du 26/10/2018 au 29/10/2018',
                        status: 'inséminable' ,
                    },
                    {
                        value: false,
                        numberWork: '31654',
                        lastPeriods: 'En chaleur depuis 36h',
                        status: 'en chaleur' ,
                    },
                    {
                        value: false,
                        numberWork: '31655',
                        lastPeriods: 'Il y a 25h',
                        status: 'en chaleur' ,
                    },
                    {
                        value: false,
                        numberWork: '37278',
                        lastPeriods: 'Du 05/12/2018 au 07/12/2018',
                        status: 'inséminée' ,
                    },
                ]
            }
        },
        computed: {
            pages () {
                if (this.pagination.rowsPerPage == null ||
                    this.pagination.totalItems == null
                ) return 0

                return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
            }
        }
    }
</script>

<style scoped>

</style>