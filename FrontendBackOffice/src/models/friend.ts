import { ObjectId, Schema, model } from "mongoose";

export interface Friend {
    _id: string;
    username: ObjectId; //Username of the Friend
    userFollowed: ObjectId; //Username of the one that starts to have a new friend
    dateStart: string; //The day it started to be friend with the other user
    likes: number; //Number of likes that the Friend gives
    active: boolean; //True: you are friends/False: ends being friends
};

//model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};