CREATE TABLE users(
id Varchar(100) PRIMARY KEY, 
username Varchar(100), 
fullname Varchar(100), 
phonenumber Varchar(13) , 
email Varchar(100), 
password Varchar(50), 
isadmin INT default(0), 
isdeleted INT default(0),
issent INT default(0)
)