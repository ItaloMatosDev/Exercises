const upload = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).send({ error: { message: 'Extension must be \'png\' ' } }); 
}
};

module.exports = upload;