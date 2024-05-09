function introduction(name) {
    return `Hi, my name is ${name}.`;
    }
    
    const result = introduction("Devin");
    console.log(result);

    function introductionWithLanguage(name, language) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
        }
        
        const message = introductionWithLanguage("Devin", "JavaScript");
        console.log(message);

    function introductionWithLanguageOptional(name, language = "JavaScript") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
        }
        
        const commit= introductionWithLanguageOptional("Devin");
        console.log(result);
        
        