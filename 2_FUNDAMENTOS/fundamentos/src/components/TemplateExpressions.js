const TemplateExpressions = () => {
    const name = "Rafa";
    const data = {
        Age: 27,
        job: "programmer",

    }

    return (
        <div>
            <h1>Olá {name}, Tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpressions;