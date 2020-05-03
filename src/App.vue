<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(link,index) in links"
            :key="index"
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      dark
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>AD Application</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.url"
          text
        >
          <v-icon
            left
            class="hidden-md-and-down"
            v-text="link.icon"
          />
          {{ link.title }}
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn"
          text
          @click="logout"
        >
          <v-icon
            left
            class="hidden-md-and-down"
          >
            mdi-logout
          </v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-snackbar
      v-model="snackbar"
      :multi-line="true"
      @input="closeBar"
    >
      {{ error }}
      <v-btn
        color="red"
        text
        @click="closeBar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'App',
    data() {
      return {
        drawer: false,
      }
    },
    computed: {
      ...mapGetters(["error"]),
      ...mapGetters("user", ["isUserLoggedIn"]),
      snackbar() {
        return !!this.error
      },
      links() {
        if(this.isUserLoggedIn) {
          return [
            {title: 'Home', icon: 'mdi-home', url: '/'},
            {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
            {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
            {title: 'My ads', icon: 'mdi-format-list-text', url: '/list'},
          ]
        } else {
          return  [
            {title: 'Login', icon: 'mdi-lock', url: '/login'},
            {title: 'Registration', icon: 'mdi-face', url: '/registration'},
          ]
        }
      }
    },
    methods: {
      ...mapActions(["clearError"]),
      ...mapActions("user", ["logoutUser"]),
      closeBar() {
        this.clearError();
      },
      logout() {
        this.logoutUser()
        this.$router.push("/")
      }
    }
  };
</script>
