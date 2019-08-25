import HelloWorldButton from './components/hello-world-button/helloWorldButton';
import Heading from './components/heading/heading';
// import addImage from './addImage';

const heading = new Heading();
const hellowWorldButton = new HelloWorldButton();

heading.render();
hellowWorldButton.render();
// addImage();

if (process.env.NODE_ENV === 'development') {
    console.log('dev')
} else if (process.env.NODE_ENV === 'production') {
    console.log('production')
}

// hellowWorldButton.methodThatsNotReal();