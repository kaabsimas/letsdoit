<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card max-width="475" class="mx-auto my-16">
                    <v-toolbar dark color="primary">
                        <v-icon>clipboard-list-outline</v-icon>
                        <v-toolbar-title>To-Do</v-toolbar-title>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-subheader>Let's Do It</v-subheader>
                        <v-list-item v-for="(item, index) in items" :key="item.id">
                            <v-checkbox
                                v-model="item.done"
                            ></v-checkbox>
                            <v-list-item-content class="mx-10">
                                <v-list-item-title 
                                    v-text="item.nome" 
                                    v-bind:class="{'text-decoration-line-through': item.done}"
                                ></v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ item.description }}
                                </v-list-item-subtitle>
                                <v-divider v-if="index < items.length-1"></v-divider>
                            </v-list-item-content>
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
            items: [
                {id: 1, done: false, nome: "Albert", description: "Ele é o papai"},
                {id: 2, done: false, nome: "Larissa", description: "Ela é a mamai"},
                {id: 3, done: false, nome: "Arthur", description: "Ele é o irmão mais velho"},
                {id: 4, done: false, nome: "Romeu", description: "Ele é o dengoso"},
                {id: 5, done: false, nome: "Maurício", description: "Ele é o zangado"},
                {id: 6, done: false, nome: "Maria", description: "Ela é a fadinha"}
            ]
        }
    }
})
</script>
