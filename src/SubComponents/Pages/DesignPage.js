import React from "react";
import Slider from "../Slider/Slider";
import './Page.css'

const DesignPage = () => {
    return (
        <div className="page-container">
            <Slider imgpath="./Images/designbanner40.jpg" title="DESIGN A VÝVOJ" />
            <div className="content-container">
                <h1 className="tal">Branding</h1>
                <p className="page-text">Od loga až po vizitku. Vytvoříme vám vizuální identitu, kterou vám bude konkurence závidět.</p>
                <h1 className="tal">Grafické práce & UX</h1>
                <p className="page-text">Designujeme pro uživatele i pro oko. V rámci UX (user experience) se zabýváme:</p>
                <ul className="page-text">
                    <li>Informační architekturou</li>
                    <li>Tvorbou wireframů a prototypováním</li>
                    <li>Uživatelským testováním</li>
                    <li>A/B testováním</li>                   
                </ul>
                <p className="page-text">V rámci grafických prací nás nejvíc baví:</p>
                <ul className="page-text">
                    <li>Tvorba loga a vizuální identity</li>
                    <li>Tvorba webové grafiky</li>
                    <li>Grafické návrhy vizitek a tiskovin</li>
                    <li>Tvorba reklamních vizuálů</li>
                </ul>
                <h1 className="tal">Tvorba webových stránek</h1>
                <p className="page-text">Vytvoříme vám moderní a funkční webové stránky, které jsou:</p>
                <ul className="page-text">
                    <li>Responzivní, skvěle fungují na PC, tabletu i mobilu.</li>
                    <li>Vyladěné, přehledné a příjemné pro oko zákazníka.</li>
                    <li>Bezstarostné, zařídíme vám správu i webhosting, abyste se mohli soustředit na své podnikání.</li>
                    <li>Na míru, přesně podle vašich představ a potřeb.</li>
                </ul>
                <h1 className="tal">Vývoj webových a mobilních aplikací</h1>
                <p className="page-text">Vyvíjíme funkční webové i mobilní aplikace (Android, iOS) na míru. Naše aplikace jsou:</p>
                <ul className="page-text">
                    <li>Spolehlivé</li>
                    <li>Rychlé</li>
                    <li>Bezpečné</li>
                    <li>Uživatelsky přívětivé</li>
                </ul>
            </div>
        </div>
        
    )
}

export default DesignPage