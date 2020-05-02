<template>
  <v-container>
    <v-layout row>
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <h1 class="text--secondary mb-3">
          Create new ad
        </h1>
        <v-form
          ref="form"
          v-model="valid"
          validation
          class="mb-3"
        >
          <v-text-field
            v-model="title"
            name="title"
            label="Ad title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
          />
          <v-text-field
            v-model="description"
            name="description"
            label="Ad description"
            type="text"
            multi-line
            :rules="[v => !!v || 'Description is required']"
          />
        </v-form>
        <v-layout
          row
          class="mb-3"
        >
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon
                right
                dark
              >
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-img
              src=""
              height="100"
            />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              v-model="promo"
              label="Add to promo?"
              color="primary"
            />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer />
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          }

          this.$store.dispatch("ads/createAd", ad)
        }
      }
    }
  }
</script>


<style scoped>

</style>
