import { alluserData } from "../../../public/API-Data/alluser";

export default function handler(req, res) {
    try {
        res.status(200).json(alluserData);
    } catch (err) {
        console.log("Data is not fetch!!! Please check console!!!");
    }
}
