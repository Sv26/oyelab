module.exports = (req, res, next) => {
  console.log("Raw Request Headers:", req.headers);
  console.log("Raw Request Body:", req.body);

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Request body is empty! Make sure to send JSON correctly.",
    });
  }

  const { name, email } = req.body;

  console.log("Type of name:", typeof name);
  console.log("Type of email:", typeof email);

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "Name is required and must be a non-empty string." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email is required." });
  }

  next();
};
