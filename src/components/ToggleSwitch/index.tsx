import React from "react";
import { Container, Input, Mark, Switch } from "./index.styled";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onToggle: (value: any) => void;
  checked: boolean;
}

const ToggleSwitch: React.FC<SwitchProps> = ({
  checked,
  onToggle,
  ...rest
}) => {
  return (
    <Container>
      <Switch checked={checked} data-tip data-for="registerTip">
        <Input type="checkbox" onChange={onToggle} checked={checked} />
        <Mark />
      </Switch>
    </Container>
  );
};

export default ToggleSwitch;
