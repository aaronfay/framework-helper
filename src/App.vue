<template>
  <v-app id="inspire">
    <v-navigation-drawer app persistant left v-model="drawer">
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-col>
          <v-card>
            <v-card-text>
              <v-img alt="Vue logo" width="200" src="./assets/logo.png" />
            </v-card-text>
          </v-card>
          <HelloWorld msg="Hello Vue in CodeSandbox!" />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({
    title: "Test Title",
    drawer: false,
  }),
};
</script>
