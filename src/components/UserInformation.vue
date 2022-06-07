<template>
    <div class="container-pwa">
        <!-- First row: Personal data TITLE -->
        <div class="row mb-3">
            <!-- Title -->
            <div class="col-12 pl-0">
                <div class="row timebank-title">Datos personales</div>
            </div>
            <!-- Divider -->
            <hr class="rounded linear-divider">
        </div>
        <!-- Second row: User Data, Photo and Edit button-->
        <div class="row mt-2" style="max-width:425px; margin:0px;">
            <div class="col-8 text-left" style="align-self: center;">
                <!-- 1 Row inside Col -->
                <div class="row">
                    <!-- Name -->
                    <div v-if="userName !== ''" class="col-12 timebank-subtitle" style="padding: 0px;">
                        {{ this.userName }}
                    </div>
                    <div v-else class="col-12 timebank-subtitle" style="padding: 0px;">
                        Nombre
                    </div>
                    <!-- Surname -->
                    <div v-if="surname !== ''" class="col-12 timebank-subtitle" style="padding: 0px;">
                        {{ this.surname }}
                    </div>
                    <div v-else class="col-12 timebank-subtitle" style="padding: 0px;">
                        Apellido
                    </div>
                </div>
                <!-- 2 Row inside Col -->
                <div class="row mt-3">
                    <div class="timebank-subtitle text-left date-of-birth" style="height: 53px; padding: 0px;">
                        10 de diciembre, 2022
                    </div>
                </div>
            </div>
            <!-- Image/Photo and Edit button -->
            <div class="col-auto">
                <!-- User doesnt have image, set default -->
                <div v-if="!img" class="row justify-content-center">
                    <img class="image-container" src="../../public/img/default_images/user.png">
                </div>
                <!-- User have image -->
                <div v-else class="row justify-content-center">
                    <img class="image-container" :src="this.img">
                </div>
                <div class="row justify-content-center">
                    <b-button href="/edit-user-data" class="edit-button" >EDITAR</b-button>
                </div>
            </div>
        </div>
        <!-- Third row: Contact information TITLE-->
        <div class="row mb-3">
            <!-- Title -->
            <div class="col-12 pl-0">
                <div class="row timebank-title">Información de contacto</div>
            </div>
            <!-- Divider -->
            <hr class="rounded linear-divider">
        </div>
        <!-- Fourth row: Contact data -->
        <div class="row mb-3">
            <!-- Phone number -->
            <div class="col-12 mb-1">
                <div class="row align-items-center" style="margin-left: 30px;">
                    <Icon icon="akar-icons:phone" width="32" height="32" color="#a70187"/>
                    <div class="timebank-phrase pl-2">{{ this.phone }}</div>
                </div>
            </div>
            <!-- Address -->
            <div class="col-12 mb-1">
                <div class="row align-items-center" style="margin-left: 30px;">
                    <Icon icon="entypo:address" width="32" height="32" color="#a70187"/>
                    <div class="timebank-phrase pl-2">{{ this.address }}</div>
                </div>
            </div>
            <!-- State or region -->
            <div class="col-12 mb-1">
                <div class="row align-items-center" style="margin-left: 30px;">
                    <Icon icon="bx:world" width="32" height="32" color="#a70187"/>
                    <div class="timebank-phrase pl-2">República, Región Metropolitana</div>
                </div>
            </div>
        </div>
        <!-- Fifth row: About me TITLE -->
        <div class="row mb-3">
            <!-- Title -->
            <div class="col-12 pl-0">
                <div class="row timebank-title">Acerca de mí</div>
            </div>
            <!-- Divider -->
            <hr class="rounded linear-divider">
        </div>
        <!-- Sixth row: Description -->
        <div class="row container text-left pl-5">
            <!-- If infortmation doesn't exists -->
            <div v-if="this.description !== ''">
                {{ this.description }}
            </div>
            <!-- Else, show user information -->
            <div v-else>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";

export default {
    name: 'UserInformation',
    data () {
        return {
            userName: '',
            surname: '',
            dateOfBirth: '',
            address: '',
            phone: '',
            description: '',
            img: null
        }
    },
    async mounted () {
        // get user uid
        const token = auth.getUserLogged();
        // petition
        await axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
            headers:{
                'Authorization': token,
            },
            })
            .then( response => {
                // console.log( response )
                this.userName = response.data.name;
                this.surname = response.data.surname;
                this.address = response.data.address;
                this.phone = response.data.phone;
                this.img = response.data.img;
            })
            .catch( e => console.log( e ))
    },
}
</script>

<style scoped>

.container-pwa {
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    padding: 25px 0px;
    background-color:white;
}

.timebank-title {
    margin-left: 50px;

    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    display: flex;
    align-items: center;

    color: #000000;

}

.timebank-subtitle {
    font-size: 20px;
    margin-left: 35px;
    font-weight: bold;
    
    font-style: normal;
    font-weight: 900;
    line-height: 30px;
    /* or 125% */
    display: flex;
    align-items: center;
    color: #000000;
}

.timebank-phrase {
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    letter-spacing: -0.333333px;
    color: rgba(0, 0, 0, 0.6);
}

.linear-divider {
    border: solid; 
    margin: 0px 45px; 
    opacity: 30%;
    width: 350px;
}

.edit-button{
    justify-content: center;
    width: 95px;
    margin-top: 15px;
    margin-bottom: 30px;
    background-color: #A70187!important;
    font-size: larger;
    height: 25px;

    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: #FFFFFF;

    border-radius: 6px;
}

.date-of-birth {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */
    display: flex;
    color: rgba(0, 0, 0, 0.6);
}

.image-container {
    width: 90px; 
    height: 90px;
    border-radius: 50px;
}


</style>