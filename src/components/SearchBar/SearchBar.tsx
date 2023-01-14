import {Box, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import "./SearchBar.scss";
import {setKeywords, sortDataByKeywords} from "../../app/slices/Main";
import {AppDispatch} from "../../app/store";

interface ISearchBarProps {
    value: string,
    placeholder: string,
    setValue: (val: string) => void,
}

const SearchBar = ({value, setValue, placeholder}: ISearchBarProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const searchByKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(sortDataByKeywords({keywords: value}));
            dispatch(setKeywords(value));
        }, 1200)

        return () => clearTimeout(delayDebounceFn)
    }, [value])
    return (
        <Box marginTop="50px" marginBottom="40px">
            <InputLabel sx={{fontWeight: "bolder", color: "#363636", marginBottom: "10px"}} size="normal">Filter by keywords</InputLabel>
            <TextField placeholder={placeholder} value={value} onChange={searchByKeywords} className="searchbar" InputProps={{
                startAdornment: (
                <InputAdornment sx={{height: "2rem"}} position="start">
                    <Search sx={{color: "#575757", fontSize: "20px"}} />
                </InputAdornment>
                )
            }} />
        </Box>
    )
};

export default SearchBar;
