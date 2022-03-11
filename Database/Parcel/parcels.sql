CREATE TABLE parcel(
id Varchar(100) PRIMARY KEY, 
description Varchar(100), 
sender_number Varchar(13), 
receiver_number Varchar(13),
start_location Varchar(100), 
end_location Varchar(100),  
isdeleted INT default(0),
isupdated INT default(0),
issent INT default(0),
isdelivered INT default(0),
current_location Varchar(100),
sender_id Varchar(100), 
FOREIGN KEY(sender_id) REFERENCES [Send-it].[dbo].[users](id)
);