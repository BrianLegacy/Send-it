CREATE PROCEDURE sp_delete_user(
@id Varchar(100),  
@isdeleted INT
)
AS

UPDATE users SET
isdeleted=@isdeleted

WHERE id=@id AND isdeleted=0;