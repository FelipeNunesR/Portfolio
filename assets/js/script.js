document.querySelector('.menu-opener').
    addEventListener('click', ()=>{
        let nav = document.querySelector('header nav');
        nav.classList.toggle('opened')
    });

    //cria a função que verifica e alterna os slides
const toogleSlider = () =>{
        //captura o slides existente
        const slides=document.querySelectorAll(
            'input[name=slider]');
        // caso slides seja 0, sai da função
        if(slides.length === 0) return;
        //caso slides não seja 0, fa o código abaixo
        //verifica se tem slide marcado, caso não, marca o primeiro
        let current = document.querySelector(
            'input[name=slider]:checked');
        //se não tem nenhum checado
            if(!current){
                current = document.querySelector(
                    'input[name=slider]');
            current.setAttribute('checked', true);
            }
            //captura a slider pelo id
            let id=parseInt(current.getAttribute('id').split('-')[1]);
            //verifica se chegou no final dos elementos
            if(id+1 <= slides.length){
                id++;
            }else{
                id=1
            }
            for(let slider of slides) slider.removeAttribute('checked');

            document.querySelector(`#slider-${id}`).setAttribute('checked', true);
}
setInterval(toogleSlider, 5000);