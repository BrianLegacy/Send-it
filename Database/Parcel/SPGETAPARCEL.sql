CREATE PROCEDURE sp_get_aparcel(
@id Varchar(100)
)

AS

SELECT * FROM parcel
WHERE id=@id AND isdeleted=0;
