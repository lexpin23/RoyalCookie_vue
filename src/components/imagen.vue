<template>
  <div>
    <v-row>
      <v-col  v-for="(item, index) in items" :key="index">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="item.download_url" height="200px"></v-img>

          <v-card-title>
            {{ item.author }}
          </v-card-title>

          <v-card-subtitle>
            ID: {{ item.id }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              Ver más
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <p>height: {{ item.height }}</p>
                <p>width: {{ item.width }}</p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  props: ['items'],

  data: () => ({
    show: false,
  }),
}
</script>