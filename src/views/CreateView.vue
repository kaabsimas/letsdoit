<template>
    <v-card max-width="475" class="mx-auto my-16 pa-10">
        <v-form>
            <v-container>
                <v-row>
                    <v-col>
                        <v-slider 
                            v-model="priority"
                            label="prioridade" 
                            max="3" 
                            min="1"
                            tick-labels="123"
                            ticks="always"
                            tick-size="4"
                        ></v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <DateField @picked="date => expiring_at = date" label="Data Limite" :value="expiring_at"/>
                    </v-col>
                    <v-col>
                        <DateField @picked="date => created_at = date" label="Data de Cadastro" :value="created_at"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-textarea v-model="title" placeholder="Tarefa"></v-textarea>
                </v-row>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="cadastrar">Cadastrar</v-btn>
            </v-container>
        </v-form>
    </v-card>
</template>
<script>
import DateField from '../components/DateField'
export default ({
    name: "CreateView",
    components: {DateField},
    data() {
        return {
            title: "",
            priority: 1,
            expiring_at: "",
            created_at: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)    
        };
    },
    methods: {
        cadastrar() {
            console.log("Cadastrar")
            var item = {
                title: this.title,
                priority: this.priority,
                expiring_at: this.expiring_at,
                created_at: this.created_at
            }
            this.$store.commit('addListItem', item)
            this.$router.replace({ name: "lista" });
        }
    }
})
</script>
