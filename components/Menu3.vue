<template>
  <v-list>
    <v-list-item class="mt-5">
      <v-list-item-title
        ><h3>{{ $t('コンテンツ') }}</h3>
      </v-list-item-title>
    </v-list-item>
    <v-list-item v-for="(item, key) in items" :key="key" @click="id = item.id">
      <v-list-item-content>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Menu extends Vue {
  @Prop()
  items!: any[]

  get id(): any {
    return this.$store.getters.getId
  }

  set id(value) {
    this.$store.commit('setId', value)
  }
}
</script>
