const tails = document.querySelector('.tails');
const arvore = document.querySelector('.arvore');

const jump = () =>
{
    tails.classList.add('jump');

    setTimeout(() => 
    {
        tails.classList.remove('jump');
    }, 500);
}


const loop = setInterval(() =>
    {
        const arvorePosition = arvore.offsetLeft;
        const tailsPosition = +window.getComputedStyle(tails).bottom.replace('px', '');

        if (arvorePosition <= 100 && arvorePosition > 0 && tailsPosition < 100)
        {
            arvore.style.animation = 'none';
            arvore.style.left = `${arvorePosition}px`;

            tails.style.animation = 'none';
            tails.style.bottom = `${tailsPosition}px`;

            tails.src = './imagens/TailsGameOver.png';
            tails.style.width = '110px'
            tails.style.left = '20px'

            clearInterval(loop);
        }
    }, 10)

document.addEventListener('keydown', jump);

largura = 200,

function atualiza()
{
    const movimentoDoChao = 1;
    const repeteEm = chao.largura /2;
    const movimentacao = chao.x - movimentoDoChao;
}
