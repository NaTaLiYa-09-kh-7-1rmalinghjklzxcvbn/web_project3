import './style.scss'
import imgs from './images'
import { showImgs } from './image'

const images = document.getElementById('images')
imgs.map(({ resource, type, name }) => {
    images.appendChild(showImgs(resource, type, name))
    console.log({ resource });
})
