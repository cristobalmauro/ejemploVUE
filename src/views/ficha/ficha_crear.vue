<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="text-bg-primary p-3">
                <h1 class="text-center">FICHA DE REQUERIMIENTO DE PERSONAL</h1>
            </div>
            <div class="text-bg-secondary p-3">
                <h2>DATOS DE LA EMPRESA SOLICITANTE</h2>
            </div>
                <h3>Fecha:      /     /   </h3>
                    <div class="mb-3">
                        <label class="form-label">Razon social</label>
                        <input v-model="ficha.razonsocial" type="text" class="form-control">
                    </div> 
                    <div class="mb-3">
                        <label class="form-label">Nombre comercial de la empresa</label>
                        <input v-model="ficha.nombrecomercialdelaempresa" type="text" class="form-control">
                    </div>
                    <div class="row">
                            <div class="col-md-5">
                                <div class="mb-5">
                               <label class="form-label">Rubro de la empresa</label>
                               <input v-model="ficha.rubrodelaempresa" type="text" class="form-control">
                            </div>
                    </div>
                         <div class="col-md-5">
                                <div class="mb-5">
                                  <label class="form-label">R.U.C</label>
                                  <input v-model="ficha.ruc" type="text" class="form-control">
                                </div>
                             </div>
                             <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input v-model="ficha.email" type="text" class="form-control"> 
                              <label class="form-label">Direccion</label>
                             <input v-model="ficha.direccion" type="text" class="form-control">
                            </div>  
                            <div class="col-md-12">
                        <label class="form-label">Teléfono</label>
                        <input v-model="ficha.telefono" type="text" class="form-control">
                    </div>
                      </div>
                    <div class="mb-3">
                        <div class="text-bg-secondary p-3">
                        <h2>DATOS DE LA SOLICITANTE</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                        <label class="form-label">Apellido y Nombre</label>
                        <input v-model="ficha.apellidoynombre" type="text" class="form-control">
                    </div>
                          
                             <div class="col-md-12">
                              
                        <label class="form-label">Cargo</label>
                        <input v-model="ficha.cargo" type="text" class="form-control">
                     
                     </div>
                              <div class="mb-5">

                              <label class="form-label">Teléfono</label>
                        <input v-model="ficha.telefono" type="text" class="form-control">
                    
                  <label class="form-label">Anexo</label>
                  <input v-model="ficha.anexo" type="text" class="form-control">
            
                </div>  
            </div>
                 
                      <div class="mb-10">
                        <label class="form-label">E-mail</label>
                        <input v-model="ficha.email" type="text" class="form-control">
                       </div>
                       
                         <label class="form-label">Jefe Dpto RR HH</label>
                        <input v-model="ficha.jefedptorrhh" type="text" class="form-control">
                       </div>
                    
                    </div>
                    </div>
        </div>
        </div>
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/ficha_listar">Cancelar</RouterLink>
        
</template>
<script>

import { collection, getDocs, query, where,addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
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
        async guardar() {
            try {
                const q = query(collection(db, 'ficha'));
                const docRef = await addDoc(q, this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            } 
        },
    },
    created() {
    }
})
</script>