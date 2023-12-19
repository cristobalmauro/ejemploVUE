<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">Razon social</label>
                        <input v-model="ficha.razonsocial" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nombre comercial de la empresa</label>
                        <input v-model="ficha.nombre" nombrecomercialdelaempresa="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Rubro de la empresa</label>
                        <input v-model="ficha.rubrodelaempresa" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">R.U.C</label>
                        <input v-model="ficha.ruc" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input v-model="ficha.email" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Dirección</label>
                        <input v-model="ficha.direccion" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Apellidos y nombres</label>
                        <input v-model="ficha.apellidosynombres" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Cargo</label>
                        <input v-model="ficha.cargo" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input v-model="ficha.telefono" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Anexo</label>
                        <input v-model="ficha.anexo" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input v-model="ficha.email" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Jefe Dpto RR HH</label>
                        <input v-model="ficha.email" type="email" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/ficha_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs,getDoc, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            ficha: {
                razon: '',
                nombrecomercialdelaempresa: '',
                rubrodelaempresa: '',
                ruc: '',
                email: '',
                direccion: '',
                telefono: '',
                apellidoynombres: '',
                cargo: '',
                email: '',
                jefedptorrhh: '',
            },
        }
    },
    methods: {
        async getUrls() {
            try {
                const q = doc(db, "ficha", this.id);
                const respuesta = await getDoc(q);
                this.ficha=respuesta.data()
            } catch (error) {
                console.log(error);
            }
        },
        async guardar() {
            try {
                const q = doc(db, 'ficha',this.id);
                const docRef = await updateDoc(q,this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getUrls()
    }
})
</script>