<template>
  <div>
    <div>
      <v-navigation-drawer v-model="drawer" app :width="256">
        <Menu :id="$route.query.id" :items="items"></Menu>
      </v-navigation-drawer>
      <v-navigation-drawer
        v-model="drawer2"
        app
        :temporary="true"
        right
        :width="256 * 2"
      >
        <Metadata></Metadata>
      </v-navigation-drawer>

      <v-app-bar color="primary" dark flat>
        <v-btn icon @click="drawer = !drawer"
          ><v-icon>mdi-view-list</v-icon></v-btn
        >
        <v-toolbar-title>
          <Title></Title>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- class="mr-2" -->
        <v-btn
          depressed
          color="primary"
          :href="baseUrl + localePath({ name: 'index' })"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn depressed btn color="primary" v-on="on">
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="switchLocalePath('ja')">
              <v-list-item-title>日本語</v-list-item-title>
            </v-list-item>
            <v-list-item :to="switchLocalePath('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-app-bar-nav-icon
          v-show="xml"
          class="ml-2"
          @click.stop="drawer2 = !drawer2"
        />
      </v-app-bar>
    </div>

    <div v-if="!xml">
      <v-container class="pa-10">
        <h2>TEI Viewer</h2>
        <p class="mt-5">TEI/XMLファイルを選択してください。</p>
        <input type="file" @change="onFileChange" />

        <div v-for="(item, key) in examples" :key="key">
          <h3 class="mt-10 mb-2">
            {{ $t('例') }} {{ key + 1 }}：{{ item.label }}
          </h3>

          <v-btn
            color="primary"
            class="ma-2"
            :href="
              baseUrl + localePath({ name: 'index', query: { u: item.url } })
            "
            >{{ $t('可視化例を見る') }}</v-btn
          >
          <v-btn class="ma-2" :href="item.url">{{
            $t('サンプルデータを見る')
          }}</v-btn>
        </div>
      </v-container>
    </div>

    <template v-if="loading"
      ><div class="pa-10 text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </template>

    <v-container v-show="xml" fluid>
      <v-row class="mt-2">
        <v-col cols="12" :sm="manifest ? 6 : 12">
          <v-card
            id="container"
            flat
            outlined
            class="scroll"
            :class="vertical ? 'vertical' : ''"
            :style="`height: ${height * 0.8}px; width: ${
              manifest ? width / 2 : width
            }px;`"
          >
            <div class="pa-4 px-5">
              <aaa :element="element"></aaa>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" :sm="manifest ? 6 : 12">
          <iframe
            v-show="!loading"
            v-if="manifest"
            :src="`https://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest=${manifest}&canvas=${canvas}&bottomPanel=false`"
            width="100%"
            :style="`height: ${height * 0.8}px;`"
            allowfullscreen="allowfullscreen"
            frameborder="0"
          >
          </iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CETEI from 'CETEIcean'
import $ from 'jquery'
import VueScrollTo from 'vue-scrollto'
import Metadata from '~/components/Metadata3.vue'
import Menu from '~/components/Menu3.vue'
import Title from '~/components/Title.vue'
import aaa from '~/components/aaa2.vue'

const convert = require('xml-js')

export default {
  components: {
    Menu,
    Metadata,
    Title,
    aaa,
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL || '',
      siteName: process.env.siteName || '',

      github: process.env.github || '',

      loading: false,

      width: window.innerWidth,
      height: window.innerHeight,

      drawer: false,
      drawer2: false,

      // pos: 1,
      // canvas: '',
      manifest: null,

      // divs: [],
      // ids: {},
      // ids2: {},
      // divs2: [],

      element: {},

      vertical: true,

      items: [],
    }
  },
  head() {
    const title = this.$t(this.siteName)
    return {
      titleTemplate: null,
      title,
    }
  },
  computed: {
    examples: {
      get() {
        console.log(this.baseUrl + '/data/sat.xml')
        return [
          {
            label: '釋禪波羅蜜次第法門',
            url: this.baseUrl + '/data/sat.xml',
          },
        ]
      },
    },

    style: {
      get() {
        return this.$store.getters.getStyle
      },
      set(value) {
        this.$store.commit('setStyle', value)
      },
    },

    xml: {
      get() {
        return this.$store.getters.getXml
      },
      set(value) {
        this.$store.commit('setXml', value)
      },
    },

    facs: {
      get() {
        return this.$store.getters.getFacs
      },
      set(value) {
        this.$store.commit('setFacs', value)
      },
    },

    canvas: {
      get() {
        return this.$store.getters.getCanvas
      },
      set(value) {
        this.$store.commit('setCanvas', value)
      },
    },

    id: {
      get() {
        return this.$store.getters.getId
      },
      set(value) {
        this.$store.commit('setId', value)
      },
    },
  },

  watch: {
    id(val) {
      console.log({ val })
      if (!val) {
        return
      }

      this.$router.push(
        this.localePath({
          name: 'index',
          query: {
            u: this.$route.query.u,
            id: val,
          },
        }),
        () => {},
        () => {}
      )

      this.id = val
      this.canvas = this.facs[val]
      this.scroll(val)
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)

    const query = this.$route.query

    if (!query.u) {
      return
    }

    this.loading = true

    const url = query.u || this.baseUrl + '/data/sat.xml'
    const CETEIcean = new CETEI()

    const self = this
    CETEIcean.getHTML5(url, function (data) {
      self.init(data)
    })
  },

  methods: {
    init(data) {
      console.log('downloaded.')
      this.xml = data

      const dfStr = convert.xml2json(data.outerHTML, {
        compact: false,
        spaces: 4,
      })
      const df = JSON.parse(dfStr)
      this.element = df

      // facs
      const sources = $(data).find('tei-surface')
      const facs = {}
      for (let i = 0; i < sources.length; i++) {
        const source = sources[i]
        facs[$(source).attr('xml:id')] = $(source).attr('source')
      }

      // メイン

      const canvas = facs[Object.keys(facs)[0]]
      this.canvas = canvas

      this.facs = facs

      // マニフェスト
      const manifest = $(data).find('tei-facsimile').attr('source')
      this.manifest = manifest

      // fabs

      const items = []
      const pbs = $(data).find('tei-pb')
      for (let i = 0; i < pbs.length; i++) {
        const pb = pbs[i]
        const corresp = $(pb).attr('corresp')
        if (!corresp) {
          continue
        }
        const label = corresp.replace('#', '')
        items.push({
          label,
          id: label,
        })
      }

      this.items = items

      this.loading = false

      // scroll
      // スクロールがうまくできない

      console.log('processed.')
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files

      const reader = new FileReader()
      reader.readAsText(files[0])

      const self = this

      reader.onload = function () {
        const CETEIcean = new CETEI()

        CETEIcean.makeHTML5(reader.result, function (data) {
          self.init(data)
        })
      }
    },
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth
      this.height = window.innerHeight
    },

    scroll(id) {
      const point = document.querySelector('#' + id).getBoundingClientRect()
      const point2 = document
        .querySelector('#container')
        .getBoundingClientRect()

      const options = {
        container: '#container',
        offset: -1 * point2.width + point.width,
        x: true,
      }
      VueScrollTo.scrollTo('#' + id, 500, options)
    },
  },
}
</script>
<style>
.scroll {
  overflow: auto;
}

.vertical {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
</style>
