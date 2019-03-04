<template>
    <v-app>
        <navigation></navigation>
        <toolbar></toolbar>
         <v-content>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex xs12 md3>
                        <v-card color="indigo" class="white--text">
                            <v-layout row>
                            <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                <h2>DEVELOPER</h2>
                                <h3>10</h3>
                                </div>
                            </v-card-title>
                            </v-flex>
                            <v-flex xs5>
                            <v-icon class="icon" color="white">assessment</v-icon>
                            </v-flex>
                        </v-layout>
                        </v-card>              
                    </v-flex>

                    <v-flex xs12 md3>
                        <v-card color="purple" class="white--text">
                            <v-layout row>
                            <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                <h2>SUPERADMIN</h2>
                                <h3>13</h3>
                                </div>
                            </v-card-title>
                            </v-flex>
                            <v-flex xs5>
                            <v-icon class="icon" color="white">bar_chart</v-icon>
                            </v-flex>
                        </v-layout>
                        </v-card>              
                    </v-flex>

                    <v-flex xs12 md3>
                        <v-card color="green" class="white--text">
                            <v-layout row>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                        <h2>ADMIN</h2>
                                        <h3>5</h3>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs5>
                                    <v-icon class="icon" color="white">table_chart</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-card>              
                    </v-flex>

                    <v-flex xs12 md3>
                        <v-card color="teal" class="white--text">
                            <v-layout row>
                            <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                <h2>USER  </h2>
                                <h3>25</h3>
                                </div>
                            </v-card-title>
                            </v-flex>
                            <v-flex xs5>
                            <v-icon class="icon" color="white">group_add</v-icon>
                            </v-flex>
                        </v-layout>
                        </v-card>              
                    </v-flex>       
                </v-layout>
                <v-divider class="mx-2" inset vertical></v-divider>
                <v-layout row wrap>
                    <v-flex xs12 class="mb-3">
                        <v-card color="cyan">
                            <v-sheet height="400">
                                <v-calendar ref="calendar" v-model="start" :type="type" :end="end" color="primary"></v-calendar>
                            </v-sheet>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs12 class="text-sm-left text-xs-center">
                        <v-btn @click="$refs.calendar.prev()">
                            <v-icon dark left >
                            keyboard_arrow_left
                            </v-icon>
                            Prev
                        </v-btn>
                    </v-flex>
                    <v-flex sm4 xs12 class="text-xs-center">
                        <v-select v-model="type" :items="typeOptions" label="Type"></v-select>
                        </v-flex>
                        <v-flex sm4 xs12 class="text-sm-right text-xs-center">
                        <v-btn @click="$refs.calendar.next()">
                            Next
                            <v-icon right dark>
                            keyboard_arrow_right
                            </v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
         </v-content>
         <bottom></bottom>
    </v-app>
</template>
<script>

import Navigation from './layouts/Navigation'
import Toolbar from './layouts/Toolbar'
import Footer from './layouts/Footer'

export default {
    name:'dashboard',
    components:{
        navigation: Navigation,
        toolbar: Toolbar,
        bottom: Footer 
    },
    data: ()=>({
        type: 'month',
        start: new Date(),
        end: '2019-01-06',
        typeOptions: [
            { text: 'Day', value: 'day' },
            { text: '4 Day', value: '4day' },
            { text: 'Week', value: 'week' },
            { text: 'Month', value: 'month' },
            { text: 'Custom Daily', value: 'custom-daily' },
            { text: 'Custom Weekly', value: 'custom-weekly' }
        ]
    })
}
</script>
<style scoped>
    .icon{
        font-size: 80px;
        margin-top: 20px;
    }
</style>

