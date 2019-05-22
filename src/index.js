import _ from 'lodash';
import './style.css';

function component() {
        const element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('c-brand-primary')

        return element;
}

document.body.appendChild(component());
