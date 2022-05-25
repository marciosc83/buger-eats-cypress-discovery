//var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        /**var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()**/

        var data = {
            name: 'Marcio Soares',
            cpf: cpf.generate(),
            email: 'marcio@email.com',
            whatsapp: '48 99999-9999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'apt 124',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        
        return data
    }
}