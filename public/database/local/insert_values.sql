-- Insert data into the 'categories' table
INSERT INTO categories (id, name, description, image)
VALUES
    (1, 'Accessories', '', '/category-icons/accessories.png'),
    (2, 'Books And Comics', '', '/category-icons/books-and-comics.png'),
    (3, 'Clothing And Apparel', '', '/category-icons/clothing-and-apparel.png'),
    (4, 'Games And Puzzles', '', '/category-icons/games-and-puzzles.png'),
    (5, 'Home And Kitchenware', '', '/category-icons/home-and-kitchenware.png'),
    (6, 'Toys And Collectibles', '', '/category-icons/toys-and-collectibles.png');


-- Insert data into the 'products' table
INSERT INTO products (id, name, description, price, image, category_id)
VALUES
    (1, 'Portal Gun Replica', 'A handheld device that lets you create portals to other dimensions.', 99.99, '/other-images/placeholder-image.png', 1),
    (2, 'Mr. Meeseeks Box', 'A box that summons a helpful but short-lived Mr. Meeseeks to assist with tasks.', 19.99, '/other-images/placeholder-image.png', 1),
    (3, 'Plumbus', 'A versatile and mysterious household item, as seen in the show.', 14.99, '/other-images/placeholder-image.png', 1),
    (4, 'Interdimensional Cable Box', 'A device that allows you to watch television from alternate realities.', 49.99, '/other-images/placeholder-image.png', 1),
    (5, 'Pickle Rick Keychain', 'A miniature version of Pickle Rick, a fan-favorite character.', 9.99, '/other-images/placeholder-image.png', 1),
    (6, 'Meeseeks Socks', 'Socks featuring the face of Mr. Meeseeks.', 7.99, '/other-images/placeholder-image.png', 1),
    (7, 'Morty\'s Portal Gun Necklace', 'A pendant in the shape of Morty\'s portal gun.', 29.99, '/other-images/placeholder-image.png', 1),
    (8, 'Schmeckle Coins', 'Coins from the dimension of Rick and Morty.', 5.99, '/other-images/placeholder-image.png', 1),
    (11, 'Eyehole Man Mask', 'A mask of the Eyehole Man, known for his hilarious TV commercial.', 12.99, '/other-images/placeholder-image.png', 1),
    (12, 'Squanchy Flask', 'A flask with Squanchy, the cat-like character, on it.', 15.99, '/other-images/placeholder-image.png', 1),
    (13, 'Anatomy Park Tote Bag', 'A bag featuring the theme park from the episode \'Anatomy Park.\'', 19.99, '/other-images/placeholder-image.png', 1),
    (14, 'Council of Ricks Pin', 'A pin that displays the Council of Ricks logo.', 6.99, '/other-images/placeholder-image.png', 1),
    (15, 'Birdperson\'s Feather Earrings', 'Earrings inspired by Birdperson\'s distinctive feathers.', 11.99, '/other-images/placeholder-image.png', 1),
    (16, 'Unity Pendant', 'A pendant featuring Unity, one of Rick\'s love interests.', 14.99, '/other-images/placeholder-image.png', 1),
    (17, 'Cromulon Head Hat', 'A hat in the shape of the Cromulon head from the \'Get Schwifty\' episode.', 8.99, '/other-images/placeholder-image.png', 1),
    (18, 'Scary Terry Slippers', 'Slippers resembling Scary Terry\'s face.', 12.99, '/other-images/placeholder-image.png', 1),
    (19, 'Get Schwifty Phone Case', 'A phone case with the \'Get Schwifty\' design.', 9.99, '/other-images/placeholder-image.png', 1),
    (20, 'Toxic Flask', 'A flask inspired by the \'Toxic Rick and Morty\' episode.', 13.99, '/other-images/placeholder-image.png', 1);

