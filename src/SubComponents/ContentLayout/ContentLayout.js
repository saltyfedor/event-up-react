import React from "react";
import ContentBlock from "../ContentBlock/ContentBlock";
import useCheckMobileScreen from '../useCheckMobileScreen'

import './ContentLayout.css'


const videoText = <div>
Náš tým složený z tvůrců videí a animátorů vám nabízí jedinečné know how. Máme více než 8 letou zkušenost v oboru. Našima rukama prošly stovky projektů, pod taktovkou našeho týmu vznikala videa všeho druhu.<br></br>
Zkušenosti máme s 2D, 3D I VFX animacemi, postprodukcí, videoprodukcí včetně videoprodukce se speciálními formáty obsahu. Neustále se posouváme a sledujeme aktuální vizuální a technologické trendy. 
</div>

const streamText = <div>
    S námi můžete pokračovat v pořádání akcí vesele dál i přes veškerá bezpečnostní opatření. Díky online streamingu dokonce můžete získat více zákazníků a diváků než obvykle. Připravíme pro vás stream z jakkoli velké akce, nebo naopak celou akci zrealizujeme online tak, že všichni řečníci budou v pohodlí svého domova. Ať už pořádáte jakoukoli akci pro sebevětší množství diváků, převedeme ji pro vás do online světa  rychle a efektivně, nebo s vámi vymyslíme zcela nový koncept online eventu.

</div>

const adText = 
    <ul className="content-list">
        <li>Marketing na sociálních sítích</li>
        <li>Strategie pro sociální sítě</li>
        <li>Tvorba obsahu na sociálních sítích</li>
        <li>Správa kampaní</li>
        <li>Influencer marketing</li>
    </ul>

const desText =
    <ul className="content-list">
        <li>Branding od loga až po vizitku</li>
        <li>Tvorba grafiky a UI/UX</li>
        <li>Tvorba reklamních vizuálu</li>
        <li>Tvorba webových stránek</li>
        <li>Vývoj webových a mobilních aplikací</li>        
    </ul>
           

const eventText =
    <ul className="content-list">
        <li>Usnadníme vám cestu k realizaci vašeho kulturního projektu</li>
        <li>Zkonzultujeme, dohlédneme, popř. zajistíme správný průběh akce</li>
        <li>Přizpůsobíme realizaci vašim potřebám tak, abyste co nejlépe dosáhli vašeho cíle - posuneme vaši akci na vyšší úroveň</li>
        <li>Zprostředkujeme odborníky na dílčí problematiku</li>
        <li>Poskytneme konzultace, koučing, know-how nebo networking přímo pro vaši akci a otázky, které řešíte</li>
    </ul>

const ContentLayout = () => {
    const isMobile = useCheckMobileScreen()
    if (!isMobile) {
        return (
            <div className="mt20">
                <div className="content-row">
                    <ContentBlock icon={"./Icons/play-button.svg"} heading={"Videa"} text={videoText} link={"video"} />
                    <ContentBlock icon={"./Icons/stream.svg"} heading={"Streamy"} text={streamText} link={"streams"} />                
                </div>
                <div className="content-row">
                    <ContentBlock icon={"./Icons/event.svg"} heading={"Eventy"} text={eventText} link={"events"}/>
                </div>
                <div className="content-row">
                    <ContentBlock icon={"./Icons/advert.svg"} heading={"Reklama"} text={adText} link={"adverts"} />
                    <ContentBlock icon={"./Icons/design.svg"} heading={"Design"} text={desText} link={"design"} />
                </div>
               
            </div>
        )
    } else {
        return (
            <div className="content-column">
                <div className="content-row">
                    <ContentBlock icon={"./Icons/play-button.svg"} heading={"Videa"} text={videoText} link={"video"} />                             
                </div>
                <div className="content-row">                   
                    <ContentBlock icon={"./Icons/stream.svg"} heading={"Streamy"} text={streamText} link={"streams"} />                
                </div>
                <div className="content-row">
                    <ContentBlock icon={"./Icons/event.svg"} heading={"Eventy"} text={eventText} link={"events"}/>               
                </div>
                <div className="content-row">
                    <ContentBlock icon={"./Icons/adicon1.svg"} heading={"Reklama"} text={adText} link={"adverts"} />               
                </div>
                <div className="content-row">
                    <ContentBlock icon={"./Icons/design.svg"} heading={"Design"} text={desText} link={"design"} />               
                </div>
            </div>
        )
    }
}

export default ContentLayout