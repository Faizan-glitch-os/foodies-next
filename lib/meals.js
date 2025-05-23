import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(meal) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(meal);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const imageBuffer = await meal.image.arrayBuffer();

  stream.write(Buffer.from(imageBuffer), (error) => {
    if (error) {
      throw new Error("failed to save image");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
    (slug, title , summary, instructions, creator, creator_email, image)
    VALUES
    (@slug, @title, @summary, @instructions, @creator, @creator_email, @image)
    `
  ).run(meal);
}
