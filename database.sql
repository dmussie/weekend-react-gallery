CREATE TABLE "gallery-list" (
    "id" SERIAL PRIMARY KEY,
    "path" varchar(250) not null,
    "description" varchar(300) not null,
    "likes" varchar(20),
    "clicked" BOOLEAN DEFAULT false
);
INSERT INTO "gallery-list"
("path", "description", "likes")
VALUES
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0)
    