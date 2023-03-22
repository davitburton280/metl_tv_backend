async function authorizeUser(req, res, next) {
  if (req.decoded.id !== Number(req.params.id)) {
    return res.status(403).json({
      error: 'Forbidden operation',
    })
  }

  next()
}

module.exports = {
  authorizeUser,
}