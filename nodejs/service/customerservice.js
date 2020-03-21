var conn = require('.././database/customerdatabase.js');
module.exports = class patientClass                                  //Exporting from class at one time simply to avoid multiple method exports

{

getCustomerDetails()
{
    return new Promise((resolve,reject) => {
      conn.query(`select * from customerdb`,(error,data) => {
          if(error)
          resolve(data);

          else
          reject(error);
     })
        
    })
}

getCustomerDetailsByFirstName(firstname)
{
    return new Promise((resolve,reject) => {
      conn.query(`select * from customerdb where firstname = ${firstname}`,(error,data) => {
          if(error)
          resolve(data);

          else
          reject(error);
     })
        
    })
}


postCustomerDetails(details)
{
    
    return new Promise((resolve,reject) => {
        conn.query(`insert into customerdb values('${details.firstname}','${details.lastname}','${details.address}','${details.city}','${details.state}')`,(error,data) => {
            if(error)
            resolve(data);
  
            else
            reject(error);
       })
          
      })
}

putCustomerDetails(details,firstname)
{
    //console.log(details);
    return new Promise((resolve,reject) => {
        conn.query(`update customerdb set city = '${details.city}', state = '${details.state}', address = '${details.address}', lastname = '${details.lastname}' where firstname = '${firstname}'`,(error,data) => {
            if(error)
            resolve(data);
  
            else
            reject(error);
       })
          
      })
}

deleteCustomerDetails(details)
{
    console.log(details);                                                                             //Data sent as params from route
    return new Promise((resolve,reject) => {
        conn.query(`delete from customerdb where firstname = '${details}'`,(error,data) => {
            if(error)
            resolve(data);
  
            else
            reject(error);
       })
          
      })
}

}
