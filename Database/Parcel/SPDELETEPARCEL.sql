CREATE PROCEDURE sp_delete_parcel(
@id Varchar(100),  
@isdeleted INT
)
AS

UPDATE parcel SET
isdeleted=@isdeleted

WHERE id=@id AND isdeleted=0;