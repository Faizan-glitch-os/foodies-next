import sql from "better-sqlite3";

const db = sql("meals.db");

export function getMeals() {
  throw new Error("an error occured");
  return db.prepare("SELECT * FROM meals").all();
}
