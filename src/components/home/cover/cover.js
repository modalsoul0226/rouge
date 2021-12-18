import * as React from "react"

import * as styles from "./cover.module.scss"
import nickel from "../../../images/home/cover/nickel.jpeg"
import amazon from "../../../images/home/cover/amazon.jpeg"
import mao from "../../../images/home/cover/tian.png"
import gleaners from "../../../images/home/cover/gleaner.jpg"
import missile1 from "../../../images/home/cover/missileDown.png"
import missile2 from "../../../images/home/cover/missileUp.png"
import pierrot from "../../../images/home/cover/pierrot.png"
import moria from "../../../images/home/cover/moria.jpeg"
import gucci from "../../../images/home/cover/gucci.jpeg"
import brockmann from "../../../images/home/cover/brockman.jpeg"
import dng from "../../../images/home/cover/dng.jpeg"
import dog from "../../../images/home/cover/dog.jpeg"
import venom from "../../../images/home/cover/venom.jpeg"

const Cover = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.topLeft}>
                    <div></div>
                    <div className={styles.picTop}>
                        <img className={styles.top} src={nickel} alt="nickel"/>
                        <div className={"h1-en " + styles.number}>1</div>
                        <div className={"h1-en " + styles.label} lang="en">1. Godard, Jean-Luc. <cite>Histoire(s) du cinéma</cite>. Canal+, 1988.</div>
                    </div>
                    <div className={styles.picTop}>
                        <img className={styles.top} src={amazon} alt="amazon"/>
                        <div className={"h1-en " + styles.number}>4</div>
                        <div className={"h1-en " + styles.label} lang="en">4. An Amazon warehouse. </div>
                    </div>
                </div>
                <div className={styles.bottomLeft}>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={mao} alt="mao"/>
                        <div className={"h1-en " + styles.number}>6</div>
                        <div className={"h1-en " + styles.label} lang="en">6. Surveillance cameras and Mao. </div>
                    </div>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={gleaners} alt="gleaners"/>
                        <div className={"h1-en " + styles.number}>3</div>
                        <div className={"h1-en " + styles.label} lang="en">3. Millet, Jean-Francois. <cite>Des glaneuses</cite> (The Gleaners). 1857, Musée d’Orsay, Paris.</div>
                    </div>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={missile1} alt="missile1"/>
                        <div className={"h1-en " + styles.number}>7</div>
                        <div className={"h1-en " + styles.label} lang="en">7. The surface to surface Prithvi (P-II) Missile successfully flight tested from LC-III, ITR, Chandipur on March 11, 2011. Ministry of Defence, Government of India.</div>
                    </div>
                </div>
            </div>
            <div className={styles.containerCenter}>
                <div className={styles.topCenter}>
                    <div className={styles.picTop}>
                        <img className={styles.top} src={pierrot} alt="pierrot"/>
                        <div className={"h1-en " + styles.number}>2</div>
                        <div className={"h1-en " + styles.label} lang="en">2. Godard, Jean-Luc. <cite>Pierrot le Fou</cite>. Georges de Beauregard, 1965.</div>
                    </div>
                    <div className={styles.picTop}>
                        <img className={styles.top} src={moria} alt="moria"/>
                        <div className={"h1-en " + styles.number}>10</div>
                        <div className={"h1-en " + styles.label} lang="en">10. The fire-ravaged Moria refugee camp on the island of Lesbos in Greece on Thursday.</div>
                    </div>
                    <div className={styles.picTop}>
                        <img className={styles.top} src={missile2} alt="missile2"/>
                        <div className={"h1-en " + styles.number}>8</div>
                        <div className={"h1-en " + styles.label} lang="en">8. The surface to surface Prithvi (P-II) Missile successfully flight tested from LC-III, ITR, Chandipur on March 11, 2011. Ministry of Defence, Government of India.</div>
                    </div>
                </div>
                <div className={styles.bottomCenter}>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={gucci} alt="gucci"/>
                    </div>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={brockmann} alt="brockmann"/>
                        <div className={"h1-en " + styles.number}>9</div>
                        <div className={"h1-en " + styles.label} lang="en">9. Müller-Brockmann, Josef. <cite>schutzt das Kind!</cite> (Protect the Child!). 1953, Cooper Hewitt, Smithsonian Design Museum, New York.</div>
                    </div>
                </div>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.topRight}>
                    <div className={styles.picTop}>
                        <img className={styles.top} src={dog} alt="dog"/>
                        <div className={"h1-en " + styles.number}>12</div>
                        <div className={"h1-en " + styles.label} lang="en">12. Moriyama, Daido. <cite>Stray Dog, Misawa</cite>. 1971, The Museum of Modern Art, New York.</div>
                    </div>
                    <div></div>
                </div>
                <div className={styles.bottomRight}>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={venom} alt="venom"/>
                        <div className={"h1-en " + styles.number}>13</div>
                        <div className={"h1-en " + styles.label} lang="en">13. Cover to <cite>Venom: Lethal Protector #1</cite>, February 1993.</div>
                    </div>
                    <div className={styles.picBottom}>
                        <img className={styles.bottom} src={dng} alt="dng"/>
                        <div className={"h1-en " + styles.number}>5</div>
                        <div className={"h1-en " + styles.label} lang="en">5. Gilles Deleuze and Félix Guattari, Skyros, Greece, ca. 1980. Photo: Karl Flinker.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover
