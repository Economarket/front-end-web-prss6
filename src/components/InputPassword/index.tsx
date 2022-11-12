import { forwardRef, useState } from "react";
import IconEye from "../../assets/icons/eye";
import IconEyeOff from "../../assets/icons/eyeOff";
import InputText, { InputTextProps } from "../InputText";

const InputPassword = (
  { type = "password", iconClick, icon, ...props }: InputTextProps,
  ref:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
) => {
  const [showPassword, setShowPassword] = useState(type);

  return (
    <InputText
      type={showPassword}
      icon={showPassword === "password" ? <IconEyeOff /> : <IconEye />}
      ref={ref}
      iconClick={() => {
        showPassword === "password"
          ? setShowPassword("text")
          : setShowPassword("password");
      }}
      {...props}
    />
  );
};

export default forwardRef(InputPassword);
