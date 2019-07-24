document.body.addEventListener('mouseover',hShowTooltip);
document.body.addEventListener('mouseout', hHideTooltip);

function hShowTooltip(e){
    if(e.target.dataset.tooltip){
        let tooltip = document.createElement('span');
        tooltip.innerHTML = e.target.dataset.tooltip;
        tooltip.classList.add('toolTipAlt');
        e.target.appendChild(tooltip);
        tooltip.style.left = e.clientX + 'px';
        if (tooltip.getBoundingClientRect().top - tooltip.offsetHeight<window.pageYOffset){
            tooltip.style.top = e.target.getBoundingClientRect().bottom + 'px';
        }
        else {
            tooltip.style.top = e.target.getBoundingClientRect().top - tooltip.offsetHeight + 'px';
        }
    }
}

function hHideTooltip(e){
    if(e.target.dataset.tooltip)
        e.target.removeChild(e.target.lastChild);
}