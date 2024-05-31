const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/yashtech";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });

//create the schema : A mongoose schema defines the structure of the document

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique : true
  },
  ctype: {
    type: String,
  },
  videos: Number,
  author: String,
  active: Boolean,
});

// create collections  : means  the table in sql.
// model for the creating the collections.
const playlist = new mongoose.model("playlist", schema); // here the playilist name is collections name of the yashtech databases

// create document OR insertion in mongoose
const createDoc = async () => {
try {
  const reactPlaylist = new playlist({
     name : 'React js',
     ctype : 'Front End',
     videos :78,
     author : 'yash patil',
     active : true
  })
  const jsPlaylist = new playlist({
    name : 'js',
    ctype : 'Front End',
    videos : 53,
    author : 'yash patil',
    active : true
 })
 const cssPlaylist = new playlist({
  name : 'css',
  ctype : 'Front End',
  videos :56,
  author : 'yash patil',
  active : true
})
 const mongoPlaylist = new playlist({
  name : 'mongo js',
  ctype : 'Back End',
  videos : 35,
  author : 'yash patil',
  active : true
})

const expressPlaylist = new playlist({
     name : 'express js',
     ctype : 'Back End',
     videos : 25,
     author : 'yash patil',
     active : true
  })
  const nodePlaylist = new playlist({
    name : 'node js',
    ctype : 'Back End',
    videos :30,
    author : 'yash patil',
    active : true
 })

// for the insertion more than one data

  const result = await playlist.insertMany([jsPlaylist , cssPlaylist , mongoPlaylist ,expressPlaylist ,nodePlaylist , reactPlaylist]);
  console.log(result);
}
catch (err){
  console.log(err);
}

}
// createDoc()

// find method

const findDoc = async () => {
  try {
    // const find = await playlist.find({name : 'React js'}) // find method for the particular data which name is React js
    //  const find = await playlist.find({videos : {$gte : 50}})  //find the record which videos are greater than 50

    //  AND SO ON Method like the $lte (less than equal to) $lt(less than) so on.......

    // counting and sorting

    // const find = await playlist.find({ author: "yash patil" }).countDocuments()
    const find = await playlist
      .find({ author: "yash patil" })
      .sort({ name: 1 }); // also sort oin the letter vise,  here  -1 is used for descending order

    // how to update the mongoDB data

    console.log(find);
  } catch (err) {
    console.log(err);
  }
};

// findDoc()

// Update the document  : updateOne -- updateMany

const updateDoc = async (_id) => {
  try {
    const res = await playlist.findByIdAndUpdate(
      { _id },
      { $set: { name: "Js" } }
    ); // aslo we can define id instead of using _id parameter
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// updateDoc("6658335d56afd9ac7fd433e9");

// Delete document on mongoDb

const DeleteDoc = async (_id) => {
  try {
    const result = await playlist.deleteOne({ _id }); // it will delete accoding to the id 
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

DeleteDoc("6658335d56afd9ac7fd433e9");
