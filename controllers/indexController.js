let viewIndex = (req, res, next) => {
  res.send('viewIndex')
}

let formLogin = (req, res, next) => {
  res.send('formLogin')
}

let processLogin = (req, res, next) => {
  res.send('processLogin')
}

let formRegister = (req, res, next) => {
  res.send('formRegister')
}

let proccessRegister = (req, res, next) => {
  res.send('proccessRegister')
}

module.exports = {
  viewIndex: viewIndex,
  formLogin: formLogin,
  processLogin: processLogin,
  formRegister: formRegister,
  proccessRegister: proccessRegister
}
