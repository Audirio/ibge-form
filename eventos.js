const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes'

const urlEstados = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados`

const urlCidades = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(data => {
        data.map(cadaResult => {
            regiao.innerHTML += `<option>${cadaResult.nome}</option>`;
        });     
    });