INSERT INTO products (id, name, description, price, image, category_id)
VALUES
    (31, 'The Rick and Morty Book: Deluxe Edition', 'A comprehensive guide to the show, featuring behind-the-scenes information, concept art, and more.', 24.99, '/other-images/placeholder-image.png', 2),
    (32, 'The Art of Rick and Morty', 'A book showcasing the artwork and creative process behind the show.', 19.99, '/other-images/placeholder-image.png', 2),
    (33, 'Rick and Morty and Philosophy: In the Darkest Timeline', 'A collection of essays exploring philosophical concepts through the lens of the show.', 14.99, '/other-images/placeholder-image.png', 2),
    (34, 'The Science of Rick and Morty: What Earth\'s Stupidest Show Can Teach Us About Quantum Physics, Biological Hacking, and Reality Itself', 'A book that delves into the scientific ideas presented in the series.', 16.99, '/other-images/placeholder-image.png', 2),
    (35, 'Rick and Morty: Lil\' Poopy Superstar', 'A graphic novel that follows Summer Smith and her new alien friend, in a separate adventure from the show.', 12.99, '/other-images/placeholder-image.png', 2),
    (36, 'Rick and Morty (Oni Press)', 'The official comic series that continues the adventures of Rick and Morty across various dimensions and timelines.', 9.99, '/other-images/placeholder-image.png', 2),
    (37, 'Rick and Morty vs. Dungeons & Dragons', 'A crossover comic series that sees the characters playing the popular tabletop game.', 11.99, '/other-images/placeholder-image.png', 2),
    (38, 'Rick and Morty: Pocket Like You Stole It', 'A miniseries where Rick and Morty enter a virtual reality video game.', 8.99, '/other-images/placeholder-image.png', 2),
    (39, 'Rick and Morty Presents', 'A series of one-shot comics focusing on side characters and alternate realities.', 7.99, '/other-images/placeholder-image.png', 2),
    (40, 'Rick and Morty: Ever After', 'A comic book that explores the aftermath of a crazy adventure.', 10.99, '/other-images/placeholder-image.png', 2);

INSERT INTO products (id, name, description, price, image, category_id)
VALUES
    (9, 'Tiny Rick T-Shirt', 'A shirt with a design of Tiny Rick from one of the episodes.', 17.99, '/other-images/placeholder-image.png', 3),
    (10, 'Rick\'s Lab Coat', 'A white lab coat similar to what Rick wears in the show.', 39.99, '/other-images/placeholder-image.png', 3),
    (51, 'Rick and Morty T-Shirts', 'A wide variety of T-shirts featuring iconic characters, catchphrases, and designs from the show.', 19.99, '/other-images/placeholder-image.png', 3),
    (52, 'Rick\'s Lab Coat', 'A white lab coat similar to what Rick Sanchez wears in the series.', 29.99, '/other-images/placeholder-image.png', 3),
    (53, 'Meeseeks Costume', 'A costume that allows you to transform into a Mr. Meeseeks, complete with the blue skin and boxy head.', 49.99, '/other-images/placeholder-image.png', 3),
    (54, 'Pickle Rick Costume', 'A costume that lets you become Pickle Rick, one of the show\'s most famous episodes.', 39.99, '/other-images/placeholder-image.png', 3),
    (55, 'Interdimensional Cable Hoodie', 'A hoodie featuring designs from the Interdimensional Cable episodes.', 34.99, '/other-images/placeholder-image.png', 3),
    (56, 'Rick and Morty Pajamas', 'Comfortable pajama sets with show-themed prints.', 29.99, '/other-images/placeholder-image.png', 3),
    (57, 'Morty\'s Portal Gun Leggings', 'Leggings with a pattern of Morty\'s portal gun.', 24.99, '/other-images/placeholder-image.png', 3),
    (58, 'Birdperson Hoodie', 'A hoodie featuring the character Birdperson and his distinct look.', 44.99, '/other-images/placeholder-image.png', 3);

