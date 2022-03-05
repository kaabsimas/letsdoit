<template>
    <v-container>
        <v-snackbar></v-snackbar>
        <v-row>
            <v-col>
                <v-card max-width="475" class="mx-auto my-16">
                    <v-toolbar dark color="primary">
                        <v-icon>clipboard-list-outline</v-icon>
                        <v-toolbar-title>To-Do</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon @click="addItem">mdi-plus</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-subheader>Let's Do It</v-subheader>
                        <v-list-item v-for="(item, index) in items" :key="item.id">
                            <v-checkbox
                                v-model="item.done"
                                @change="toggleDone(index)"
                            ></v-checkbox>
                            <v-list-item-content class="mx-10">
                                <v-list-item-title 
                                    v-text="item.title" 
                                    v-bind:class="{'text-decoration-line-through': item.done}"
                                ></v-list-item-title>
                                <v-divider v-if="index < items.length-1"></v-divider>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-chip
                                    color="primary"
                                    
                                >{{item.priority}}</v-chip>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>
<script>
export default({
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.items = this.$store.state.list
    },
    methods: {
        addItem(){
            this.$router.replace({name: "create"})
        },
        toggleDone(itemKey) {
            this.items[itemKey].done != this.items[itemKey].done
            this.$store.commit('updateList', this.items)
        }
    }
})
</script>
