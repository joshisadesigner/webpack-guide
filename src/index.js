import _ from 'lodash';
import './style.css';
import logoImage from './webpack-logo.svg';

function component() {
        const element = document.createElement('h1');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('brand')

        // Add the image to our existing div.
        const logo = new Image();
        logo.src = logoImage;
        element.appendChild(logo);

        return element;
}

document.body.appendChild(component());
