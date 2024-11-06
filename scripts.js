function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => {
        secao.style.display = 'none'; // Esconde todas as seções
    });
    const secaoParaMostrar = document.getElementById(secaoId);
    if (secaoParaMostrar) {
        secaoParaMostrar.style.display = 'block'; // Mostra a seção correspondente
    } else {
        console.error(`Seção com ID "${secaoId}" não encontrada.`);
    }
}

function pesquisar(secaoId) {
    const input = document.getElementById(`pesquisa-${secaoId}`); // Corrigido para usar crases
    if (!input) {
        console.error(`Campo de pesquisa com ID "pesquisa-${secaoId}" não encontrado.`);
        return;
    }

    const filter = input.value.toLowerCase();
    const secao = document.getElementById(secaoId);
    if (!secao) {
        console.error(`Seção com ID "${secaoId}" não encontrada.`);
        return;
    }

    const items = secao.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const texto = item.textContent || item.innerText;
        if (texto.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
