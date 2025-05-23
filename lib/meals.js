import sql from "better-sqlite3";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(meal) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(meal);
}
