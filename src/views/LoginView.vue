<template>
    <v-container>
        <v-row>
            <v-col class="pa-16">
                <v-card class="my-10 mx-16 pa-5" tile>
                    <v-form class="px-16">
                        <v-text-field
                            label="E-Mail"
                            v-model="email"
                            :error-messages="emailErrors"
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            label="Senha"
                            type="password"
                            :error-messages="passwordErrors"
                            @input="$v.password.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="entrar">Entrar</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default({
    name: "LoginView",
    mixins: [validationMixin],
    data() {
        return {
            email: "",
            password: ""
        }
    },
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Não é um e-mail válido')
            !this.$v.email.required && errors.push('Email é obrigatório')
            return errors
        },
        passwordErrors() {
            const errors = []
            if(!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('Senha é obrigatória')
            return errors
        }
    },
    methods: {
        entrar() {
            this.$v.touch()
        }
    },
    validations: {
        email: { required, email },
        password: { required }
    }
})
</script>
