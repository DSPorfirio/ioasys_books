import React, { useState } from 'react';
import styles from './index.module.scss';
import Close from '../../../images/Close_icon.svg';

interface FilterBookProps {
    displayFilter: () => void;
}

export default function FilterBook({ displayFilter } : FilterBookProps) {
    const [design, setDesign] = useState<boolean>(false);
    const [uxDesign, setUxDesign] = useState<boolean>(false);
    const [uiDesign, setUiDesign] = useState<boolean>(false);
    const [architecture, setArchitecture] = useState<boolean>(false);
    const [css, setCss] = useState<boolean>(false);
    const [usability, setUsability] = useState<boolean>(false);
    const [designThinking, setDesignThinking] = useState<boolean>(false);

    const [year2015, setYear2015] = useState<boolean>(false);
    const [year2016, setYear2016] = useState<boolean>(false);
    const [year2017, setYear2017] = useState<boolean>(false);
    const [year2018, setYear2018] = useState<boolean>(false);
    const [year2019, setYear2019] = useState<boolean>(false);
    const [year2020, setYear2020] = useState<boolean>(false);
    const [year2021, setYear2021] = useState<boolean>(false);
   
    function submitFormFiltersBook(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        displayFilter();
    }

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.close}>
                    <button>
                        <img src={Close} alt="Fechar filtros" onClick={displayFilter} />
                    </button>
                </div>
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitFormFiltersBook(e)}>
                    <div className={styles.category}>
                        <p>Selecione a categoria</p>
                        <div className={styles.category_options}>
                            <button type="button" className={design ? styles.button_selected : ''} onClick={() => setDesign(!design)}>Design</button>
                            <button type="button" className={uxDesign ? styles.button_selected : ''} onClick={() => setUxDesign(!uxDesign)}>UX Design</button>
                            <button type="button" className={uiDesign ? styles.button_selected : ''} onClick={() => setUiDesign(!uiDesign)}>UI Design</button>
                            <button type="button" className={architecture ? styles.button_selected : ''} onClick={() => setArchitecture(!architecture)}>Arquitetura da informação</button>
                            <button type="button" className={css ? styles.button_selected : ''} onClick={() => setCss(!css)}>CSS</button>
                            <button type="button" className={usability ? styles.button_selected : ''} onClick={() => setUsability(!usability)}>Usabilidade</button>
                            <button type="button" className={designThinking ? styles.button_selected : ''} onClick={() => setDesignThinking(!designThinking)}>Design Thinking</button>
                        </div>
                    </div>
                    <div className={styles.year}>
                        <p>Selecione o ano</p>
                        <div className={styles.year_options}>
                            <button type="button" className={year2015 ? styles.button_selected : ''} onClick={() => setYear2015(!year2015)}>2015</button>
                            <button type="button" className={year2016 ? styles.button_selected : ''} onClick={() => setYear2016(!year2016)}>2016</button>
                            <button type="button" className={year2017 ? styles.button_selected : ''} onClick={() => setYear2017(!year2017)}>2017</button>
                            <button type="button" className={year2018 ? styles.button_selected : ''} onClick={() => setYear2018(!year2018)}>2018</button>
                            <button type="button" className={year2019 ? styles.button_selected : ''} onClick={() => setYear2019(!year2019)}>2019</button>
                            <button type="button" className={year2020 ? styles.button_selected : ''} onClick={() => setYear2020(!year2020)}>2020</button>
                            <button type="button" className={year2021 ? styles.button_selected : ''} onClick={() => setYear2021(!year2021)}>2021</button>
                        </div>
                    </div>
                    <button type="submit">Filtrar</button>
                </form>
            </div>
        </div>
    );
}