import React from "react";
import Slider from "../Slider/Slider";
import './Page.css'

const VideoPage = () => {
    return (
        <div className="page-container">
            <Slider imgpath="./Images/videobanner40.png" title="PRODUCKE VIDEÍ" />
            <div className="content-container">
                <h1 className="tal">Náš tým</h1>
                <p className="page-text">Náš tým složený z tvůrců videí a animátorů vám nabízí jedinečné know how. Máme více než 8 letou zkušenost v oboru. Našima rukama prošly stovky projektů, pod taktovkou našeho týmu vznikala videa všeho druhu.<br/><br/>
                Zkušenosti máme s 2D, 3D I VFX animacemi, postprodukcí, videoprodukcí včetně videoprodukce se speciálními formáty obsahu. Neustále se posouváme a sledujeme aktuální vizuální a technologické trendy. Nenabízíme pouze základní tvorbu animací a videí, ale také kreativu, copywriting, tvorbu hudebních podkladů, dabingu i následnou propagaci. Jednoduše vyřešíme celý proces vzniku Vašeho videa od A do Z a to kvalitně, kreativně a efektivně v jednom teamu.
                
                </p>
                <h1 className="tal">Jak postupovat</h1>
                <p className="page-text">Vyberte si, o jaký produkt máte zájem, a definujte si (rádi vám pomůžeme), co je jeho účelem a cílem. Nejčastější možnosti jsou tyto:</p>
                <ul className="page-text">
                    <li>Firemní video</li>
                    <li>Produktové video</li>
                    <li>Propagační video</li>
                    <li>Eventové video</li>
                    <li>Náborové video</li>
                    <li>Reklamní spoty/ videoreklama</li>
                    <li>Kompletní videoprodukce na klíč</li>
                </ul>
                <p className="page-text">Následně si nastudujeme co nejvíce o vašem oboru, vyslechneme si vaše představy a navrhneme několik variant videa. A co získáte navíc? Natáčíme videa jak ze země, tak  ze vzduchu – z dronu. Video okořeníme propracovanou grafikou a dle požadavků i motion grafikou či animacemi. Jsme odborníci na 360° natáčení, virtuální a rozšířenou (augmented) realitu. To vše je možné ve videích využít a posunout je tak o třídu výše.</p>
            </div>
        </div>
        
    )
}

export default VideoPage