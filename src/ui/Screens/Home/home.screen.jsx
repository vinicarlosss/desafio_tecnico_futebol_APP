import "./home.style.css";
import { Header } from "../../Components/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home(){

    const [ content, setContent ] = useState("Ranking");
    const navigate = useNavigate();
    function handleChangeContent(content, setSelected){
        setContent(content);
        setSelected(content);
        navigate("/");
    }


    return (
        <>
            <Header handleChangeContent={handleChangeContent}/>
        </>
    );
};