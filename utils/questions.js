const questions = [

    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your password?',
        name: 'password',
      },
      {
        type: 'input',
        message: 'Re-enter password to confirm:',
        name: 'confirm',
      },
    ])
    // .then((response) =>
    //   response.confirm === response.password
    //     ? console.log('Success!')
    //     : console.log('You forgot your password already?!')
    // );
]

module export = questions;