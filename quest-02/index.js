document.getElementById('meuForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const obrigatorioElementos = document.querySelectorAll('.obrigatorio');
    const inputs = document.querySelectorAll('input, textarea');

    obrigatorioElementos.forEach(element => {
        element.style.display = 'none';
    });

    inputs.forEach(input => {
        input.classList.remove('error');
    });

    let valido = true;


    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome.trim() === '') {
        document.getElementById('nome-obrigatorio').style.display = 'block';
        document.getElementById('nome').classList.add('error');
        valido = false;
    }

    if (email.trim() === '') {
        document.getElementById('email-obrigatorio').style.display = 'block';
        document.getElementById('email').classList.add('error');
        valido = false;
    }

    if (telefone.trim() === '') {
        document.getElementById('telefone-obrigatorio').style.display = 'block';
        document.getElementById('telefone').classList.add('error'); 
        valido = false;
    }

    if (mensagem.trim() === '') {
        document.getElementById('mensagem-obrigatorio').style.display = 'block';
        document.getElementById('mensagem').classList.add('error'); 
        valido = false;
    }


    if (valido) {
        alert('Formulário enviado com sucesso!');
    }
});
