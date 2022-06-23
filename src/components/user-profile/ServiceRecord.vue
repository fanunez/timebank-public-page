<template>
    <div class="main">
        <!-- Header -->
        <div class="row justify-content-center">
            <div class="timebank-header">Historial de servicios</div>
        </div>
        
        <!-- Labels -->
        <div class="row justify-content-start mt-3" style="margin-left: 25px;">
            <Icon icon="mdi:brightness-1" color="#ffa726" width="20" height="20" /> Pedidos
            <Icon icon="mdi:brightness-1" color="#7d02db" width="20" height="20" style="margin-left: 12px;"/> Solicitados
        </div>

        <!-- Service table -->
        <div class="row justify-content-center mt-1">
            <b-table striped hover 
                     :items="table.services" 
                     :fields="table.fields"
                     class="timebank-table"
                     responsive
                     bordered
            ></b-table>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";

export default {
    name: 'serviceRecord',
    data() {
        return {
            table: {
                fields: [
                    {
                        key: 'title',
                        label: 'Servicio',
                        sortable: false
                    },
                    {
                        key: 'date',
                        label: 'Fecha',
                        sortable: true
                    }
                ],
                services: []
            },
        }
    },
    created() {
        // get user uid
        const token = auth.getUserLogged();
        // petition
        axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
            headers:{
                'Authorization': token,
            },
            })
            .then( response => {
                this.getServicesByAplicant( response.data.uid );
            })
            .catch( e => console.log( e ))
    },
    methods: {
        async getServicesByAplicant( uid ) {
            await axios
                .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/transaction/own_request/' + uid )
                .then( response => {
                    console.log( response );
                    this.table.services = response.data;
                })
                .catch( e => console.log( e ))
        }
    }
}

</script>

<style>
    .main{
        min-height: -webkit-fill-available;
        box-sizing: border-box;
        max-width: 425px;
        margin: 0 auto;
        background-color:white
    }

    .timebank-header{
        font-weight: bold;
        font-size: 28px;
    }

    .timebank-table {
        width: 370px !important;
        /* border: 1px solid; */
        /* box-shadow: 0px 0px 2px #888888; */
    }

    /* .table-header {
        background-color: #A70187;
        font-size: 16px;
    } */

</style>