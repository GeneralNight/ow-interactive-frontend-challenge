<template>
    <section id="containerFormCheckout">
        <div class="container">
            <div class="row">
                <div class="col">
                    <form @submit.prevent="sendCheckout()">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="formName">Nome*</label>
                                    <input type="text" class="form-control" id="formName" required>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="formCep">CEP*</label>
                                    <input type="text" class="form-control" id="formCep" required>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="formMail">E-mail*</label>
                                    <input type="text" class="form-control" id="formMail" required>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="formAddress">Endereço*</label>
                                    <input type="text" class="form-control" id="formAddress" required>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="formNumber">Número*</label>
                                    <input type="text" class="form-control" id="formNumber" required>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="formCpf">CPF*</label>
                                    <input type="text" class="form-control" id="formCpf" required>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="formComplement">Complemento</label>
                                    <input type="text" class="form-control" id="formComplement">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="formNeighborhood">Bairro*</label>
                                    <input type="text" class="form-control" id="formNeighborhood" required>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="formBithDate">Data de Nascimento*</label>
                                    <input type="date" class="form-control" id="formBithDate" required>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="formPhone">Telefone*</label>
                                    <input type="text" class="form-control" id="formPhone" required>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="formCity">Cidade*</label>
                                    <input type="text" class="form-control" id="formCity" required>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                <label for="formState">Estado*</label>
                                    <b-form-select id="formState" v-model="form.academyState" required :options="states"></b-form-select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'FormCheckout',
data() {
    return {
        form: {
            name: '',
            email: '',
            cpf: '',
            birthDate: '',
            phone: '',
            address: {
                cep: '',
                street: '',
                number: '',
                complement: '',
                neighborhood: '',
                city: '',
                state: ''
            }
        },
        states: [
            {value:'AC',text:'AC'},
            {value:'AL',text:'AL'},
            {value:'AM',text:'AM'},
            {value:'AP',text:'AP'},
            {value:'BA',text:'BA'},
            {value:'CE',text:'CE'},
            {value:'DF',text:'DF'},
            {value:'ES',text:'ES'},
            {value:'GO',text:'GO'},
            {value:'MA',text:'MA'},
            {value:'MG',text:'MG'},
            {value:'MS',text:'MS'},
            {value:'MT',text:'MT'},
            {value:'PA',text:'PA'},
            {value:'PB',text:'PB'},
            {value:'PE',text:'PE'},
            {value:'PI',text:'PI'},
            {value:'PR',text:'PR'},
            {value:'RJ',text:'RJ'},
            {value:'RN',text:'RN'},
            {value:'RO',text:'RO'},
            {value:'RR',text:'RR'},
            {value:'RS',text:'RS'},
            {value:'SC',text:'SC'},
            {value:'SE',text:'SE'},
            {value:'SP',text:'SP'},
            {value:'TO',text:'TO'},
        ],
    }
}
}
</script>

<style lang="scss" scoped>
#containerFormCheckout {
    padding: 60px 0;

    label {
        color: #434343;
        font-family: 'source-sans-reg';
    }

    input,select {
        box-shadow: none;
        outline: none;
        &:focus {
            border-color: #8e36b7;
        }
    }
}
</style>