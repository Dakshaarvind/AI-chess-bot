import { Piece } from "./pieces/piece";

export enum Color{
    White,
    Black
}

export type Coords ={
    x:number;
    y:number;
}
 export enum FENChar{
    WhitePawn="P",
    WhiteKnight="N",
    WhiteBishop="B",
    WhiteRook="R",
    WhiteQueen="Q",
    WhiteKing="K",
    BlackPawn="p",
    BlackKnight= "n",
    BlackBishop = "b",
    BlackRook = "r",
    BlackQueen = "q",
    BlackKing = "k",
 }

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
    [FENChar.WhitePawn]: "/assets/white pawn.svg",
    [FENChar.WhiteKnight]: "/assets/white knight.svg",
    [FENChar.WhiteBishop]: "/assets/white bishop.svg",
    [FENChar.WhiteRook]: "/assets/white rook.svg",
    [FENChar.WhiteQueen]: "/assets/white queen.svg",
    [FENChar.WhiteKing]: "/assets/white king.svg",
    [FENChar.BlackPawn]: "/assets/black pawn.svg",
    [FENChar.BlackKnight]: "/assets/black knight.svg",
    [FENChar.BlackBishop]: "/assets/black bishop.svg",
    [FENChar.BlackRook]: "/assets/black rook.svg",
    [FENChar.BlackQueen]: "/assets/black queen.svg",
    [FENChar.BlackKing]: "/assets/black king.svg"
}

export type SafeSquares = Map< string, Coords[]>;

export type LastMove = {
    piece: Piece;
    prevX: number;
    prevY: number;
    currX: number;
    currY: number;
}

type KingChecked ={
    isInCheck : true;
    x: number;
    y: number;
}

type KingNotChecked = {
    isInCheck: false;
}

export type CheckState = KingChecked | KingNotChecked;