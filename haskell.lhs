This haskell file contains the Haskell function definitions for foldr and foldl and the same
test cases that are in the TypeScript files.

Definitions of foldr and foldl functions (named foldr_1 and foldl_1)

> foldr_1 :: (a -> b -> b) -> b -> [a] -> b
> foldr_1 f v [] = v
> foldr_1 f v (x:xs) = f x (foldr_1 f v xs)

> foldl_1 :: (a -> b -> a) -> a -> [b] -> a
> foldl_1 f v [] = v
> foldl_1 f v (x:xs) = foldl_1 f ( f v x ) xs