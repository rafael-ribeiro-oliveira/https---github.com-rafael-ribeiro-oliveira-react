// arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        // Essa função faz isso

        /*  
            teste de coment.
        */
        <div>
            {/*TESTE DE COMENT.*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;