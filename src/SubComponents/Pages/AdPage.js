import React from "react";
import Slider from "../Slider/Slider";
import './Page.css'

const AdPage = () => {
    return (
        <div className="page-container">
            <Slider imgpath="./Images/adbanner40.jpg" title="REKLAMA A MARKETING" />
            <div className="content-container">
                <h1 className="tal">Marketing na sociálních sítích</h1>
                <p className="page-text">Marketing na sociálních sítích je pro značku extrémně důležitý. Firemní profil a reklama na Facebooku nebo Instagramu, Youtube video, influencer marketing a další formy propagace jsou v éře sociálních sítí klíčové, už dávno nejsou jen možností, ale téměř povinností. <br/><br/>Sociální sítě přinášejí do firemní komunikace nový rozměr a přímou interakci se zákazníkem. Náš zkušený tým se strategický přístupem k řešení problémů pro vás najde optimální strategii ať už jste malá česká firma nebo nadnárodní korporace.</p>
                <h1 className="tal">Strategie pro sociální sítě</h1>
                <p className="page-text">V řadách EventUpu jsou zkušení odborníci, kteří přesně vědí, jaké formáty a typ obsahu nejlépe fungují. Dokážou vytvořit strategii pro marketing na sociálních sítích pro jakoukoliv značku nebo produkt – i ten váš. 54 % uživatelů využívá sociální sítě k vyhledávání produktů. Tak toho využijte.</p>
                <h1 className="tal">Tvorba obsahu na sociálních sítích</h1>
                <p className="page-text">Sociální sítě vám přinesou pozornost, zvýšený obrat i kontakt se zákazníky. Můžete se tam připomínat, vytvářet pozitivní asociace nebo upozornit na akční nabídku. Ostatně 79 % lidí přiznává, že je při nákupech ovlivňují sociální sítě.</p>
                <h1 className="tal">Správa kampaní</h1>
                <p className="page-text">
                Správa sociálních sítí je stejně důležitá jako kvalitní obsah. Firemní profil na Facebooku, Instagramu a jiných sítích musí komunikovat jednotně, dobře cílit a vyhýbat se změnám tónu. Rádi si ten váš vezmeme na starost! Nabídneme Vám i reporting kampaní a monitoring zmínek a konkurence.</p>
                <h1 className="tal">Influencer marketing</h1>
                <p className="page-text">
                Influenceři mohou mít fanoušky v řádu tisíců až milionů a dokážou váš brand nenásilnou formou zpromovat nebo odkomunikovat skvělé vlastnosti vybraného produktu. Influencer marketing je žhavý trend a naši specialisté najdou toho pravého ambasadora i pro vás.</p>
                
               </div>
        </div>
        
    )
}

export default AdPage