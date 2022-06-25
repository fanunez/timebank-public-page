<template>
    <div class="notification-frame">   
        <!--div class="row"-->
            <div class="row justify-content-center" style="margin: 80px 35px;">
         <div class="timebank-header mb-3" >Notificaciones</div>
         
         <!--div class="timebank-header" >Notificaciones</div-->
        <!--/div-->
        
            
            <!--b-list-group style= "margin: 70px"-->
               <b-list-group-item href="#" variant="dark" style="color: white; font-weight: bold;">Dark list group item</b-list-group-item>
               <b-list-group-item href="#" variant="dark" style="color: white; font-weight: bold;">Dark list group item</b-list-group-item>
               <b-list-group-item href="#" variant="dark" style="color: white; font-weight: bold; text-align:left;"><div class="row"><div class="col-4" style="margin: 0px -20px"><img left src="https://placekitten.com/1000/300" rounded="circle" width="60" height="60" style="margin-left: 12px; border-radius:50px;"></div><div class="col-9"><h4 text-left style= "font-weight: bold;">Esta es la notificacion con todos sus detalles</h4><h5>esta es la fecha de la notificacion</h5></div></div></b-list-group-item>
               <b-list-group-item href="#" variant="danger" style="background-color: #A70187; color: white; font-weight: bold;">Notificacion ya leida</b-list-group-item>

            <!--/b-list-group-->
           </div>
       
    </div>
</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";

export default {
    name: 'Notification',
    data() {
        
    },
}
</script>

<style>
    .notification-frame{
        box-sizing: border-box;
        max-width: 425px;
        margin: 0 auto;
        background-color:white;
    
    }
    .timebank-header{
    font-weight: bold;
    font-size: 28px;
    margin-top: 10px;
    }

    .timebank-info{
    font-weight: bold;
    font-size: 24px;
    margin-top: 0px;
    
    }

</style>