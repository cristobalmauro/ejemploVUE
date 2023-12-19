<template>
    <div class="row">
        <div class="col-md-12">
            <RouterLink class="btn btn-primary" to="/ficha_crear">DATOS DE LA EMPRESA SOLICITANTE</RouterLink>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">razon social</th>
                                <th scope="col">rubro de la empresa</th>
                                <th scope="col">ruc</th>
                                <th scope="col">e-mail</th>
                                <th scope="col">direccion</th>
                                <th scope="col">telefono</th>
                                <th scope="col">apellidos y nombres</th>
                                <th scope="col">cargo</th>
                                <th scope="col">telefono</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in ficha ">
                                <td>{{ data.rozonsocial }}</td>
                                <td>{{ data.nombrecomercialdelaempresa }}</td>
                                <td>{{ data.rubrodelaempresa }}</td>
                                <td>{{ data.ruc }}</td>
                                <td>{{ data.e-mail }}</td>
                                <td>{{ data.direccion }}</td>
                                <td>{{ data.telefono }}</td>
                                <td>{{ data.apellidosynombres }}</td>
                                <td>{{ data.cargo }}</td>
                                <td>{{ data.telefono }}</td>
                                <td>{{ data.e-mail }}</td>
                                <td>{{ data.jefedptorrhh }}</td>
                              
                                <td>
                                    <RouterLink class="btn btn-success" :to="'/ficha_editar/' + data.id">Editar</RouterLink>
                                    <button class="btn btn-danger" @click="eliminar(data.id)">Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { collection, getDocs, query, where,deleteDoc,doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            loadingDoc: false,
            ficha: []
        }
    },

    methods: {
        async getUrls() {
            try {
                this.ficha= []
                const q = query(
                    collection(db, "ficha")
                );
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    this.ficha.push({
                        razonsocial: doc.data().razonsocial,
                        nombrecomercialdelaempresa: doc.data().nombrecomercialdelaempresa,
                        ruc: doc.data().ruc,
                        email: doc.data().email,
                        direccion: doc.data().direccion,
                        telefono: doc.data().telefono,
                        apellidosynombres: doc.data().apellidosynombres,
                        cargo: doc.data().cargo,
                        telefono: doc.data().telefono,
                        anexo: doc.data().anexo,
                        email: doc.data().email,
                        jefedptorrhh: doc.data().jefedptorrhh,
                        id: doc.id,
                        // ...doc.data()
                    });
                });
                // console.log(this.curso);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(id) {
            try {
                const q = doc(db, "ficha", id);
                const docRef = await deleteDoc(q);
                this.getUrls()
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getUrls()
    }
})
</script>