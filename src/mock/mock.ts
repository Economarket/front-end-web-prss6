import { Category, Market, Product } from "../services/models";

export const markets_mock: Market[] = [
    {
        id: 1,
        uuid: "f696ee14-56d2-4697-9f18-db4d461e7ba8",
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
    {
        id: 3,
        uuid: "c72926d4-2f12-4d3a-b43d-341867a6ff21",
        name: "Congelados",
        searchName: "congelados"
    },
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
    {
        id: 11,
        uuid: "2deb746e-d9a8-45c2-aee6-cf28f01f7654",
        name: "Bazar",
        searchName: "bazar",
    },
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

export const products_mock: Product[] = [
    {
        "id": 1,
        "name": "Nuggets Empanados Sadia",
        "price": 13.58,
        "category": {
            "id": 3,
            "uuid": "c72926d4-2f12-4d3a-b43d-341867a6ff21",
            "name": "Congelados",
            "searchName": "congelados"
        },
        "brand": {
            "brandName": "Sadia"
        },
        "unity": "Kg"
    },
    {
        "id": 6,
        "name": "Salgadinho Doritos",
        "price": 6.59,
        "category": {
            "id": 4,
            "uuid": "460c364c-21b9-40ca-83db-b82efe2f7c0e",
            "name": "Mercearia",
            "searchName": "mercearia"
        },
        "brand": {
            "brandName": "Elma Chips"
        },
        "unity": "Un"
    },
    {
        "id": 10,
        "name": "Chocolate em barra Lacta Oreo",
        "price": 6.09,
        "category": {
            "id": 6,
            "uuid": "197e1773-3132-4520-b5cf-a6a92680ff1a",
            "name": "Doces",
            "searchName": "doces"
        },
        "brand": {
            "brandName": "Laka"
        },
        "unity": "Un"
    },
    {
        "id": 15,
        "name": "Lombo Suíno",
        "price": 69.0,
        "category": {
            "id": 2,
            "uuid": "533a1b7a-0cf6-41bb-b500-4e73dae3a7a5",
            "name": "Carnes",
            "searchName": "carnes"
        },
        "brand": {
            "brandName": "Friboi"
        },
        "unity": "Kg"
    },
    {
        "id": 16,
        "name": "Coca-cola 600ml",
        "price": 3.0,
        "category": {
            "id": 1,
            "uuid": "37ef972b-f772-475b-9545-02f9da7a4459",
            "name": "Bebidas",
            "searchName": "bebidas"
        },
        "brand": {
            "brandName": "Coca-cola"
        },
        "unity": "Un"
    },
]