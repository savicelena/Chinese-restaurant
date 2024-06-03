<template>
    <div v-if="isSignedIn">
        <AccountVue></AccountVue>
    </div>
    <div v-else>
        <SignIn></SignIn>
    </div>
</template>

<script>
import SignIn from "@/views/SignIn.vue"
import AccountVue from "@/views/AccountVue.vue"
import {mapGetters} from "vuex"
export default{
    name: "CheckSignIn",
    components: {
        SignIn,
        AccountVue
    },
    methods: {
        ...mapGetters(["isSignedIn"])
    }
}


</script>
