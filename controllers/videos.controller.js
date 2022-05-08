import { readFile, writeFile } from 'fs' // importanto las funciones espesificas

export function viewAll(req, res) {
    readFile('data/videos.json', function (err, data) {
        const videos = err ? [] : JSON.parse(data.toString())

        console.log(videos)
        res.render('home', { videos })
    })
}

export function viewForm(req, res)  {
    console.log('nuevo nuevo')
    res.render('nuevo');
}

export function create(req, res) {
    readFile('./data/videos.json', function (err, data) {
        const videos = (err) ? [] : JSON.parse(data.toString())

        videos.push({
            id: videos.length + 1,
            title: req.body.title,
            description: req.body.description,
            url: req.body.url
        })

        writeFile('./data/videos.json', JSON.stringify(videos), function (err) {
            console.log(err)
        })

        res.redirect('/')
    })
    
}

export default {
    viewAll,
    create,
    viewForm
}