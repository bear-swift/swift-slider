import { CountryType } from "@/types";
import { COUNTRYLIST } from "@/constants/countries";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Menu, MenuItem, OutlinedInput } from "@mui/material";

export default function CountrySelect() {
  const [country, setCountry] = useState<CountryType>(COUNTRYLIST[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const expanded = Boolean(anchorEl);

  const onClose = () => {
    setAnchorEl(null);
  };

  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onSelected = (c: CountryType) => {
    setCountry(c);
    onClose();
  };

  return (
    <>
      <div
        className="w-full h-full border border-[#DADADA] rounded-[6px] px-[12px] flex items-center justify-between cursor-pointer"
        onClick={onOpen}
      >
        <div className="flex items-center gap-[12px]">
          <div>
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
              alt=""
            />
          </div>

          <span className="font-medium">{country.label}</span>
        </div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      {/* Popups */}
      <Menu
        anchorEl={anchorEl}
        open={expanded}
        onClose={onClose}
        sx={{ marginTop: "10px", maxHeight: "400px" }}
      >
        {COUNTRYLIST.map((c, index) => {
          return (
            <MenuItem onClick={() => onSelected(c)} key={index}>
              <div className="flex items-center gap-[12px]">
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
                  alt=""
                />
                <span>{c.label} </span>
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
