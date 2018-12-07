<template>
    <v-card>
        <v-card-title>
            <v-flex class="mt-3">
                <h1 class="brown--text text--darken-3">{{title}}</h1>
            </v-flex>
        </v-card-title>
        <v-card-text>
            <v-layout>
                <v-flex ml-5 md2>
                    <v-select
                            :items="stateSelect"
                            label="Afficher"
                    ></v-select>
                </v-flex>
                <v-flex md4 offset-md4 mr-3>
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
                    item-key="numberWork"
                    v-model="selected"
                    color="green"
                    select-all
                    hide-actions
            >
                <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                        <td>
                            <v-checkbox
                                    :input-value="props.selected"
                                    primary
                                    color="green darken-1"
                                    class="green--text"
                                    hide-details
                            ></v-checkbox>
                        </td>
                        <td>{{ props.item.numberWork }}</td>
                        <td class="text-xs-left">{{ props.item.lastPeriods }}</td>
                        <td class="text-xs-left">{{ props.item.bornDate }}</td>
                        <td class="text-xs-left">{{ props.item.lastInsemination }}</td>
                        <td class="text-xs-left">{{ props.item.status }}</td>
                        <td v-if="props.item.status==='en chaleur'" class="text-xs-left"><v-icon color="red">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='en gestation'" class="text-xs-left"><v-icon color="green">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='inséminable'" class="text-xs-left"><v-icon color="orange">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='inséminée'" class="text-xs-left"><v-icon color="light-green lighten-1">fiber_manual_record</v-icon></td>
                    </tr>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Aucun résultat trouvé pour la recherche "{{ search }}".
                </v-alert>
            </v-data-table>
            <v-layout>
                <v-flex mt-3 md2>
                    <v-select
                            :items="actionEwe"
                            label="Déclarer"
                            solo
                            elevation-1
                    ></v-select>
                </v-flex>
                <v-flex>
            <div class="text-xs-center pt-3 ">
                <v-pagination color="green darken-3" v-model="pagination.page" :length="pages"></v-pagination>
            </div>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "EweTableDetailFarmer",
        data() {
            return {
                title: 'Gestion d\'élevage',
                search: '',
                pagination: {},
                selected: [],
                stateSelect: ['Toutes', 'En gestation', 'En chaleur', 'Inséminées', 'Inséminables', 'En production'],
                actionEwe: ['Insémination', 'Mise bas', 'Supprimer', 'En production'],
                headers: [
                    {
                        text: 'Numéro de travail',
                        align: 'left',
                        sortable: true,
                        value: 'numberWork'
                    },
                    {text: 'Date de naissance', sortable: false, value: 'bornDate'},
                    {text: 'Dernière période de chaleurs', sortable: false, value: 'lastPeriods'},
                    {text: 'Dernière insémination', sortable: false, value: 'lastInsemination'},
                    {text: 'État', sortable: false, value: 'status'},
                    {text: '', sortable: false, value: 'indicator'},
                ],
                ewes: [
                    {
                        value: false,
                        numberWork: '31005',
                        lastPeriods: 'Du 10/11/2018 au 13/11/2018',
                        status: 'en gestation',
                        bornDate: '24/03/2011',
                        lastInsemination: '13/11/2018',
                    },
                    {
                        value: false,
                        numberWork: '31125',
                        lastPeriods: 'Du 26/10/2018 au 29/10/2018',
                        status: 'inséminable',
                        bornDate: '20/06/2011',
                        lastInsemination: '29/10/2018',
                    },
                    {
                        value: false,
                        numberWork: '31654',
                        lastPeriods: 'En chaleur depuis 36h',
                        status: 'en chaleur',
                        bornDate: '12/08/2011',
                        lastInsemination: '03/05/2014',
                    },
                    {
                        value: false,
                        numberWork: '31655',
                        lastPeriods: 'Il y a 25h',
                        status: 'en chaleur',
                        bornDate: '17/04/2016',
                        lastInsemination: 'Aucune',
                    },
                    {
                        value: false,
                        numberWork: '37278',
                        lastPeriods: 'Du 05/12/2018 au 07/12/2018',
                        status: 'inséminée',
                        bornDate: '06/12/2017',
                        lastInsemination: '07/12/2018',
                    },
                ]
            }
        },
        methods: {
            toggleAll () {
                if (this.selected.length) this.selected = []
                else this.selected = this.ewes.slice()
            },
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