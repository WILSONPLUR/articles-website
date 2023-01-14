import SearchBar from "../components/SearchBar/SearchBar";
import {Container, Divider} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../app/slices/Main";
import Typography from '@mui/material/Typography';
import CardsList from "../components/Cards/CardsList";
import {AppDispatch} from "../app/store";
import {Article} from "../interfaces";

interface InitState {
    data: Article[]
}

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchData());
    }, []);
    const articles = useSelector((state: InitState) => state.data);
    const [keywords, setKeywords] = useState<string>("");
    return (
        <Container maxWidth="lg">
            <SearchBar placeholder="The most successful IT companies in 2020" value={keywords} setValue={setKeywords} />
            <Typography marginBottom="5px" fontWeight="bolder" fontSize="16px" variant="h5">Results: {articles.length}</Typography>
            <Divider light />
            <CardsList articles={articles}/>
        </Container>
    )
};

export default Home;
