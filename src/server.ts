import express, { Request, Response } from "express";
import cors from "cors";
import {languages, skills, jobs, hobbies, education, reference, contacts} from './app/components/service/data_info.js'

const app = express();
app.use(cors());


app.get("/languages", (req: Request, res: Response) => {
  res.json(languages);
});

app.get("/skills", (req: Request, res: Response) => {
  res.json(skills);
});

app.get("/hobbies", (req: Request, res: Response) => {
  res.json(hobbies);
});

app.get("/jobs", (req: Request, res: Response) => {
  res.json(jobs);
});

app.get("/education", (req: Request, res: Response) => {
  res.json(education);
});

app.get("/reference", (req: Request, res: Response) => {
  res.json(reference);
});

app.get("/contacts", (req: Request, res: Response) => {
  res.json(contacts);
});

const PORT = 1488;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
