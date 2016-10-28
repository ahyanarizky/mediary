let indexDashboard = (req, res, next) => {
  if (req.user) {
    res.render('dashboard/index')
  } else {
    res.redirect('/')
  }
}

let logout = (req, res, next) => {
  req.logout()
  res.redirect('/')
}


module.exports = {
  indexDashboard: indexDashboard,
  logout: logout
}
