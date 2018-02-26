CREATE DATABASE addressBook;
USE addressBook;
CREATE TABLE contacts (id int unsigned not null auto_increment, company varchar(30)
 not null, country varchar(30), city varchar(30), address varchar(100), 
 constraint pk_contacts primary key(id) );