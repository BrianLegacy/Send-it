CREATE PROCEDURE sp_create_users(
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

INSERT INTO users VALUES(
@id, 
@username, 
@fullname, 
@phonenumber,
@email, 
@password,
@isadmin,
@isdeleted,
@issent
);