<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        @change="save"
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
  export default {
    props: {
        value: String,
        label: String
    },
    data: () => ({
      activePicker: null,
      date: null,
      menu: false,
    }),
    mounted(){
        this.date = this.value;
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
          this.$refs.menu.save(date)
        this.$emit('picked', date)
      },
    },
  }
</script>