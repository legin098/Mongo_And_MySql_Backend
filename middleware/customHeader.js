const customHeader = (req, res, next) => {
  try {
    console.log(req.headers);
    const apiKey = req.headers.api_key;

    if (apiKey !== "jesus-01") {
      res.status(403);
      res.send({ error: "API KEY NO ES CORRECTA" });
    }

    next();
  } catch (error) {
    res.status(403);
    res.send({ error: "ALGO OCURRIO EN EL CUSTOM HEADER" });
  }
};

module.exports = customHeader;
