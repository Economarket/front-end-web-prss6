import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import Select from "../../components/Select";
import { postProduct } from "../../services/product";
import { getFieldsUnity } from "../../services/unity";
import { schemaRegisterProduct } from "../../utils/schema";
import * as S from "../styles";
import { getBrand, postBrand } from "../../services/brand";
import CreatableSelect from "../../components/CreatableSelect";
import { searchCategory } from "../../services/category";
import { searchMarket100 } from "../../services/market";
import { Brand, Category, Market, Unity } from "../../services/models";
import { currencyMask, removeCurrencyMask } from "../../fomatters/currencyMask";
import { toast, ToastContainer } from "react-toastify";

export default function RegisterProducts() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [markets, setMarkets] = useState<Market[]>([]);
  const [unities, setUnities] = useState<Unity[]>([]);
  const [brandies, setBrandies] = useState<Brand[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      brandId: "",
      unityId: "",
      price: "",
      categoryId: "",
      marketId: "",
    },
    resolver: yupResolver(schemaRegisterProduct),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        brandId: "",
        unityId: "",
        price: "",
        categoryId: "",
        marketId: "",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [formState, reset]);

  const getUnities = useCallback(async () => {
    try {
      const response = await getFieldsUnity();

      setUnities(response);
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

      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getMarkets = useCallback(async () => {
    try {
      const response = await searchMarket100();

      setMarkets(response.content);
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

  const verifyBrand = async (brandId: string) => {
    setValue("brandId", parseInt(brandId) ? brandId : await postBrand(brandId));
  };

  const onSubmit = async (data: any) => {
    await postProduct({
      name: data.name,
      price: parseFloat(removeCurrencyMask(data.price)),
      unity: data.unityId,
      brand: { id: parseFloat(data.brandId) },
      category: { id: parseFloat(data.categoryId) },
      markets: [{ id: parseFloat(data.marketId) }],
    })
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.log("colocar toast de produto não cadastrado");
        console.log(error);
      });
  };

  const notify = () => {
    if (!toast.isActive("custom-id-yes")) {
      toast("Produto cadastrado com sucesso.", {
        toastId: "custom-id-yes",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    handleSubmit(onSubmit);
  };

  return (
    <>
      <ToastContainer style={{ width: "250px", fontSize: "15px" }} />
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
              options={brandies.map((item: { id?: any; brandName?: any }) => ({
                value: item.id,
                label: item.brandName,
              }))}
              label="Marca"
              placeholder="Selecione ou digite a marca"
              onChange={(option: { value: string }) =>
                verifyBrand(option.value)
              }
              errorMessage={errors.brandId?.message}
            />

            <Select
              {...register("unityId")}
              isAutocomplete
              options={unities.map(
                (item: { abbreviation?: any; description?: any }) => ({
                  value: item.abbreviation,
                  label: item.description,
                })
              )}
              label="Unidade"
              placeholder="Selecione a unidade"
              onChange={(option: { value: string }) =>
                setValue("unityId", option.value)
              }
              errorMessage={errors.unityId?.message}
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
              {...register("categoryId")}
              isAutocomplete
              options={categories.map((item: { id?: any; name?: any }) => ({
                value: item.id,
                label: item.name,
              }))}
              label="Categoria"
              placeholder="Selecione a categoria"
              onChange={(option: { value: string }) =>
                setValue("categoryId", option.value)
              }
              errorMessage={errors.categoryId?.message}
            />

            <Select
              {...register("marketId")}
              isAutocomplete
              options={markets.map((item: { id?: any; name?: any }) => ({
                value: item.id,
                label: item.name,
              }))}
              label="Mercado"
              placeholder="Selecione a mercado"
              onChange={(option: { value: string }) =>
                setValue("marketId", option.value)
              }
              errorMessage={errors.marketId?.message}
            />

            <Button
              text="Cadastrar"
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            />
          </S.Form>
        </S.ProductContainer>
      </S.WrapperRegisteProducts>
    </>
  );
}
