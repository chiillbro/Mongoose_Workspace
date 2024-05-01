import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 10 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

const MovieModel = new mongoose.model("movies", moviesSchema);

// export const createManyDocs = async () => {
//   try {
//     const newMovie1 = MovieModel({
//       name: "Movie1",
//       rating: 9,
//       money: 1000000,
//       genre: ["science-fiction", "Adventure"],
//       isActive: true,
//       comments: [{ value: "That was an amazing movie." }],
//     });
//     const newMovie2 = MovieModel({
//       name: "Movie2",
//       rating: 8,
//       money: 3878387,
//       genre: ["action", "Adventure"],
//       isActive: true,
//       comments: [{ value: "That was an interesting movie." }],
//     });
//     const newMovie3 = MovieModel({
//       name: "Movie3",
//       rating: 10,
//       money: 99898,
//       genre: ["science-fiction", "horror"],
//       isActive: true,
//       comments: [{ value: "That was a horrific movie." }],
//     });
//     const newMovie4 = MovieModel({
//       name: "Movie4",
//       rating: 7,
//       money: 459454945984,
//       genre: ["Biography", "Adventure"],
//       isActive: true,
//       comments: [{ value: "That was a good  movie." }],
//     });
//     const newMovie5 = MovieModel({
//       name: "Movie5",
//       rating: 6,
//       money: 545959912,
//       genre: ["Romance", "Adventure"],
//       isActive: false,
//       comments: [{ value: "That was an excellent movie." }],
//     });

//     // const res = await newMovie1.save()
//     const res = await MovieModel.insertMany([
//       newMovie1,
//       newMovie2,
//       newMovie3,
//       newMovie4,
//       newMovie5,
//     ]);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateById = async (id) => {
  try {
    // const res = await MovieModel.findById("6607bc85d33dc798781353c9", "name");
    // const res = await MovieModel.find({ name: "Movie1" });
    // const res = await MovieModel.find().limit(3);
    const res = await MovieModel.updateOne({ _id: id, name: "movieNumber1" });
    console.log(res);
    // res.forEach((movie) => {
    //   console.log(movie.name);
    // });
  } catch (error) {
    console.log(error);
  }
};

// export default createDocument;
