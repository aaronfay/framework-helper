<template>
  <v-app id="inspire">
    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card-text id="main"
          ><span class="person">1s</span> ki{{ tense
          }}<span class="filler">{{ firstVerb }}</span
          >{{ direction }} cî
          <span class="filler">{{ firstNoun }}</span> ê-<span class="filler">{{
            secondVerb
          }}</span
          >ât <span class="filler">{{ secondNoun }}</span
          >?
        </v-card-text>

        <v-card-text id="main"
          ><span class="person">2s</span> êhâ, ni{{ tense
          }}<span class="filler">{{ firstVerb }}</span
          >{{ direction }} <span class="filler">{{ firstNoun }}</span> ê-<span
            class="filler"
            >{{ secondVerb }}</span
          >ât <span class="filler">{{ secondNoun }}</span
          >.
        </v-card-text>

        <v-row no-gutters>
          <!-- FIRST VERB -->
          <v-col>
            <v-card>
              <v-card-text>First verb</v-card-text>
              <v-card class="mx-auto" max-width="400">
                <v-list flat>
                  <v-list-item-group v-model="verbModel" color="#ff968f">
                    <v-list-item v-for="(item, i) in verbs" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-card>
          </v-col>
          <!-- FIRST NOUN -->
          <v-col>
            <v-card>
              <v-card-text>First noun</v-card-text>
              <v-card class="mx-auto" max-width="400">
                <v-list flat>
                  <v-list-item-group v-model="nounModel" color="#ff968f">
                    <v-list-item v-for="(item, i) in nouns" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-card>
          </v-col>
          <!-- SECOND VERB -->
          <v-col>
            <v-card>
              <v-card-text>Second verb</v-card-text>
              <v-card class="mx-auto" max-width="400">
                <v-list flat>
                  <v-list-item-group v-model="otherVerbModel" color="#ff968f">
                    <v-list-item v-for="(item, i) in otherVerbs" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-card>
          </v-col>
          <!-- OTHER NOUN -->
          <v-col>
            <v-card>
              <v-card-text>Second noun</v-card-text>
              <v-card class="mx-auto" max-width="400">
                <v-list flat>
                  <v-list-item-group v-model="otherNounModel" color="#ff968f">
                    <v-list-item v-for="(item, i) in otherNouns" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-card>
          </v-col>
          <v-col>
            <v-radio-group v-model="currentTense">
              <v-radio
                v-for="n in ['present', 'past', 'future']"
                :key="n"
                :label="`${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
            <v-radio-group v-model="currentDirection">
              <v-radio
                v-for="n in ['direct', 'inverse']"
                :key="n"
                :label="`${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    collapseAwi() {
      if (this.currentDirection === "inverse") {
        if (this.verbs[this.verbModel]) {
          if (this.verbs[this.verbModel].text.endsWith("aw")) {
            return true;
          }
        }
      }
      return false;
    },
  },
  computed: {
    tense() {
      if (this.currentTense === "past") {
        return "kî-";
      }
      if (this.currentTense === "future") {
        return "ka-";
      }
      return "";
    },
    direction() {
      if (this.currentDirection === "direct") {
        return "âw";
      } else {
        if (this.collapseAwi()) {
          return "âk";
        } else {
          return "ik";
        }
      }
    },
    firstVerb() {
      const theVerb = this.verbs[this.verbModel];
      if (theVerb) {
        if (this.collapseAwi() === true) {
          return theVerb.text.replace("aw", "");
        } else {
          return theVerb.text;
        }
      }
      return "";
    },
    firstNoun() {
      const theNoun = this.nouns[this.nounModel];
      return theNoun ? theNoun.text : "";
    },
    secondVerb() {
      const theVerb = this.otherVerbs[this.otherVerbModel];
      return theVerb ? theVerb.text : "";
    },
    secondNoun() {
      const theNoun = this.otherNouns[this.otherNounModel];
      return theNoun ? theNoun.text + theNoun.obviate : "";
    },
  },
  data: () => ({
    title: "Frameworks driller",
    verbs: [
      {
        text: "wâpam",
      },
      {
        text: "sâmin",
      },
      {
        text: "nitohtaw",
      },
    ],
    verbModel: 0,
    nouns: [
      {
        text: "wâpos",
      },
      {
        text: "atim",
      },
      {
        text: "picikwâs",
      },
    ],
    nounModel: 0,
    otherVerbs: [
      {
        text: "pêhtaw",
      },
      {
        text: "mow",
      },
      {
        text: "kakwêcim",
      },
    ],
    otherVerbModel: 0,
    otherNouns: [
      {
        text: "sômin",
        obviate: "a",
      },
      {
        text: "okiniy",
        obviate: "a",
      },
      {
        text: "sôkâw",
        obviate: "a",
      },
    ],
    otherNounModel: 0,
    currentTense: "present",
    currentDirection: "direct",
  }),
};
</script>


<style scoped>
#main {
  font-size: 55px;
  line-height: 65px;
  padding: 15px;
  margin: 75px 0;
  color: #ddd;
}
.filler {
  text-decoration: underline;
  text-decoration-color: #ff968f;
  color: #ddd;
}
.person {
  color: #555;
  padding-right: 25px;
}
.v-list-item__title {
  font-size: 1.7em;
}
</style>