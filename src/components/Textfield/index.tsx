import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  TextField as InputField,
  InputProps,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import * as React from "react";
import palette from "theme/palette";

export type IOnSelect = (_: SelectChangeEvent) => void;

interface IOptios {
  value: string;
  id: number | string;
}

interface Props extends InputProps {
  style?: any;
  label?: string;
  helperText?: string;
  icon?: React.ReactElement;
  iconEnd?: any;
  isSelect?: boolean;
  onSelectHandler?: IOnSelect;
  selectValue?: string | number;
  menuItems?: IOptios[];
  hasAllValue?: boolean;
  labelStyle?: any;
  startIcon?: any;
  textFieldStyle?: any;
  selectStyle?: any;
  shadow?: string;
  showBorder?: boolean;
  isRequired?: boolean;
  multiple?: boolean;
  minDate?: any;
  autoComplete?: string;
}

const CustomField = styled(InputField)({
  fontFamily: "poppins",
  fontWeight: 300,
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    // Disable the outline
    border: "none",
  },
});

function TextField(props: Props) {
  const {
    name,
    type,
    value,
    disabled,
    error,
    label,
    onChange,
    onSelectHandler,
    onBlur,
    onFocus,
    placeholder,
    required,
    style,
    helperText,
    // icon,
    iconEnd,
    isSelect,
    menuItems,
    startIcon,
    labelStyle,
    textFieldStyle,
    selectStyle,
    shadow,
    showBorder,
    multiple,
    minDate,
    isRequired,
    autoComplete,
  } = props;

  return (
    <>
      <FormControl sx={{ ...style }}>
        <Box
          sx={{ boxShadow: shadow, display: "flex", flexDirection: "column" }}
        >
          {label && (
            <FormLabel
              htmlFor={name}
              sx={{
                color: "inherit",
                fontWeight: "50",
                mb: 1,
                ...labelStyle,
              }}
            >
              {label}
              {isRequired && (
                <span style={{ color: palette.error.red_10 }}>*</span>
              )}
            </FormLabel>
          )}

          {!isSelect ? (
            <CustomField
              aria-describedby="my-helper-text"
              color="success"
              disabled={disabled}
              error={error}
              id={name}
              InputProps={{
                startAdornment: startIcon ? (
                  <InputAdornment position="start">{startIcon}</InputAdornment>
                ) : null,
                endAdornment: iconEnd ? (
                  <InputAdornment position="end">{iconEnd}</InputAdornment>
                ) : null,
                sx: {
                  "& input": {
                    padding: "10px",
                    // border: `1px solid ${palette.gray.border_2}`,
                    "&::placeholder": {
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      color: palette.text.placeholder,
                      fontWeight: 400,
                      opacity: 1,
                    },
                  },
                },
                // min: minDate,
              }}
              name={name}
              placeholder={placeholder}
              required={required}
              sx={{
                backgroundColor: "transparent",
                fontSize: { xs: "1rem", xl: "1.3rem" },
                borderRadius: "8px",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.05)",
                border: showBorder
                  ? `1px solid ${palette.gray.border_2}`
                  : `1px solid ${palette.gray.border_2}`,
                ...textFieldStyle,
              }}
              type={type}
              value={value}
              variant="outlined"
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
            />
          ) : (
            <Select
              displayEmpty
              disabled={disabled}
              inputProps={{
                "aria-label": "Without label",
                startAdornment: startIcon ? (
                  <InputAdornment position="start">{startIcon}</InputAdornment>
                ) : null,
              }}
              renderValue={value !== "" ? undefined : () => placeholder}
              style={{ height: "40px" }}
              sx={{
                fontFamily: "poppins",
                fontWeight: 400,
                backgroundColor: palette.common.white,
                // fontSize: "1.2rem",
                "& hover": { color: value ? "#000" : palette.text.placeholder },
                "& .css-jcfq8n-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jcfq8n-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jcfq8n-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: "10px",
                    backgroundColor: palette.common.white,
                    // fontSize: { xs: "1rem", xl: "1.3rem" },
                    color: value ? "#000" : palette.text.placeholder,
                    fontSize: value ? "14px" : "12px",
                    borderRadius: "6px",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                    border: showBorder
                      ? `1px solid ${palette.gray.border_2}`
                      : `0px solid ${palette.gray.border_2}`,
                  },
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                ...selectStyle,
              }}
              value={value?.toString()}
              onChange={onSelectHandler}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {menuItems?.map((item) => {
                //  const values = Object.values(item).join(",");
                return (
                  <MenuItem
                    key={item.value}
                    sx={{
                      color: palette.text.placeholder,
                      fontsize: "1.2rem",
                      fontFamily: "poppins",
                    }}
                    value={item.id}
                  >
                    {item.value}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        </Box>
      </FormControl>
      {helperText && (
        <FormHelperText
          id="my-helper-text"
          sx={{
            color: palette.error.dark,
            minHeight: "18px", // keep space reserved
            fontSize: "15px",
            fontFamily: "poppins",
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}

TextField.defaultProps = {
  style: {
    width: "100%",
    marginBottom: "10px",
  },
  helperText: "",
  autoComplete: "on",
};

export default TextField;
