const mongoose = require('mongoose');

function handleError(error){
    error
}
function connectDb() {
    mongoose.connect("mongodb+srv://mehkumawat:GToCXIMNGqBhB29T@move-rating-cluster.mdgy2eo.mongodb.net/moviesDb")
    .catch(error => handleError(error));;

}

module.exports = {connectDb}; 
