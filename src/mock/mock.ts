import { Category, Market } from "../services/models";

export const markets_mock: Market[] = [
    {
        id: 1,
        uuid: "savegnago",
        name: "Savegnago",
        address: {
            id: 1,
            cep: "14802-000",
            street: "Av. Padre Francisco Salles Culturato",
            number: "1600",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 2,
        uuid: "assai",
        name: "Assaí",
        address: {
            id: 2,
            cep: "14802-000",
            street: "Av. José Bonifácio",
            number: "483",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 3,
        uuid: "14_supermercados",
        name: "Supermercados 14",
        address: {
            id: 3,
            cep: "14802-000",
            street: "Av. Padre Francisco Salles Culturato",
            number: "483",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 4,
        uuid: "atacadao",
        name: "Atacadão",
        address: {
            id: 4,
            cep: "14802-000",
            street: "Av. Aroeiras",
            number: "285",
            district: "Aroeiras",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 5,
        uuid: "casa_deliza",
        name: "Casa Deliza",
        address: {
            id: 5,
            cep: "14802-000",
            street: "Av. Armando Corrêa de Siqueira",
            number: "1419",
            district: "Vila Harmonia",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 6,
        uuid: "dia",
        name: "Supermercado Dia",
        address: {
            id: 6,
            cep: "14802-000",
            street: "Av. Armando Corrêa de Siqueira",
            number: "1419",
            district: "Vila Harmonia",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 7,
        uuid: "emporio_camargo",
        name: "Empório Camargo",
        address: {
            id: 7,
            cep: "14802-000",
            street: "R. Miguel Cortez",
            number: "315",
            district: "Vila Suconasa",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 8,
        uuid: "jau_serve",
        name: "Jaú Serve",
        address: {
            id: 8,
            cep: "14802-000",
            street: "R. Miguel Cortez",
            number: "315",
            district: "Vila Suconasa",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 9,
        uuid: "max_facil",
        name: "Max Fácil",
        address: {
            id: 9,
            cep: "14802-000",
            street: "R. Dom Carlos Carmelo",
            number: "716",
            district: "Botânico",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 10,
        uuid: "palomax",
        name: "Palomax",
        address: {
            id: 10,
            cep: "14802-000",
            street: "Av. Vaz Filho",
            number: "2874",
            district: "Vila Xavier",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 11,
        uuid: "passarinho",
        name: "Passarinho Horti Fruti",
        address: {
            id: 11,
            cep: "14802-000",
            street: "Rua Voluntários da Pátria",
            number: "2821",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 12,
        uuid: "paulistao",
        name: "Paulistão",
        address: {
            id: 12,
            cep: "14802-000",
            street: " Al. Paulista",
            number: "1960",
            district: "Vila Xavier",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 13,
        uuid: "sempre_vale",
        name: "Sempre Vale",
        address: {
            id: 13,
            cep: "14802-000",
            street: "Av. Antônio de Padua Corrêa",
            number: "938",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 14,
        uuid: "tiba",
        name: "Tiba",
        address: {
            id: 14,
            cep: "14802-000",
            street: " Av. José Nogueira Neves",
            number: "490",
            district: "Vila Melhado",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 15,
        uuid: "tonin",
        name: "Tonin",
        address: {
            id: 15,
            cep: "14802-000",
            street: "R. Castro Alves",
            number: "3445",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    },
    {
        id: 16,
        uuid: "vencedor",
        name: "Vencedor",
        address: {
            id: 16,
            cep: "14802-000",
            street: " Av. Maria Antonia Camargo de Oliveira",
            number: "2787",
            district: "Centro",
            city: "Araraquara",
            state: "São Paulo"
        }
    }
    
   
];

export const categories_mock: Category[] = [
    {
        id: 1,
        uuid: "37ef972b-f772-475b-9545-02f9da7a4459",
        name: "Bebidas",
        searchName: "bebidas",
    },
    {
        id: 2,
        uuid: "533a1b7a-0cf6-41bb-b500-4e73dae3a7a5",
        name: "Carnes",
        searchName: "carnes",
    },
    // {
    //     id: 3,
    //     uuid: "c72926d4-2f12-4d3a-b43d-341867a6ff21",
    //     name: "Congelados"
    // },
    {
        id: 4,
        uuid: "460c364c-21b9-40ca-83db-b82efe2f7c0e",
        name: "Mercearia",
        searchName: "mercearia",
    },
    {
        id: 5,
        uuid: "0930bddf-7d3f-4d0a-a7b3-73255b091d0c",
        name: "Cereais",
        searchName: "cereais",
    },
    {
        id: 6,
        uuid: "197e1773-3132-4520-b5cf-a6a92680ff1a",
        name: "Doces",
        searchName: "doces",
    },
    {
        id: 7,
        uuid: "4473b788-48e5-49ec-9063-d275440b6e5c",
        name: "Hortifruti",
        searchName: "hortifruti",
    },
    {
        id: 8,
        uuid: "52517249-f534-463b-8bd5-ade93ab8942d",
        name: "Higiene e Beleza",
        searchName: "higiene_beleza",
    },
    {
        id: 9,
        uuid: "d1805361-1497-43b1-8d0d-a3345867dad3",
        name: "Limpeza",
        searchName: "limpeza",
    },
    {
        id: 10,
        uuid: "b3a0586a-136e-4f61-93d5-45c5496d042c",
        name: "Jardinagem",
        searchName: "jardinagem",
    },
    // {
    //     id: 11,
    //     uuid: "2deb746e-d9a8-45c2-aee6-cf28f01f7654",
    //     name: "Bazar",
    //     searchName: "bazar",
    // },
    {
        id: 12,
        uuid: "c4d31ee7-4d76-4ac9-a29b-763017a7e296",
        name: "Outros",
        searchName: "outros",
    },
    {
        id: 13,
        uuid: "1909caa1-ab93-48ab-ab5d-3e17a95afe92",
        name: "Frios",
        searchName: "frios",
    },
    {
        id: 14,
        uuid: "f54cbd95-d828-48d6-8f95-19fd5dd77632",
        name: "Pet-Shop",
        searchName: "pet_shop",
    },
    {
        id: 15,
        uuid: "1d079d9d-dbd7-4fd1-b34b-48fc51a14bf3",
        name: "Laticínios",
        searchName: "laticinios",
    },
    {
        id: 16,
        uuid: "e96a90ce-5e52-433a-a422-2daa8ab8dfb4",
        name: "Padaria",
        searchName: "padaria",
    }
];