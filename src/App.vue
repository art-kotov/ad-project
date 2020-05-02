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
            v-text="link.icon"
            class="hidden-md-and-down"
          />
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      links: [
        {title: 'Home', icon: 'mdi-home', url: '/'},
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
        {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
        {title: 'My ads', icon: 'mdi-format-list-text', url: '/list'},
      ]
    }
  }
};
</script>
