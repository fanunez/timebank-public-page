<template>
    <div>
        <input type="file" accept="image/*" ref="file" @change="change" style="display: none;">
        <div class="block-relative">
            <img :src="src" alt="Avatar" class="image-container">
            <div class="button-relative">
                <button @click="browse()">Browse</button>
            </div>
        </div>
    </div>
</template>

<script>
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
    width: 190px; 
    height: 190px;
    border-radius: 100px;
}

.button-relative {
    width: 190px; 
    height: 190px;
    background-color: black;
    opacity: 25%;
    top: 0px;
    justify-content: center;
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 100px;
}

</style>