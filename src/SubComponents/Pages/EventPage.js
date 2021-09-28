import React from "react";
import Slider from "../Slider/Slider";
import './Page.css'

const EventPage = () => {
    return (
        <div className="page-container">
            <Slider imgpath="./Images/eventbanner40.png" title="EVENTY" />
            <div className="content-container">
                <h1 className="tal">Co pro Vás můžeme udělat</h1>
                <p className="page-text">
                    Na základě vašeho zadání a původní myšlenky vám poradíme, jak vaši kulturní událost nebo jinou akci zrealizovat.<br /><br />
                    Dle vašich požadavků a potřeb vám pomůžeme s koncepcí a s programem události, s brandingem a designem akce, s místem uspořádání, s podrobnou analýzou rozpočtu a s návrhem rozpočtových variant akce.<br/><br/>
                    Zpracujeme vám či zkonzultujeme harmonogram celé události, včetně přípravné fáze akce a také její likvidace, stejně jako finanční plán s rozpočtem a jeho čerpáním.<br/><br/>
                    Pokud požadujete (postrádáte) produkční kapacity přímo pro akci, rádi vám je zajistíme, v rozmezí od několika hodin až po celou dobu trvání akce.
                </p>
                <h1 className="tal">Pomůžeme Vám s pořádaním</h1>
                <ul className="page-text">
                    <li>Tématické párty</li>
                    <li>Firemní akce</li>
                    <li>Prezentační akce</li>
                    <li>Konference</li>
                    <li>Školení</li>
                    <li>Rautu</li>
                    <li>Banketu</li>
                    <li>Sportovni akce</li>
                    <li>Rodinných a dětských dnů</li>
                    <li>pracovního obědu, večeře</li>
                    <li>Vánoční oslavy</li>
                    <li>Veletrhů a výstav</li>
                    <li>Roadshow</li>
                </ul>
                <h1 className="tal">Produkce virtuálního a hybridního eventu</h1>
                <p className="page-text">
                    Hybridní a virtuální event není jen o streamingu a propojení účastníků. To, co Vás odliší od ostatních „streamů“,  je především poctivá dramaturgická/produkční příprava a režie.
                    Výroba veškerých grafických obsahů jako jsou prezentace, předěly, informativní titulky, reklamní spoty, voiceovers a delis audiovizuální obsahy (např. 2D a 3D animace), které budete v průběhu přenosů potřebovat, se musí uskutečnit s dostatečným předstihem a pod jednotným vedením. Režisérskou osobou doplněný produkční a technický tým pak zajistí naplnění cílů a hladký průběh akce. Na náš tým a letité zkušenosti se můžete spolehnout!
                </p>
            </div>
        </div>
        
    )
}

export default EventPage