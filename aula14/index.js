function cadastrarNovoFuncionario(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('campoNomeFuncionario').value;
    const cpf = document.getElementById('campoCpfFuncionario').value;
    const dataNascimento = document.getElementById('campoDataNascimentoFuncionario').value;
    const cargo = document.getElementById('cargoFuncionario').value;
    const salario = document.getElementById('campoSalarioFuncionario').value;
    const estado = document.getElementById('campoEstadosFuncionario').value;
    const estadoCivil = document.getElementById('campoEstadoCivilFuncionario').value;

    // Monta a mensagem com os dados coletados
    const mensagem = `
        Nome: ${nome}
        CPF: ${cpf}
        Data de Nascimento: ${dataNascimento}
        Cargo: ${cargo}
        Salário: ${salario}
        Estado: ${estado}
        Estado Civil: ${estadoCivil}
    `;

    // Exibe os dados em um alert
    alert(mensagem);

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
}