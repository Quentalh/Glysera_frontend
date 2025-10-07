
export default function AtestadoTexto({ paciente, cpf }) {
  const cidade = paciente.cidade || "Recife";
  const data = new Date().toLocaleDateString("pt-BR");

  return `
Eu, ${paciente.nome || "[NOME DO PACIENTE]"}, inscrito(a) no CPF sob nº ${cpf || "[CPF]"},
declaro para os devidos fins que recebi de Hospital Municipal de Saúde,
inscrito(a) no CNPJ sob nº 00.000.000/0001-00, a importância de
R$ 1.200,00 (mil e duzentos reais), referente à prestação de serviços médicos
realizados na unidade de saúde ${paciente.unidadeSaude || "[UNIDADE]"}.

Por ser a expressão da verdade, firmo o presente dando plena,
geral e irrevogável quitação pelo valor recebido.

${cidade}, ${data}.

________________________________________
${paciente.nome || "[NOME DO PACIENTE]"}
CPF: ${cpf || "[CPF]"}
`;
}