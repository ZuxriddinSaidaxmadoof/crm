CREATE DATABASE crm_systm;

CREATE TYPE role_type AS ENUM
('user', 'admin');

// STUDENTS - Oquv markazda oqiyotgan barcha studentlar

CREATE TABLE students(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int [] DEFAULT NULL,
    about VARCHAR(460) DEFAULT null,
    file_id INT DEFAULT NULL,
    created_at DATE DEFAULT now(),
    constraint fk_file_id foreign key(file_id) references files(id)
);

select s.*,
    (select row_to_json(f)
    
    from files as f
    where f.id = s.file_id)
as file
from students as s;

INSERT INTO students(first_name, last_name, number,about)
VALUES ('Zuxriddin', 'Saidaxmadov', ARRAY[1, 2, 3, 4, 5], 'first');

// STUDENT_COURSES - Studentning barcha oqiyotgan kurslari

CREATE TABLE student_courses(
    id BIGSERIAL PRIMARY KEY,
    student_id int not null,
    course_id int not null,
    constraint fk_student_id foreign key(student_id) references students(id),
    constraint fk_course_id foreign key(course_id) references courses(id) 
)

// USERS - Veb saytdan foydalanovchilar, registratsiya qilganlar

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role role_type NOT NULL DEFAULT 'user'
);

INSERT INTO users(first_name, last_name, number,password, role)
VALUES ('Zuxriddin', 'Saidaxmadov', 99999, 'test', 'user');

// FILES - studentlar va employerslar uchun profil rasmi

create table files (
id BIGSERIAL PRIMARY KEY,
original_name VARCHAR(80) NOT NULL,
path VARCHAR(250) NOT NULL,
size INT NOT NULL,
mine_type VARCHAR(80) NOT NULL,
date DATE DEFAULT CURRENT_DATE
);

insert into files (original_name, path, size, mine_type) values ('Cassie', '/c/desctop', 130, 'jpg');


// EMPLOYERS - Oquv markaz xodimlari

CREATE TABLE employers (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    position VARCHAR(50),
    file_id INT DEFAULT NULL,
    constraint fk_file_id foreign key(file_id) references files(id) 
);

// COURSES - Oquv markazdagi barcha kurslar

CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT DEFAULT NULL,
    start_date DATE DEFAULT NULL,
    end_date DATE DEFAULT NULL,
    instructor INT NOT NULL,
    constraint fk_instructor_id foreign key(instructor) references employers(id) 
);


// ROOMS - Oquv markazdagi barcha xonalar

CREATE TABLE rooms (
    number int default null,
    name varchar(32) default null,
    floor int default null,
    capacity int default null,
);

/////////////////////////////////////////////////////////////END//////////////////////////////////////////////




CREATE TABLE student_history(
 id int not null,
 name varchar(128),
 is_public boolean
);


CREATE FUNCTION fr_insert_group() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
   insert into brand_history(id, name)VALUES(new.id, new.name);
END;
$$;

CREATE TRIGGER rg_brand 
   AFTER INSERT
   ON brands
   FOR EACH ROW 
       EXECUTE PROCEDURE fr_insert_group();


   insert into brands(name)VALUES('new one');

DROP TRIGGER fr_insert_group;



/////////////////////////////////////////////////////////////END//////////////////////////////////////////////



CREATE TABLE brand_history(
 id int not null,
 name varchar(128),
 is_public boolean
);


CREATE FUNCTION fr_insert_group() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
   insert into brand_history(id, name)VALUES(new.id, new.name);
END;
$$;

CREATE TRIGGER rg_brand 
   AFTER INSERT
   ON brands
   FOR EACH ROW 
       EXECUTE PROCEDURE fr_insert_group();


   insert into brands(name)VALUES('new one');

DROP TRIGGER fr_insert_group;