import {
    useParams
  } from "react-router-dom";
  
  export default function NewsPage(props){
      const { NewsId } = useParams();
      return `${NewsId} page`;
  }