export default function GlicosimetroTexto({ paciente, cpf }) {
  const cidade = paciente.cidade || "Recife";
  const data = new Date().toLocaleDateString("pt-BR");

  return `
PREFEITURA DA CIDADE DO RECIFE
SECRETARIA DE SAÚDE
GERÊNCIA GERAL DE ASSISTÊNCIA FARMACÊUTICA

PROTOCOLO DE RECEBIMENTO DE GLICOSÍMETRO

Distrito Sanitário: ${paciente.distrito || "[DISTRITO]"}
Unidade de Saúde: ${paciente.unidadeSaude || "[UNIDADE]"}
Equipe de Saúde: ${paciente.equipe || "[EQUIPE]"}

Nome do Paciente: ${paciente.nome || "[NOME DO PACIENTE]"}
CPF: ${cpf || "[CPF]"}
Data de Nascimento: ${paciente.nascimento || "[DATA DE NASCIMENTO]"}
Endereço: ${paciente.endereco || "[ENDEREÇO]"}
Bairro: ${paciente.bairro || "[BAIRRO]"}
CEP: ${paciente.cep || "[CEP]"}
Telefone: ${paciente.telefone || "[TELEFONE]"}

Responsável Legal: ${paciente.responsavel || "[RESPONSÁVEL]"}
Grau de Parentesco: ${paciente.parentesco || "[PARENTESCO]"}

Eu, ${paciente.nome || "[NOME DO PACIENTE]"}, recebi em regime de consignação deste Centro Médico um glicosímetro modelo ${paciente.modelo || "[MODELO]"}, número de série ${paciente.serie || "[SÉRIE]"}, comprometendo-me a zelar pelo equipamento e apresentá-lo quando solicitado.

${cidade}, ${data}.

________________________________________
${paciente.nome || "[NOME DO PACIENTE]"}
CPF: ${cpf || "[CPF]"}
`;
}
