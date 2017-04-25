import db from './../models';
// pulls index file by default

const userController = {};

userController.post = (req, res) => {
  const {username, password} = req.body;
  // when username and password get passed, you create a new User

  const user = new db.User({
    username,
    password
  });

  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      data: newUser,
    });
  }).catch((err) => {
    res.status(500).json({
      message: err,
    });
  });
}

export default userController;
