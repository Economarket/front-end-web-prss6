import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import Select from "../../components/Select";
import { postProduct } from "../../services/product";
import { getFieldsUnity } from "../../services/unity";
import { schemaRegisterProduct } from "../../utils/schema";
import * as S from "../styles";
import { SelectOption } from "../../components/Select/index";
import { getBrand } from "../../services/brand";
import CreatableSelect from "../../components/CreatableSelect";
import { searchCategory } from "../../services/category";
import { searchMarket100 } from "../../services/market";
import { Brand } from "../../services/models";
import { currencyMask } from "../../fomatters/currencyMask";

export default function RegisterProducts() {
  // const navigate = useNavigate();
  const [categories, setCategories] = useState<SelectOption[]>([]);
  const [markets, setMarkets] = useState<SelectOption[]>([]);
  const [unities, setUnities] = useState<SelectOption[]>([]);
  // const [brandiesOption, setBrandiesOption] = useState<SelectOption[]>([]);
  const [brandies, setBrandies] = useState<Brand[]>([]);

  // const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      brandId: "",
      unity: "",
      price: "",
      category: "",
      market: "",
    },
    resolver: yupResolver(schemaRegisterProduct),
  });

  const getUnities = useCallback(async () => {
    try {
      const response = await getFieldsUnity();

      setUnities(
        response.map((item: { abbreviation: any; description: any }) => ({
          value: item.abbreviation,
          label: item.description,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getBrandies = useCallback(async () => {
    try {
      const response = await getBrand();

      setBrandies(response.content);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCategories = useCallback(async () => {
    try {
      const response = await searchCategory();

      setCategories(
        response.map((item: { id: any; name: any }) => ({
          value: item.id,
          label: item.name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getMarkets = useCallback(async () => {
    try {
      const response = await searchMarket100();

      setMarkets(
        response.content.map((item: { id: any; name: any }) => ({
          value: item.id,
          label: item.name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useLayoutEffect(() => {
    getUnities();
    getBrandies();
    getCategories();
    getMarkets();
  }, [getUnities, getBrandies, getCategories, getMarkets]);

  const onSubmit = async (data: any) => {
    console.log(data);
    const dataRequest = {
      ...data,
    };
    console.log(dataRequest);
    console.log(data.brandId);
    console.log(brandies);

    const brand = brandies.find((b) => b.id === parseInt(data.brandId));

    console.log(brand);
    // await postProduct(
    // data.name,
    // brand,
    // data.unity,
    // data.price,
    // data.category,
    // data.market
    //
    // ).then(() => {
    //   console.log(data);
    // });
  };

  return (
    <S.WrapperRegisteProducts>
      <S.Title>Vamos cadastrar um produto?</S.Title>

      <S.ProductContainer>
        <S.Form>
          <InputText
            {...register("name")}
            name="name"
            label="Nome"
            placeholder="Digite o nome do produto"
            errorMessage={errors.name?.message}
          />

          <CreatableSelect
            {...register("brandId")}
            isAutocomplete
            options={brandies.map((item: { id?: any; brandName: any }) => ({
              value: item.id,
              label: item.brandName,
            }))}
            label="Marca"
            placeholder="Selecione ou digite a marca"
            onChange={(option: { value: string }) =>
              setValue("brandId", option.value)
            }
            errorMessage={errors.brandId?.message}
          />

          <Select
            {...register("unity")}
            isAutocomplete
            options={unities}
            label="Unidade"
            placeholder="Selecione a unidade"
            onChange={(option: { value: string }) =>
              setValue("unity", option.value)
            }
            errorMessage={errors.unity?.message}
          />

          <InputText
            {...register("price")}
            name="price"
            label="Valor"
            placeholder="Digite o valor"
            onChange={(event) => {
              setValue("price", currencyMask(event.target.value));
            }}
            errorMessage={errors.price?.message}
          />

          <Select
            {...register("category")}
            isAutocomplete
            options={categories}
            label="Categoria"
            placeholder="Selecione a categoria"
            onChange={(option: { value: string }) =>
              setValue("category", option.value)
            }
            errorMessage={errors.category?.message}
          />

          <Select
            {...register("market")}
            isAutocomplete
            options={markets}
            label="Mercado"
            placeholder="Selecione a mercado"
            onChange={(option: { value: string }) =>
              setValue("market", option.value)
            }
            errorMessage={errors.market?.message}
          />

          <Button text="Cadastrar" onClick={handleSubmit(onSubmit)} />
        </S.Form>
      </S.ProductContainer>
    </S.WrapperRegisteProducts>
  );
}
