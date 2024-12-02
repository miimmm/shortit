import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  // res.send("안녕 다이나믹라우트");
  // res.send(req.query);
  // res.send(req.body);
  // res.send(req.cookies);
  // res.send(req.method);

  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "PATCH":
      const updatedShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedShortLink);
      break;

    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;

    case "DELETE":
      await ShortLink.findByIdAndDelete(id);
      res.status(204).send();
      break;

    default:
      res.send();
      break;
  }
}
