import {Router} from "express";
import { User } from "../../share/data";
import * as shortid from "shortid";

const router = Router();

router.get("/", async (req, res, next) => {
    const message = {
        text: "Hello World!"
    };
    return res.render("index", message);
});

router.post("/reaction", async (req, res, next) => {
    // const reactionParams: Reaction = req.body;
    //
    // //mongo
    // const id: string = shortid.generate();
    // const time: string = new Date().toISOString();
    // const mongoParams: ReactionMongo = Object.assign({
    //     id: id,
    //     time: time,
    //     links: []
    // }, reactionParams);
    // insertReaction(mongoParams);
    //
    // //linda
    // await postToLinda(Object.assign({
    //     type: "gyaon",
    //     isReaction: true
    // }, mongoParams));
    res.status(200).end();
});

router.post("/record", async (req, res, next) => {
    // const recordParams: Record = req.body;
    //
    // //mongo
    // insertRecord(recordParams);
    //
    // //linda
    // await postToLinda(Object.assign({
    //     type: "gyaon",
    //     isReaction: false
    // }, recordParams));
    res.status(200).end();
});

export const routes = router;