const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Products page.....Handling GET requests to /products'
    });
});



router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Products page.....Handling POST requests to /products'
    });
});

router.get( '/:productID',(req, res, next)=> {
    const id = req.params.productID;
    if (id == 'special') {
        res.status(200).json({
            message: 'You discovered special ID',
            id: id
        });
            
    }
      else {
        res.status(200).json({
            message: 'You passed an ID'
        });

    }
});


module.exports = router;