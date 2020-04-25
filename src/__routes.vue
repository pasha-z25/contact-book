<script>
    import Auth from "./views/auth";
    import Register from "./views/register";
    import App from "./views/app";

    export default {
        name: 'Routes',
        components: {Auth, Register, App},
        views: {
            Auth
        }
        '/auth': 'Auth',
        '/register': 'Register',
        '/app': 'App'
    }
</script>