CREATE PROCEDURE sp_get_userparcels(
@sender_id Varchar(100)
)
AS

SELECT * FROM parcel
WHERE isdeleted=0 AND sender_id=@sender_id;