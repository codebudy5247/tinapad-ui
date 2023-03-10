import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";


export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#F20CEC",
  borderRadius: "12px",
  fontSize: '14px',
  fontWeight: "700",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#F20CEC",
    color: "#FFFFFF",
  },
}));

export const HeaderButton = styled(Button)<any>(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "green",
  borderRadius: "30px",
  fontSize: "14px",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "green",
    color: "#FFFFFF",
  },

}));