INSERT INTO products (id, name, description, price, image, category_id)
VALUES
    (61, 'Rick and Morty: The Pickle Rick Game', 'A board game where players take on the roles of different Ricks and compete in a Pickle Rick-themed adventure.', 29.99, '/items-icons/the-pickle-rick-game.png', 4),
    (62, 'Rick and Morty: Total Rickall Card Game', 'A card game based on the \'Total Rickall\' episode, where players must figure out who among them is a parasite.', 15.99, '/items-icons/total-rickall-card-game.png', 4),
    (63, 'Rick and Morty: Anatomy Park: The Game', 'A strategy board game where players build a theme park inside the body of Ruben, a homeless man.', 34.99, '/items-icons/anatomy-park-the-game.png', 4),
    (64, 'Rick and Morty: Close Rick-Counters of the Rick Kind Deck-Building Game', 'A deck-building card game where players take on the roles of different Ricks, battling for supremacy.', 39.99, '/other-images/placeholder-image.png', 4),
    (65, 'Rick and Morty: The Ricks Must Be Crazy Multiverse Game', 'A strategy game that lets players create and control their own mini-universe.', 49.99, '/other-images/placeholder-image.png', 4),
    (66, 'Rick and Morty 1000-Piece Jigsaw Puzzle', 'A jigsaw puzzle featuring a colorful and detailed design inspired by the show.', 19.99, '/other-images/placeholder-image.png', 4),
    (67, 'Rick and Morty: Shy Pooper 1000-Piece Puzzle', 'A puzzle featuring the \'Shy Pooper\' character from the show, with 1000 pieces for a challenge.', 22.99, '/items-icons/shy-pooper-1000-piece-puzzle.png', 4);

INSERT INTO products (id, name, description, price, image, category_id)
VALUES
    (71, 'Rick and Morty Portal Gun Mug', 'A ceramic mug shaped like Rick\'s portal gun, perfect for your morning coffee.', 14.99, '/other-images/placeholder-image.png', 5),
    (72, 'Rick and Morty Apron', 'An apron featuring various characters and elements from the show, ideal for cooking adventures.', 19.99, '/other-images/placeholder-image.png', 5),
    (73, 'Rick and Morty Bedding Set', 'A bedding set with a design inspired by the show, including sheets and pillowcases.', 49.99, '/other-images/placeholder-image.png', 5),
    (74, 'Pickle Rick Wine Bottle Stopper', 'A decorative wine bottle stopper in the shape of Pickle Rick, perfect for wine enthusiasts.', 9.99, '/other-images/placeholder-image.png', 5),
    (75, 'Rick and Morty Coasters', 'A set of coasters featuring various Rick and Morty designs to protect your surfaces.', 12.99, '/other-images/placeholder-image.png', 5),
    (76, 'Morty\'s Mind Blowers Throw Blanket', 'A soft and cozy throw blanket with a design inspired by the \'Morty\'s Mind Blowers\' episode.', 24.99, '/other-images/placeholder-image.png', 5),
    (77, 'Rick and Morty Cutting Board Set', 'A set of cutting boards featuring different show-themed designs, perfect for your kitchen.', 29.99, '/other-images/placeholder-image.png', 5),
    (78, 'Rick and Morty Wall Clock', 'A wall clock featuring the show\'s iconic portal design, adding a unique touch to your home decor.', 34.99, '/other-images/placeholder-image.png', 5);

INSERT INTO products (id, name, description, price, image, category_id)
VALUES
    (81, 'Funko Pop! Vinyl Figures', 'A collection of vinyl figures featuring various characters from the show, perfect for collectors.', 12.99, '/items-icons/funko-pop!-rick-and-morty-vinyl-figures.png', 6),
    (82, 'Portal Gun Prop Replica', 'A high-quality prop replica of Rick\'s portal gun for cosplayers and collectors.', 59.99, '/items-icons/portal-gun-prop-replica.png', 6),
    (83, 'Rick and Morty Plushies', 'Soft and huggable plush toys in the likeness of Rick, Morty, and other characters.', 9.99, '/items-icons/rick-and-morty-plushies.png', 6);
