var sql = require('mssql');

var config = {
    server: 'TUHINPAUL\MSSQLSERVER16',
    database: 'PurchasingPractice-UAT',
    user: 'sa',
    password: 'sap@123',
    port: 1433,
    options:{
        encrypt:false
    }
};
function loadEmployees() {
    var dbConn = new sql.Connection(config);
    dbConn.connect(function (err) {
        if(err) throw err
        var request = new sql.Request(dbConn);
        request.query("select * from tbl_Users", function (err, recordSet) {
            if(err) throw err
            else
                console.log(recordSet);
            dbConn.close();
        });
    });
}

// test


loadEmployees();