const baseController = {};

baseController.get = (req, res) => {
    res.json({
      message: 'tis working aye'
    });
  };


export default baseController;
