export const showImgs = (resource, type, name) => {
    const imagess = document.createElement('div')
    imagess.classList = 'imagess'
    switch (type) {
        case 'imge':
            const createImg = document.createElement('img')
            createImg.classList = 'createImg'
            createImg.src = resource
            imagess.appendChild(createImg);
            break;
        case 'audio':
            const createAud = document.createElement('audio')
            createAud.classList = 'createAud'
            createAud.src = resource
            createAud.controls = true
            imagess.appendChild(createAud);
            break;
        case 'video':
            const createVid = document.createElement('video')
            createVid.classList = 'createVid'
            createVid.src = resource
            createVid.controls = true
            imagess.appendChild(createVid);
            break;
    }
    const createText = document.createElement('p')
    createText.classList = 'createText'
    createText.innerHTML = name
    imagess.appendChild(createText)
    return imagess
}
