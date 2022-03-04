import {rest} from 'msw'
import store from '../store/index'

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        store.commit('setAuthentication', true)
        
        return res(ctx.status(200));
    }),
    rest.get('/user', (req, res, ctx) => {
        const isAuthenticated = store.state.authenticated

        console.log(typeof isAuthenticated, isAuthenticated)

        if(! isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: "Não autorizado"
                })
            );
        }

        return res(
            ctx.status(200),
            ctx.json({
                username: "Albert Melo"
            })
        );
    }),
    rest.get('/logout', (req, res, ctx) => {
        store.commit('setAuthentication', false)

        return res(ctx.status(200));
    })
]