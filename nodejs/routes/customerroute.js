var express = require('express')
const patientClass= require('../services/customerservice.js');
var router = express.Router()


router.get('/getcustomerdetails',  async (req, res) => {
    
    try{
    let getpatient = new patientClass();
    const result = await getpatient.getCustomerDetails();
    if(result)
    res.send(result);
    }
    catch(err)
    {
        console.log(err);
    } 
    
});

router.get('/getcustomerdetailsbyfirstname',  async (req, res) => {
    
    try{
    let getpatient = new patientClass();
    const result = await getpatient.getCustomerDetailsByFirstName();
    if(result)
    res.send(result);
    }
    catch(err)
    {
        console.log(err);
    } 
    
});
router.post('/insertcustomerdetails', async (req, res) => {

    try
    {
    let postpatient = new patientClass();

    let details = req.body;

    const result = await postpatient.postCustomerDetails(details);
    if(result)
    {
        res.json({
       message:"Successfully added one row" 
    })}
    }
    
    catch(err)
    {
        console.log(err);
    } 

});

router.put('/updatecustomerdetails/:firstname', async (req,res) => {      //Sending firstname differently because the other parameters are in sent object
    
    try
    {
    let putpatient = new patientClass();

    let firstname = req.params.firstname;
    let details = req.body;
    
    const result = await putpatient.putCustomerDetails(details,firstname);
    if(result)
    {
        res.json({
        message:"Successfully updated  row(s)" 
    })
    }
    }
    
    catch(err)
    {
        console.log(err);
    }    
})

router.delete('/deletecustomerdetails/:firstname', async (req,res) => {
    
    try
    {
    let deletepatient = new patientClass();

    let firstname = req.params.firstname; 
     console.log(firstname);                                                                     
    
    const result = await deletepatient.deleteCustomerDetails(firstname);
    if(result)
    {
        res.json({
        message:"Successfully deleted  row(s)" 
    })
    }
    }
    
    catch(err)
    {
        console.log(err);
    }    
})






router.use((err, req, res, next) => {
    if (err) {
        res.send('error occoured')
    }
});
module.exports = router;