import express from 'express';
import VideosRoute from './routes/videos.route.js'
const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.json());
//no recuerdo para qué era el extended: false
app.use(express.urlencoded({ extended: false }));
app.use('/', VideosRoute)

// app.get('/', function (req, res) {
//     res.render("home", { titulo: '<strong>Hola</strong>', mostrar: true })
// })


app.listen(2020, function () {
    console.log('Me conecté al puerto http://localhost:2020');
});

