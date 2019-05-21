function component() {
        const element = document.createElement('div');

        // Lodash, currently included via script, is require for this line to work
        element.innerTHML = _.join(['Hello', 'webpack'], ' ');

        return element;
}

document.body.appendChild(component());
