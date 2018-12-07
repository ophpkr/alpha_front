<template>
    <v-card>
        <v-card-title>
            <v-flex class="mt-3">
                <h1 class="brown--text text--darken-3">{{title}}</h1>
            </v-flex>
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
                    :items="breedings"
                    :search="search"
                    :pagination.sync="pagination"
                    class="elevation-1"
                    item-key="numberWork"
                    color="green"
                    hide-actions
            >
                <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                        <td>{{ props.item.breeding }}</td>
                        <td>{{ props.item.farmer }}</td>
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
                title: 'Éleveurs',
                search: '',
                pagination: {},
                headers: [
                    {
                        text: 'Élevage',
                        align: 'left',
                        sortable: true,
                        value: 'numberWork'
                    },
                    {text: 'Éleveur', sortable: false, value: 'farmer'},
                ],
                breedings: [
                    {
                        value: false,
                        farmer: 'Martin Dupont',
                        breeding: 'Élevage 1',
                    },
                    {
                        value: false,
                        farmer: 'Jean Dupuis',
                        breeding: 'Élevage 2',
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