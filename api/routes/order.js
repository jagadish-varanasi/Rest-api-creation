const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders page.....Handling GET requests to /orders",
  })
})

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders page.....Handling POST requests to /orders",
  })
})

router.get("/:orderID", (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderID:req.params.orderID
  })
})

router.delete("/:orderID", (req, res, next) => {
  res.status(200).json({
    message: "Deleted order!",
  })
})

module.exports = router
