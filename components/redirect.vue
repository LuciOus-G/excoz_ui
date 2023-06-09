<script>
export default {
    data(){
        // check if cookie or session is ready
    if (this.$cookies.get('Authorizationdd', { parseJSON: false }) === undefined ||
        sessionStorage.getItem("Authorizationdd") === null) {
          this.$router.push({path: "/dashboard"})
        }
    }
}
</script>