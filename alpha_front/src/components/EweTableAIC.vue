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
                            color="green"
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
                    color="green"
                    hide-actions
            >
                <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                        <td>{{ props.item.numberWork }}</td>
                        <td>{{ props.item.breeding }}</td>
                        <td class="text-xs-left">{{ props.item.lastInsemination }}</td>
                        <td class="text-xs-left">{{ props.item.status }}</td>
                        <td v-if="props.item.status==='en chaleur'" class="text-xs-left"><v-icon color="red">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='en gestation'" class="text-xs-left"><v-icon color="green">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='inséminable'" class="text-xs-left"><v-icon color="orange">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='inséminée'" class="text-xs-left"><v-icon color="light-green lighten-1">fiber_manual_record</v-icon></td>
                        <td v-if="props.item.status==='en traite'" class="text-xs-left"><v-icon color="light-blue">fiber_manual_record</v-icon></td>
                    </tr>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Aucun résultat trouvé pour la recherche "{{ search }}".
                </v-alert>
            </v-data-table>
            <v-layout>
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
    name: "EweTableAIC",
    data() {
        return {
            title: 'Toutes les brebis',
            search: '',
            pagination: {},
            stateSelect: ['Toutes', 'En gestation', 'En chaleur', 'Inséminées', 'Inséminables', 'En traite'],
            headers: [
                {
                    text: 'Numéro de travail',
                    align: 'left',
                    sortable: true,
                    value: 'numberWork'
                },
                {text: 'Élevage', sortable: true, value: 'breeding'},
                {text: 'Dernière insémination', sortable: false, value: 'lastInsemination'},
                {text: 'État', sortable: false, value: 'status'},
                {text: '', sortable: false, value: 'indicator'},
            ],
            ewes: [
                {
                    value: false,
                    numberWork: '31005',
                    status: 'en gestation',
                    lastInsemination: '13/11/2018',
                    breeding: 'Élevage 1',
                },
                {
                    value: false,
                    numberWork: '31125',
                    status: 'inséminable',
                    lastInsemination: '29/10/2018',
                    breeding: 'Élevage 1',
                },
                {
                    value: false,
                    numberWork: '31654',
                    status: 'en chaleur',
                    lastInsemination: '03/05/2014',
                    breeding: 'Élevage 1',
                },
                {
                    value: false,
                    numberWork: '31655',
                    status: 'en chaleur',
                    lastInsemination: 'Aucune',
                    breeding: 'Élevage 1',
                },
                {
                    value: false,
                    numberWork: '31655',
                    status: 'en traite',
                    lastInsemination: '18/02/2018',
                    breeding: 'Élevage 2',
                },
                {
                    value: false,
                    numberWork: '37278',
                    status: 'inséminée',
                    lastInsemination: '07/12/2018',
                    breeding: 'Élevage 1',

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