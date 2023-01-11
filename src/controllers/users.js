const getUserForm = (req, res) => res.render("userForm.ejs");

const displayUserData = (req, res) => {
  const { name, lastName } = req.body;

  res.render("userData.ejs", { name, lastName });
};

module.exports = {
  getUserForm,
  displayUserData,
};