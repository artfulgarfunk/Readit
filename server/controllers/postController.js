import db from './../models';
const postController = {};
// make it an empty object first

// this is what the controller actually sends in the body of the request.
// doesn't necessarily send all fields of post model, e.g. excludes _comments in this case
// however when comment model is made, it has access to the post model and so modifies it
postController.post = (req, res) => {
  const {
    title,
    text,
    link,
    userId //
    } = req.body; // sends it in the body of the request

    // either text or link, not both

    const post = new db.Post({
      title,
      text,
      link,
      _creator: userId,
    });

    post.save().then((newPost) => {
      return res.status(200).json({
        success: true,
        data: newPost
      })
      return res.status(500).json({
        message: err
      });
    })
  };

postController.getAll = (req, res) => {
  db.Post.find({}).populate({
    path: '_creator',
    select: 'username createdAt isDeleted -_id'
  }).then((posts) => {
    return res.status(200).json({
      success: true,
      data: posts
    })
    return res.status(500).json({
      message: err
    });
  })
}

export default postController;
