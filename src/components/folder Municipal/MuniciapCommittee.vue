<template>
    <KpapHeaderThreeTow />
    <!-- start main -->
    <section class="container-fluid font_text overflow-hidden px-3 px-md-5">
        <div class="row justify-content-center justify-content-md-end pe-2">
            <div class="d-flex justify-content-center justify-content-md-end col-md-6" data-aos="fade-left">
                <div class="d-flex justify-content-end div_mia div_width_50 position-relative pt-3 px-4 px-md-0">
                    <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                    <input type="input" class="form__field w-100" name="name" id='name' />
                    <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في
                        الرسائل</label>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-6 col-lg-4 mt-3" v-for="array in arrays" :key="array" data-aos="fade-up">
                <div class="border border-2 rounded-3 px-1 px-md-4 p-4 bg-white text-center text-md-end">
                    <p class="text-secondary" v-for="item in id_header" :key="item.id">{{ item.date
                    }}</p>
                    <p v-for="item in id_header" :key="item.id">{{ item.commission_text
                    }}</p>
                </div>
            </div>
        </div>
    </section>
    <!-- end main -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_members"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const methods = {
            id: doc.id,
            commission_text: doc.data().commission_text,
            date: doc.data().date,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
import KpapHeaderThreeTow from "../folder header and footer/Header3_2.vue"
export default {
    name: "KpapCommittee",
    data() {
        return {
            arrays: [1, 2, 3, 4, 5, 6]
        }
    },
    components: {
        KpapHeaderThreeTow
    }
}
</script>