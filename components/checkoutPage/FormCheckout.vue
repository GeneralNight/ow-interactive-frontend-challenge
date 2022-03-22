<template>
    <section id="containerFormCheckout">
        <div class="container">
            <div class="row">
                <div class="col">
                    <form @submit.prevent="sendCheckout()">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="formName">Nome*</label>
                                    <input type="text" class="form-control" id="formName" v-model="form.name" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="formCep">CEP*</label>
                                    <input type="text" class="form-control" id="formCep" @change="fillByCep" v-model="form.address.cep" v-mask="'#####-###'" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="formMail">E-mail*</label>
                                    <input type="email" class="form-control" id="formMail" v-model="form.email" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="form-group">
                                    <label for="formAddress">Endereço*</label>
                                    <input type="text" class="form-control" id="formAddress" v-model="form.address.street" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-2">
                                <div class="form-group">
                                    <label for="formNumber">Número*</label>
                                    <input type="text" class="form-control" id="formNumber" v-model="form.address.number" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label for="formCpf">CPF*</label>
                                    <input type="text" class="form-control" v-mask="'###.###.###-##'" id="formCpf" v-model="form.cpf" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="form-group">
                                    <label for="formComplement">Complemento</label>
                                    <input type="text" class="form-control" v-model="form.address.complement" id="formComplement">
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="form-group">
                                    <label for="formNeighborhood">Bairro*</label>
                                    <input type="text" class="form-control" v-model="form.address.neighborhood" id="formNeighborhood" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="form-group">
                                    <label for="formBithDate">Data de Nascimento*</label>
                                    <input type="date" class="form-control" v-model="form.birthDate" id="formBithDate" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="form-group">
                                    <label for="formPhone">Telefone*</label>
                                    <input type="text" class="form-control" v-mask="'(##) #####-####'" v-model="form.phone" id="formPhone" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="form-group">
                                    <label for="formCity">Cidade*</label>
                                    <input type="text" class="form-control" v-model="form.address.city" id="formCity" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-2">
                                <div class="form-group">
                                <label for="formState">Estado*</label>
                                    <b-form-select id="formState" v-model="form.address.state" required :options="states"></b-form-select>
                                </div>
                            </div>
                        </div>
                        <b-alert :show="someErrorInForm.status" variant="danger"> {{someErrorInForm.text}}</b-alert>
                        <div class="row justify-content-end mt-4">
                            <div class="col-12 col-sm-6 col-md-4 ">
                                <button :disabled="bCheckout.disabled" type="submit" class="bCheckout">{{bCheckout.text}}</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {api} from '~/services.js'
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
        someErrorInForm: {
            status: false,
            text: ''
        },
        bCheckout: {
            disabled: false,
            text: 'Concluir compra'
        },
        maioridade: 18
    }
},
methods: {
    async fillByCep() {
        var cleanCep = this.form.address.cep.replaceAll("-","")
        if(cleanCep.length!=8) {
            return
        }
        await api.getAddress(cleanCep).then(async res => {
            this.form.address.street = res.data.logradouro
            this.form.address.neighborhood = res.data.bairro
            this.form.address.city = res.data.localidade
            this.form.address.state = res.data.uf
            this.form.address.complement = res.data.complemento
            console.log(res.data)
        })
    },
    verifyFields() {
        var cleanCep = this.form.address.cep.replaceAll("-","")
        var cleanPhone = this.form.phone.replaceAll(/[() -]/gi, '')
        if(cleanCep.length!=8) {
            this.someErrorInForm.text =  'CEP inválido.'
            return true
        }else if(cleanPhone.length!=11) {
            this.someErrorInForm.text =  'Telefone inválido.'
            return true
        }else if(!this.CpfIsValid(this.form.cpf)) {
            this.someErrorInForm.text =  'CPF inválido.'
            return true
        }else if(this.getAge(this.form.birthDate)<this.maioridade) {
            this.someErrorInForm.text =  'Você deve ser de maioridade para realizar a compra.'
            return true
        }
    },
    clearMasks() {
        this.form.cpf = this.form.cpf.replaceAll(/[-.]/gi, '')
        this.form.phone = this.form.phone.replaceAll(/[() -]/gi, '')
        this.form.cep = this.form.cep.replaceAll(/[-]/gi, '')
    },
    async sendCheckout() {
        this.bCheckout.disabled = true
        this.bCheckout.text = 'Enviando'
        this.someErrorInForm.status = false
        if(this.verifyFields()) {
            this.someErrorInForm.status = true
            this.bCheckout.text = 'Concluir compra'
            this.bCheckout.disabled = false 
            return
        }

        // this.clearMasks()
        // await api.sendCheckout(this.form).then(res => {
        //     console.log(res.data)
        // })
        setTimeout(async () => {
            this.$bvModal.show('modalCheckoutSuccess')
            this.bCheckout.text = 'Concluir compra'
            this.bCheckout.disabled = false
            this.cleanCart()
        }, 3000);
    },
    cleanCart() {
        this.$store.commit('CLEAN_CART')
        if (process.client) {
            if(window.localStorage.cart && window.localStorage.cart.length>0) {
                window.localStorage.clear()
            }
        }
        this.$store.commit('SOME_ITEM_ADDED')
    },
    CpfIsValid(strCPF) {
        strCPF = strCPF.replaceAll('.', '');
        strCPF = strCPF.replaceAll('-', '');
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    },
    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
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

    .bCheckout {
        border: none;
        border-radius: 5px;
        font-size: 1.15rem;
        font-family: 'source-sans-reg';
        padding: 10px 0px;
        text-decoration: none;
        width: 100%;
        transition: .2s;
        background: #8e36b7;
        color: #fff;

        &:hover {
            filter: brightness(.9);
        }

        &:disabled {
            opacity: .8;
            pointer-events: none;
        }
    }
}
</style>