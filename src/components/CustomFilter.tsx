"use client";
import { CustomFilterProps } from "@/types";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/navigation";

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [value, setValue] = React.useState("");
  // const route = useRouter();

  // const handleUpdateParams = (valueInput: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   searchParams.set(title, valueInput);

  //   const newPathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   route.push(newPathName);
  // };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={title}
            onChange={(e) => {
              setValue(e.target.value.toString());
              setFilter(e.target.value);
            }}
          >
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            {options.map((option, index) => (
              <MenuItem value={option.value} key={index}>
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default CustomFilter;
