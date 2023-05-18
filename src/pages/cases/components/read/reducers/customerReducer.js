import {ref} from "vue";
import supabase from "@/database";
import router from "@/router";

const customerReducer = {
    flush: function () {
        this.customer.value = {}
    },

    customer: ref({}),

    fetchCustomer: async function () {
        const id = router.currentRoute.value.params.id
        const queryString = "id, customer(name, email, phone, address, city, zipcode)"

        const { data } = await supabase.from("cases")
            .select(queryString)
            .eq("id", id)
            .single()

        this.customer.value = data.customer
    }
}

export default customerReducer