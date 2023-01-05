import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#F20CEC",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#F20CEC",
      color: "#FFFFFF",
    },
  }));