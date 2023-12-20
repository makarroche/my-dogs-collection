-- Creation of dogs table
CREATE TABLE dogs (
  id TEXT NOT NULL,
  breed TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  PRIMARY KEY (id)
);

-- Population of dogs table
INSERT INTO dogs (id, breed, description, image) 
VALUES ('1', 'Golden Retriever','It is characterised by a gentle and affectionate nature and a striking golden coat.','1.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('2', 'Labrador Retriever','The Labrador is friendly, energetic, and playful. It is widely kept as a companion dog.','2.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('3', 'Bernese Mountain','The Bernese has a distinctive coat, black and white with chest and rust-coloured markings.','3.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('4', 'Beagle','The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound.','4.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('5', 'Husky','Husky is a term for a dog used in the polar regions, for work as sled dogs.','/5.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('6', 'Dalmatian','The Dalmatian is a breed of dog, which has a white coat marked with black coloured spots.','/6.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('7', 'Corgi','Corgi comes from words cor and ci, meaning "dwarf" and "dog". ','/7.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('8', 'German Shepherd','The Shepherd, is a German breed of working dog of medium to large size. ','/8.png');

INSERT INTO dogs (id, breed, description, image) 
VALUES ('9', 'Poodle','The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle.','/9.png');