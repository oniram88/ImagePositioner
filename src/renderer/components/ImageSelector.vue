<template>
    <b-container>
        <b-row align-h="center">
            <b-col cols="12">
                <b-form>
                    <b-row>

                        <b-col cols="6">
                            <b-form-file v-model="image" placeholder="Choose a file..."></b-form-file>
                        </b-col>


                        <b-col cols="2">
                            <b-form-input v-model="larghezza_tela"
                                          type="text"
                                          placeholder="Larghezza della tela in mm"></b-form-input>
                        </b-col>


                        <b-col cols="2">
                            <b-form-input v-model="altezza_tela"
                                          type="text"
                                          placeholder="Altezza della tela in mm"></b-form-input>
                        </b-col>


                        <b-col cols="2">

                            <b-btn @click="onSubmit">Carica immagine</b-btn>
                        </b-col>
                    </b-row>

                </b-form>
            </b-col>

            <b-col cols="10">
                <b-img v-on:mousemove="mouse_move" ref="image" :src="image_source" fluid></b-img>
            </b-col>

        </b-row>
    </b-container>

</template>

<script>
    /* eslint-disable handle-callback-err */

    const base64Img = require('base64-img')

    export default {
      name: 'image_selector',
      data: function () {
        return {
          test: 'xiao',
          image: '',
          image_source: '',
          altezza_tela: '',
          larghezza_tela: ''
        }
      },
      methods: {
        onSubmit: function () {
          console.log(this.image)

          base64Img.base64(this.image.path, (err, data) => {
            this.image_source = data
          })
        },
        onReset () {

        },
        mouse_move (e) {
          console.log(e.target, e.target.x, e.target.y, e.pageX, e.pageY, e.pageX - e.target.x, e.pageY - e.target.y)
        }
      }
    }
</script>

<style scoped>

</style>