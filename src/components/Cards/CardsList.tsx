import {Grid} from "@mui/material";
import Card from "./Card";
import {NavLink} from "react-router-dom";
import "./CardsList.scss";
import {Article, Articles as ICardsListProps} from "../../interfaces";

const CardsList = ({articles}: ICardsListProps) => {
    return (
        <Grid container className="card-grid-container">
            {articles.map((article: Article) => (
                   <NavLink className="card-link-wrapper" to={`/article/${article.id}`}>
                       <Card article={article}/>
                   </NavLink>
            ))}
        </Grid>
    )
}

export default CardsList;