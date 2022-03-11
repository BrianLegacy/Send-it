CREATE PROCEDURE sp_update_parcel(
@id Varchar(100), 
@description Varchar(100), 
@sender_number Varchar(13), 
@receiver_number Varchar(13),
@start_location Varchar(100), 
@end_location Varchar(100),  
@isdeleted INT,
@isupdated INT,
@issent INT,
@isdelivered INT,
@current_location Varchar(100),
@sender_id Varchar(100)
)
AS

UPDATE parcel SET
description=@description, 
sender_number=@sender_number, 
receiver_number=@receiver_number,
start_location=@start_location, 
end_location=@end_location,  
isdeleted=@isdeleted,
isupdated=@isupdated,
issent=@issent,
isdelivered=@isdelivered,
current_location=@current_location,
sender_id=@sender_id

WHERE id=@id AND isdeleted=0;