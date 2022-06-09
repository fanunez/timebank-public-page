<template>
    <div>
        <input type="file" accept="image/*" ref="file" @change="change" style="display: none;">
        <div class="block-relative">
            <img :src="src" alt="Avatar" class="image-container">
            <div class="button-relative">
                <button class="button-action transition duration-200" @click="browse()">
                    <Icon name="camera" class="icon-container"></Icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "../../user-profile/helpers/Icon";

    export default {
        props: {
            value: File,
            defaultSrc: String
        },
        data() {
            return {
                src: this.defaultSrc,
                file: null
            }
        },
        components: {
            Icon,
        },
        methods: {
            browse() {
                this.$refs.file.click();
            },
            change( e ) {
                this.file = e.target.files[0];
                this.$emit("input", this.file);
                let reader = new FileReader();
                reader.readAsDataURL( this.file );
                reader.onload = ( e ) => {
                    this.src = e.target.result;
                }
            },
        }
    }
</script>

<style scoped>

.block-relative {
    display: inline-block;
    position: relative;
}

.image-container {
    width: 350px; 
    height: 250px;
    /* border-radius: 100px; */
}

.button-relative {
    width: 350px;  
    height: 250px;
    background-color: black;
    opacity: 25%;
    top: 0px;
    justify-content: center;
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 10px;
}

.icon-container {
    width: 50px;
    height: 50px;   
}

.button-action {
    border-radius: 100px;
    background-color: white;
    opacity: 100%;
}

</style>