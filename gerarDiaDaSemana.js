function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-br", {
        weekday: "long"
    }); // Para mostrar a nova data em forma de dia da semana 
    
    const data = new Date().toLocaleDateString("pt-br"); // Para mostrar a data do dia completa ( nesse caso no brasil )
    
    const horaBrasil = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric"
    }); // .toLocaleTimeString() vai servir para chamar a hora, e dentro do () você pode colocar o Local e Opção. Nesse caso o local é o Brasil e coloquei a opção para chamar apenas a Hora e o Minuto.
    
    const dataCompleta = `${diaDaSemana} (${data}) às ${horaBrasil}`; // As `` servem para dar essa vantagem de deixar as variaveis do jeito que a gente quer que apareça direto. Por exemplo o "(espaço)" apareçe realmente o espaço. Elas são chamadas de Templates Strings.

    return dataCompleta
}

export default gerarDiaDaSemana; // Por padrão já vai exportar o gerarDiaDaSemana por conta que é a unica funcionalidade aqui dentro.