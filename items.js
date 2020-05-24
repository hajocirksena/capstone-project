import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/thisismystuff"
);

const items = mongoose.model("Item", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  mail: {
    type: String,
  },
  image: {
    type: String,
  },
});

router.get("/*", (request, response) => {
  items.find().then((data) => {
    response.json(data);
  });
});

router.get("/:id", (request, response) => {
  items.findById(request.params.id).then((data) => {
    response.json(data);
  });
});

router.post("/*", (request, response) => {
  items
    .create({
      name: request.body.name,
      description: request.body.description,
      mail: request.body.mail,
      image: request.body.image,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.delete("/:id", (request, response) => {
  items
    .findByIdAndDelete(request.params.id)
    .then(() => response.json({ deleted: true }))
    .catch(console.log);
});

export default router;
