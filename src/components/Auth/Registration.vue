<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="email"
                prepend-icon="mdi-account"
                name="email"
                label="Email"
                type="email"
                :rules="emailRules"
              />
              <v-text-field
                v-model="password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                :counter="6"
                :rules="passwordRules"
              />
              <v-text-field
                v-model="confirmPassword"
                prepend-icon="mdi-lock"
                name="confirm-password"
                label="Confirm Password"
                type="password"
                :counter="6"
                :rules="confirmPasswordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              :disabled="!valid || loading"
              :loading="loading"
              @click="onSubmit"
            >
              Create account!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => emailRegex.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Password should match'
        ]
      }
    },
    computed: {
      ...mapGetters(["loading"])
    },
    methods: {
      ...mapActions("user", {
        register: 'registerUser'
      }),

      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }

          this.register(user)
          .then(() => {
            this.$router.push("/")
          })
          .catch(err => console.log(err))
        }
      }
    }
  }
</script>

<style scoped>

</style>
