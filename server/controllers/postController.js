import db from './../models';
const postController = {};
// make it an empty object first

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
    // path: _creator means it returns not just the whole objectid for creator. tyr with populate to see
    path: '_creator',
    select: 'username',
    select: 'createdAt',
    select: 'isDeleted',
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
