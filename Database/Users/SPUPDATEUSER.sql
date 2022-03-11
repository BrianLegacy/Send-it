CREATE PROCEDURE sp_update_user(
@id Varchar(100), 
@username Varchar(100), 
@fullname Varchar(100), 
@phonenumber Varchar(13) , 
@email Varchar(100), 
@password Varchar(50), 
@isadmin INT, 
@isdeleted INT,
@issent INT
)
AS

UPDATE users SET
username=@username, 
fullname=@fullname, 
phonenumber=@phonenumber, 
email=@email, 
password=@password, 
isadmin=@isadmin, 
isdeleted=@isdeleted,
issent=@issent

WHERE id=@id AND isdeleted=0;