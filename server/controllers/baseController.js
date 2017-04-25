const baseController = {};
// make it an empty object first

baseController.get = (req, res) => {
    res.json({
      message: 'tis working aye'
    });
  };


export default baseController;
