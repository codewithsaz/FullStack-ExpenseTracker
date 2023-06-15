const Expense = require("../models/expense");

exports.addExpense = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  Expense.create({
    name: name,
    email: email,
    amount: amount,
    description: description,
    category: category,
  });
  res.send("Expense Added");
};

exports.updateExpense = (req, res, next) => {
  const expId = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  Expense.findByPk(expId).then((expense) => {
    expense.set({
      name: name,
      email: email,
      amount: amount,
      description: description,
      category: category,
    });

    expense.save();
    res.send("Update Booking");
  });
};

exports.getExpenses = (req, res, next) => {
  Expense.findAll().then((expenses) => {
    res.json(expenses);
  });
};

exports.getExpense = (req, res, next) => {
  const expId = req.params.id;
  Expense.findByPk(expId).then((expense) => {
    res.json(expense);
  });
};

exports.deleteExpense = (req, res) => {
  const expId = req.params.id;
  Expense.findByPk(expId).then((expense) => {
    expense.destroy().then(() => res.send("Deleted"));
  });
};
