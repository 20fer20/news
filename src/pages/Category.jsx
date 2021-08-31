import {
  useParams
} from "react-router-dom";

export default function CategoryPage(props){
    const { CategorySlug } = useParams();
    return `${CategorySlug} page`;
}