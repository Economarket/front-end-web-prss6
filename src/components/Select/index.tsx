import React from "react";
import * as S from "./styles";
import Skeleton from "../Skeleton";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  isLoading?: boolean;
  onChange?: (options: any) => void;
  placeholder?: string;
  value?: SelectOption;
  label?: string;
  isAutocomplete?: boolean;
  errorMessage?: string;
};

const DropdownIndicator = () => <S.ArrowDown />;

const renderSkeleton = (label?: string) => (
  <>
    {label && <Skeleton height="0.6rem" margin="0 0 5px" width="4rem" />}
    <Skeleton borderRadius="3px" margin="0" height="3.8rem" />
  </>
);

const Select = ({
  options,
  placeholder = "",
  isLoading,
  onChange,
  value,
  label,
  isAutocomplete,
  errorMessage,
}: SelectProps) => {
  if (isLoading) {
    return renderSkeleton(label);
  }

  return (
    <S.Wrapper>
      {label && (
        <S.WrapperLabel>
          <S.Label>{label}</S.Label>
        </S.WrapperLabel>
      )}

      <S.WrapperSelect
        placeholder={placeholder}
        error={!!errorMessage}
        options={options}
        defaultValue={value}
        onChange={onChange}
        isClearable={true}
        isSearchable={isAutocomplete}
        noOptionsMessage={() => "Sem opções"}
        components={{
          DropdownIndicator,
        }}
      />
      {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  );
};

export type { SelectProps, SelectOption };

export default Select;
