import {Button} from "@mui/material";
import {Typography, Card as CardComponent, CardMedia, CardContent} from "@mui/material"
import {ArrowForward, CalendarToday} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {Article} from "../../interfaces";

interface ICardProps {
    article: Article,
}

const Card = ({article}: ICardProps) => {
    const keywords = useSelector((state: {keywords: string}) => state.keywords);
    const getMonthName = (monthNumber:number) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    }
    const generateDate = (date: string):string => {
        return `${getMonthName(new Date(date).getMonth())} ${new Date(date).getDay()}th, ${new Date(date).getUTCFullYear()}`;
    };
    const highlightKeywords = (article: Article, keywords: string) => {
        if(article.title.includes(keywords)) {
            const newArticleTitle = article.title.replaceAll(keywords, `<span style="background: #fff96e;">${keywords}</span>`);
            const cuttedArticleSummary = article.summary.length === 100 ? article.summary : article.summary.slice(0, 100) + "...";
            const newArticleSummary = cuttedArticleSummary.replaceAll(keywords, `<span style="background: #fff96e;">${keywords}</span>`);
            return (
                <>
                    <Typography marginBottom="20px" fontSize="24px" component="h5" dangerouslySetInnerHTML={{__html: newArticleTitle}}></Typography>
                    <Typography sx={{fontSize: "16px"}} component="p" dangerouslySetInnerHTML={{__html: newArticleSummary}}></Typography>
                </>
            )
        }
    }
    return (
        <CardComponent sx={{ maxWidth: 400, border: "1px solid #EAEAEA", marginBottom: "45px" }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={article.imageUrl}
                    alt={article.title}
                />
                <CardContent>
                    <Typography fontSize="14px" color="#363636" display="flex" marginBottom="24px" alignItems="center">
                        <CalendarToday sx={{marginRight: "9.33px"}} fontSize="small" />
                        {generateDate(article.publishedAt)}
                    </Typography>
                    {highlightKeywords(article, keywords)}
                    <Button size="small" sx={{color: "#363636", fontWeight: "800", textTransform: "none", paddingTop: "20px", fontSize: "16px"}} endIcon={<ArrowForward/>}>Read more</Button>
                </CardContent>
        </CardComponent>
    )
}

export default Card;