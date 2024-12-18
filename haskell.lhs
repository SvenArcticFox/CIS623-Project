This haskell file contains the Haskell function definitions for foldr and foldl and the same
test cases that are in the TypeScript files.

Definitions of foldr and foldl functions (named foldr_1 and foldl_1)

> foldr_1 :: (a -> b -> b) -> b -> [a] -> b
> foldr_1 f v [] = v
> foldr_1 f v (x:xs) = f x (foldr_1 f v xs)

> foldl_1 :: (a -> b -> a) -> a -> [b] -> a
> foldl_1 f v [] = v
> foldl_1 f v (x:xs) = foldl_1 f ( f v x ) xs


Test lists

> charList :: [Char]
> charList = "abcdefghijklmnopqrstuvwxyz"

> numList :: [Int]
> numList = [1,2,3,4,5,6,7,8,9]

Number test functions for foldr and foldl

> addTwo :: Num a => a -> a -> a
> addTwo x y = x + y

> multTwo :: Num a => a -> a -> a
> multTwo x y = x * y

Tests using numbers list with foldr and foldl

> addedNumbersFoldr :: Int
> addedNumbersFoldr = foldr_1 addTwo 0 numList

> addedNumbersFoldl :: Int
> addedNumbersFoldl = foldl_1 addTwo 0 numList

> multNumbersFoldr :: Int
> multNumbersFoldr = foldr_1 multTwo 1 numList

> multNumbersFoldl :: Int
> multNumbersFoldl = foldl_1 multTwo 1 numList


Reversing list function definitions

> reverseFoldr :: [a] -> [a]
> reverseFoldr [] = []
> reverseFoldr l = foldr_1 (\x xs -> xs ++ [x]) [] l

> reverseFoldl :: [a] -> [a]
> reverseFoldl [] = []
> reverseFoldl l = foldl_1 (\acc x -> x : acc) [] l


Reversing test lists with foldr

> reverseNumListFoldr = reverseFoldr numList
> reverseCharListFoldr = reverseFoldr charList

Reversing test lists with foldl

> reverseNumListFoldl = reverseFoldl numList
> reverseCharListFoldl = reverseFoldl charList