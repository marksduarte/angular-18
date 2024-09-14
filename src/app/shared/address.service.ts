import { Injectable } from '@angular/core';

export interface UnidadeFederativa {
  nome: string;
  sigla: string;
  capital: string;
  regiao: string;
  gentilico: string;
  dataFundacao: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly unidadesFederativasJson = [
    {
      "nome": "Acre",
      "sigla": "AC",
      "capital": "Rio Branco",
      "regiao": "Norte",
      "gentilico": "acriano",
      "dataFundacao": "1962-06-15"
    },
    {
      "nome": "Alagoas",
      "sigla": "AL",
      "capital": "Maceió",
      "regiao": "Nordeste",
      "gentilico": "alagoano",
      "dataFundacao": "1817-09-16"
    },
    {
      "nome": "Amapá",
      "sigla": "AP",
      "capital": "Macapá",
      "regiao": "Norte",
      "gentilico": "amapaense",
      "dataFundacao": "1943-10-13"
    },
    {
      "nome": "Amazonas",
      "sigla": "AM",
      "capital": "Manaus",
      "regiao": "Norte",
      "gentilico": "amazonense",
      "dataFundacao": "1850-09-05"
    },
    {
      "nome": "Bahia",
      "sigla": "BA",
      "capital": "Salvador",
      "regiao": "Nordeste",
      "gentilico": "baiano",
      "dataFundacao": "1823-07-02"
    },
    {
      "nome": "Ceará",
      "sigla": "CE",
      "capital": "Fortaleza",
      "regiao": "Nordeste",
      "gentilico": "cearense",
      "dataFundacao": "1799-01-17"
    },
    {
      "nome": "Distrito Federal",
      "sigla": "DF",
      "capital": "Brasília",
      "regiao": "Centro-Oeste",
      "gentilico": "brasiliense",
      "dataFundacao": "1960-04-21"
    },
    {
      "nome": "Espírito Santo",
      "sigla": "ES",
      "capital": "Vitória",
      "regiao": "Sudeste",
      "gentilico": "capixaba",
      "dataFundacao": "1889-11-15"
    },
    {
      "nome": "Goiás",
      "sigla": "GO",
      "capital": "Goiânia",
      "regiao": "Centro-Oeste",
      "gentilico": "goiano",
      "dataFundacao": "1889-11-15"
    },
    {
      "nome": "Maranhão",
      "sigla": "MA",
      "capital": "São Luís",
      "regiao": "Nordeste",
      "gentilico": "maranhense",
      "dataFundacao": "1823-07-28"
    },
    {
      "nome": "Mato Grosso",
      "sigla": "MT",
      "capital": "Cuiabá",
      "regiao": "Centro-Oeste",
      "gentilico": "mato-grossense",
      "dataFundacao": "1889-11-15"
    },
    {
      "nome": "Mato Grosso do Sul",
      "sigla": "MS",
      "capital": "Campo Grande",
      "regiao": "Centro-Oeste",
      "gentilico": "sul-mato-grossense",
      "dataFundacao": "1977-10-11"
    },
    {
      "nome": "Minas Gerais",
      "sigla": "MG",
      "capital": "Belo Horizonte",
      "regiao": "Sudeste",
      "gentilico": "mineiro",
      "dataFundacao": "1720-02-02"
    },
    {
      "nome": "Pará",
      "sigla": "PA",
      "capital": "Belém",
      "regiao": "Norte",
      "gentilico": "paraense",
      "dataFundacao": "1772-08-15"
    },
    {
      "nome": "Paraíba",
      "sigla": "PB",
      "capital": "João Pessoa",
      "regiao": "Nordeste",
      "gentilico": "paraibano",
      "dataFundacao": "1585-08-05"
    },
    {
      "nome": "Paraná",
      "sigla": "PR",
      "capital": "Curitiba",
      "regiao": "Sul",
      "gentilico": "paranaense",
      "dataFundacao": "1853-12-19"
    },
    {
      "nome": "Pernambuco",
      "sigla": "PE",
      "capital": "Recife",
      "regiao": "Nordeste",
      "gentilico": "pernambucano",
      "dataFundacao": "1817-03-06"
    },
    {
      "nome": "Piauí",
      "sigla": "PI",
      "capital": "Teresina",
      "regiao": "Nordeste",
      "gentilico": "piauiense",
      "dataFundacao": "1823-10-19"
    },
    {
      "nome": "Rio de Janeiro",
      "sigla": "RJ",
      "capital": "Rio de Janeiro",
      "regiao": "Sudeste",
      "gentilico": "fluminense",
      "dataFundacao": "1565-03-01"
    },
    {
      "nome": "Rio Grande do Norte",
      "sigla": "RN",
      "capital": "Natal",
      "regiao": "Nordeste",
      "gentilico": "potiguar",
      "dataFundacao": "1889-11-15"
    },
    {
      "nome": "Rio Grande do Sul",
      "sigla": "RS",
      "capital": "Porto Alegre",
      "regiao": "Sul",
      "gentilico": "gaúcho",
      "dataFundacao": "1807-02-11"
    },
    {
      "nome": "Rondônia",
      "sigla": "RO",
      "capital": "Porto Velho",
      "regiao": "Norte",
      "gentilico": "rondoniense",
      "dataFundacao": "1981-12-22"
    },
    {
      "nome": "Roraima",
      "sigla": "RR",
      "capital": "Boa Vista",
      "regiao": "Norte",
      "gentilico": "roraimense",
      "dataFundacao": "1988-10-05"
    },
    {
      "nome": "Santa Catarina",
      "sigla": "SC",
      "capital": "Florianópolis",
      "regiao": "Sul",
      "gentilico": "catarinense",
      "dataFundacao": "1738-08-11"
    },
    {
      "nome": "São Paulo",
      "sigla": "SP",
      "capital": "São Paulo",
      "regiao": "Sudeste",
      "gentilico": "paulista",
      "dataFundacao": "1822-09-07"
    },
    {
      "nome": "Sergipe",
      "sigla": "SE",
      "capital": "Aracaju",
      "regiao": "Nordeste",
      "gentilico": "sergipano",
      "dataFundacao": "1820-10-08"
    },
    {
      "nome": "Tocantins",
      "sigla": "TO",
      "capital": "Palmas",
      "regiao": "Norte",
      "gentilico": "tocantinense",
      "dataFundacao": "1988-10-05"
    }
  ]

  public get unidadesFederativas(): UnidadeFederativa[] {
    return JSON.parse(JSON.stringify(this.unidadesFederativasJson));
  }
}
