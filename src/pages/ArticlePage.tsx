import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Box, Container, Typography} from "@mui/material";
import "./ArticlePage.scss";
import {ArrowBack} from "@mui/icons-material";
import {useSelectedArticle} from "../hooks/useSelectedArticle";
import {Article} from "../interfaces";

const ArticlePage = () => {
    const {id} = useParams();
    const articles = useSelector((state: {data: Article[]}) => state.data);
    const selectedArticle = useSelectedArticle(articles, id);
    return (
        <Box className="article-page">
            <img className="article-page__image" src={selectedArticle && selectedArticle[0].imageUrl} alt={selectedArticle && selectedArticle[0].title} />
            <Box position="relative" top={150} bottom={100}>
                <Box className="article-page__info">
                    <Typography align="center" fontSize="24px" component="h1">{selectedArticle && selectedArticle[0].title}</Typography>
                    <Typography marginTop="50px" fontSize="18px" component="p">{selectedArticle && selectedArticle[0].summary}</Typography>
                </Box>
            </Box>
            <Container maxWidth="lg" sx={{marginTop: "200px", marginBottom: "45px"}}>
                <NavLink to="/" className="article-page__link">
                    <ArrowBack color="inherit" /> Back to homepage
                </NavLink>
            </Container>
        </Box>

    )
};

export default ArticlePage;
