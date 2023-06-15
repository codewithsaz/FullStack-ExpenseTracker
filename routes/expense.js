const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expense");

router.get("/expenses", expenseController.getExpenses);

router.get("/expense/:id", expenseController.getExpense);

router.post("/add-expense", expenseController.addExpense);

router.put("/update-expense/:id", expenseController.updateExpense);

router.delete("/delete-expense/:id", expenseController.deleteExpense);

module.exports = router;
